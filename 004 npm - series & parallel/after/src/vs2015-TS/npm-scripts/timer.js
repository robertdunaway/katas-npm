var date = require('date-and-time');

// function works for 2 seconds at the start and at the end it shows times when it stops

module.exports = function (name) {
    var time = function () {
        return date.format(new Date(), 'H:mm:ss');
    }
    console.log(name + ' started at ' + time());
};