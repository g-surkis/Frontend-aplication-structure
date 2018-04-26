var str = require('./constants.js');

var $ = require('jquery');
require('./less');

var App = function() {
    console.log(str);
    var a = document.createElement('div');
    $('body').append('a').html(str);
}

var app = new App();