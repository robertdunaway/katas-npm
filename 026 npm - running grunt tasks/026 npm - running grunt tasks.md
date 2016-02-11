---
title: 026 Gulp - running grunt tasks
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

# 026 Gulp - running grunt tasks

## Duration
10 minutes

## Brief
Execute a Grunt task with Gulp.

### For more information 
Execute a Grunt task with Gulp.

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
  - https://github.com/robertdunaway/katas-gulp/tree/master/026%20Gulp%20-%20running%20grunt%20tasks/before
 - After
  - https://github.com/robertdunaway/katas-gulp/tree/master/026%20Gulp%20-%20running%20grunt%20tasks/after


# Kata
On occasion you might need to combine JSON files.  
<br>
In this case we are combining multiple JSON files that represent menu items.  A suitable gulp plugin is not available but there is a Grunt task that does what we need.
<br>
In this task you will perform a JSON merge on all JSON files in the config folder with `grunt-merge-json`.
<br>
# Review
Installed the require NPM packages.
<br>
```

npm install grunt-merge-json --save-dev
npm install gulp-grunt --save-dev


```
<br>
Install the Grunt command line interface.
<br>
```

npm install -g grunt-cli


```
<br>
Create a gruntfile.js, in the root, to support the Grunt task.
<br>
```javascript

module.exports = function (grunt) {

    grunt.initConfig({
        distFolder: 'wwwroot/config',

        pkg: grunt.file.readJSON('package.json'),
        "merge-json": {

            menu: {
                src: ['src/config/*.json.txt'],
                dest: 'wwwroot/config/menu.json',
            },
        },
    });

    // Load modules, register tasks
    grunt.loadNpmTasks('grunt-merge-json');
};


```
<br>
To tie everything together add this task to the Gulp file.
<br>
```javascript

// -------------------------------------------------
// Grunt configuration
require('gulp-grunt')(gulp, {
    // These are the default options but included here for readability.
    base: null,
    prefix: 'grunt-',
    verbose: false
});
// -------------------------------------------------


```
<br>
Update the default task.
<br>
```javascript

gulp.task('default', function () {
    runSequence('copy-to-wwwroot', 'grunt-merge-json:menu');
});


```
<br>
After running the default task you should have a new JSON menu file that looks like this.
<br>
```javascript

{
	"0": {
		"name": "Applications",
		"id": "catApps",
		"isOpen": "true",
		"icon": " fa-power-off ",
		"session": "coreSession",
		"role": "MashupUser",
		"groups": [
			{
				"name": "app1",
				"id": "menuItemApp1",
				"desc": "Application 1, page 1.",
				"url": "/app1/page1",
				"icon": " fa-bar-chart ",
				"session": "coreSession",
				"role": "MashupUser"
			},
			{
				"name": "app2",
				"id": "menuItemApp2",
				"desc": "Application 2, page 3.",
				"url": "/app2/page3",
				"icon": " fa-laptop ",
				"session": "coreSession",
				"role": "MashupUser"
			}
		]
	},
	"1": {
		"name": "Utilities",
		"id": "catUtilities",
		"isOpen": "false",
		"icon": " fa-cogs ",
		"session": "coreSession",
		"role": "MashupUser",
		"groups": []
	},
	"2": {
		"name": "Administrative",
		"id": "catAdmin",
		"isOpen": "false",
		"icon": " fa-users",
		"session": "coreSession",
		"role": "MashupUser",
		"groups": []
	},
	"3": {
		"name": "Examples",
		"id": "catExamples",
		"isOpen": "false",
		"icon": " fa-file-code-o ",
		"session": "coreSession",
		"role": "MashupUser",
		"groups": []
	}
}


```


##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 