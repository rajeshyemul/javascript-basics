// Chaining filter() + sort() + reduce()
// Real-world example: Calculate total of top 3 scores

let scoresArray = [45, 88, 92, 30, 67, 99, 54, 76];

console.log("Original Scores:");
console.log(scoresArray);

// Step 1: filter() -> keep only scores >= 50
let passedScores = scoresArray.filter(score => score >= 50);
console.log("Passed Scores: " + passedScores);

// Step 2: sort() -> sort scores in descending order
passedScores.sort((a, b) => b - a);
console.log("Sorted Scores (Descending): " + passedScores);

// Step 3: reduce() -> calculate total of top 3 scores
let topThreeTotal = passedScores
    .slice(0, 3) // take top 3 scores
    .reduce((sum, score) => sum + score, 0);

console.log("Top 3 Scores Total: " + topThreeTotal);

console.log("Success");

/*
========================
Key Learning Points
========================
1. filter() removes unwanted values before processing.
2. sort() arranges data to make top-N selection possible.
3. slice() is used to safely extract top N elements.
4. reduce() combines multiple values into a single result.
5. This pattern is widely used in rankings, analytics, and reports.
6. Chaining keeps complex logic readable and easy to maintain.
*/
