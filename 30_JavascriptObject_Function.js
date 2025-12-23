// Object with methods

let calculator = {
    add: function (a, b) {
        return a + b;
    },
    multiply: function (a, b) {
        return a * b;
    }
};

console.log("Add: " + calculator.add(10, 5));
console.log("Multiply: " + calculator.multiply(4, 3));

/*
========================
Key Learning Points
========================
1. Functions inside objects are called methods.
2. Methods define object behavior.
3. Objects can hold both data and functionality.
*/
