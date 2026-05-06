/* Arrays are a special type of object used to store multiple values in a single variable.
They are ordered, meaning that the values are stored in a specific sequence, and they can hold values of any type, including other arrays. 
Arrays are created using square brackets [] and can be accessed using their index, which starts at 0.
Here are some examples of how to use arrays in JavaScript: 
// Creating an array
let fruits = ['apple', 'banana', 'orange'];
// Accessing array elements
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
console.log(fruits[2]); // Output: 'orange'
// Adding elements to an array
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']
// Removing the last element from an array
fruits.pop(); 
console.log(fruits); // Output: ['apple', 'banana', 'orange']
// Finding the length of an array
console.log(fruits.length); // Output: 3
// Iterating over an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// 'apple'
// 'banana'
// 'orange'
// Methods used in arrays include push(), pop(), shift(), unshift(), slice(), splice(), and many more, which allow you to manipulate the contents of the array in various ways.
// Example of using slice() to create a new array
let citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ['banana', 'orange']
// Example of using splice() to remove elements from an array
fruits.splice(1, 1); // Removes 1 element at index 1
console.log(fruits); // Output: ['apple', 'orange']
// Example of using unshift() to add elements to the beginning of an array
fruits.unshift('grape');
console.log(fruits); // Output: ['grape', 'apple', 'orange']
// Example of using shift() to remove the first element from an array
fruits.shift();
console.log(fruits); // Output: ['apple', 'orange']
// Arrays can also contain other arrays, creating a multidimensional array
let matrix = [
    [1, 2, 3],  
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][1]); // Output: 2
console.log(matrix[1][2]); // Output: 6
// In this example, matrix is a 2D array (an array of arrays), and we can access its elements using two indices: the first for the row and the second for the column.
// Arrays are a fundamental data structure in JavaScript and are widely used for storing and manipulating collections of data.
*/