/* functions are pieces of code that can be reused without having to write again and again.
Math functions give you a relationship between the input and output variables.
Functions definite example in code describes the relationship between the input variables and return value of the function.
Example:
function add (a,b) {
  return a+b ;
}
  console.log(add(5,2)) //prints 7
  There are function declarations which are built-in functions that are kept in the library.
  We can write our own functions/ user defined functions to perform specialized tasks.
  Before using a functions you must first define it somewhere in the scope.
  Classical functions declarations begin with:

  Name of newly created function 
  list of parameters the functions accepts 
  Block of javascript code enclosed in curly braces.
  Opening of curly braces indicates beginning of function code.

  Function expressions make functions while using a variable as a reference.
  There are simple arithmetic functions that can be reused
  Examples are:
  Addition 
  function add (a,b) {
  return a+b ;
}
  console.log(add(5,2))

  Subtraction 
  function subtract(a, b) {
  return a-b ;
  }
  const result = subtract(100,45);
  console.log(result);

  Multiplication 
  function multiply(a,b) {
  return a*b;
  }
  const product = multiply(10,9);
  console.log(product);

  Division
  function divide(a,b){
  if (b === 0){
  return "Error: Cannot be divided by zero!";
  }
  return a/b;
  }
const quotient = divide(40,4);
console.log(quotient);
*/