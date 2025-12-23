// Combining sort() and reverse()
// This program demonstrates how to sort an array
// and then reverse it to get descending order

let numberArray = [11, 44, 22, 55, 33];

console.log("Before Sorting");
console.log("numberArray: " + numberArray); // 11,44,22,55,33

// Step 1: sort() -> sorts the array in ascending order
numberArray.sort((a, b) => a - b);

console.log("After Sorting (Ascending)");
console.log("numberArray: " + numberArray); // 11,22,33,44,55

// Step 2: reverse() -> reverses the sorted array
// This gives descending order
numberArray.reverse();

console.log("After sort() + reverse()");
console.log("numberArray: " + numberArray); // 55,44,33,22,11

console.log("Success");

/*
========================
Key Learning Points
========================
1. sort() arranges elements in ascending order.
2. reverse() reverses the order of elements.
3. Both methods modify the original array.
4. sort() + reverse() is a common way to get descending order.
5. For better control, a compare function can be used directly in sort().
*/
