var gulp = require('gulp')
    , rename = require('gulp-rename')
    , sourcemaps = require('gulp-sourcemaps');


gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});
