// Creating multiple objects from the same class

class Person {
    constructor(firstName, lastName, country, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.age = age;
    }

    getDetails() {
        return this.firstName + " " + this.lastName + " " + this.country + " " + this.age;
    }
}

// Creating multiple objects using the same class
let person1 = new Person("Rajesh", "Yemul", "India", 27);
let person2 = new Person("Shreyansh", "Sharma", "India", 25);

console.log(person1.getDetails());
console.log(person2.getDetails());

/*
========================
Key Learning Points
========================
1. A single class can create multiple objects.
2. Each object holds its own data.
3. Objects are independent instances of the class.
4. Constructors help initialize each object differently.
*/
