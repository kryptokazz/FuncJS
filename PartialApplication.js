// Function composition example
const compose = (f, g) => (x) => f(g(x));
const addOne = (x) => x + 1;
const multiplyByTwo = (x) => x * 2;

const composedFunction = compose(addOne, multiplyByTwo);
console.log(composedFunction(3)); // Output: 7 (3 * 2 + 1)

