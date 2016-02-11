var gulp = require('gulp')
    , uglify = require('gulp-uglify')
    , rename = require('gulp-rename')
    , sourcemaps = require('gulp-sourcemaps')
    , ngAnnotate = require('gulp-ng-annotate')
    , runSequence = require('run-sequence');

gulp.task('annotate', function () {
    return gulp.src(['src/**/*.js', '!src/**/*.min.js'], { base: 'src/./' })
      .pipe(ngAnnotate())
      .pipe(gulp.dest('src/./'));
});

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

gulp.task('default', function () {
    runSequence('annotate', 'copy-to-wwwroot', 'minify-js');
});