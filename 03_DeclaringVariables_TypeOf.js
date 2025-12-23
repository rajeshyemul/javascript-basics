// There is nothing like float or double in JavaScript
// 16, 16.89, 166666666.8 -> all are treated as Number type

/*
 Variables in JavaScript are loosely coupled
 - Variables can hold values of any data type
 - The data type is decided at runtime
 - JavaScript is a dynamically typed language

 var is a keyword in JavaScript
 From ES6 onwards, two more keywords were introduced:
     let
     const
*/

// Variable declarations
var num1 = 10;                  // Integer number
let num2 = 113.3456;            // Decimal number
var str1 = "Test Automation Engineer"; // String
let myBoolean = true;           // Boolean

// Printing values
console.log("num1: " + num1);
console.log("num2: " + num2);
console.log("str1: " + str1);
console.log("myBoolean: " + myBoolean);

// typeof operator is used to check data type at runtime
console.log("typeof(num1): " + typeof (num1));
console.log("typeof(num2): " + typeof (num2));
console.log("typeof(str1): " + typeof (str1));
console.log("typeof(myBoolean): " + typeof (myBoolean));

/*
========================
Key Learning Points
========================
1. JavaScript has only one numeric data type: Number.
2. There is no separate int, float, or double in JavaScript.
3. JavaScript is a dynamically typed language.
4. Variables decide their type based on assigned value at runtime.
5. var, let, and const are used to declare variables.
6. typeof operator helps identify the data type of a value.
7. Boolean values are true or false.
*/
