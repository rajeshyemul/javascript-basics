// PersonTest.js
// Importing the Person class using require()

const Person = require("./37_ClassPerson");

// Creating objects from the imported class
let person1 = new Person("Rajesh", "Yemul", "India", 27);
let person2 = new Person("Shreyansh", "Sharma", "India", 25);

// Accessing properties
console.log("person1.firstName: " + person1.firstName);
console.log("person2.firstName: " + person2.firstName);

// Calling methods
console.log("person1.getAllDetails(): " + person1.getAllDetails());
console.log("person2.getAllDetails(): " + person2.getAllDetails());

console.log("Success");

/*
========================
Key Learning Points
========================
1. require() is used to import modules in Node.js.
2. module.exports exposes a class or object from a file.
3. Imported classes can be used like local classes.
4. Multiple objects can be created from the same imported class.
5. This pattern is widely used in frameworks and real projects.
*/
