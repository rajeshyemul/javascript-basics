// Array operation: splice()
// This program demonstrates how splice() can add or remove elements
// and how it modifies the original array

let scoresArray = [11, 22, 33, 44, 55, 66];

// Print the original array
console.log("scoresArray: " + scoresArray); // 11,22,33,44,55,66

// splice(startIndex, deleteCount)
// Remove 2 elements starting from index 2
console.log("scoresArray.splice(2,2): " + scoresArray.splice(2, 2)); // 33,44

// Print the array after splice operation
console.log("scoresArray: " + scoresArray); // 11,22,55,66

// Add elements using splice()
// Starting at index 2, remove 0 elements and add new values
scoresArray.splice(2, 0, 99, 88);

// Print the updated array
console.log("scoresArray: " + scoresArray); // 11,22,99,88,55,66

console.log("Success");

/*
========================
Key Learning Points
========================
1. splice() is used to add or remove elements from an array.
2. It modifies the original array.
3. First parameter is the start index.
4. Second parameter defines how many elements to remove.
5. Additional parameters are elements to be added.
*/
