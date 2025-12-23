// Conditional Statements using if-else
// This program demonstrates how `if`, `else`, and logical NOT (!) work in JavaScript

// Declare a constant variable `flag` and assign it a boolean value `true`
// Since it is a `const`, its value cannot be changed later
const flag = true;

// ----------------------
// First if-else check
// ----------------------

// The condition inside `if` checks whether `flag` is true
// Since flag is true, this block will execute
if (flag) {
    // This line runs because the condition is satisfied
    console.log("Condition satisfied");

    // Print the value of flag
    console.log("flag: " + flag);
} else {
    // This block is skipped because the `if` condition is true
    console.log("Condition not satisfied");
}

// Print a separator line to make the output easier to read
console.log("-----------------");

// ----------------------
// Checking the reverse of flag
// ----------------------

// The `!` operator is called the logical NOT operator
// It reverses the boolean value
// true becomes false, and false becomes true

console.log("Checking the reverse of flag");

// `!flag` means "NOT flag"
// Since flag is true
// `!flag` evaluates to false, so the else block will execute
if (!flag) {
    // This block is skipped because `!flag` is false
    console.log("Condition satisfied");
} else {
    // This line runs because the `if` condition is false
    console.log("Condition not satisfied");
}

// Print a success message to indicate the program ran successfully
console.log("Success");


/*
========================
Key Learning Points
========================
1. if block executes when the condition is true.
2. else block executes when the condition is false.
3. Boolean values are true and false.
4. ! (logical NOT) operator reverses the boolean value.
5. const is used when the variable value should not change.
*/