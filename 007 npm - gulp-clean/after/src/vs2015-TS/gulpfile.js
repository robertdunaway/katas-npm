/// <binding ProjectOpened='default' />
var gulp = require('gulp')
  , clean = require('gulp-clean')
    , runSequence = require('run-sequence')
;


gulp.task('clean-wwwroot', function () {
    return gulp.src('wwwroot', { read: false })
      .pipe(clean());
});

gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});


// ----------------------------------------------------------------
// Default Task
// ----------------------------------------------------------------
gulp.task('default', function () {
    runSequence('clean-wwwroot', 'copy-to-wwwroot');
});