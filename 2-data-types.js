/* Data types are the fundamental blocks of programming. they show the interpreter how the programmer intends on using the data.
In JavaScript there are 7 primitive data types: string, number, boolean, null, undefined, symbol, and bigint. There are also non-primitive data types such as objects and arrays.
Here are some examples of the different data types:

//String
let name = "Brian"; 
//Number
let age = 30;
//Boolean
let isStudent = true;
let isEmployed = false;
//Null
let emptyValue = null;
console.log(typeof emptyValue); // Output: object

//Undefined
let u;
console.log(typeof u); // Output: undefined
//Symbol
let uniqueId = Symbol("id");
//BigInt
let largeNumber = 9007199254740991469985n;
console.log(typeof largeNumber); // Output: bigint
// Object
let person = {
  name: "Brian",
    age: 30,
    isStudent: true,
    isEmployed: false
};
// Array
let obj ={
hobbies: ["tennis", "football", "gaming"]}
age = 7,
height = "70cm",
getaveragegrowthrate: function() {},
};
console.log(obj.hobbies[2]); // Output: gaming

// In JavaScript, data types are dynamic, meaning that a variable can hold any type of data and can change its type during the execution of the program. For example:
let dynamicVariable = "Hello";
console.log(typeof dynamicVariable); // Output: string
dynamicVariable = 42; // Now it holds a number
console.log(typeof dynamicVariable); // Output: number
dynamicVariable = true; // Now it holds a boolean


Apart from the primitive data types there are also other data types such as objects and arrays which are non-primitive datat types that consist of multiple values.
In the real world, data types are like containers in a kitchen. Just as you would use different containers for different types of food (e.g., a bowl for soup, a plate for salad), in programming, you use different data types to store and manipulate different kinds of information effectively. Understanding data types is crucial for writing efficient and error-free code.
So, just as one wouldn't pour milk in a eggcarton, in programming, you wouldn't dare to store a string of text in a variable meant for numbers or a boolean value in a variablemeant for strings.
This would make your code messy and very difficult to comprehend and maintain.*/
