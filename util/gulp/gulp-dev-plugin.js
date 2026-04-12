'use strict';

const through = require('through2');

function processFileContents(fileContents, inDevelopmentMode) {
  let data = fileContents;
  data = processBlock(data, '<!-- dev -->', '<!-- /dev -->', !inDevelopmentMode);
  data = processBlock(data, '<!-- !dev -->', '<!-- /!dev -->', inDevelopmentMode);
  return Buffer.from(data);
}

/**
 * Process a block: either comment out (wrap in <!-- -->) or uncomment (strip <!-- -->).
 * Uses block-level replacement to avoid nested-comment corruption from line-by-line wrapping.
 */
function processBlock(fileContents, startMarker, endMarker, commentOut) {
  const startIdx = fileContents.indexOf(startMarker);
  const endIdx = fileContents.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    return fileContents;
  }
  const contentStart = startIdx + startMarker.length;
  const content = fileContents.slice(contentStart, endIdx);
  const before = fileContents.slice(0, contentStart);
  const after = fileContents.slice(endIdx);

  let newContent;
  const trimmed = content.trim();
  if (commentOut) {
    if (trimmed.startsWith('<!--') && trimmed.endsWith('-->')) {
      return fileContents;
    }
    newContent = '\n<!--\n' + trimmed + '\n-->\n';
  } else {
    const uncommented = content.replace(/^\s*<!--\s*\n?/, '').replace(/\n?\s*-->\s*$/, '').trim();
    newContent = '\n' + uncommented + '\n';
  }
  return before + newContent + after;
}

module.exports = function (inDevelopmentMode) {
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }
    if (file.isStream()) {
      this.emit('error', new Error('gulp-dev-plugin: streaming not supported'));
      return cb();
    }
    const fileContents = file.contents.toString('utf-8');
    file.contents = processFileContents(fileContents, inDevelopmentMode);
    this.push(file);
    return cb();
  });
};
