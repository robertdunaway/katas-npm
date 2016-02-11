var gulp = require('gulp')
    , runSequence = require('run-sequence')
    , rename = require('gulp-rename')
    , sourcemaps = require('gulp-sourcemaps')
    , minifyhtml = require('gulp-minify-html');


gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('minifyhtml', function () {
    return gulp.src(['wwwroot/**/*.html', '!/**/*.min.html', '!wwwroot/lib/**/*'], { base: 'wwwroot/./' })
     .pipe(sourcemaps.init())
     .pipe(minifyhtml())
     .pipe(rename({
         extname: '.min.html'
     }))
     .pipe(sourcemaps.write('./'))
     .pipe(gulp.dest('wwwroot/./'));
});

gulp.task('default', function () {
    runSequence('copy-to-wwwroot', 'minifyhtml');
});