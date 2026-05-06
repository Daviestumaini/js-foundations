/* Objects are collections of properties, and a property is an association between a name (or key) and a value.
The value of a property can be a function, in which case the property is known as a method. 
Objects are used to store keyed collections of various data and more complex entities.
In JavaScript, almost everything is an object. 
All JavaScript values, except primitives (null, undefined, boolean, number, string, symbol, and bigint), are objects. 
Objects can be created using the object literal syntax or the Object constructor. 
Here are some examples of creating and using objects in JavaScript: 
// Creating an object using object literal syntax
const person = {
  name: 'Alice',
    age: 30,
    greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

// Accessing object properties
console.log(person.name); // Output: Alice
console.log(person.age); // Output: 30
// Calling a method
person.greet(); // Output: Hello, my name is Alice and I am 30 years old.
// Creating an object using the Object constructor
const car = new Object();
car.make = 'Toyota';
car.model = 'Corolla';
car.year = 2020;
console.log(car); // Output: { make: 'Toyota', model: 'Corolla', year: 2020 }
// Objects can also be nested
const company = {
  name: 'Tech Co.',
    employees: [
    { name: 'Bob', position: 'Developer' },
    { name: 'Carol', position: 'Designer' }
  ]
};
console.log(company.employees[0].name); // Output: Bob
console.log(company.employees[1].position); // Output: Designer
// Objects can have methods that manipulate their properties
const counter = {
  count: 0,
    increment: function() { 
    this.count++;
  }
};
counter.increment();
console.log(counter.count); // Output: 1
counter.increment();
console.log(counter.count); // Output: 2
// Objects can also be created using classes (ES6 and later)
class Person {
    constructor(name, age) {
    this.name = name;
    this.age = age;
  }
    greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
const person1 = new Person('Dave', 25);
person1.greet();
// Output: Hello, my name is Dave and I am 25 years old.
// Objects can be used to represent real-world entities and their behaviors, making them a fundamental part of JavaScript programming.
*/