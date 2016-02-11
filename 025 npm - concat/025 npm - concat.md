---
title: 025 Gulp - concat
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

# 025 Gulp - concat

## Duration
5 minutes

## Brief
In this kata we will combine multiple files into one.

### For more information 
BING/GOOGLE: “Gulp concat minify javascript”

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
  - https://github.com/robertdunaway/katas-gulp/tree/master/025%20Gulp%20-%20concat/before
 - After
  - https://github.com/robertdunaway/katas-gulp/tree/master/025%20Gulp%20-%20concat/after


# Kata

Bundle all the JavaScript files, in `src`, and output them into a single file named `all.js`.  Then minify the `all.js` file and output `all.min.js`.
<br>
# Review
Install the NPM modules needed.
<br>
```

npm install gulp-concat --save-dev
npm install gulp-uglify --save-dev


```
<br>
Add the references to the gulp file.
<br>
```

, concat = require('gulp-concat')
, uglify = require('gulp-uglify')


```
<br>
Create a task to concatenate, minify, and map all JavaScript files in the `src/js` folder.
<br>
```

gulp.task('concatJS', function () {
    return gulp.src('src/js/**/*')
      .pipe(concat('all.js'))


         .pipe(sourcemaps.init())
         .pipe(uglify())
         .pipe(rename({
             extname: '.min.js'
         }))
         .pipe(sourcemaps.write('./'))

        
      .pipe(gulp.dest('./wwwroot/js/'));
});

gulp.task('default', function () {
    runSequence('copy-to-wwwroot', 'concatJS');
});


```
<br>

Just seems like a good place to insert an image.
<br>
<img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/025%20Gulp%20-%20concat/1.png"> 





##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 