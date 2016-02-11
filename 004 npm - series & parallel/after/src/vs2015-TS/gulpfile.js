var gulp = require('gulp')
    , runSequence = require('run-sequence')
;

gulp.task('task1', function () {
    console.log('my first gulp task…');
});

gulp.task('task2', function () {
    console.log('my second gulp task…');
});

gulp.task('task3', function () {
    console.log('my third gulp task…');
});


gulp.task('default', function () {
    runSequence(['task1', 'task2'], 'task3');
});
