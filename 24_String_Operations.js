// String operations in JavaScript
// Both single quotes and double quotes can be used for strings

let stringValue = 'Test Automation Engineer';

// length -> returns total number of characters in the string
console.log("stringValue.length: " + stringValue.length); // 24

// charAt() -> returns the character at the given index
console.log("stringValue.charAt(0): " + stringValue.charAt(0)); // T
console.log("stringValue.charAt(2): " + stringValue.charAt(2)); // s

// slice(start, end) -> extracts part of the string
// end index is not included
console.log("stringValue.slice(0,4): " + stringValue.slice(0, 4)); // Test

console.log("indexOf() - START");

// indexOf() -> returns the index of the first occurrence
console.log("stringValue.indexOf('A'): " + stringValue.indexOf('A')); // 5
console.log("stringValue.indexOf('e'): " + stringValue.indexOf('e')); // 1

// 'e' is present multiple times in the string
// Start searching from index 4
console.log("stringValue.indexOf('e',4): " + stringValue.indexOf('e', 4)); // 21

// If the character is not found, indexOf() returns -1
console.log("stringValue.indexOf('z'): " + stringValue.indexOf('z')); // -1

console.log("indexOf() - END");

// Accessing character using array-style notation
console.log("stringValue[2]: " + stringValue[2]); // s

// split() -> splits the string based on the given separator
console.log("stringValue.split(\" \"): " + stringValue.split(" ")); // Test,Automation,Engineer

console.log("trim() - START");

// trim() -> removes leading and trailing spaces
let stringValueWithSpace = ' Hi Bye ';

console.log("stringValueWithSpace.length: " + stringValueWithSpace.length); // 8
console.log(
    "stringValueWithSpace.trim().length: " +
    stringValueWithSpace.trim().length
); // 6

console.log("trim() - END");

console.log("Success");

/*
========================
Key Learning Points
========================
1. Strings can be created using single or double quotes.
2. length property returns the total number of characters.
3. charAt() and index-based access return characters at specific positions.
4. slice() extracts part of a string without modifying the original.
5. indexOf() returns the index of a character or -1 if not found.
6. split() converts a string into an array based on a separator.
7. trim() removes extra spaces from the beginning and end of a string.
*/
