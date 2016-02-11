---
title: 005 Gulp - error handling
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

# 005 Gulp - error handling

## Duration
5 minutes

## Brief
Implement gulp-plumber for outputting errors in a readable format.

### For more information 
BING/GOOGLE: “Gulp error handling”

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
  - https://github.com/robertdunaway/katas-gulp/tree/master/005%20Gulp%20-%20error%20handling/before
 - After
  - https://github.com/robertdunaway/katas-gulp/tree/master/005%20Gulp%20-%20error%20handling/after


# Kata
In this kata we will add plumber by piping it into a task.

<br>

First we need to install the gulp-plumber plugin.
<br>
```

Npm install gulp-plumber --save-dev


```
<br>

Now add a reference to the gulp plugin.
<br>
```javascript

    , plumber = require('gulp-plumber')


```

<br>

Add plumber to a task.
<br>

```javascript

gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
      .pipe(plumber({
          errorHandler: onError
      }))
    .pipe(gulp.dest('wwwroot'));
});


```

<br>

Putting it all together you will end up with something like this.

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/005%20Gulp%20-%20error%20handling/1.png">

##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 