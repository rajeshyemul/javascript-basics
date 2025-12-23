
// Print numbers from 1 to 10 using while loop
// This program demonstrates how a `while` loop works in JavaScript

// Declare a variable `num1` and initialize it with value 1
let num1 = 1;

// The `while` loop runs as long as the condition is true
// Here, the loop will continue until num1 becomes 11
while (num1 < 11) {

    // Print the current value of num1
    console.log(num1);

    // Post-increment operator (num1++)
    // This increases the value of num1 by 1 after the current statement
    // Without this line, the loop would run forever (infinite loop)
    num1++;
}
console.log("Success");

/*
========================
Key Learning Points
========================
1. while loop checks the condition before executing the loop body.
2. The loop runs as long as the condition is true.
3. Increment or update logic is mandatory to avoid infinite loops.
4. Best used when the number of iterations is not known in advance.
*/