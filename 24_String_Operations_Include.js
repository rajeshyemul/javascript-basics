// String methods: replace(), replaceAll(), and includes()
// This program demonstrates how to search and modify strings

let message = "JavaScript is easy. JavaScript is powerful.";

console.log("Original message:");
console.log(message);

// --------------------------------------------------
// includes()
// --------------------------------------------------

// includes() checks whether a substring exists in the string
console.log("message.includes('JavaScript'): " + message.includes("JavaScript")); // true
console.log("message.includes('Python'): " + message.includes("Python")); // false

console.log("-----------");

// --------------------------------------------------
// replace()
// --------------------------------------------------

// replace() replaces only the first occurrence
let replaceOnce = message.replace("JavaScript", "JS");

console.log("After replace():");
console.log(replaceOnce); // JS is easy. JavaScript is powerful.

console.log("-----------");

// --------------------------------------------------
// replaceAll()
// --------------------------------------------------

// replaceAll() replaces all occurrences of the given substring
let replaceAllText = message.replaceAll("JavaScript", "JS");

console.log("After replaceAll():");
console.log(replaceAllText); // JS is easy. JS is powerful.

console.log("Success");

/*
========================
Key Learning Points
========================
1. includes() is used to check whether a substring exists in a string.
2. includes() returns true or false.
3. replace() replaces only the first matching occurrence.
4. replaceAll() replaces all matching occurrences.
5. Original strings remain unchanged because strings are immutable.
6. These methods are commonly used in text processing and validation.
*/
