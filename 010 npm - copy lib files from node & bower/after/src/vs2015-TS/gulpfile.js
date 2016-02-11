var gulp = require('gulp');



gulp.task('libs', function () {
    return gulp.src(['bower_components/**//normalize-css/normalize.css'
                    , 'bower_components/**//font-awesome/css/font-awesome.min.css'
                    , 'bower_components/**/font-awesome/fonts/*.*'
                    , 'bower_components/**//jquery/dist/jquery.min.js'
                    , 'bower_components/**//lodash/lodash.min.js'

                    // for angular2
                    , 'node_modules/**//es6-shim/es6-shim.min.js'
                    , 'node_modules/**//angular2/bundles/angular2-polyfills.min.js'
                    , 'node_modules/**//systemjs/dist/system.src.js'
                    , 'node_modules/**//rxjs/bundles/rx.min.js'
                    , 'node_modules/**//angular2/bundles/angular2.min.js'
                    , 'node_modules/**//angular2/bundles/angular2.dev.js'

    ])
      .pipe(gulp.dest('wwwroot/lib/./'));
});