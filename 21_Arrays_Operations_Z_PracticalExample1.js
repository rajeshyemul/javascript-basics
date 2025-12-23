// Chaining filter() + sort() + map()
// Real-world example: Product listing for display

let productsArray = [
    { name: "Laptop", price: 50000, inStock: true },
    { name: "Mouse", price: 500, inStock: true },
    { name: "Keyboard", price: 1500, inStock: false },
    { name: "Monitor", price: 12000, inStock: true },
    { name: "USB Cable", price: 300, inStock: true }
];

console.log("Original Products:");
console.log(productsArray);

// Step-by-step chaining
let displayProducts = productsArray
    // Step 1: filter() -> keep only products that are in stock
    .filter(product => product.inStock === true)

    // Step 2: sort() -> sort products by price (ascending)
    .sort((a, b) => a.price - b.price)

    // Step 3: map() -> transform product into readable string
    .map(product => product.name + " - ₹" + product.price);

console.log("Final Display Products:");
console.log(displayProducts);

console.log("Success");

/*
========================
Key Learning Points
========================
1. filter() is used to remove unwanted data based on a condition.
2. sort() arranges data in a specific order using a compare function.
3. map() transforms data into a new format.
4. Chaining allows multiple operations in a clean and readable way.
5. Original array objects remain unchanged unless explicitly modified.
6. This pattern is very common in UI lists, dashboards, and reports.
*/
