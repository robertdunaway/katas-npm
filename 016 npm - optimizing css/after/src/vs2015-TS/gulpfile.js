var gulp = require('gulp')
    , runSequence = require('run-sequence')
    , rename = require('gulp-rename')
    , sourcemaps = require('gulp-sourcemaps')
    , minifycss = require('gulp-minify-css');


gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('minifycss', function () {
    return gulp.src(['wwwroot/**/*.css', '!wwwroot/**/*.min.css'], { base: 'wwwroot/./' })
     .pipe(sourcemaps.init())
     .pipe(minifycss())
     .pipe(rename({
         extname: '.min.css'
     }))
     .pipe(sourcemaps.write('./'))
     .pipe(gulp.dest('wwwroot/./'));
});

gulp.task('default', function () {
    runSequence('copy-to-wwwroot', 'minifycss');
    //runSequence(]'copy-to-wwwroot', 'minifycss']);  -- paralell, misses files.
});