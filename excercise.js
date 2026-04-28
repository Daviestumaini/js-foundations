/*calculating sum, difference, product, quotient, modulus, and using assignment operators*/
let variable = 10;
let variable2 = 5;

let result = variable + variable2;
let result2 = variable - variable2;
let result3 = variable * variable2;
let result4 = variable / variable2;
console.log("The result of addition is: " + result);
console.log("The result of subtraction is: " + result2);
console.log("The result of multiplication is: " + result3);
console.log("The result of division is: " + result4);
// modulus operator gives the remainder of the division
let c =17;
let d = 5;
let result5 = c % d;
console.log("The remainder of modulus is: " + result5);
// using short-hand assignment operators
let x =10;
x += 5;
x *= 2;
console.log(x);
// converting string numbers to actual numbers using unary plus operator
let sum = +"5" + +"2";
console.log("The sum of string numbers is: " + sum);
let difference = +"5" - +"2";
console.log("The difference of string numbers is: " + difference);
// using Number() function to convert string to number
Number("100");
console.log("The number is: " + Number("100"));
Number("50");
console.log("The number is: " + Number("50"));
// comparing values using loose equality and strict equality
// Re-assignment
5 == "5";
console.log("Is 5 equal to '5' with loose equality? " + (5 == "5"));
5 === "5";
console.log("Is 5 equal to '5' with strict equality? " + (5 === "5"));
// calculating simple interest
/*Declaration*/
let P = 1000;
let R = 5;
let SI = (P * R * 5) / 100;
console.log("The simple interest is: " + SI);
