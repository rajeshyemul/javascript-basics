// Spread operator (...) with arrays and objects
// Used to copy, merge, and update data immutably

// --------------------------------------------------
// Spread operator with Arrays
// --------------------------------------------------

let originalScores = [10, 20, 30];

// Create a copy of the array
let copiedScores = [...originalScores];

console.log("Original Scores: " + originalScores);
console.log("Copied Scores: " + copiedScores);

// Add new values while keeping original array unchanged
let updatedScores = [...originalScores, 40, 50];

console.log("Updated Scores: " + updatedScores);
console.log("Original Scores (unchanged): " + originalScores);

console.log("-----------");

// --------------------------------------------------
// Spread operator with Objects
// --------------------------------------------------

let employee = {
    name: "Rajesh Yemul",
    role: "Test Automation Engineer",
    experience: 15
};

// Create a copy of the object
let copiedEmployee = { ...employee };

console.log("Original Employee:", employee);
console.log("Copied Employee:", copiedEmployee);

// Update object property immutably
let updatedEmployee = {
    ...employee,
    experience: 16,
    location: "India"
};

console.log("Updated Employee:", updatedEmployee);
console.log("Original Employee (unchanged):", employee);

console.log("Success");

/*
========================
Key Learning Points
========================
1. Spread operator (...) expands elements of arrays or properties of objects.
2. It is commonly used to create shallow copies.
3. Helps maintain immutability by not changing original data.
4. Useful for adding or updating values cleanly.
5. Spread operator works only one level deep (shallow copy).
6. Widely used in modern JavaScript and frameworks like React.
*/
