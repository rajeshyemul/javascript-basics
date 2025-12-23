// reduce() example
// Calculate the total sum of elements in an array

let scoresArray = [10, 20, 30, 40];

console.log("scoresArray: " + scoresArray); // 10,20,30,40

// reduce() -> reduces the array to a single value
// accumulator -> stores the running result
// currentValue -> current element being processed
let totalSum = scoresArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

// Print the final reduced value
console.log("Total Sum: " + totalSum); // 100

console.log("Success");

/*
========================
Key Learning Points
========================
1. reduce() is used to reduce an array to a single value.
2. It takes a callback function and an initial value.
3. accumulator holds the accumulated result.
4. currentValue represents the current array element.
5. reduce() is commonly used for sum, average, count, and total calculations.
*/
