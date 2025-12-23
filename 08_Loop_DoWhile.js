//Do-While Loop

let num1=1

//In Do-While Loop, 1 round will execute for sure
do{
    console.log(num1)

    //Post-increment
    num1++
}while(num1<11)

console.log("------------------")

num1=1
//In Do-While Loop, 1 round will execute for sure
do{
    console.log(num1)

    //Post-increment
    num1++
}while(num1<1) //Even if the condition is false, Code inside the do section executed for one time.

console.log("Success")


/*
========================
Key Learning Points
========================
1. do...while loop executes the code block at least once.
2. Condition is checked after the loop body executes.
3. Useful when the loop must run at least one time.
4. Similar to while loop but with guaranteed first execution.
*/