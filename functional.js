// Functional module
const FunctionalModule = (() => {
  // Pair function
  const pair = (first) => (second) => {
    return { 
      first: first,
      second: second 
    };
  };

  // Accessor functions
  const fst = (p) => p.first;
  const snd = (p) => p.second;

  // List to array function
  const list2array = (xs) => {
    if (xs === null) {
      return [];
    } else {
      return [fst(xs)].concat(list2array(snd(xs)));
    }
  };

  // Array to list function
  const array2list = (arrayLike) => {
    if (arrayLike.length === 0) {
      return null;
    } else {
      return pair(arrayLike[0])(array2list(arrayLike.slice(1)));
    }
  };

  // Range function
  const range = (low) => (high) =>
    low > high
      ? null
      : pair(low)(range(low + 1)(high));

  // Map function
  const map = (f) => (xs) =>
    xs === null
      ? null
      : pair(f(fst(xs)))(map(f)(snd(xs)));

  // Fizzbuzz function
  const fizzbuzz = (n) =>
    n % 15 === 0 ? 'FizzBuzz'
    : n % 3 === 0 ? 'Fizz'
    : n % 5 === 0 ? 'Buzz'
    : n;

  // Expose public interface
  return {
    pair: pair,
    fst: fst,
    snd: snd,
    list2array: list2array,
    array2list: array2list,
    range: range,
    map: map,
    fizzbuzz: fizzbuzz
  };
})();

// Example usage:
let xs = FunctionalModule.pair(3)(FunctionalModule.pair(2)(FunctionalModule.pair(1)(null)));
console.log(FunctionalModule.list2array(xs));

let range = FunctionalModule.range(1)(10);
console.log(FunctionalModule.list2array(FunctionalModule.map((x) => x * x)(range)));

console.log(FunctionalModule.fizzbuzz(15));
console.log(FunctionalModule.list2array(FunctionalModule.map(FunctionalModule.fizzbuzz)(FunctionalModule.range(1)(100))));

