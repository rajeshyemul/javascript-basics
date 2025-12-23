// Object -> It is a collection of properties
// Each property is a key-value pair

let person = {
    firstName: 'Rajesh',
    lastName: 'Yemul',
    country: 'India'
};

// Accessing object properties using dot notation
console.log("person.firstName: " + person.firstName);
console.log("person.lastName: " + person.lastName);
console.log("person.country: " + person.country);

// Updating object properties
// Objects in JavaScript are mutable, so values can be changed
person.firstName = 'Ganesh';
person.lastName = 'Shinde';
person.country = 'India';

// Accessing updated property values
console.log("person.firstName: " + person.firstName);
console.log("person.lastName: " + person.lastName);
console.log("person.country: " + person.country);
console.log("Success");

/*
========================
Key Learning Points
========================
1. Objects store related data as key-value pairs.
2. Properties can be accessed using dot notation.
3. Object properties can be updated after creation.
4. JavaScript objects are mutable by default.
5. Objects are commonly used to represent real-world entities.
*/
