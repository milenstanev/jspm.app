const browserSync = require('browser-sync').create();
const process = require('process');

const ENTRY_POINT = '.';
const SRC = `${ENTRY_POINT}/src`;
/**
 * @todo make it param or something
 * @type {boolean}
 */
const SYNC = true;
/**
 * @todo make it param or something
 * @type {boolean}
 */
const OPEN_BROWSER = false;

const SERVER_CONFIG = {
  server: {
    baseDir: `${ENTRY_POINT}/`
  }
  , open: OPEN_BROWSER
};

browserSync.init(SERVER_CONFIG);

if(SYNC) {
  browserSync.watch([SRC]).on('change', browserSync.reload);
}
