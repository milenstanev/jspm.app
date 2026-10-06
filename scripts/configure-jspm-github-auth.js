#!/usr/bin/env node
/**
 * Configure jspm GitHub registry auth for CI (non-interactive).
 * Reads JSPM_GITHUB_AUTH_TOKEN, GITHUB_TOKEN, or GH_TOKEN.
 */
'use strict';

const { execFileSync } = require('child_process');
const path = require('path');

const token =
  process.env.JSPM_GITHUB_AUTH_TOKEN ||
  process.env.GITHUB_TOKEN ||
  process.env.GH_TOKEN ||
  '';

if (!token) {
  console.warn(
    'configure-jspm-github-auth: no token found (JSPM_GITHUB_AUTH_TOKEN/GITHUB_TOKEN/GH_TOKEN). jspm may hit GitHub rate limits.'
  );
  process.exit(0);
}

const jspm = path.join(__dirname, '..', 'node_modules', 'jspm', 'jspm.js');

try {
  // Prefer token auth without prompting for username/password.
  execFileSync(process.execPath, [jspm, 'config', 'registries.github.auth', token], {
    stdio: 'inherit',
    env: process.env,
  });
  console.log('configure-jspm-github-auth: configured registries.github.auth');
} catch (err) {
  console.warn('configure-jspm-github-auth: failed to write jspm config:', err.message);
  process.exit(0);
}
