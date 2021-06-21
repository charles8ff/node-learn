"use strict";

console.log('Begin');

function writeAfter2secs(text, callback) {
  setTimeout(function() {
    console.log(text);
    callback();
  }, 2000);
}

writeAfter2secs('text1', function() {
  console.log('ends1');
  writeAfter2secs('text2', function() {
    console.log('ends2');
  });
});
