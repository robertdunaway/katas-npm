var date = require('date-and-time');

// Functions prints when script was fired
module.exports = function (name) {
    var time = function () {
        return date.format(new Date(), 'H:mm:ss');
    }
    console.log(name + ' Fired at ' + time());
};