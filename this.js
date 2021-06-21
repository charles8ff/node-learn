'use strict';

let house = {
    windows: 2,
    howManyWindows: function(){
        console.log('This house has '+ this.windows +' windows.');
    }
}

function Car(){
    this.tires=4;
    this.howManyTires = function(){
        console.log('This car has '+ this.tires +' tires.')
    }
}

house.howManyWindows();
setTimeout(house.howManyWindows, 2000);

let car =  new Car()

car.howManyTires();
setTimeout(car.howManyTires.bind(car), 2000); //bind keeps track of the this
