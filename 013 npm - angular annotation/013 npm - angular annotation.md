---
title: 013 Gulp - angular annotation
## Heading ##
tags: 
- AngularJS
- Angular2
- Gulp
- Bower
- npm
- nodejs
- github
- Visual Studio Code
- JavaScript
- TypeScript

---

###http://robertdunaway.github.io

##[Gulp code kata list](http://mycodekatas.github.io/gulp.html)
##[All code katas lists](http://mycodekatas.github.io/)

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 

# 013 Gulp - angular annotation

## Duration
5 minutes

## Brief
Angular 1x dependency injected is broken by minification if not properly annotated.  The `gulp-ng-annotate` plugin handles this for us.

### For more information 
BING/GOOGLE: “Gulp ”

Book: 
[Gulp - Quick guide to getting up and running today](http://www.amazon.com/Gulp-Quick-guide-getting-running-ebook/dp/B010NXMFF6/)
<br>
<img src="https://raw.githubusercontent.com/robertdunaway/gulp-book/master/bookcoverimage.PNG" alt="Smiley face" height="150" width="150">



## Instructions
Get tutorial folder or the entire katas-Gulp repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-gulp/tree/master/013%20Gulp%20-%20angular%20annotation/before
 - After
  - https://github.com/robertdunaway/katas-gulp/tree/master/013%20Gulp%20-%20angular%20annotation/after


# Kata
Using `gulp-ng-annotate`, modify Angular 1x files in preparation for optimization.  Consider when annotation needs to occur and whether or not you should alter your source code or only the distribution code.

# Review
You’ll need gulp-ng-annotate.
<br>
```

npm install gulp-ng-annotate --save-dev


```
<br>
Add a reference to   here.
<br>
```javascript

, ngAnnotate = require('gulp-ng-annotate')


```
<br>
We will annotate our code before copying it to `wwwroot` for optimization.  This requires the use of `run-sequence`.  One trick to making this work is saving the resulting file back to its original location, overwriting the original file.
<br>
Create the annotate task.
<br>
```javascript

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
    runSequence(['annotate', 'copy-to-wwwroot'], 'minify-js');
});


```
<br>
The `src/js/main.js` file contains an Angular 1x service.  This service is NOT properly annotated.  In its current state it will execute correctly but the moment the file is optimized it is broken.

###src/js/main.js
<br>
Before annotation
<br>

```javascript

(function () {

    ngApp.service('coreDataService', function ($http, $q, $log, cacheService) {
        'use strict';

        return {

            getCache: function (cacheName) {
                var deferred = $q.defer();

                cacheService.getCache(cacheName).then(function (data) {
                    deferred.resolve(data);
                });

                return deferred.promise;
            }
        };
    });
});


```
<br>
After annotation
<br>
<img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/013%20Gulp%20-%20angular%20annotation/1.png">
<br>

```javascript

(function () {

    ngApp.service('coreDataService', ["$http", "$q", "$log", "cacheService", function ($http, $q, $log, cacheService) {
        'use strict';

        return {

            getCache: function (cacheName) {
                var deferred = $q.defer();

                cacheService.getCache(cacheName).then(function (data) {
                    deferred.resolve(data);
                });

                return deferred.promise;
            }
        };
    }]);
});


```


##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 