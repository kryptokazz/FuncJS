// Import the Functional Module
const FunctionalModule = require('./functionalModule');

describe('Functional Module Tests', () => {
  // Test the pair function
  test('Pair function creates a pair of values', () => {
    const pair = FunctionalModule.pair(1)(2);
    expect(pair).toEqual({ first: 1, second: 2 });
  });

  // Test the list2array function
  test('List2array function converts a list to an array', () => {
    const list = FunctionalModule.pair(1)(FunctionalModule.pair(2)(null));
    const array = FunctionalModule.list2array(list);
    expect(array).toEqual([1, 2]);
  });

  // Test the range function
  test('Range function generates a range of numbers', () => {
    const range = FunctionalModule.range(1)(5);
    expect(FunctionalModule.list2array(range)).toEqual([1, 2, 3, 4, 5]);
  });

  // Test the map function
  test('Map function applies a function to each element of a list', () => {
    const numbers = FunctionalModule.range(1)(5);
    const doubledNumbers = FunctionalModule.map((x) => x * 2)(numbers);
    expect(FunctionalModule.list2array(doubledNumbers)).toEqual([2, 4, 6, 8, 10]);
  });

  // Test the filter function
  test('Filter function filters elements of a list based on a predicate function', () => {
    const numbers = FunctionalModule.range(1)(5);
    const evenNumbers = FunctionalModule.filter((x) => x % 2 === 0)(numbers);
    expect(FunctionalModule.list2array(evenNumbers)).toEqual([2, 4]);
  });

  // Test the reduce function
  test('Reduce function reduces a list to a single value using a reducer function', () => {
    const numbers = FunctionalModule.range(1)(5);
    const sum = FunctionalModule.reduce((acc) => (curr) => acc + curr)(0)(numbers);
    expect(sum).toEqual(15);
  });

  // Test the curry function
  test('Curry function curries a function', () => {
    const add = (a) => (b) => a + b;
    const curriedAdd = FunctionalModule.curry(add);
    const add5 = curriedAdd(5);
    expect(add5(3)).toEqual(8);
  });
});

