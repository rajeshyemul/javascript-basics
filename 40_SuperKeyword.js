// super keyword example

class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hello " + this.name;
    }
}

class Admin extends User {
    constructor(name, role) {
        super(name); // Calls parent constructor
        this.role = role;
    }

    greet() {
        // Calling parent method using super
        return super.greet() + ", you are an " + this.role;
    }
}

let adminUser = new Admin("Rajesh Yemul", "Admin");
console.log(adminUser.greet());

/*
========================
Key Learning Points
========================
1. super is used to access parent class constructor or methods.
2. super() must be called before using this in child constructor.
3. super.methodName() calls parent class method.
4. Useful when extending or enhancing parent behavior.
*/
