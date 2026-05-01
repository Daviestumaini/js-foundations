/* Loops are used to repeat a block of code until a specified condition is met. JavaScript supports different types of loops, including for, while, and do...while loops. 

// Example of for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}
// Example of while loop
let count = 0;
while (count < 5) {
    console.log("Count: " + count);
    count++;
}
// Example of do...while loop
let number = 0;
do {
    console.log("Number: " + number);
    number++;
} while (number < 5);
In addition to these basic loops, JavaScript also provides for...in and for...of loops for iterating over objects and iterable collections, respectively.
// Example of for...in loop
let person = { name: "Alice", age: 30, city: "New York" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Example of for...of loop
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}
  In modern JavaScript, we also have higher-order functions like forEach, map, filter, and reduce that can be used to iterate over arrays in a more functional programming style.
// Example of forEach method
fruits.forEach(function(fruit) {
    console.log(fruit);
});
// Example of map method
let upperCaseFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(upperCaseFruits);
// Example of filter method
let longFruits = fruits.filter(function(fruit) {
    return fruit.length > 5;
});
console.log(longFruits);
// Example of reduce method
let totalLength = fruits.reduce(function(accumulator, fruit) {
    return accumulator + fruit.length;
}, 0);
console.log(totalLength);
*/