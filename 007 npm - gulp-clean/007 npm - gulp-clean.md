---
title: 007 Gulp – gulp-clean
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

# 007 Gulp – gulp-clean

## Duration
5 minutes

## Brief
We will clean out a folder before working with files.

### For more information 
BING/GOOGLE: “Gulp gulp-clean”

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
  - https://github.com/robertdunaway/katas-gulp/tree/master/007%20Gulp%20-%20gulp-clean/before
 - After
  - https://github.com/robertdunaway/katas-gulp/tree/master/007%20Gulp%20-%20gulp-clean/after


# Kata

The solution for this kata already has a `copy-to-wwwroot` task.  The idea is when the solution loads the `default` task is run.  The `default` task first executes the `clean-wwwroot` task and then the `copy-to-wwwroot`.  Finally, bind the `default` task to `Project Open`.

<br>

So we have 4 task to perform.
<br>
1 Install `gulp-clean`.
2 Add the clean reference to `gulp-clean`.
3 Create the `clean-wwwroot` task.
4 Create a `default` task that uses `runsequence` to execute `clean-wwwroot` then `copy-to-wwwroot`.


## Review

Installed the `gulp-clean` plugin.

<br>

```

npm install gulp-clean --save-dev
npm install run-sequence --save-dev


```

<br>

Add the clean reference.

<br>

```javascript

var gulp = require('gulp')
  , clean = require('gulp-clean')
    , runSequence = require('run-sequence')
;


```

<br>

Add the `copy-to-wwwroot` task.

<br>

```javascript

gulp.task('clean-wwwroot', function () {
    return gulp.src('wwwroot', { read: false })
      .pipe(clean());
});


```

<br>

Create the default task.

<br>

```javascript

// ----------------------------------------------------------------
// Default Task
// ----------------------------------------------------------------
gulp.task('default', function () {
    runSequence('clean-wwwroot', 'copy-to-wwwroot');
});


```

<br>
Bind the `default` task to `Project Open`.
Right-click the `default` task and navigate to `Bindings` then select `Project Open`.

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/007%20Gulp%20-%20gulp-clean/1.png"> 

<br>

Shut down the solution and reload it.  When Visual Studio loads it will `Restore Packages` then read the `gulpfile.js` to build up the `Task Runner Explorer`.  Once the project is loaded the `default` task will be executed.

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/007%20Gulp%20-%20gulp-clean/2.png"> 





##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 