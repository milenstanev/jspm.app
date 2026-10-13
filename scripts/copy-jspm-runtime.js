const fs = require('fs');
const path = require('path');

function missingSystemJsRequires(bundleSource) {
  const registered = new Set();
  for (const match of bundleSource.matchAll(
    /System\.register(?:Dynamic)?\(['"]([^'"]+)/g
  )) {
    registered.add(match[1]);
  }
  const required = new Set();
  for (const match of bundleSource.matchAll(/\$__require\(['"]([^'"]+)/g)) {
    required.add(match[1]);
  }
  return [...required].filter((id) => !registered.has(id));
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
    throw new Error('Missing jspm runtime source: ' + src);
  }
  ensureDir(dest);
  fs.cpSync(src, dest, { recursive: true });
}

function moduleIdToRel(id) {
  if (id.startsWith('npm:')) {
    return path.join('jspm_packages', 'npm', id.slice(4));
  }
  if (id.startsWith('github:')) {
    return path.join('jspm_packages', 'github', id.slice(7));
  }
  return null;
}

function copyJspmRuntime(root, dest) {
  const packages = path.join(root, 'jspm_packages');
  const destPackages = path.join(dest, 'jspm_packages');
  ensureDir(destPackages);

  for (const name of [
    'system.js',
    'system.js.map',
    'system.src.js',
    'system-polyfills.js',
    'system-polyfills.js.map',
    'system-polyfills.src.js',
  ]) {
    const from = path.join(packages, name);
    if (fs.existsSync(from)) {
      copyFile(from, path.join(destPackages, name));
    }
  }

  copyDir(
    path.join(packages, 'npm', 'core-js@1.2.7'),
    path.join(destPackages, 'npm', 'core-js@1.2.7')
  );

  const processJs = path.join(packages, 'github', 'jspm', 'nodelibs-process@0.1.2.js');
  const processDir = path.join(packages, 'github', 'jspm', 'nodelibs-process@0.1.2');
  if (fs.existsSync(processJs)) {
    copyFile(processJs, path.join(destPackages, 'github', 'jspm', 'nodelibs-process@0.1.2.js'));
  }
  if (fs.existsSync(processDir)) {
    copyDir(processDir, path.join(destPackages, 'github', 'jspm', 'nodelibs-process@0.1.2'));
  }

  const distDir = path.join(root, 'dist');
  if (fs.existsSync(distDir)) {
    for (const name of fs.readdirSync(distDir)) {
      if (!name.endsWith('.js')) {
        continue;
      }
      const missing = missingSystemJsRequires(
        fs.readFileSync(path.join(distDir, name), 'utf8')
      );
      missing.forEach((id) => {
        const rel = moduleIdToRel(id);
        if (!rel) {
          return;
        }
        const from = path.join(root, rel);
        if (fs.existsSync(from)) {
          copyFile(from, path.join(dest, rel));
        }
      });
    }
  }
}

module.exports = {
  missingSystemJsRequires,
  copyJspmRuntime,
};
