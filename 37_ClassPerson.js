// Exporting a class using module.exports
// This makes the Person class reusable in other files

// module.exports exposes the class so it can be imported elsewhere
module.exports = class Person {

    // Class properties
    firstName;
    lastName;
    country;
    age;

    // Method to return all details of the person
    getAllDetails() {
        return (
            this.firstName + " " +
            this.lastName + " " +
            this.country + " " +
            this.age
        );
    }

    // Parameterized Constructor
    // This constructor is called when a new object is created
    constructor(firstName, lastName, country, age) {
        console.log("Parameterized Constructor called");

        // Initializing class properties
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.age = age;
    }
};

/*
========================
Key Learning Points
========================
1. module.exports is used to export a class or object from a file.
2. Exported classes can be reused in other JavaScript files.
3. This follows the CommonJS module system (used in Node.js).
4. Classes exported this way are public and accessible wherever imported.
5. This approach helps organize code into reusable modules.
6. Very common in backend applications and automation frameworks.
*/
