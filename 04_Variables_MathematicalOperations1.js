// Mathematical Operations in JavaScript
// This program demonstrates:
// 1. Increment / Decrement operators
// 2. Compound assignment operators
// 3. Operator precedence
// 4. Math object methods

// --------------------------------------------------
// Increment (++) and Decrement (--)
// --------------------------------------------------

let count = 10;

console.log("Initial count: " + count);

// Post-increment: value is used first, then incremented
console.log("count++: " + (count++)); // 10
console.log("After count++: " + count); // 11

// Pre-increment: value is incremented first, then used
console.log("++count: " + (++count)); // 12

// Post-decrement
console.log("count--: " + (count--)); // 12
console.log("After count--: " + count); // 11

// Pre-decrement
console.log("--count: " + (--count)); // 10

console.log("-----------");

// --------------------------------------------------
// Compound Assignment Operators
// --------------------------------------------------

let total = 50;

console.log("Initial total: " + total);

total += 10; // total = total + 10
console.log("After total += 10: " + total);

total -= 5; // total = total - 5
console.log("After total -= 5: " + total);

total *= 2; // total = total * 2
console.log("After total *= 2: " + total);

total /= 5; // total = total / 5
console.log("After total /= 5: " + total);

total %= 6; // total = total % 6
console.log("After total %= 6: " + total);

console.log("-----------");

// --------------------------------------------------
// Operator Precedence
// --------------------------------------------------

let result1 = 10 + 5 * 2;        // Multiplication happens first
let result2 = (10 + 5) * 2;     // Parentheses change precedence

console.log("10 + 5 * 2 = " + result1);      // 20
console.log("(10 + 5) * 2 = " + result2);    // 30

console.log("-----------");

// --------------------------------------------------
// Math Object Methods
// --------------------------------------------------

let decimalNumber = 12.67;

console.log("Original Number: " + decimalNumber);

// Math.round() -> rounds to nearest integer
console.log("Math.round(12.67): " + Math.round(decimalNumber)); // 13

// Math.floor() -> rounds down
console.log("Math.floor(12.67): " + Math.floor(decimalNumber)); // 12

// Math.ceil() -> rounds up
console.log("Math.ceil(12.67): " + Math.ceil(decimalNumber));   // 13

// Math.max() -> returns largest value
console.log("Math.max(10, 20, 5): " + Math.max(10, 20, 5)); // 20

// Math.min() -> returns smallest value
console.log("Math.min(10, 20, 5): " + Math.min(10, 20, 5)); // 5

// Math.random() -> generates random number between 0 and 1
console.log("Math.random(): " + Math.random());

console.log("Success");

/*
========================
Key Learning Points
========================
1. ++ and -- are used to increment and decrement values by 1.
2. Pre-increment/decrement changes value before use, post changes after use.
3. Compound operators (+=, -=, *=, /=, %=) simplify arithmetic updates.
4. Operator precedence decides execution order (* before +).
5. Parentheses () can be used to control precedence.
6. Math object provides built-in mathematical utilities.
7. Math.round(), floor(), and ceil() are commonly used for decimal handling.
8. Math.random() is used for generating random values.
*/
