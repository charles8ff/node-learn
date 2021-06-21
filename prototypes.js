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

function Spy(name){
    Person.call(this, name);
    //this calls the person's constructor with spy's this. So it gets the property and the parameter
}

Spy.prototype = new Person('i am a prototype');

let daSpy = new Spy('Wilson')
daSpy.wave();
console.log(Object.getPrototypeOf(daSpy))
console.log( daSpy instanceof Spy)
console.log( daSpy instanceof Person)
console.log( daSpy instanceof Object)