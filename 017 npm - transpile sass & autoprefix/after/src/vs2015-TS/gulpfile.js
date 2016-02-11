var gulp = require('gulp')
    , runSequence = require('run-sequence')
    , rename = require('gulp-rename')
    , sourcemaps = require('gulp-sourcemaps')
    , sass = require('gulp-sass')
    , autoprefixer = require('gulp-autoprefixer')
   
;

require('es6-promise').polyfill();

gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('sass-transpile', function () {
    return gulp.src(['wwwroot/**/*.scss'], { base: 'wwwroot/./' })
     .pipe(sourcemaps.init())
     .pipe(sass().on('error', sass.logError))
     .pipe(sass({ outputStyle: 'compressed' }))
     .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
     }))
     .pipe(sourcemaps.write('./'))
     .pipe(gulp.dest('wwwroot/./'))
});

gulp.task('default', function () {
    runSequence('copy-to-wwwroot', 'sass-transpile');
});