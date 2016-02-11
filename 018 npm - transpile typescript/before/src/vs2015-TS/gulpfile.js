var gulp = require('gulp')
    , runSequence = require('run-sequence')
    , rename = require('gulp-rename')
    , sourcemaps = require('gulp-sourcemaps')
    , clean = require('gulp-clean');

gulp.task('clean-wwwroot', function () {
    return gulp.src('wwwroot', { read: false })
      .pipe(clean());
});

gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('default', function () {
    runSequence(['clean-wwwroot', 'copy-to-wwwroot']);
});