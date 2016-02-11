---
title: 004 Gulp - series & parallel
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

# 004 Gulp - series & parallel

## Duration
 5 minutes

## Brief
Using the existing gulpfile.js manage the sequence tasks are executed.  Execute the first two in parallel and the last after the first two complete.

### For more information 
BING/GOOGLE: “Gulp sequence”

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
  - https://github.com/robertdunaway/katas-gulp/tree/master/004%20Gulp%20-%20series%20%26%20parallel/before
 - After
  - https://github.com/robertdunaway/katas-gulp/tree/master/004%20Gulp%20-%20series%20%26%20parallel/after



# Kata

Using the existing gulpfile.js configure the three functions to run in a defined sequence.  Execute “`task1`”, “`task2`” and when these finish execute “`task3`”.

<br>

Controlling sequence is important to the build process.  If your build process involves copying source code to a `dist` folder and then processing the files, then the file copy must complete before the additional processing begins.

<br>

# Review
The first thing we need to do is find a module for executing tasks in series and/or parallel.

<br>

Go to: https://www.npmjs.com/
Search for “task sequence”.

<br>

run-sequence is a popular module with about 20,000 downloads each day.  This looks like a well-supported plug-in.  Gulp 4, in beta, offers native support for sequencing tasks with dependencies.

<br>

Run the following at the command line and in the root of your project.

<br>

```

npm install --save-dev run-sequence


```

<br>

Update the `default` task to use the `runSequence` module to run all three tasks in parallel.

<br>

```javascript

gulp.task('default', function () {
    runSequence(['task1', 'task2', 'task3'])
});


```

<br>

Now alter the sequencing such that “`task1`” and “`task2`” run in parallel and “`task3`” runs after “`task1`” and “`task2`” complete. 

<br>

```javascript

gulp.task('default', function () {
    runSequence(['task1', 'task2'], 'task3');
});


```

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/004%20Gulp%20-%20series%20%26%20parallel/1.png">

<br>

Right click the `default` task and run it.

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/004%20Gulp%20-%20series%20%26%20parallel/2.png">





##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 