'use strict';

function Person(name){
    this.name = name;
}

let man = new Person('Sparky');
console.log(man.name);

Person.prototype.wave = function() {
    console.log("Hi, my name is, my name is "+ this.name);
}

man.wave();