var $ = require('jquery');

var str1 = require('./constants');

var App = function() {
    $('body').html(str1);
    // console.log(str1);
};

var app = new App();
app.get = function() {};
