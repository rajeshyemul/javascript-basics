let scoresArray = [11, 22, 33, 44, 55, 66];

console.log("scoresArray: " + scoresArray); // 11,22,33,44,55,66

// includes() -> returns a boolean value
// It checks whether the given element is present in the array or not
console.log("scoresArray.includes(33): " + scoresArray.includes(33)); // true
console.log("scoresArray.includes(77): " + scoresArray.includes(77)); // false

console.log("Success");

/*
========================
Key Learning Points
========================
1. includes() is used to check whether an element exists in an array.
2. It returns a boolean value: true or false.
3. includes() does not return the index of the element.
4. It is commonly used for validation or conditional checks.
5. includes() improves code readability compared to manual checks.
*/
