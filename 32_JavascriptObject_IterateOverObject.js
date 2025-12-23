// Looping through object properties using for...in
// This program demonstrates how to iterate over keys and values of an object

let person = {
    firstName: "Rajesh",
    lastName: "Yemul",
    country: "India",
    role: "Test Automation Engineer"
};

// Using for...in loop to iterate through object properties
for (let key in person) {

    // key -> property name
    // person[key] -> property value
    console.log(key + " : " + person[key]);
}

console.log("Success");

/*
========================
Key Learning Points
========================
1. for...in loop is used to iterate over object properties.
2. The loop returns property names (keys), not values directly.
3. Values are accessed using bracket notation inside the loop.
4. for...in is useful when property names are not known in advance.
5. Commonly used to process dynamic object data.
*/
