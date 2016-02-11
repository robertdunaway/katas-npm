---
title: 021 Gulp - watch
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

# 021 Gulp - watch

## Duration
10 minutes

## Brief
In this kata you will configure watch tasks.

### For more information 
BING/GOOGLE: “Gulp watch”

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
  - https://github.com/robertdunaway/katas-gulp/tree/master/021%20Gulp%20-%20watch/before
 - After
  - https://github.com/robertdunaway/katas-gulp/tree/master/021%20Gulp%20-%20watch/after


# Kata
Executing the default task, for every change, would consume more CPU and time than is required during development where files are changed one at a time.  For dealing with individual files as they change, we can use the Watch plugin.
<br>
Configure watch tasks to do this following:
<br>
 - Copy any file changes under the `src` folder to `wwwroot`.
 - Transpile and reload any `*.ts` files that change under `wwwroot`.
 - Lint any `*.ts` file that change under `wwwroot`.
 - Optimize any `*.html` files that change under `wwwroot`.
 - After a file under `wwwroot` is processed reload the browser.
<br>

> NOTE: Livereload only works with Chrome.exe via the LiveReload plugin.

https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en

# Review
From the command-line install
<br>
```

npm install gulp-watch --save-dev


```
<br>
Add the module to the Gulp file
<br>
```javascript

, watch = require('gulp-watch')


```
<br>
Create the watch tasks
<br>
```javascript

gulp.task('watch', function () {

    livereload.listen();

    // ---------------------------------------------------------------
    // Watching JS files
    // ---------------------------------------------------------------
    // Copy all files except *.js files.
    gulp.watch(['src/**/*'], function () { runSequence('copy-to-wwwroot'); });

    // ---------------------------------------------------------------
    // Watching TypeScript files
    // ---------------------------------------------------------------
    gulp.watch(['wwwroot/**/*.ts', '!wwwroot/lib/**/*.*', '!wwwroot/css/**/*.*'], function () { runSequence('tscompile', 'reload'); });

    // ---------------------------------------------------------------
    // Watch - Execute linters
    // ---------------------------------------------------------------
    gulp.watch(['wwwroot/**/*.ts', '!wwwroot/lib/**/*.*', '!wwwroot/css/**/*.*'], function () { runSequence('tslint'); });

    // ---------------------------------------------------------------
    // Watching HTML files
    // ---------------------------------------------------------------
    gulp.watch(['wwwroot/**/*.html', '!wwwroot/**/*.min.html', '!wwwroot/lib/**/*'], function () { runSequence('minifyhtml', 'reload'); });


});


```


##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 