// Array operation: concat()
// This program demonstrates how to merge arrays using concat()

let firstScoresArray = [10, 20, 30];
let secondScoresArray = [40, 50, 60];

// Print both arrays
console.log("firstScoresArray: " + firstScoresArray);   // 10,20,30
console.log("secondScoresArray: " + secondScoresArray); // 40,50,60

// concat() merges two arrays and returns a new array
let mergedScoresArray = firstScoresArray.concat(secondScoresArray);

// Print the merged array
console.log("mergedScoresArray: " + mergedScoresArray); // 10,20,30,40,50,60

// Original arrays remain unchanged
console.log("firstScoresArray: " + firstScoresArray);   // 10,20,30
console.log("secondScoresArray: " + secondScoresArray); // 40,50,60

console.log("Success");

/*
========================
Key Learning Points
========================
1. concat() is used to merge two or more arrays.
2. It returns a new array.
3. Original arrays are not modified.
4. concat() can be chained to merge multiple arrays.
5. Useful for creating combined data sets safely.
*/
