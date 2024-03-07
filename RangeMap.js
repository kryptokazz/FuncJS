// Import the functional module
const FunctionalModule = require('./functionalModule');

// Create a range from 1 to 10
const numbers = FunctionalModule.range(1)(10);

// Reduce the range to calculate the sum of the elements
const sum = FunctionalModule.reduce((acc) => (curr) => acc + curr)(0)(numbers);

console.log(sum); // Output: 55

