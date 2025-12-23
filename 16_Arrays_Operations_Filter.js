// Print only even numbers from the array using filter()

let numberList = [11, 22, 33, 44, 55, 66];

console.log("numberList: " + numberList); // 11,22,33,44,55,66

console.log("Printing only even using For loop");

// Loop through the array using a for loop
for (let index = 0; index < numberList.length; index++) {

    // Check if the number is even
    if (numberList[index] % 2 == 0) {
        console.log(numberList[index]); // 22,44,66
    }
}

console.log("------------");

console.log("Printing only even using filter()");

// filter() creates a new array with elements that satisfy the condition
console.log(numberList.filter(num => num % 2 == 0)); // [22,44,66]

console.log("Success");

/*
========================
Key Learning Points
========================
1. for loop allows manual control over iteration and conditions.
2. filter() is used to create a new array based on a condition.
3. filter() does not modify the original array.
4. The callback function in filter() must return true or false.
5. filter() improves code readability and conciseness.
*/