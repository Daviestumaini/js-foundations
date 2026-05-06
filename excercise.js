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

// Ride-Hailing Fare & Acceptance System
// This function calculates the fare for a ride based on the distance traveled and determines if the driver accepts the ride based on a minimum fare threshold.
function calculateFare(distance) {
  const baseFare = 5; // Base fare for the first kilometer
  const perKmRate = 2; // Rate per kilometer after the first kilometer
  const minimumFare = 10; // Minimum fare threshold for driver acceptance
  const peakHourSurcharge = 0.20; // 20% surcharge during peak hours
  const isPeakHour = false; // Change to true if it's peak hour
  let fare = baseFare;
  // Calculating fare based on distance traveled
  if (distance > 1) {
    fare += (distance - 1) * perKmRate;
  }
  // Checking if the calculated fare meets the minimum fare threshold for driver acceptance
  if (fare < minimumFare) {
    return "Fare is below the minimum threshold. Driver may not accept the ride.";
  }
  // If the time is during peak hours(morning or evening), apply a surcharge to the fare
  // Applying peak hour surcharge if applicable
  if (isPeakHour){
    fare += fare * peakHourSurcharge;
  }
  return fare;
}
// Example usage:
const distanceTraveled = 5;
const fare = calculateFare(distanceTraveled);
console.log("The calculated fare for the ride is: $" + fare.toFixed(2));
const acceptedRide = fare >= 10 ? "Driver accepts the ride." : "Driver may not accept the ride.";
console.log(acceptedRide);
const isPeakHour = true; // Change to true if it's peak hour
if (isPeakHour) {
  console.log("It's peak hour. A surcharge has been applied to the fare.");
}

// Smart Inventory Management 
// This function manages inventory by checking stock levels, updating inventory after sales, and generating restock alerts when stock is low.
const products = [
  { name: "Widget A", stock: 5, minStockLevel: 10, isDiscontinued: false },
  { name: "Widget B", stock: 15, minStockLevel: 10, isDiscontinued: false },
  { name: "Widget C", stock: 3, minStockLevel: 8, isDiscontinued: true },
  { name: "Widget D", stock: 2, minStockLevel: 5, isDiscontinued: false },
];

function getRestockList(products) {
  return products.filter(product =>
    product.stock < product.minStockLevel && !product.isDiscontinued
  );
}
// The stock < minStockLevel condition checks if the current stock of the product is below the minimum stock level, indicating that it needs restocking. The !product.isDiscontinued condition ensures that only products that are not discontinued are included in the restock list.
// The !isDiscontinued condition is important because it prevents discontinued products from being included in the restock list, even if their stock levels are low. This ensures that the inventory management system focuses on products that are still being sold and avoids unnecessary restocking of items that are no longer available for sale.
// Both conditions should be true for a product to be included in the restock list, meaning that the product must have low stock and must not be discontinued. This helps maintain an efficient inventory management system by prioritizing restocking efforts on products that are still active and in demand.
const restockList = getRestockList(products);
console.log("Needs Restocking:", restockList.map(p => p.name));
// Output: ["Widget A", "Widget D"]
console.log("The products that are not discounted arwe: " + products.filter(p => !p.isDiscontinued).map(p => p.name));

// Event Ticketing System
// This function manages event ticketing by checking ticket availability, processing ticket purchases, and generating sales reports.
const attendees = [
  { name: "Alice", hasTicket: true,  age: 21, hasSpecialPermission: false },
  { name: "Bob",   hasTicket: true,  age: 16, hasSpecialPermission: false },
  { name: "Carol", hasTicket: false, age: 25, hasSpecialPermission: false },
  { name: "Dave",  hasTicket: true,  age: 16, hasSpecialPermission: true  },
  { name: "Eve",   hasTicket: true,  age: 19, hasSpecialPermission: false },
];

// The getAllowedEntrants function filters the attendees based on their ticket status, age, and special permissions. It checks if the attendee has a ticket and if they are either of legal age (18 or older) or have special permission to attend the event. This ensures that only eligible attendees are allowed entry to the event.
// The age >= REQUIRED_AGE condition checks if the attendee is of legal age (18 or older) to attend the event. The hasSpecialPermission condition allows attendees who are underage but have special permission to attend the event. This combination of conditions ensures that the event can accommodate attendees with special circumstances while still enforcing age restrictions for general admission.
// Both conditions should be true for an attendee to be allowed entry, meaning that the attendee must have a ticket and must either be of legal age or have special permission. This helps maintain a safe and compliant event environment while also allowing for flexibility in attendance based on individual circumstances.
const REQUIRED_AGE = 18;

function getAllowedEntrants(attendees) {
  return attendees.filter(attendee =>
    attendee.hasTicket && (attendee.age >= REQUIRED_AGE || attendee.hasSpecialPermission)
  );
}

const allowed = getAllowedEntrants(attendees);
console.log("The attendees that are allowed and have a ticket are: " + allowed.map(a => a.name));

