"use strict";

console.log('Begin');

function writeAfter2secs(text, callback) {
  setTimeout(function() {
    console.log(text);
    callback();
  }, 2000);
}

//async loop in series

//call a function N times in series, in the end calling the ending callback
function inSeries(n, func, endingCallback) {
    if (n<=0){
        endingCallback();
        return;
    }else n--;

    func(n, function(){
        inSeries(n, func, endingCallback);
    })
}

inSeries(5,writeAfter2secs,function(){
    console.log('In the end, It doesnt even matter...');
});
