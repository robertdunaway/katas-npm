/// <binding ProjectOpened='default' />
/// <reference path="wwwroot/js/constants.js" />
var gulp = require('gulp')
    , runSequence = require('run-sequence')
    , rename = require('gulp-rename')
    , sourcemaps = require('gulp-sourcemaps')
    , replace = require('gulp-replace-task')
    , args = require('yargs').argv
    , fs = require('fs');


gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('setEnv', function () {
    // Get the environment from the command line
    var env = args.env || 'dev';

    // Read the settings from the right file
    var filename = 'env.config.' + env + '.json';
    var settings = JSON.parse(fs.readFileSync('src/config/' + filename, 'utf8'));

    // Replace each placeholder with the correct value for the variable.  
    gulp.src('src/js/constants.js')
      .pipe(replace({
          patterns: [
            {
                match: 'myFirstApi',
                replacement: settings.myFirstApi
            },
            {
                match: 'mySecondApi',
                replacement: settings.mySecondApi
            },
          ]
      }))
      .pipe(gulp.dest('wwwroot/js/'));
});



gulp.task('default', function () {
    runSequence('copy-to-wwwroot', 'setEnv');
});