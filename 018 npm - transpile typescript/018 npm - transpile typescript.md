---
title: 018 Gulp - transpile typescript
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

# 018 Gulp - transpile typescript

## Duration
5 minutes

## Brief
Transpile typescript to JavaScript and optimize and map the files.

### For more information 
BING/GOOGLE: “Gulp typescript”

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
  - https://github.com/robertdunaway/katas-gulp/tree/master/018%20Gulp%20-%20transpile%20typescript/before
 - After
  - https://github.com/robertdunaway/katas-gulp/tree/master/018%20Gulp%20-%20transpile%20typescript/after


# Kata
We’ve added a new folder named “`ts`” with TypeScript files.  Transpile these `*.ts` files to JavaScript, optimize them, and map them.

# Review
Install the required plugins.
<br>
```

npm install gulp-typescript --save-dev
npm install gulp-uglify --save-dev


```
<br>
Update references
<br>
```javascript

    , ts = require('gulp-typescript')
    , uglify = require('gulp-uglify');


```
<br>
Add the new task named `tscompile`
<br>
```javascript

gulp.task('tscompile', function () {
    return gulp.src(['./wwwroot/**/*.ts', '!wwwroot/lib/**/*.*'])
    .pipe(sourcemaps.init())
    .pipe(ts({
        target: 'ES5',
        declarationFiles: false,
        noExternalResolve: true
    }))
    .pipe(rename({ extname: '.js' }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('wwwroot/./'));
});


```
<br>
Wire the new `tscompile` task into the `default` task.
<br>
```javascript

gulp.task('default', function () {
    runSequence('clean-wwwroot', 'copy-to-wwwroot', 'tscompile');
});


```
<br>
Run the default task
<br>
 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/018%20Gulp%20-%20transpile%20typescript/1.png"> 
<br>
 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/018%20Gulp%20-%20transpile%20typescript/2.png"> 

##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 