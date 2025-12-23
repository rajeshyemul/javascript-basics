// Objects inside Arrays
// Real-world example: List of employees

let employeesArray = [
    {
        id: 101,
        name: "Rajesh Yemul",
        role: "Test Automation Engineer",
        location: "India"
    },
    {
        id: 102,
        name: "Sonal Patil",
        role: "QA Engineer",
        location: "India"
    },
    {
        id: 103,
        name: "Prakash Kumar",
        role: "Developer",
        location: "USA"
    }
];

// Print full employee list
console.log("All Employees:");
console.log(employeesArray);

console.log("-----------");

// Accessing individual objects inside the array
console.log("First Employee Name: " + employeesArray[0].name);
console.log("Second Employee Role: " + employeesArray[1].role);

console.log("-----------");

// Looping through array of objects
for (let employee of employeesArray) {
    console.log(
        "ID: " + employee.id +
        ", Name: " + employee.name +
        ", Role: " + employee.role +
        ", Location: " + employee.location
    );
}

console.log("Success");

/*
========================
Key Learning Points
========================
1. Arrays can store objects as elements.
2. Each object represents a real-world entity.
3. Object properties are accessed using dot notation.
4. for...of loop is commonly used to iterate over arrays.
5. This structure is very common in API responses and databases.
6. Objects inside arrays allow complex data modeling.
*/
