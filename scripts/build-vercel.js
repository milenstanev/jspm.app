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
  'home.bundle.form1.js',
  'counter.bundle.form1.js',
  'timer.bundle.form1.js',
  'notes.bundle.form1.js',
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
  'desktop-ui-guest.js',
  'users-form.js',
  'users-form.lib.js',
  path.join('src', 'app.css'),
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
copyFile(
  path.join(root, 'desktop-ui-guest.js'),
  path.join(publicDir, 'desktop-ui-guest.js')
);
copyFile(path.join(root, 'users-form.js'), path.join(publicDir, 'users-form.js'));
copyFile(
  path.join(root, 'users-form.lib.js'),
  path.join(publicDir, 'users-form.lib.js')
);
ensureDir(path.join(publicDir, 'src'));
copyFile(path.join(root, 'src', 'app.css'), path.join(publicDir, 'src', 'app.css'));

for (const name of requiredDist) {
  copyFile(path.join(root, 'dist', name), path.join(publicDir, 'dist', name));
}

const { copyJspmRuntime } = require('./copy-jspm-runtime');
copyJspmRuntime(root, publicDir);

console.log('Vercel public build ready:', publicDir);
