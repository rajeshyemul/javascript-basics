// Method overriding example

class Vehicle {
    getType() {
        return "This is a vehicle";
    }
}

class Car extends Vehicle {

    // Overriding parent method
    getType() {
        return "This is a car";
    }
}

let vehicle = new Vehicle();
let car = new Car();

console.log(vehicle.getType());
console.log(car.getType());

/*
========================
Key Learning Points
========================
1. Method overriding replaces parent method behavior.
2. Child class method has the same name as parent method.
3. Child class implementation is used at runtime.
4. Helps customize inherited behavior.
*/
