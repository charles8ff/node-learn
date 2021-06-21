'use strict';

function createSpy(name){
    let age = 0;
    return {
        setName: function(newName) {
            name = newName;
        },
        readName: function(){
            return name;
        },
        setAge: function(newAge){
            age = newAge;
        },
        readAge: function(){
            return age;
        },
        write: function(){
            console.log('I am '+ name + ' and I am '+ age +' years old')
        }
    }
}

let smith = createSpy('Smith');
smith.setAge(33);

let blacksmith = createSpy('Ornn');
blacksmith.setAge(6000);

console.log(smith.readName())
console.log(smith.readAge())
console.log(blacksmith.readName())
console.log(blacksmith.readAge())

setTimeout(smith.write, 2000)