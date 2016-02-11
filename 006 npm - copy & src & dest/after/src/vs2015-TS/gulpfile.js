/// <binding ProjectOpened='copy-to-wwwroot' />
var gulp = require('gulp');

gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});
