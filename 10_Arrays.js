// Arrays in JavaScript
// This program demonstrates different ways to create arrays
// and how to access array elements using a for loop

// ----------------------
// 1st way: Using Array constructor with size
// ----------------------

// Creates an array with length 6
// The elements are empty (undefined)
let scoresArray1 = Array(6);

// Printing the array
console.log("scoresArray1: " + scoresArray1);

// ----------------------
// 2nd way: Using Array constructor with values
// ----------------------

// Creates an array and initializes it with given values
let scoresArray2 = new Array(10, 20, 30, 40, 50, 60);

// Printing the array
console.log("scoresArray2: " + scoresArray2);

// ----------------------
// 3rd way: Using array literal (most commonly used)
// ----------------------

// Creates an array using square brackets
let scoresArray3 = [11, 22, 33, 44, 55, 66];

// Printing the array
console.log("scoresArray3: " + scoresArray3);

// ----------------------
// Accessing array elements using a for loop
// ----------------------

// `scoresArray3.length` gives the total number of elements in the array
for (let index = 0; index < scoresArray3.length; index++) {

    // Print each element using its index
    console.log(scoresArray3[index]);
}

// This line executes after the loop finishes
console.log("Success");

/*
========================
Key Learning Points
========================
1. Arrays can be created in multiple ways
2. Array(6) creates an empty array with a fixed length
3. Array literal [] is the most readable and preferred approach
4. Array indexing starts from 0
5. Length property helps control loops safely
6. For loop is commonly used to iterate through arrays.
*/
