var date = require('date-and-time');

// function displays "start" with time, and 3 "steps" one by one in half of second than "stop"
module.exports = function (name) {
    var time = function () {
        return date.format(new Date(), 'H:mm:ss');
    }
    console.log(name + ' started at ' + time());
    var counter = 0;
    var steps = 3;
    var handle = setInterval(function () {
        counter++;
        console.log(name + " step #" + counter + " out of " + steps + " at " + time());
        if (steps === counter) {
            console.log(name + ' stopped at ' + time());
            clearInterval(handle);
        }
    }, 500);
};