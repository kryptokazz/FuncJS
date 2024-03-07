// Import the functional module
const FunctionalModule = require('./functionalModule');

// Create a range from 1 to 5
const numbers = FunctionalModule.range(1)(5);

// Reduce the range to calculate the sum of the elements
const sum = FunctionalModule.reduce((acc) => (curr) => acc + curr)(0)(numbers);

console.log(sum); // Output: 15

