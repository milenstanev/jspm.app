const browserSync = require('browser-sync').create();
const historyApiFallback = require('connect-history-api-fallback');

const ENTRY_POINT = '.';
const SRC = `${ENTRY_POINT}/src`;
const PORT = process.env.BROWSERSYNC_PORT
  ? parseInt(process.env.BROWSERSYNC_PORT, 10)
  : 3000;
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
  port: PORT,
  server: {
    baseDir: `${ENTRY_POINT}/`,
    middleware: [
      historyApiFallback({ index: '/index.html', verbose: false })
    ]
  },
  open: OPEN_BROWSER
};

browserSync.init(SERVER_CONFIG);

if(SYNC) {
  browserSync.watch([SRC]).on('change', browserSync.reload);
}
