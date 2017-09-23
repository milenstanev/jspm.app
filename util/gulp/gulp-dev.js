const gulp = require('gulp');
const dev = require('gulp-dev');
const process = require('process');
const jspm = require('jspm');

const base = '.';

gulp.task('prod', function() {
  jspm.bundle('src/index.js', 'src/index.bundle.js');

  gulp.src(`${base}/index.html`)
    .pipe(dev(false))
    .pipe(gulp.dest(base));
});

gulp.task('dev', function() {
  gulp.src(`${base}/index.html`)
    .pipe(dev(true))
    .pipe(gulp.dest(base));
});
