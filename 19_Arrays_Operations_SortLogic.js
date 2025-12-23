// Numeric sorting using sort()
// This program demonstrates default sorting,
// descending sorting, and custom numeric sorting

let numberArray = [11, 44, 22, 55, 33];

console.log("Before Sorting");
console.log("numberArray: " + numberArray); // 11,44,22,55,33

// --------------------------------------------------
// Default sort (string-based sorting)
// --------------------------------------------------

// Numeric sorting here works because values are simple,
// but in real-world cases you’ll often need a compare function
// to avoid incorrect string-based sorting.

console.log("Default sort()");
console.log("numberArray: " + numberArray.sort()); // 11,22,33,44,55

console.log("-----------");

// --------------------------------------------------
// Custom numeric sorting (Ascending)
// --------------------------------------------------

// Using compare function to sort numbers correctly in ascending order
numberArray.sort((a, b) => a - b);

console.log("After Custom Numeric Sorting (Ascending)");
console.log("numberArray: " + numberArray); // 11,22,33,44,55

console.log("Success");

// --------------------------------------------------
// Descending numeric sorting
// --------------------------------------------------

// Using compare function to sort numbers in descending order
numberArray.sort((a, b) => b - a);

console.log("After Descending Sorting");
console.log("numberArray: " + numberArray); // 55,44,33,22,11

console.log("-----------");

/*
========================
Key Learning Points
========================
1. Default sort() converts elements to strings before sorting.
2. Default numeric sorting may work for simple values but is unreliable.
3. Compare functions ensure correct numeric sorting.
4. b - a sorts numbers in descending order.
5. a - b sorts numbers in ascending order.
*/
