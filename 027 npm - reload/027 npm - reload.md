---
title: 027 Gulp -reload
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

# 027 Gulp -reload

## Duration
10 minutes

## Brief
Add an automatic browser refresh to improve productivity.

### For more information 
BING/GOOGLE: “Gulp live reload”

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
  - https://github.com/robertdunaway/katas-gulp/tree/master/027%20Gulp%20-%20reload/before
 - After
  - https://github.com/robertdunaway/katas-gulp/tree/master/027%20Gulp%20-%20reload/after


# Kata
Using `gulp-livereload` configure Gulp to automatically reload the browser when an HTML or JavaScript file is changed.
<br>
We are starting off with a fully functional `gulpfile.js`.  The only thing left to do is configure the browser reload. 
<br>

> NOTE: This is an Angular2 solution.

# Review
Add the required NPM packages.
<br>
```

npm install gulp-livereload --save-dev


```
<br>
Add the module reference.
<br>
```

, livereload = require('gulp-livereload')


```
<br>
Create the reload task.
<br>
```

gulp.task('reload', function () {
    // Change the filepath, when you want to live reload a different page in your project.
    livereload.reload("./index.min.html");
});


```
<br>
Add the livereload listener to the watch task.
<br>
```

gulp.task('watch', function () {

    livereload.listen();


```
<br>
Install the Chrome plugin that makes livereload possible.
https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en
<br>
 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/027%20Gulp%20-%20reload/2.png"> 
<br>
Add the reload task to each of the existing watch commands inside the watch task.  Don’t add it to the `copy-to-wwwroot` watch task.
<br>
```

    // ---------------------------------------------------------------
    // Watching TypeScript files
    // ---------------------------------------------------------------
    gulp.watch(['wwwroot/**/*.ts', '!wwwroot/lib/**/*.*', '!wwwroot/css/**/*.*'], function () { runSequence('tscompile', 'reload'); });

    // ---------------------------------------------------------------
    // Watch - Execute linters
    // ---------------------------------------------------------------
    gulp.watch(['wwwroot/**/*.ts', '!wwwroot/lib/**/*.*', '!wwwroot/css/**/*.*'], function () { runSequence('tslint', 'reload'); });

    // ---------------------------------------------------------------
    // Watching HTML files
    // ---------------------------------------------------------------
    gulp.watch(['wwwroot/**/*.html', '!wwwroot/**/*.min.html', '!wwwroot/lib/**/*'], function () { runSequence('minifyhtml', 'reload'); });


```
<br>
Now run the site and in the Chrome browser press the “Enable LiveReload” button.
<br>
 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/027%20Gulp%20-%20reload/1.png"> 
<br>
Make changes to the files in `src/` and you’ll see the changes reflected in the browser.



##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 