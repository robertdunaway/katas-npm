---
title: 003 Gulp - multiple tasks & vs
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

# 003 Gulp - multiple tasks & vs

## Duration
 5 minutes

## Brief
Using the existing gulpfile.js add three new tasks.

### For more information 
BING/GOOGLE: “Gulp multiple tasks”

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
  - https://github.com/robertdunaway/katas-gulp/tree/master/003%20Gulp%20-%20multiple%20tasks%20%26%20vs/before
 - After
  - https://github.com/robertdunaway/katas-gulp/tree/master/003%20Gulp%20-%20multiple%20tasks%20%26%20vs/after


# Kata

Using the existing gulpfile.js create three new functions named “`task1`”, “`task2`” and “`task3`” and then execute them as part of the `default` task.

<br>
# Review
<br>
The task could look like the following.

<br>
```javascript

gulp.task('task1', function () {
    console.log('my first gulp task…');
});

gulp.task('task2', function () {
    console.log('my second gulp task…');
});

gulp.task('default', function () {
    console.log('my third gulp task…');
});


```

<br>

Adding these task to the default task.

<br>

```javascript

gulp.task('default', ['task1', 'task2', 'task3']);


```

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/003%20Gulp%20-%20multiple%20tasks%20%26%20vs/1.png">

<br>

Now execute the `default` task.

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/003%20Gulp%20-%20multiple%20tasks%20%26%20vs/2.png">


## Visual Studio Integration
Visual Studio Integration requires no work on our part.  Visual Studio recognizes the Node modules and gulpfile.js.  When your solution starts Visual Studio will retrieve any Node modules that are missing or require updating per configuration and Gulp will be added to the Task Runner Explorer.

<br>

Tasks can be bound to Visual Studio events by right clicking a task and selecting “`Bindings`” then choosing the desired event.

<br>

Bind a task to the “`Project Open`” event then shut down Visual Studio and reload it.  You notice the talk runs immediately without being prompted to run.


##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 