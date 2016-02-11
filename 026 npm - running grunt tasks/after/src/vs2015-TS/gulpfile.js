var gulp = require('gulp')
    , runSequence = require('run-sequence')
    , rename = require('gulp-rename')
    , sourcemaps = require('gulp-sourcemaps');


gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});

// -------------------------------------------------
// Grunt configuration
require('gulp-grunt')(gulp, {
    // These are the default options but included here for readability.
    base: null,
    prefix: 'grunt-',
    verbose: false
});
// -------------------------------------------------




gulp.task('default', function () {
    runSequence('copy-to-wwwroot', 'grunt-merge-json:menu');
});