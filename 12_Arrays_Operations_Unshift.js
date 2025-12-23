// Array operations: unshift() and shift()
// This program demonstrates how to add and remove elements
// from the beginning of an array

// Create an array with initial values
let scoresArray = [11, 22, 33, 44, 55, 66];

// Print the original array
console.log("scoresArray: " + scoresArray); // 11,22,33,44,55,66

// ----------------------
// unshift() operation
// ----------------------

// unshift() adds a new element at the first index of the array
console.log("unshift() will add the element at first index in the Array");

// Add 77 to the beginning of the array
scoresArray.unshift(77);

// Print the updated array
console.log("scoresArray: " + scoresArray); // 77,11,22,33,44,55,66

// ----------------------
// shift() operation
// ----------------------

// shift() removes the first element from the array
console.log("shift() will remove the first element from the Array");

// Remove the first element (77) from the array
scoresArray.shift();

// Print the updated array
console.log("scoresArray: " + scoresArray); // 11,22,33,44,55,66

console.log("Success");

/*
========================
Key Learning Points
========================
1. unshift() adds one or more elements to the beginning of an array.
2. shift() removes the first element from an array.
3. Both methods modify the original array.
4. Array indexes are automatically adjusted after these operations.
5. Arrays in JavaScript are mutable and dynamic in nature.
*/
