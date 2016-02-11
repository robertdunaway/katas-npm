---
title: 008 Gulp - glob pattern matching
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

# 008 Gulp - glob pattern matching

## Duration
10 minutes

## Brief
Using Glob Patterns

### For more information 
BING/GOOGLE: “Gulp glob patterns”

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
  - https://github.com/robertdunaway/katas-gulp/tree/master/008%20Gulp%20-%20glob%20pattern%20matching/before
 - After
  - https://github.com/robertdunaway/katas-gulp/tree/master/008%20Gulp%20-%20glob%20pattern%20matching/after


# Kata

Glob patterns are patterns used for pattern matching.  Gulp uses globs for defining lists of files to stream into the Gulp pipeline.
<br>
Here is an excellent resource for globs
https://en.wikipedia.org/wiki/Glob_%28programming%29
<br>
Here is a more in-depth resource on glob patterns.
https://github.com/isaacs/node-glob
<br>
The easiest way to demonstrate glob patterns is copying files to a folder.  This requires no plugins and has the benefit of easily identifying what files were captured in the glob pattern.
<br>
1 Create a task, named `copy-to-wwwroot`, to copy all files and folders of the `src` folder to `wwwroot`.  This is a common practice with Visual Studio as `wwwroot` is the default web site directory.
<br>
2 Create a task, named `task2`, to copy a single file “`humans.txt`” to folder named `task2`.  If the folder doesn’t already exist it will be created.
<br>
3 Create a task, named `task3`, to copy an array of files `humans.txt, robots.txt, favicon.ico, tile.png` to folder named `task3`.  
<br>
4 Create a task, named task4, to copy all JavaScript files to a folder named task4.
<br>
5 Create a task, named `task5`, to copy all JavaScript files to a folder named `task5` excluding any minified files.  In task 4 you will notice one minified file was copies.
<br>
Files copied in task 4
<br>
 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/008%20Gulp%20-%20glob%20pattern%20matching/1.png">
<br>
6 Create a task, named task6, to copy all JavaScript files to a folder named task6 excluding any minified files.  See if you can achieve this task with a single glob statement.
<br>
7 Identify what the remaining glob patterns do.
<br>
``` javascript

src
src/
src/*
src/*.*
src/**
src/**/
src/**/*
src/**/*.*


```

## Review
1 Create a task, named `copy-to-wwwroot`, to copy all files and folders of the `src` folder to `wwwroot`.  
<br>

```javascript

gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});


```

<br>
2 Create a task, named `task2`, to copy a single file `humans.txt` to folder named `task2`.  If the folder doesn’t already exist it will be created.
<br>
```javascript

gulp.task('task2', function () {
    return gulp.src(['src/humans.txt'])
    .pipe(gulp.dest('task2'));
});


```
<br>
3 Create a task, named `task3`, to copy an array of files `humans.txt, robots.txt, favicon.ico, tile.png` to folder named `task3`.  
<br>
```javascript

gulp.task('task3', function () {
    return gulp.src(['src/humans.txt', 'src/robots.txt',
                     'src/favicon.ico', 'src/tile.png'])
    .pipe(gulp.dest('task3'));
});


```
<br>
4 Create a task, named `task4`, to copy all JavaScript files to a folder named `task4`.
<br>
```javascript

gulp.task('task4', function () {
    return gulp.src(['src/**/*.js'])
    .pipe(gulp.dest('task4'));
});


```
<br>
5 Create a task, named `task5`, to copy all JavaScript files to a folder named `task5` excluding any minified files.  In task 4 you will notice one minified file was copies.
<br>
```javascript

gulp.task('task5', function () {
    return gulp.src(['src/**/*.js', '!src/**/*.min.js'])
    .pipe(gulp.dest('task5'));
});


```
<br>
6 Create a task, named `task6`, to copy all JavaScript files to a folder named `task6` excluding any minified files.  See if you can achieve this task with a single glob statement.
<br>
```javascript

gulp.task('task6', function () {
    return gulp.src(['src/**/!(*.min).js'])
    .pipe(gulp.dest('task6'));
});  


```
<br>
7 Identify what the remaining glob patterns do.
<br>
```javascript

src
src/
src/*
src/*.*
src/**
src/**/
src/**/*
src/**/*.*


```
<br>
```javascript

gulp.task('task7', function () {
    return gulp.src(['src'])
    .pipe(gulp.dest('task7'));
});


```
<br>
```javascript

gulp.task('task8', function () {
    return gulp.src(['src/'])
    .pipe(gulp.dest('task8'));
});


```
<br>
```javascript

gulp.task('task9', function () {
    return gulp.src(['src/*'])
    .pipe(gulp.dest('task9'));
});


```
<br>
```javascript

gulp.task('task10', function () {
    return gulp.src(['src/*.*'])
    .pipe(gulp.dest('task10'));
});


```
<br>
```javascript

gulp.task('task11', function () {
    return gulp.src(['src/**'])
    .pipe(gulp.dest('task11'));
});


```
<br>
```javascript

gulp.task('task12', function () {
    return gulp.src(['src/**/'])
    .pipe(gulp.dest('task12'));
});


```
<br>
```javascript

gulp.task('task13', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('task13'));
});


```
<br>
```javascript

gulp.task('task14', function () {
    return gulp.src(['src/**/*.*'])
    .pipe(gulp.dest('task14'));
});


```

##Next
As our katas become more complex you will see more examples of glob patterns.

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 