// Function example: Adding two numbers
// This program demonstrates how a function works in JavaScript
// with proper variable declaration

// Define a function named add
// a and b are parameters (inputs to the function)
function add(a, b) {

    // Declare sum using let to keep it scoped inside the function
    let sum = a + b;

    // Print the calculation and result
    console.log(a + "+" + b + " = " + sum);

    // Return the calculated sum to the caller
    return sum;
}

// Calling the function with different arguments
add(2, 3);
add(20, 30);
add(26, 34);
add(21, 329898);

/*
========================
Key Learning Points
========================
1. Variables should be declared using let or const to avoid global scope issues.
2. let limits the variable scope to the block or function.
3. Functions can accept parameters and return values.
4. Declaring variables properly prevents accidental bugs.
5. This is a best practice for writing clean and maintainable JavaScript.
*/
