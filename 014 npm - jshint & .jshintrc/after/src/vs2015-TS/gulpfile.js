var gulp = require('gulp')
    , rename = require('gulp-rename')
    , sourcemaps = require('gulp-sourcemaps')
    , jshint = require('gulp-jshint')
    , stylish = require('jshint-stylish')
    , jshinthtmlreporter = require('gulp-jshint-html-reporter')
    ;

gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('jshint', function () {
    return gulp.src(['./src/**/js/*.js'])
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter(stylish))
      .pipe(jshint.reporter('gulp-jshint-html-reporter', { filename: 'jshint-output.html' }))
    ;
});

