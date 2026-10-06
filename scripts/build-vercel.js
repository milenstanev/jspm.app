#!/usr/bin/env node
/**
 * Prepare a static public/ folder for Vercel.
 * Runs gulp prod, then copies only runtime assets.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.join(__dirname, '..');
const publicDir = path.join(root, 'public');

function rmrf(target) {
  fs.rmSync(target, { recursive: true, force: true });
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyFile(src, dest) {
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    throw new Error(`Missing required path: ${src}`);
  }
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(from, to);
    } else {
      copyFile(from, to);
    }
  }
}

console.log('Ensuring feature module aliases in config.js...');
execFileSync(process.execPath, [path.join(root, 'scripts', 'ensure-feature-module-paths.js')], {
  cwd: root,
  stdio: 'inherit',
});

console.log('Building production bundles...');
execFileSync(process.execPath, [path.join(root, 'node_modules', 'gulp', 'bin', 'gulp.js'), 'prod'], {
  cwd: root,
  stdio: 'inherit',
});

const required = [
  'index.html',
  'config.js',
  path.join('jspm_packages', 'system.js'),
  path.join('dist', 'prod-bundle-overrides.js'),
  path.join('dist', 'core.bundle.js'),
  path.join('dist', 'app.bundle.js'),
];

for (const rel of required) {
  if (!fs.existsSync(path.join(root, rel))) {
    throw new Error(`Vercel build missing required file: ${rel}`);
  }
}

console.log('Assembling public/...');
rmrf(publicDir);
ensureDir(publicDir);

copyFile(path.join(root, 'index.html'), path.join(publicDir, 'index.html'));
copyFile(path.join(root, 'config.js'), path.join(publicDir, 'config.js'));
copyDir(path.join(root, 'dist'), path.join(publicDir, 'dist'));

// SystemJS loader (+ any sibling loader assets under jspm_packages root)
ensureDir(path.join(publicDir, 'jspm_packages'));
for (const name of fs.readdirSync(path.join(root, 'jspm_packages'))) {
  const from = path.join(root, 'jspm_packages', name);
  const to = path.join(publicDir, 'jspm_packages', name);
  const st = fs.statSync(from);
  if (st.isFile() && /\.(js|map|json|css)$/i.test(name)) {
    copyFile(from, to);
  }
}

console.log('Vercel public build ready:', publicDir);
