// JavaScript Data Types - Detailed Example
// This program demonstrates all major JavaScript data types

// --------------------------------------------------
// Primitive Data Types
// --------------------------------------------------

// Number (no separate int, float, double in JavaScript)
let numberValue = 42;
let decimalValue = 98.76;

// String
let stringValue = "Test Automation Engineer";

// Boolean
let booleanValue = true;

// Undefined (declared but not assigned)
let undefinedValue;

// Null (explicitly no value)
let nullValue = null;

// Symbol (unique identifier)
let symbolValue = Symbol("uniqueKey");

// BigInt (used for very large numbers)
let bigIntValue = 123456789012345678901234567890n;

// --------------------------------------------------
// Non-Primitive (Reference) Data Types
// --------------------------------------------------

// Object
let personObject = {
    name: "Rajesh Yemul",
    role: "Test Automation Engineer",
    experience: 15
};

// Array (special type of object)
let skillsArray = ["JavaScript", "Playwright", "API Testing"];

// Function (also an object type)
function greetUser(name) {
    return "Hello " + name;
}

// --------------------------------------------------
// Printing values
// --------------------------------------------------

console.log("numberValue:", numberValue);
console.log("decimalValue:", decimalValue);
console.log("stringValue:", stringValue);
console.log("booleanValue:", booleanValue);
console.log("undefinedValue:", undefinedValue);
console.log("nullValue:", nullValue);
console.log("symbolValue:", symbolValue.toString());
console.log("bigIntValue:", bigIntValue);

console.log("personObject:", personObject);
console.log("skillsArray:", skillsArray);
console.log("greetUser('Rajesh'):", greetUser("Rajesh"));

// --------------------------------------------------
// typeof checks
// --------------------------------------------------

console.log("typeof numberValue:", typeof numberValue);
console.log("typeof stringValue:", typeof stringValue);
console.log("typeof booleanValue:", typeof booleanValue);
console.log("typeof undefinedValue:", typeof undefinedValue);
console.log("typeof nullValue:", typeof nullValue);       // object (JavaScript quirk)
console.log("typeof symbolValue:", typeof symbolValue);
console.log("typeof bigIntValue:", typeof bigIntValue);
console.log("typeof personObject:", typeof personObject);
console.log("typeof skillsArray:", typeof skillsArray);   // object
console.log("typeof greetUser:", typeof greetUser);

console.log("Success");

/*
========================
Key Learning Points
========================
1. JavaScript has two main categories of data types: Primitive and Non-Primitive.
2. Primitive types include Number, String, Boolean, Undefined, Null, Symbol, and BigInt.
3. JavaScript has only one numeric type: Number (except BigInt).
4. Undefined means a variable is declared but not assigned.
5. Null represents an intentional absence of value.
6. Objects, arrays, and functions are reference types.
7. Arrays and functions are technically objects in JavaScript.
8. typeof null returns "object", which is a known JavaScript behavior.
9. typeof operator helps identify data types at runtime.
10. Understanding data types is critical for avoiding bugs and writing clean code.
*/
