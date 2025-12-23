// Rest operator (...) in functions
// Used to handle multiple arguments as an array

// Example 1: Sum of multiple numbers
function calculateTotal(...numbers) {

    // numbers is an array containing all passed arguments
    let total = numbers.reduce((sum, value) => sum + value, 0);

    return total;
}

console.log("Total (2, 3): " + calculateTotal(2, 3));
console.log("Total (10, 20, 30): " + calculateTotal(10, 20, 30));
console.log("Total (5, 10, 15, 20): " + calculateTotal(5, 10, 15, 20));

console.log("-----------");

// Example 2: Fixed parameters with rest operator
function logEmployeeDetails(name, role, ...skills) {

    console.log("Name: " + name);
    console.log("Role: " + role);
    console.log("Skills: " + skills.join(", "));
}

logEmployeeDetails(
    "Rajesh Yemul",
    "Test Automation Engineer",
    "JavaScript",
    "Playwright",
    "API Testing",
    "CI/CD"
);

console.log("Success");

/*
========================
Key Learning Points
========================
1. Rest operator (...) collects multiple arguments into an array.
2. It must be the last parameter in a function definition.
3. Helps handle variable number of function arguments.
4. Rest parameters behave like normal arrays.
5. Commonly used in utility functions and data processing.
*/
