---
title: 016 Gulp - optimizing css
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

# 016 Gulp - optimizing css

## Duration
5 minutes

## Brief
In this kata we will optimize css files.

### For more information 
BING/GOOGLE: “Gulp optimize css”

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
  - https://github.com/robertdunaway/katas-gulp/tree/master/016%20Gulp%20-%20optimizing%20css/before
 - After
  - https://github.com/robertdunaway/katas-gulp/tree/master/016%20Gulp%20-%20optimizing%20css/after


# Kata
After copying all `src` files to `wwwroot`, optimize the css.
<br>
# Review
Install the npm plugins we need.  The `gulp`, `gulp-rename`, `run-sequence`, and `gulp-sourcemaps` have already been installed.
<br>
```

npm install gulp-minify-css --save-dev


```
<br>
References will now look like this
<br>
```javascript

var gulp = require('gulp')
    , runSequence = require('run-sequence')
    , rename = require('gulp-rename')
    , sourcemaps = require('gulp-sourcemaps')
    , minifycss = require('gulp-minify-css');


```
<br>
Create the new minifyhtml task and add it to the default task.
<br>
```javascript

gulp.task('minifycss', function () {
    return gulp.src(['wwwroot/**/*.css', '!wwwroot/**/*.min.css'], { base: 'wwwroot/./' })
     .pipe(sourcemaps.init())
     .pipe(minifycss())
     .pipe(rename({
         extname: '.min.css'
     }))
     .pipe(sourcemaps.write('./'))
     .pipe(gulp.dest('wwwroot/./'));
});


```
<br>
Check out your newly optimized html files.
<br>
Before
<br>
 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/016%20Gulp%20-%20optimizing%20css/1.png"> 
<br>
After
<br>
 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/016%20Gulp%20-%20optimizing%20css/2.png"> 



##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 