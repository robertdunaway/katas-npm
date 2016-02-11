var gulp = require('gulp')
    , runSequence = require('run-sequence')
    , rename = require('gulp-rename')
    , sourcemaps = require('gulp-sourcemaps')
    , concat = require('gulp-concat')
    , uglify = require('gulp-uglify');


gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('concatJS', function () {
    return gulp.src('src/js/**/*')
      .pipe(concat('all.js'))


         .pipe(sourcemaps.init())
         .pipe(uglify())
         .pipe(rename({
             extname: '.min.js'
         }))
         .pipe(sourcemaps.write('./'))

        
      .pipe(gulp.dest('./wwwroot/js/'));
});

gulp.task('default', function () {
    runSequence('copy-to-wwwroot', 'concatJS');
});