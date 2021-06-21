'use strict';

function createAdder(value){
    return function(value2){
        return value + value2;
    }
}

let add5 = createAdder(5);

console.log(add5(10));
console.log(add5(50));
