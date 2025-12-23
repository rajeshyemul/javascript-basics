// Array operations: push() and pop()
// This program demonstrates how to add and remove elements from an array

// ----------------------
// 1st way: Create an array with a fixed size
// ----------------------

// Creates an array with length 6 (empty slots)
let scoresArray1 = Array(6);

// Printing the array
console.log("scoresArray1: " + scoresArray1);

// ----------------------
// 2nd way: Array constructor with values (commented out)
// ----------------------
// This is another valid way to create an array with initial values
// let scoresArray2 = new Array(10, 20, 30, 40, 50, 60);

// ----------------------
// 3rd way: Array literal
// ----------------------

// Create an array with initial values
let scoresArray3 = [11, 22, 33, 44, 55, 66];

// Print the original array
console.log("scoresArray3: " + scoresArray3); // 11,22,33,44,55,66

// ----------------------
// push() operation
// ----------------------

// push() adds a new element at the end of the array
console.log("push() will add the element at last index in the Array");

// Add 77 to the end of scoresArray3
scoresArray3.push(77);

// Print the updated array
console.log("scoresArray3: " + scoresArray3); // 11,22,33,44,55,66,77

// ----------------------
// pop() operation
// ----------------------

// pop() removes the last element from the array
console.log("pop() will delete the last added element in the Array");

// Remove the last element (77) from scoresArray3
scoresArray3.pop();

// Print the updated array
console.log("scoresArray3: " + scoresArray3); // 11,22,33,44,55,66

// This line executes after all array operations are completed
console.log("Success");

/*
========================
Key Learning Points
========================
1. push() adds an element to the end of an array.
2. pop() removes the last element from an array.
3. These methods modify the original array.
4. JavaScript arrays are dynamic and can grow or shrink.
5. Array literal [] is the most commonly used approach.
*/

