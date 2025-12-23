// Real-world use case: Student marks average calculation

let marksArray = [35, 78, 45, 90, 28, 66];

// Step 1: filter() -> select only passed subjects (>= 40)
let passedMarks = marksArray.filter(mark => mark >= 40);

// Step 2: reduce() -> calculate total marks
let totalMarks = passedMarks.reduce((sum, mark) => {
    return sum + mark;
}, 0);

// Step 3: calculate average
let averageMarks = totalMarks / passedMarks.length;

console.log("Passed Marks: " + passedMarks);
console.log("Average Marks: " + averageMarks);

console.log("Success");

/*
========================
Key Learning Points
========================
1. filter() removes failed subjects from the calculation.
2. reduce() is used to sum the marks.
3. Average is calculated using total divided by count.
4. Array length helps determine the number of valid elements.
5. This logic is common in grading and reporting systems.
*/
