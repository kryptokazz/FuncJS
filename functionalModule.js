// Define your functional module
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

  // Filter function
  const filter = (f) => (xs) => {
    if (xs === null) {
      return null;
    } else if (f(fst(xs))) {
      return pair(fst(xs))(filter(f)(snd(xs)));
    } else {
      return filter(f)(snd(xs));
    }
  };

  // Reduce function
  const reduce = (f) => (acc) => (xs) => {
    if (xs === null) {
      return acc;
    } else {
      return reduce(f)(f(acc)(fst(xs)))(snd(xs));
    }
  };

  // Curry function
  const curry = (fn) => {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return function (...moreArgs) {
          return curried.apply(this, args.concat(moreArgs));
        };
      }
    };
  };

  // Expose public interface
  return {
    pair: pair,
    fst: fst,
    snd: snd,
    list2array: list2array,
    array2list: array2list,
    range: range,
    map: map,
    filter: filter,
    reduce: reduce,
    curry: curry
  };
})();

module.exports = FunctionalModule;

