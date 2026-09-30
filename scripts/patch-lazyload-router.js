/**
 * Re-apply fixes to jspm.angular.lazyload-router after `jspm install`.
 * - switch: add break after module:name:constant
 * - default loader: skip __esModule, prefer .default
 */
'use strict';

const fs = require('fs');
const path = require('path');

const bundlePath = path.join(
  __dirname,
  '..',
  'jspm_packages',
  'github',
  'milenstanev',
  'jspm.angular.lazyload-router@master',
  'jspm.angular.lazyload-router.js'
);

const NEEDLE =
  'switch(c.moduleExport){case"module:name:constant":System.import(c.src).then(function(a){b.load(angular.module(c.moduleExportName)).then(function(){d.resolve()},function(a){throw a})});default:System.import(c.src).then(function(a){var c=a;if(!a.name){var e=window.Object.keys(a);c=a[e[0]]}b.load(c).then(function(){d.resolve()},function(a){throw a})})}';

const REPLACEMENT =
  'switch(c.moduleExport){case"module:name:constant":System.import(c.src).then(function(a){b.load(angular.module(c.moduleExportName)).then(function(){d.resolve()},function(a){throw a})});break;default:System.import(c.src).then(function(a){var m=a;if(!m.name){if(m.default)m=m.default;else{var e=window.Object.keys(m).filter(function(k){return k!=="__esModule"});m=m[e[0]]}}b.load(m).then(function(){d.resolve()},function(a){throw a})})}';

if (!fs.existsSync(bundlePath)) {
  console.warn('patch-lazyload-router: bundle not found, skip:', bundlePath);
  process.exit(0);
}

let src = fs.readFileSync(bundlePath, 'utf8');
if (src.includes('break;default:System') && src.includes('__esModule')) {
  process.exit(0);
}
if (!src.includes(NEEDLE)) {
  console.warn('patch-lazyload-router: expected pattern missing; manual check needed');
  process.exit(0);
}
src = src.replace(NEEDLE, REPLACEMENT);
fs.writeFileSync(bundlePath, src);
console.log('patch-lazyload-router: updated', bundlePath);
