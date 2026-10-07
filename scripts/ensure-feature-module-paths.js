#!/usr/bin/env node
/**
 * Ensure feature module aliases exist in config.js after jspm install.
 * config.js is gitignored, so fresh CI installs would otherwise miss these paths.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'config.js');

const FEATURE_PATHS = {
  homeComponent: 'src/home/home.module.js',
  counterComponent: 'src/counter/counter.module.js',
  timerComponent: 'src/timer/timer.module.js',
  notesComponent: 'src/notes/notes.module.js',
};

if (!fs.existsSync(configPath)) {
  console.warn('ensure-feature-module-paths: config.js missing, skip');
  process.exit(0);
}

let src = fs.readFileSync(configPath, 'utf8');
let changed = false;

Object.keys(FEATURE_PATHS).forEach((id) => {
  const target = FEATURE_PATHS[id];
  const quoted = `"${id}": "${target}"`;
  const re = new RegExp(`"${id}"\\s*:\\s*"[^"]*"`);
  if (re.test(src)) {
    const next = src.replace(re, quoted);
    if (next !== src) {
      src = next;
      changed = true;
    }
    return;
  }

  // Insert after npm:* path entry (always present in jspm config.js).
  const anchor = '"npm:*": "jspm_packages/npm/*"';
  if (!src.includes(anchor)) {
    throw new Error('ensure-feature-module-paths: could not find paths anchor in config.js');
  }
  src = src.replace(anchor, `${anchor},\n    ${quoted}`);
  changed = true;
});

if (changed) {
  fs.writeFileSync(configPath, src);
  console.log('ensure-feature-module-paths: updated feature aliases in config.js');
} else {
  console.log('ensure-feature-module-paths: feature aliases already present');
}
