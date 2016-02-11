var gulp = require('gulp');

gulp.task('task1', function () {
    console.log('my first gulp task…');
});

gulp.task('task2', function () {
    console.log('my second gulp task…');
});

gulp.task('task3', function () {
    console.log('my third gulp task…');
});


gulp.task('default', ['task1', 'task2', 'task3']);
