// Real-world use case: Shopping cart total calculation

let cartItems = [
    { name: "Laptop", price: 50000, inStock: true },
    { name: "Mouse", price: 500, inStock: true },
    { name: "Keyboard", price: 1500, inStock: false },
    { name: "Monitor", price: 12000, inStock: true }
];

// Step 1: filter() -> keep only items that are in stock
let availableItems = cartItems.filter(item => item.inStock);

// Step 2: map() -> apply 10% discount on price
let discountedPrices = availableItems.map(item => item.price * 0.9);

// Step 3: reduce() -> calculate total cart value
let cartTotal = discountedPrices.reduce((total, price) => {
    return total + price;
}, 0);

console.log("Cart Total: " + cartTotal);

console.log("Success");

/*
========================
Key Learning Points
========================
1. filter() is used to select valid items from the cart.
2. map() is used to apply price transformation (discount).
3. reduce() calculates the final cart total.
4. Original cart data remains unchanged.
5. This pattern is very common in e-commerce applications.
*/
