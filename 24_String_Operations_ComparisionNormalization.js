// String comparison and normalization
// Used to compare strings safely by normalizing case and spaces

let inputValue = "  TestAutomation  ";
let expectedValue = "testautomation";

// Normalize both strings before comparison
let normalizedInput = inputValue.trim().toLowerCase();
let normalizedExpected = expectedValue.trim().toLowerCase();

console.log("Normalized Input: " + normalizedInput);
console.log("Normalized Expected: " + normalizedExpected);

// Compare normalized values
console.log("Are values equal: " + (normalizedInput === normalizedExpected)); // true

/*
========================
Key Learning Points
========================
1. Direct string comparison is case-sensitive.
2. trim() removes extra spaces.
3. toLowerCase() or toUpperCase() helps normalize case.
4. Normalization avoids false mismatches.
5. This is very common in form validation and testing.
*/
