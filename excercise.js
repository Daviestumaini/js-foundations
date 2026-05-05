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


// Mobile Airtime Purchase Validator
// This function validates the purchase of airtime based on the amount, phone number, and balance. It checks if the phone number is valid, if the amount is sufficient, and if the balance is enough to cover the purchase.
function validateAirtimePurchase(amount, phoneNumber,balance) {
  // Check if the phone number is valid (10 digits)
    if (phoneNumber.length !== 10) {
        return "Invalid phone number. It should be 10 digits long.";
    }
    // Check if the phone number contains only digits
    if (amount < 1) {
        return "Invalid amount. It should be at least $1.";
    }
    // Check if the balance is sufficient for the purchase
    if (balance < amount) {
        return "Insufficient balance.";
    }
    // If all validations pass, the purchase is successful
    return "Airtime purchase is valid.";
    balance -= amount;
    // Update the balance after purchase
    return "Airtime purchase successful. New balance: $" + balance;
}
console.log(validateAirtimePurchase(10, "1234567890", 50));
console.log(validateAirtimePurchase(0, "1234567890", 50));
console.log(validateAirtimePurchase(10, "123456789", 50));
console.log(validateAirtimePurchase(10, "1234567890", 5));

// Parking Fee Calculator
// This function calculates the parking fee based on the number of hours parked. The first 2 hours cost $50 each, and any additional hour costs $30.
function calculateParkingFee(hours) {
    let fee = 0;
    // Calculate the fee based on the number of hours parked
    if (hours <= 2) {
        fee = hours * 50;
        // If parked for 2 hours or less, charge $50 per hour
        // If parked for more than 2 hours, charge $50 for the first 2 hours and $30 for each additional hour
    } else if (hours > 2) {
        fee = 2 * 50 + (hours - 2) * 30;
    }
    // Return the total parking fee
    return "The parking fee is: $" + fee;
}
console.log(calculateParkingFee(1));
console.log(calculateParkingFee(3));
console.log(calculateParkingFee(6));

// Grade Calculator
// ── 1. Student Grade Processing System ──────────────────────────
// This function processes an array of student scores and returns the total number of students, the number of passes, and the number of fails based on a grading system.
function processStudentGrades(scores) {
  const results = [];
  let passes = 0;
  let fails = 0;
// Looping through each score to determine the grade and count passes and fails
  for (let i = 0; i < scores.length; i++) {
    let grade;
// Determining the grade based on the score
    if (scores[i] >= 70) {
      grade = "A";
    } else if (scores[i] >= 60) {
      grade = "B";
    } else if (scores[i] >= 50) {
      grade = "C";
    } else {
      grade = "Fail";
    }
// Storing the result for each student
    if (grade === "Fail") {
      fails++;
    } else {
      passes++;
    }

  }
// Returning the total number of students, passes, and fails as an object
  return {
    totalStudents: scores.length,
    passes,
    fails,
  };
}

// Example usage:
const scores = [85, 62, 45, 73, 58, 91, 38, 66];
console.log(processStudentGrades(scores));



// ── 2. Supermarket Discount Calculator ──────────────────────────
// This function calculates the final amount after applying discounts based on the total price of items purchased.
function calculateFinalAmount(itemPrices) {
  let total = 0;
// Calculating the total price of all items
  for (let i = 0; i < itemPrices.length; i++) {
    total += itemPrices[i];
  }
// Applying discount based on the total price
  let discountRate = 0;
  let discountLabel = "No discount";
// If total is greater than 5000, apply a 10% discount. If total is greater than 2000, apply a 5% discount.
  if (total > 5000) {
    discountRate = 0.10;
    discountLabel = "10% discount (total > 5000)";
  } else if (total > 2000) {
    discountRate = 0.05;
    discountLabel = "5% discount (total > 2000)";
  }
// Calculating the discount amount and final amount after applying the discount
  const discountAmount = total * discountRate;
  const finalAmount = total - discountAmount;
// Returning the subtotal, discount applied, discount amount, and final amount as an object
  return {
    subtotal: total,
    discountApplied: discountLabel,
    discountAmount,
    finalAmount,
  };
}

// Example usage:
const items = [1200, 850, 3400, 600];
console.log(calculateFinalAmount(items));

