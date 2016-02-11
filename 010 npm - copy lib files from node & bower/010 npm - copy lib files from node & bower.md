---
title: 010 Gulp - copy lib files from node & bower
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

# 010 Gulp - copy lib files from node & bower

## Duration
10 minutes

## Brief
In this kata we will copy required libraries from Bower and Node to the destination folder, `wwwroot`.

### For more information 
BING/GOOGLE: “Gulp copy node_modules bower”

Book: 
[Gulp - Quick guide to getting up and running today](http://www.amazon.com/Gulp-Quick-guide-getting-running-ebook/dp/B010NXMFF6/)
<br>
<img src="https://raw.githubusercontent.com/robertdunaway/gulp-book/master/bookcoverimage.PNG" alt="Smiley face" height="150" width="150">



## Instructions
Get tutorial folder or the entire katas-Gulp repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this solution)
  - https...
 - After (completed solution)

# Kata
In this kata we will copy files our web site needs to a `lib` folder in `wwwroot`.
<br>
First let’s update our `package.json` file with the following new libraries.  Visual Studio will pull these npm modules down for us.
<br>
```typescript

    "angular2": "2.0.0-beta.0",
    "systemjs": "0.19.6",
    "es6-promise": "^3.0.2",
    "es6-shim": "^0.33.3",
    "reflect-metadata": "0.1.2",
    "rxjs": "5.0.0-beta.0",
    "zone.js": "0.5.10"


```
<br>
Here is the entire package.json when updated.
<br>

```typescript

{
  "version": "1.0.0",
  "name": "ASP.NET",
  "private": true,
  "devDependencies": {
    "gulp": "^3.9.0",
    "angular2": "2.0.0-beta.0",
    "systemjs": "0.19.6",
    "es6-promise": "^3.0.2",
    "es6-shim": "^0.33.3",
    "reflect-metadata": "0.1.2",
    "rxjs": "5.0.0-beta.0",
    "zone.js": "0.5.10"
  }
}


```
<br>
Visual Studio begins “Restoring…” packages the moment package.json is saved.
<br>

<img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/010%20Gulp%20-%20copy%20lib%20files%20from%20node%20%26%20bower/1.png"> 
<br>
We can also add Bower packages.  From the command line execute the following statements.
<br>
If you have not already installed bower run command `npm install bower -g`
<br>
Now you’re ready to use Bower.	
<br>
If you don’t already have a `bower.json` file then run command bower `init`.  You can answer the questions or just press enter through the prompts.
<br>
You’re new bower files looks something like this.
<br>

```javascript

{
  "name": "ASP.NET",
  "description": "",
  "main": "",
  "authors": [
    
  ],
  "license": "MIT",
  "moduleType": [],
  "homepage": "",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ]
}


```
<br>
Now you can add your bower packages.
<br>

```

bower install normalize-css --save 
bower install font-awesome --save
bower install jquery --save
bower install lodash --save


```
<br>

We need the following files moved to the wwwroot/libs folder.  We also want to keep their folder structure intact.
<br>
bower_components/normalize-css/normalize.css
bower_components/font-awesome/css/font-awesome.min.css
bower_components/font-awesome/fonts/  (all files)
bower_components/jquery/dist/jquery.min.js
bower_components/lodash/lodash.min.js

// for angular2
node_modules/es6-shim/es6-shim.min.js
node_modules/angular2/bundles/angular2-polyfills.min.js
node_modules/systemjs/dist/system.src.js
node_modules/rxjs/bundles/rx.min.js
node_modules/angular2/bundles/angular2.min.js
node_modules/angular2/bundles/angular2.dev.js

<br>

## Review
Here is how your solution might have turned out.
<br>

```javascript

gulp.task('libs', function () {
    return gulp.src(['bower_components/**//normalize-css/normalize.css'
                    , 'bower_components/**//font-awesome/css/font-awesome.min.css'
                    , 'bower_components/**/font-awesome/fonts/*.*'
                    , 'bower_components/**//jquery/dist/jquery.min.js'
                    , 'bower_components/**//lodash/lodash.min.js'

                    // for angular2
                    , 'node_modules/**//es6-shim/es6-shim.min.js'
                    , 'node_modules/**//angular2/bundles/angular2-polyfills.min.js'
                    , 'node_modules/**//systemjs/dist/system.src.js'
                    , 'node_modules/**//rxjs/bundles/rx.min.js'
                    , 'node_modules/**//angular2/bundles/angular2.min.js'
                    , 'node_modules/**//angular2/bundles/angular2.dev.js'

    ])
      .pipe(gulp.dest('wwwroot/lib/./'));
});


```
<br>
To maintain the folder structure of these libraries we used “`/**//`” at the base of where we wanted to start the folder structure copy.   If you look into the `wwwroot/lib` you’ll find the files you copies are in the correct folders.
<br>
#### Note
You may or may not have noticed but while Bower flared up as a major contributor to the package management story, many are moving away from it and relying on NPM for all their development plugins and web site libraries.  You may have noticed that all the modules for supporting Angular2 came strictly from NPM.  The Angular2 team is not using Bower.


##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 