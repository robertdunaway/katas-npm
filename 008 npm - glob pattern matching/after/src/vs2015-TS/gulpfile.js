var gulp = require('gulp');

gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('task2', function () {
    return gulp.src(['src/humans.txt'])
    .pipe(gulp.dest('task2'));
});

gulp.task('task3', function () {
    return gulp.src(['src/humans.txt', 'src/robots.txt',
                     'src/favicon.ico', 'src/tile.png'])
    .pipe(gulp.dest('task3'));
});

gulp.task('task4', function () {
    return gulp.src(['src/**/*.js'])
    .pipe(gulp.dest('task4'));
});

gulp.task('task5', function () {
    return gulp.src(['src/**/*.js', '!src/**/*.min.js'])
    .pipe(gulp.dest('task5'));
});

gulp.task('task6', function () {
    return gulp.src(['src/**/!(*.min).js'])
    .pipe(gulp.dest('task6'));
});

gulp.task('task7', function () {
    return gulp.src(['src'])
    .pipe(gulp.dest('task7'));
});


gulp.task('task8', function () {
    return gulp.src(['src/'])
    .pipe(gulp.dest('task8'));
});


gulp.task('task9', function () {
    return gulp.src(['src/*'])
    .pipe(gulp.dest('task9'));
});


gulp.task('task10', function () {
    return gulp.src(['src/*.*'])
    .pipe(gulp.dest('task10'));
});


gulp.task('task11', function () {
    return gulp.src(['src/**'])
    .pipe(gulp.dest('task11'));
});


gulp.task('task12', function () {
    return gulp.src(['src/**/'])
    .pipe(gulp.dest('task12'));
});


gulp.task('task13', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('task13'));
});


gulp.task('task14', function () {
    return gulp.src(['src/**/*.*'])
    .pipe(gulp.dest('task14'));
});








