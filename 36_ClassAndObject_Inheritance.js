// Inheritance example using extends

class Person {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }

    getBasicDetails() {
        return this.name + " from " + this.country;
    }
}

// Employee inherits from Person
class Employee extends Person {
    constructor(name, country, role) {
        super(name, country); // Call parent constructor
        this.role = role;
    }

    getEmployeeDetails() {
        return this.getBasicDetails() + " working as " + this.role;
    }
}

let emp = new Employee("Rajesh Yemul", "India", "Test Automation Engineer");
console.log(emp.getEmployeeDetails());

/*
========================
Key Learning Points
========================
1. extends is used to inherit another class.
2. Child class inherits properties and methods of parent.
3. Inheritance promotes code reuse.
4. Child classes can add their own behavior.
*/
