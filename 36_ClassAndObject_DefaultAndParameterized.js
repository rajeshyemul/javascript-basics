// Default constructor vs Parameterized constructor

class Employee {

    // Default constructor
    constructor(name = "Unknown", role = "Not Assigned") {
        this.name = name;
        this.role = role;
    }

    getDetails() {
        return this.name + " - " + this.role;
    }
}

let emp1 = new Employee();
let emp2 = new Employee("Rajesh Yemul", "Test Automation Engineer");

console.log(emp1.getDetails()); // Uses default values
console.log(emp2.getDetails()); // Uses passed values

/*
========================
Key Learning Points
========================
1. Default constructors use predefined values.
2. Parameterized constructors accept values at object creation.
3. Default values prevent undefined properties.
4. Makes class usage flexible and safe.
*/
