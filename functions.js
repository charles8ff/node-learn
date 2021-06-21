//basic function
function basicOne(){
    console.log('Basic One was executed.')
}
basicOne();

//function as declaration
function add(a,b) {
    return a + b;
}

console.log(add(10,15));

//function as expression
let multiply = function(c,d) {
    return c * d;
}

console.log(multiply(10,15));

let lang = 'es';
function getContext() {
    console.log('In upper context: lang is',lang);
}
getContext();

//object method
let employee = {
    name: "Smith",
    age: 42,
    waves: function() {
        console.log("Hi! My name is "+ this.name)
    }
};
employee.waves();

//constructor
function Fruit(name){
    this.getName = function(){
        return name;
    }
    this.setName = function (value) {
        name = value
    }
}
let lemon = new Fruit ('Solid Lemonade')
console.log(lemon)
console.log(lemon.getName())
lemon.setName('Watered lemon gas')
console.log(lemon.getName())