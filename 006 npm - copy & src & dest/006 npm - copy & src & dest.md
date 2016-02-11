---
title: 006 Gulp - copy & src & dest
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

# 006 Gulp - copy & src & dest

## Duration
5 minutes

## Brief
In this kata we will copy our source files to a destination.

### For more information 
BING/GOOGLE: “Gulp src dest”

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
  - https://github.com/robertdunaway/katas-gulp/tree/master/006%20Gulp%20-%20copy%20%26%20src%20%26%20dest/before
 - After
  - https://github.com/robertdunaway/katas-gulp/tree/master/006%20Gulp%20-%20copy%20%26%20src%20%26%20dest/after


# Kata
Create a task to copy all files from the “`src`” folder to the destination folder, “`wwwroot`”.

<br>

We copy our files to `wwwroot` because this is the default folder used by Asp.Net.  Once the files are copied other tasks can operate against the files.

<br>

Keeping the source code and generated files apart make source control management cleaner and more obvious.  

<br>

All that is required to copy files is gulp.  No plugins need installed.

<br>

```typescript

var gulp = require('gulp');

gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});


```

<br>

The two commands, you’ll find in most files are:
<br>
```typescript

    gulp.src()

    gulp.dest()


```
<br>

The result of executing the copy-to-wwwroot task is

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/006%20Gulp%20-%20copy%20%26%20src%20%26%20dest/1.png">
 

##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 