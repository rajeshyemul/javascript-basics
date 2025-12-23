// Logical Operators in JavaScript
// This program demonstrates AND (&&), OR (||), and NOT (!)

// --------------------------------------------------
// AND operator (&&)
// --------------------------------------------------
// Condition is true only if ALL conditions are true

let hasLoginAccess = true;
let hasSubscription = true;

if (hasLoginAccess && hasSubscription) {
    console.log("Access granted using && operator");
} else {
    console.log("Access denied using && operator");
}

console.log("-----------");

// --------------------------------------------------
// OR operator (||)
// --------------------------------------------------
// Condition is true if AT LEAST ONE condition is true

let isAdmin = false;
let isManager = true;

if (isAdmin || isManager) {
    console.log("Access granted using || operator");
} else {
    console.log("Access denied using || operator");
}

console.log("-----------");

// --------------------------------------------------
// NOT operator (!)
// --------------------------------------------------
// NOT operator reverses the boolean value

let isBlocked = false;

if (!isBlocked) {
    console.log("User is not blocked, access allowed");
} else {
    console.log("User is blocked, access denied");
}

console.log("-----------");

// --------------------------------------------------
// Combining logical operators
// --------------------------------------------------

let age = 25;
let hasValidID = true;

// User must be 18 or above AND must have valid ID
if (age >= 18 && hasValidID) {
    console.log("User is eligible");
} else {
    console.log("User is not eligible");
}

console.log("Success");

/*
========================
Key Learning Points
========================
1. && (AND) returns true only if all conditions are true.
2. || (OR) returns true if at least one condition is true.
3. ! (NOT) reverses the boolean value.
4. Logical operators are commonly used in decision making.
5. Multiple conditions can be combined in a single if statement.
6. These operators are heavily used in validations and access control.
*/
