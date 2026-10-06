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

const requiredDist = [
  'prod-bundle-overrides.js',
  'core.bundle.js',
  'app.bundle.js',
  'home.bundle.js',
  'counter.bundle.js',
  'timer.bundle.js',
  'notes.bundle.js',
];

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
  ...requiredDist.map((name) => path.join('dist', name)),
];

for (const rel of required) {
  if (!fs.existsSync(path.join(root, rel))) {
    throw new Error(`Vercel build missing required file: ${rel}`);
  }
}

console.log('Assembling public/...');
rmrf(publicDir);
ensureDir(publicDir);
ensureDir(path.join(publicDir, 'dist'));
ensureDir(path.join(publicDir, 'jspm_packages'));

copyFile(path.join(root, 'index.html'), path.join(publicDir, 'index.html'));
copyFile(path.join(root, 'config.js'), path.join(publicDir, 'config.js'));

for (const name of requiredDist) {
  copyFile(path.join(root, 'dist', name), path.join(publicDir, 'dist', name));
}

// Only SystemJS loader files needed at runtime in prod.
for (const name of [
  'system.js',
  'system.js.map',
  'system.src.js',
  'system-polyfills.js',
  'system-polyfills.js.map',
  'system-polyfills.src.js',
]) {
  const from = path.join(root, 'jspm_packages', name);
  if (fs.existsSync(from)) {
    copyFile(from, path.join(publicDir, 'jspm_packages', name));
  }
}

console.log('Vercel public build ready:', publicDir);
