// Class and Object example in JavaScript
// A class is a blueprint for creating objects

class Person {

    // Properties (data members)
    firstName = 'Rajesh';
    lastName = 'Yemul';
    country = 'India';
    age = 27;

    // Method (behavior)
    // this keyword refers to the current object
    getAllDetails() {
        return (
            this.firstName + " " +
            this.lastName + " " +
            this.country + " " +
            this.age
        );
    }
}

// Creating an object (instance) of the Person class
let person_obj = new Person();

// Accessing properties using the object
console.log("person_obj.firstName: " + person_obj.firstName);
console.log("person_obj.lastName: " + person_obj.lastName);
console.log("person_obj.country: " + person_obj.country);
console.log("person_obj.age: " + person_obj.age);

// Calling a method using the object
console.log("person_obj.getAllDetails(): " + person_obj.getAllDetails());
console.log("Success");

/*
========================
Key Learning Points
========================
1. A class is a blueprint used to create objects.
2. Objects are instances of a class.
3. Properties store data related to the object.
4. Methods define the behavior of the object.
5. this keyword refers to the current object instance.
6. new keyword is used to create an object from a class.
7. Classes help organize code in a structured and reusable way.
*/
