// Import the functional module
const FunctionalModule = require('./functionalModule');

// Create a range from 1 to 5
const numbers = FunctionalModule.range(1)(5);

// Map a function to double each element
const doubledNumbers = FunctionalModule.map((x) => x * 2)(numbers);

console.log(FunctionalModule.list2array(doubledNumbers)); // Output: [2, 4, 6, 8, 10]

