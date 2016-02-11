---
title: 011 Gulp - optimizing javascript
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

# 011 Gulp - optimizing javascript

## Duration
5 minutes

## Brief
Optimize all JavaScript files in the `wwwroot` folder.

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
  - https://github.com/robertdunaway/katas-gulp/tree/master/011%20Gulp%20-%20optimizing%20javascript/before
 - After
  - https://github.com/robertdunaway/katas-gulp/tree/master/011%20Gulp%20-%20optimizing%20javascript/after


# Kata
After all files are copied to `wwwroot`, minify all the JavaScript files but do not minify any “`*.min.js`” files.  IE: Don’t minify JavaScript files that have already been minified.
<br>
Install the gulp plugin.
<br>
```

npm install gulp-uglify --save-dev
npm install gulp-rename --save-dev
npm install gulp-sourcemaps --save-dev


```
<br>
Add a reference to plugins.
<br>

```javascript

var gulp = require('gulp')
    , uglify = require('gulp-uglify')
    , rename = require('gulp-rename')
    , sourcemaps = require('gulp-sourcemaps');


```
<br>

####Create tasks
Copy all files to the `wwwroot` folder.
<br>

```javascript

gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});


```
<br>
Minify all non-minified JavaScript files in `wwwroot`.
<br>

```javascript

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


```
<br>
####Step through minify-js
1 Selecting all JavaScript files except already minified files.
2 Begin the sourcemaps process.
3 Perform the JavaScript optimization with `uglify()`.
4 Rename the new file.  This way we’ll have the original file, a minified version of the file, and a map file.
5 Write out the source map file.
6 Set the destination which is `wwwroot`.

<br>
You’ll notice only `*.js` files were minified but existing `*.min.js` files were left alone.
<br>

<img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/011%20Gulp%20-%20optimizing%20javascript/1.png" >







##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 