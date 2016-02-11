var onError = function (err) {
    console.log(err);
    alert(err);
};


var gulp = require('gulp')
    , runSequence = require('run-sequence')
    , plumber = require('gulp-plumber')
;

gulp.task('task1', function () {
    console.log('my first gulp task…');
});

gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
      .pipe(plumber({
          errorHandler: onError
      }))
    .pipe(gulp.dest('wwwroot'));
});


gulp.task('default', function () {
    runSequence('task1', 'copy-to-wwwroot');
});
