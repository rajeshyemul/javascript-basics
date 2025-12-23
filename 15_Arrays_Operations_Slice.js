let scoresArray = [11, 22, 33, 44, 55, 66];

console.log("scoresArray: " + scoresArray); // 11,22,33,44,55,66

// slice() -> returns a portion of the array without changing the original array
// It slices the array starting from index 1 up to (but not including) index 4
console.log("scoresArray.slice(1,4): " + scoresArray.slice(1, 4)); // 22,33,44

// slice() with only start index slices till the end of the array
console.log("scoresArray.slice(1): " + scoresArray.slice(1)); // 22,33,44,55,66

// Original array remains unchanged
console.log("scoresArray: " + scoresArray); // 11,22,33,44,55,66

console.log("Success");

/*
========================
Key Learning Points
========================
1. slice() is used to extract a portion of an array.
2. The end index is not included in the result.
3. slice() does not modify the original array.
4. Providing only the start index slices till the end.
5. slice() is commonly used for non-destructive array operations.
*/
