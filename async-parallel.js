"use strict";

console.log('Begin');

function writeAfter2secs(text, callback) {
  setTimeout(function() {
    console.log(text);
    callback();
  }, 2000);
}

//async loop in parallel
let finished = 0;

for(let i = 0; i<5; i++) {
    writeAfter2secs('texto '+ i,function() {
        finished++
        if (finished>=5){
            console.log('THE END')
        }
    });
}