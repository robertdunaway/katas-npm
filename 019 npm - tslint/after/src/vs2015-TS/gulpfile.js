var gulp = require('gulp')
    , runSequence = require('run-sequence')
    , rename = require('gulp-rename')
    , sourcemaps = require('gulp-sourcemaps')
    , clean = require('gulp-clean')
    , ts = require('gulp-typescript')
    , uglify = require('gulp-uglify')
    , tslint = require('gulp-tslint');

gulp.task('clean-wwwroot', function () {
    return gulp.src('wwwroot', { read: false })
      .pipe(clean());
});

gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('tscompile', function () {
    return gulp.src(['./wwwroot/**/*.ts', '!wwwroot/lib/**/*.*'])
    .pipe(sourcemaps.init())
    .pipe(ts({
        target: 'ES5',
        declarationFiles: false,
        noExternalResolve: true
    }))
    .pipe(rename({ extname: '.js' }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('wwwroot/./'));
});

gulp.task('tslint', function () {
    return gulp.src(['./wwwroot/**/*.ts', '!wwwroot/lib/**/*.*'])
        .pipe(tslint())
        .pipe(tslint.report('verbose', {
            emitError: true,
            sort: true,
            bell: true
        }));
});

gulp.task('default', function () {
    runSequence('clean-wwwroot', 'copy-to-wwwroot', 'tscompile', 'tslint');
});