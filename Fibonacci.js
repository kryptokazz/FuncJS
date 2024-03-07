// Import the functional module
const FunctionalModule = require('./functionalModule');

// Define the fibonacci function
const fibonacci = (n) => {
  const fib = (a, b, count) => {
    if (count === 0) {
      return a;
    } else {
      return fib(b, a + b, count - 1);
    }
  };

  // Generate Fibonacci numbers up to index n
  const generateFibonacci = (current, index) => {
    if (index === 0) {
      return FunctionalModule.pair(0)(null);
    } else {
      const nextFib = fib(0, 1, n - index);
      return FunctionalModule.pair(nextFib)(generateFibonacci(nextFib, index - 1));
    }
  };

  return generateFibonacci(0, n);
};

// Define the index of Fibonacci sequence you want to generate
const index = 10;

// Generate the Fibonacci sequence up to the specified index
const fibonacciSequence = FunctionalModule.list2array(fibonacci(index));

// Print the Fibonacci sequence
console.log(fibonacciSequence);

