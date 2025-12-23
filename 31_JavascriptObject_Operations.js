// Object.keys(), Object.values(), Object.entries()
// This program demonstrates how to extract keys, values,
// and key-value pairs from an object

let person = {
    firstName: "Rajesh",
    lastName: "Yemul",
    country: "India",
    role: "Test Automation Engineer"
};

// Object.keys() -> returns an array of property names
let keysArray = Object.keys(person);
console.log("Object.keys(person): " + keysArray);

// Object.values() -> returns an array of property values
let valuesArray = Object.values(person);
console.log("Object.values(person): " + valuesArray);

// Object.entries() -> returns an array of key-value pairs
let entriesArray = Object.entries(person);
console.log("Object.entries(person): ", entriesArray);

// Looping through entries
for (let [key, value] of entriesArray) {
    console.log(key + " : " + value);
}

console.log("Success");

/*
========================
Key Learning Points
========================
1. Object.keys() returns an array of all property names.
2. Object.values() returns an array of all property values.
3. Object.entries() returns an array of key-value pairs.
4. These methods make objects compatible with array operations.
5. Object.entries() works perfectly with destructuring.
6. Very commonly used when processing API responses.
*/
