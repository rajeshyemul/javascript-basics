// Deleting object properties

let tool = {
    name: "Playwright",
    type: "Automation",
    language: "JavaScript"
};

// Delete a property
delete tool.language;

console.log(tool);
console.log("Success");

/*
========================
Key Learning Points
========================
1. delete keyword removes a property from an object.
2. After deletion, the property no longer exists.
3. Use delete carefully in real applications.
*/
