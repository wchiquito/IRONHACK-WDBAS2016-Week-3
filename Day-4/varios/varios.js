var WHEELS = 4;

function Car(model, noise) {
    this.model = model,
    this.noise = noise
}

Car.prototype.wheels = WHEELS;
Car.prototype.printNoise = function() { console.log(this.noise); };

var car0 = new Car('model0', 'noise0');
console.log(car0.wheels);
car0.printNoise();
console.log(car0);

var car1 = new Car('model1', 'noise1');
console.log(car1.wheels);
car1.printNoise();
console.log(car1);

function sleep(timeInSeconds, callback) {
    setTimeout(callback, timeInSeconds * 1000);
}
sleep(5, function() { console.log('It\'s been 5 seconds'); });

function checkInPassenger(name, customersArray) {
    var passengerChecked;
    for (var i = 0; i < customersArray.length; i++) {
        if (customersArray[i] === name) {
            passengerChecked = (function(i) {
                return function() {
                    console.log ("Hi, " + name + " You’re passenger #" + (i + 1));
                }
            })(i);
        }
    }
    return passengerChecked;
}

var flightToBali = ["Wayan", "Putu", "Gede", "Ni Luh", "Nyoman"];
var counterCheckIn = checkInPassenger("Gede", flightToBali);
counterCheckIn();