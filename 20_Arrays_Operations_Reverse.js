// reverse() method on array
// This program demonstrates how reverse() works on an array

let numberArray = [11, 22, 33, 44, 55];

console.log("Before Reverse");
console.log("numberArray: " + numberArray); // 11,22,33,44,55

// reverse() reverses the order of elements in the array
// It modifies the original array
numberArray.reverse();

console.log("After Reverse");
console.log("numberArray: " + numberArray); // 55,44,33,22,11

console.log("Success");

/*
========================
Key Learning Points
========================
1. reverse() is used to reverse the order of elements in an array.
2. reverse() modifies the original array.
3. The first element becomes the last, and the last becomes the first.
4. reverse() does not sort the array; it only changes the order.
5. Often used after sorting to get descending order quickly.
*/
