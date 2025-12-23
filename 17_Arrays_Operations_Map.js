// Multiply the elements by 3

let scoresArray = [11, 22, 33];

console.log("scoresArray: " + scoresArray); // 11,22,33

// map() -> used to transform each element of the array
// It applies the given function to every element and returns a new array
console.log(
    "scoresArray.map(value => value * 3): " +
    scoresArray.map(value => value * 3)
); // 33,66,99

console.log("Success");

/*
========================
Key Learning Points
========================
1. map() is used to transform elements of an array.
2. It returns a new array with modified values.
3. The original array remains unchanged.
4. The callback function runs once for each element.
5. map() is ideal when you want to apply the same operation to all elements.
*/
