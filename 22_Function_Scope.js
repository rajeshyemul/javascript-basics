// Scope example
// Global and local variable scope

let globalValue = 100; // Global scope

function displayValues() {

    let localValue = 50; // Local scope

    console.log("Inside function:");
    console.log("globalValue: " + globalValue);
    console.log("localValue: " + localValue);
}

displayValues();

console.log("Outside function:");
console.log("globalValue: " + globalValue);

// console.log(localValue); // ❌ Error: localValue is not defined

/*
========================
Key Learning Points
========================
1. Global variables are accessible everywhere.
2. Local variables exist only inside functions or blocks.
3. let and const respect block scope.
4. Avoid unnecessary global variables.
*/
