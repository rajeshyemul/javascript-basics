// filter() + sort() + map() on array of objects
// Real-world example: Employee data processing

let employeesArray = [
    {
        id: 101,
        name: "Rajesh Yemul",
        role: "Test Automation Engineer",
        experience: 15,
        location: "India"
    },
    {
        id: 102,
        name: "Ramesh Singh",
        role: "QA Engineer",
        experience: 5,
        location: "India"
    },
    {
        id: 103,
        name: "Nitin Trivedi",
        role: "Developer",
        experience: 8,
        location: "USA"
    },
    {
        id: 104,
        name: "Neha Gupta",
        role: "Test Automation Engineer",
        experience: 10,
        location: "India"
    }
];

console.log("Original Employees:");
console.log(employeesArray);

console.log("-----------");

// Step 1: filter() -> keep only Test Automation Engineers
let automationEngineers = employeesArray.filter(
    employee => employee.role === "Test Automation Engineer"
);

console.log("Filtered Employees (Automation Engineers):");
console.log(automationEngineers);

console.log("-----------");

// Step 2: sort() -> sort by experience (descending)
automationEngineers.sort((a, b) => b.experience - a.experience);

console.log("Sorted by Experience (Descending):");
console.log(automationEngineers);

console.log("-----------");

// Step 3: map() -> transform data for display
let employeeSummary = automationEngineers.map(employee => {
    return {
        name: employee.name,
        experience: employee.experience,
        location: employee.location
    };
});

console.log("Final Mapped Output:");
console.log(employeeSummary);

console.log("Success");

/*
========================
Key Learning Points
========================
1. filter() selects objects based on a condition.
2. sort() orders objects using a numeric or string property.
3. map() transforms objects into a new structure.
4. Chaining these methods simplifies complex data processing.
5. Original array remains unchanged unless directly modified.
6. This pattern is extremely common in API and UI data handling.
*/
