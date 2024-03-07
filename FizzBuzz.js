// Import the Functional Module
const FunctionalModule = require('./functionalModule');

// Define a range of numbers from 1 to 100
const numbers = FunctionalModule.range(1)(15);

// Apply the fizzbuzz function to each number in the range
const fizzbuzzResult = FunctionalModule.map((n) =>
  n % 15 === 0 ? 'FizzBuzz'
  : n % 3 === 0 ? 'Fizz'
  : n % 5 === 0 ? 'Buzz'
  : n
)(numbers);

// Convert the result to an array
const fizzbuzzArray = FunctionalModule.list2array(fizzbuzzResult);

// Print the result
console.log(fizzbuzzArray.join('\n'));

