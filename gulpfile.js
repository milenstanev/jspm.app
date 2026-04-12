const { dev, prod } = require('./util/gulp/gulp-dev.js');

exports.dev = dev;
exports.prod = prod;
exports.default = dev;
