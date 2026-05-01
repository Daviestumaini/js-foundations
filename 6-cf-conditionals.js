/* Conditionals are the control structures used to make decisions in code and execute diffferent blocks of code.
The most common conditional statements are if, else if, and else. They allow you to execute different code based on certain conditions. 

// Example of if statement
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}
// Example of if-else statement
let time = 10;
if (time < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}
// Example of if-else if-else statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
Moreover, Javascript also has a switch statement, which is another way to handle multiple conditions based on the value of a variable. It is often used as an alternative to multiple if-else statements when you have many conditions to check.
// Example of switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break; 
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:      
      console.log("Sunday");
        break;  
    default:
        console.log("Invalid day");
}
In the mordern JavaScript, we also have the ternary operator, which is a shorthand for an if-else statement. It is often used for simple conditions and can make the code more concise.
// Example of ternary operator
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);
*/
