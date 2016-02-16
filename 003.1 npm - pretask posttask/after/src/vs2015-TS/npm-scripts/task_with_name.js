var timer = require('./timer.js');

// Use Minimist to get name from a console args
var argv = require('minimist')(process.argv.slice(2));
var name = "Noname";

if ('n' in argv) {
    name = argv['n'];
}
timer(name);