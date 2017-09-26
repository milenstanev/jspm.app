const gulp = require('gulp');
const dev = require('gulp-dev');
const process = require('process');
const jspm = require('jspm');
const git = require('simple-git')('./');

const base = '.';

//region dev/prod
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
//endregion

//region submodules
gulp.task('submodule-git-flow-init', () => {
  git.subModule(
    ['foreach', 'git-flow', 'init', '-d'],
    (error, result) => console.log(result)
  );
});

gulp.task('submodule-checkout-dev', () => {
  git.subModule(['foreach', 'git', 'checkout', 'develop'],
    (error, result) => {
      console.log(result);
    }
  );
});
//endregion


gulp.task('jspm-update-components', () => {
  git.subModule(['foreach', 'jspm', 'update', '-y'],
    (error, result) => {
      console.log(result);
    }
  );
});

gulp.task('jspm-build-components', () => {
  git.subModule(['foreach', 'npm', 'run', 'build'],
    (error, result) => {
      console.log(result);
    }
  );
});


