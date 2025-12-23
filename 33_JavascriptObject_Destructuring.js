// Destructuring objects inside arrays
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
        name: "Shreya Sharma",
        role: "QA Engineer",
        experience: 5,
        location: "India"
    },
    {
        id: 103,
        name: "Amit Verma",
        role: "Developer",
        experience: 8,
        location: "USA"
    }
];

// Loop through array and destructure object properties
for (let employee of employeesArray) {

    // Destructuring properties from each object
    let { name, role, experience, location } = employee;

    console.log(
        "Name: " + name +
        ", Role: " + role +
        ", Experience: " + experience +
        " years, Location: " + location
    );
}

console.log("-----------");

// Destructuring directly inside map()
let employeeSummary = employeesArray.map(({ name, experience }) => {
    return name + " has " + experience + " years of experience";
});

console.log("Employee Summary:");
console.log(employeeSummary);

console.log("Success");

/*
========================
Key Learning Points
========================
1. Destructuring extracts object properties into variables.
2. It improves code readability and reduces repetition.
3. Destructuring works perfectly with arrays of objects.
4. Properties are matched by name, not by order.
5. Destructuring is commonly used in loops, map(), and function parameters.
6. Very useful when working with API response data.
*/
