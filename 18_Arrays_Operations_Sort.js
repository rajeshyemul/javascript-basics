// Sorting arrays using sort()

// ----------------------
// Sorting numbers
// ----------------------

let numberArray = [11, 44, 22, 55, 33];

console.log("Before Sorting");
console.log("numberArray: " + numberArray); // 11,44,22,55,33

// sort() arranges elements in ascending order (as strings by default)
console.log("After Sorting");
console.log("numberArray: " + numberArray.sort()); // 11,22,33,44,55

console.log("-----------");

// ----------------------
// Sorting strings
// ----------------------

let stringArray = ["Banana", "Orange", "Papaya", "Apple"];

console.log("Before Sorting");
console.log("stringArray: " + stringArray); // Banana,Orange,Papaya,Apple

// sort() works naturally for strings in alphabetical order
console.log("After Sorting");
console.log("stringArray: " + stringArray.sort()); // Apple,Banana,Orange,Papaya

console.log("Success");

/*
========================
Key Learning Points
========================
1. sort() is used to arrange array elements in ascending order.
2. sort() modifies the original array.
3. By default, sort() converts elements to strings before comparing.
4. String sorting works alphabetically by default.
5. For numeric sorting in real applications, a compare function is usually required.
*/
