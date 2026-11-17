function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
  // Call parent constructor to set make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Test
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Ferrari Testarossa
console.log(car.getTopSpeed()); // 200
console.log(car.make); // Ferrari
console.log(car.model); // Testarossa
console.log(car.topSpeed); // 200
console.log(car instanceof Car); // true
console.log(car instanceof SportsCar); // true