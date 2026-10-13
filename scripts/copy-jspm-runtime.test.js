const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { missingSystemJsRequires, copyJspmRuntime } = require('./copy-jspm-runtime.js');

const root = path.join(__dirname, '..');

test('app.bundle is missing the core-js modules SystemJS 404s in production', () => {
  const missing = missingSystemJsRequires(
    fs.readFileSync(path.join(root, 'dist', 'app.bundle.js'), 'utf8')
  );
  assert.ok(
    missing.some((id) => id.includes('core-js@1.2.7/library/modules/$.core.js')),
    'expected $.core.js to be required but not registered in app.bundle'
  );
});

test('Vercel public runtime includes every module app.bundle requires but does not register', () => {
  const dest = fs.mkdtempSync(path.join(os.tmpdir(), 'jspm-runtime-'));
  copyJspmRuntime(root, dest);
  const missing = missingSystemJsRequires(
    fs.readFileSync(path.join(root, 'dist', 'app.bundle.js'), 'utf8')
  );
  const absent = missing.filter((id) => {
    const rel = id.replace(/^npm:/, 'jspm_packages/npm/').replace(/^github:/, 'jspm_packages/github/');
    return !fs.existsSync(path.join(dest, rel));
  });
  assert.deepEqual(absent, []);
  assert.equal(
    fs.existsSync(
      path.join(
        dest,
        'jspm_packages/npm/core-js@1.2.7/library/modules/$.core.js'
      )
    ),
    true
  );
});
