var gulp = require('gulp')
    , uglify = require('gulp-uglify')
    , rename = require('gulp-rename')
    , sourcemaps = require('gulp-sourcemaps');


gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('minify-js', function () {
    return gulp.src(['wwwroot/**/!(*.min).js', '!wwwroot/lib/**/*'])
     .pipe(sourcemaps.init())
     .pipe(uglify())
     .pipe(rename({
         extname: '.min.js'
     }))
     .pipe(sourcemaps.write('./'))
     .pipe(gulp.dest('wwwroot/./'));
});