// Regular Expressions - Practical Examples
// These examples demonstrate common regex use cases

// --------------------------------------------------
// 1. Check if string contains only numbers
// --------------------------------------------------

let numericValue = "12345";
let nonNumericValue = "123A5";

// ^  -> start of string
// $  -> end of string
// [0-9]+ -> one or more digits
console.log("Only numbers (12345): " + /^[0-9]+$/.test(numericValue));     // true
console.log("Only numbers (123A5): " + /^[0-9]+$/.test(nonNumericValue));  // false

console.log("-----------");

// --------------------------------------------------
// 2. Validate a simple email format
// --------------------------------------------------

let email1 = "test.user@gmail.com";
let email2 = "testuser@gmail";

// Basic email pattern
console.log("Valid email 1: " + /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email1)); // true
console.log("Valid email 2: " + /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email2)); // false

console.log("-----------");

// --------------------------------------------------
// 3. Check if string starts with a word
// --------------------------------------------------

let sentence = "Automation testing is powerful";

// ^Automation -> must start with the word "Automation"
console.log("Starts with Automation: " + /^Automation/.test(sentence)); // true

console.log("-----------");

// --------------------------------------------------
// 4. Check if string ends with a word
// --------------------------------------------------

let fileName = "report.pdf";

// \.pdf$ -> must end with .pdf
console.log("Ends with .pdf: " + /\.pdf$/.test(fileName)); // true

console.log("-----------");

// --------------------------------------------------
// 5. Find all digits in a string
// --------------------------------------------------

let mixedText = "Order123ID456";

// \d -> digit
// g  -> global flag (find all matches)
let digitsFound = mixedText.match(/\d+/g);

console.log("Digits found: " + digitsFound); // 123,456

console.log("-----------");

// --------------------------------------------------
// 6. Replace all spaces with hyphen
// --------------------------------------------------

let textWithSpaces = "Test Automation Engineer";

// \s -> whitespace character
let replacedText = textWithSpaces.replace(/\s+/g, "-");

console.log("After replace: " + replacedText); // Test-Automation-Engineer

console.log("-----------");

// --------------------------------------------------
// 7. Case-insensitive search
// --------------------------------------------------

let toolName = "PlayWright";

// i -> case-insensitive flag
console.log("Contains playwright: " + /playwright/i.test(toolName)); // true

console.log("Success");

/*
========================
Key Learning Points
========================
1. Regular expressions are used for pattern matching in strings.
2. test() checks if a pattern exists and returns true or false.
3. ^ matches the start of a string, $ matches the end.
4. + means one or more occurrences.
5. Flags like g (global) and i (case-insensitive) change regex behavior.
6. match() is used to extract values based on patterns.
7. replace() with regex enables powerful text transformations.
8. Regex is widely used for validation, parsing, and cleanup.
*/


// --------------------------------------------------
// How to think about regex (simple mindset)
    // Validation → test()
    // Extraction → match()
    // Transformation → replace()
    // Rules → anchors (^, $) + patterns (\d, \s, [a-z]) + flags
// --------------------------------------------------
