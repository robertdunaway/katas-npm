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