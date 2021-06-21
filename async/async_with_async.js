"use strict";

const async = require('async');

console.log('Begin');

function writeAfter2secs(text, callback) {
  setTimeout(function() {
    console.log(text);
    callback();
  }, 2000);
}

//async loop in series

let list = [1,2,3,4,5];

async.eachSeries(list,writeAfter2secs,function(){
    console.log('In the end, It doesnt even matter...');
});