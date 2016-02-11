---
title: 024 Gulp - replace & passing params
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

# 024 Gulp - replace & passing params

## Duration
15 minutes

## Brief
In this kata we will rename constant values based on configuration files and parameters passed in.

### For more information 
BING/GOOGLE: “Gulp ”

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
  - https://github.com/robertdunaway/katas-gulp/tree/master/024%20Gulp%20-%20replace%20%26%20passing%20params/before
 - After
  - https://github.com/robertdunaway/katas-gulp/tree/master/024%20Gulp%20-%20replace%20%26%20passing%20params/after


# Kata
Most applications are expected to function in multiple environments.  When coding you expect the application to function in the local environment.  When you deploy to the test environment you expect it to function there and the same for production.
<br>
In this kata we will rename constant values based on configuration files and parameters passed in.
<br>
You have constant values in `src/js/comstants.js`.  Change the values for `@@myFirstApi` and `@@mySecondApi`.  Create three sets of config files.  One for `dev`, `stage` and `prod`.  You’re going to use the parameter `--env` and follow that with the environment you intend your build to be fore.
<br>
Example you will be able to use these gulp commands.
<br>
```

gulp --env-dev


```
<br>
or
<br>
```

gulp --env-prod


```
<br>
# Review
Install the needed NPM packages.
<br>
```

npm install gulp-replace-task --save-dev
npm install yargs --save-dev


```
<br>

**gulp-replace-task:** Enables us to find and replace variables identified with “@@”.

**yargs:** Enables the use of command line parameters.

**fs:** Enables the ability to load local files.

<br>
Add references to the new modules to the gulpfile.
<br>
```javascript

, replace               = require('gulp-replace-task')
, args                  = require('yargs').argv
, fs                    = require('fs')


```
<br>
Create three config files in the `src/config` folder, for each environment.
<br>

    env.config.dev.json

Create this file with the following content.
<br>
```

{ 
    "myFirstApi":  "http://devFirstApi",
    "mySecondApi":  "http://devSecondApi"
}


```
<br>

    env.config.stage.json

Create this file with the following content.
<br>
```

{ 
    "myFirstApi":  "http://stageFirstApi",
    "mySecondApi":  "http://stageSecondApi"
}


```
<br>

    env.config.prod.json

Create this file with the following content.
<br>
```

{ 
    "myFirstApi":  "http://prodFirstApi",
    "mySecondApi":  "http://prodSecondApi"
}


```
<br>
Create the `setEnv` task and update the default task to run it after `src` is copied.
<br>
```

gulp.task('setEnv', function () {
    // Get the environment from the command line
    var env = args.env || 'dev';

    // Read the settings from the right file
    var filename = 'env.config.' + env + '.json';
    var settings = JSON.parse(fs.readFileSync('src/config/' + filename, 'utf8'));

    // Replace each placeholder with the correct value for the variable.  
    gulp.src('src/js/constants.js')
      .pipe(replace({
          patterns: [
            {
                match: 'myFirstApi',
                replacement: settings.myFirstApi
            },
            {
                match: 'mySecondApi',
                replacement: settings.mySecondApi
            },
          ]
      }))
      .pipe(gulp.dest('wwwroot/js/'));
});

gulp.task('default', function () {
    runSequence('copy-to-wwwroot', 'setEnv');
});


```
<br>
Executing the new task
<br>
The default parameter is `dev` so if you pass no parameters then the `env.config.dev.json` file is used.
<br>
Here is the command-line syntax for updating the files with production values.
<br>
```

gulp --env prod


```
<br>
I’m not sure how to execute this in Visual Studio so for now you need to do this from the command line in the root folder of the solution.  Visual Studio will likely develop the ability to pass parameters.
<br>
<img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/024%20Gulp%20-%20replace%20%26%20passing%20params/1.png"> 
<br>
Before
<br>
<img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/024%20Gulp%20-%20replace%20%26%20passing%20params/2.png"> 
<br>
After
<br>
<img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/024%20Gulp%20-%20replace%20%26%20passing%20params/3.png"> 



##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 