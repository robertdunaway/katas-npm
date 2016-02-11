---
title: 017 Gulp - transpile sass & autoprefix
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

# 017 Gulp - transpile sass & autoprefix

## Duration
10 minutes

## Brief
In this Kata we have a folder named “`sass`” under `src`.  We will transpile sass into css.

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
  - https://github.com/robertdunaway/katas-gulp/tree/master/017%20Gulp%20-%20transpile%20sass%20%26%20autoprefix/before
 - After
  - https://github.com/robertdunaway/katas-gulp/tree/master/017%20Gulp%20-%20transpile%20sass%20%26%20autoprefix/after


# Kata
In this kata, transpile all SASS files down to css, compress, autoprefix, and map them.

# Review
First we need to install the needed plugins.
<br>
```

npm install gulp-sass --save-dev


```
<br>
NodeJS stopped supporting promises after 0.1  (fact check this)
For gulp-autoprevix to work we need to install a Promise polyfill.
<br>
```

npm install gulp-autoprevix --save-dev


```
<br>
Then add this line of code after the reference section.
<br>
```typescript

require('es6-promise').polyfill();


```
<br>
After you’ve added your task the gulp file should look something like this.
<br>
```typescript

var gulp = require('gulp')
    , runSequence = require('run-sequence')
    , rename = require('gulp-rename')
    , sourcemaps = require('gulp-sourcemaps')
    , sass = require('gulp-sass')
    , autoprefixer = require('gulp-autoprefixer')
   
;

require('es6-promise').polyfill();

gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('sass-transpile', function () {
    return gulp.src(['wwwroot/**/*.scss'], { base: 'wwwroot/./' })
     .pipe(sourcemaps.init())
     .pipe(sass().on('error', sass.logError))
     .pipe(sass({ outputStyle: 'compressed' }))
     .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
     }))
     .pipe(sourcemaps.write('./'))
     .pipe(gulp.dest('wwwroot/./'))
});

gulp.task('default', function () {
    runSequence('copy-to-wwwroot', 'sass-transpile');
});


```
<br>
 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/017%20Gulp%20-%20transpile%20sass%20%26%20autoprefix/1.png"> 


##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 