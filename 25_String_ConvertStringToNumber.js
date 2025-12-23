// String to Number conversion and String case operations

let startDate = '23';
let endDate = '27';

// Subtracting string values directly results in NaN
console.log("endDate-startDate: " + (endDate - startDate)); // NaN

// parseInt() converts string values to numbers
console.log("parseInt(startDate): " + parseInt(startDate));
console.log("parseInt(endDate): " + parseInt(endDate));

// Performing subtraction after conversion
let diffDate = parseInt(endDate) - parseInt(startDate);
console.log("parseInt(endDate) - parseInt(startDate): " + diffDate);

// --------------------------------------------------
// String case operations
// --------------------------------------------------

let role = "Test Automation Engineer";

// toUpperCase() converts the string to uppercase
console.log("role.toUpperCase(): " + role.toUpperCase()); // TEST AUTOMATION ENGINEER

// toLowerCase() converts the string to lowercase
console.log("role.toLowerCase(): " + role.toLowerCase()); // test automation engineer

console.log("Success");

/*
========================
Key Learning Points
========================
1. Strings cannot be used directly for arithmetic operations.
2. parseInt() converts numeric strings into numbers.
3. NaN means "Not a Number" and indicates an invalid calculation.
4. toUpperCase() converts all characters in a string to uppercase.
5. toLowerCase() converts all characters in a string to lowercase.
6. String case methods do not modify the original string.
7. These operations are commonly used in validation and data normalization.
*/
