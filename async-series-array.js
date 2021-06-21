"use strict";

console.log('Begin');

function writeAfter2secs(text, callback) {
  setTimeout(function() {
    console.log(text);
    callback();
  }, 2000);
}

//async loop in series

//call a function using an array in series, in the end calling the ending callback
function inSeries(list, func, endingCallback) {
  
    if (list.length == 0) { 
      endingCallback();
      return;
    }

    func(list.shift(), function(){
        inSeries(list, func, endingCallback);
    })
}
let list = [1,2,3,4,5];

inSeries(list,writeAfter2secs,function(){
    console.log('In the end, It doesnt even matter...');
});
