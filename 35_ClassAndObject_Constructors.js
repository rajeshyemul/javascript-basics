// Class with Parameterized Constructor
// Constructor is used to initialize object properties

class Person {

    // Class properties (will be initialized via constructor)
    firstName;
    lastName;
    country;
    age;

    // Parameterized Constructor
    // It is automatically called when an object is created using new
    constructor(firstName, lastName, country, age) {
        console.log("Parameterized Constructor called");

        // Assigning constructor parameters to class properties
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.age = age;
    }

    // Method to return all details of the person
    getAllDetails() {
        return (
            this.firstName + " " +
            this.lastName + " " +
            this.country + " " +
            this.age
        );
    }
}

// Creating the object of class Person using constructor
let person_obj = new Person("Rajesh", "Yemul", "India", 27);

// Accessing object properties
console.log("person_obj.firstName: " + person_obj.firstName);
console.log("person_obj.lastName: " + person_obj.lastName);
console.log("person_obj.country: " + person_obj.country);
console.log("person_obj.age: " + person_obj.age);

// Calling method using object
console.log("person_obj.getAllDetails(): " + person_obj.getAllDetails());
console.log("Success");

/*
========================
Key Learning Points
========================
1. Constructor is a special method used to initialize objects.
2. It is automatically invoked when an object is created.
3. Parameters allow passing dynamic values to the object.
4. this keyword refers to the current object instance.
5. One class can create multiple objects with different data.
6. Constructors help enforce proper object initialization.
*/
