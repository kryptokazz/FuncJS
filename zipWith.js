const FunctionalModule = require('./functionalModule');



// Using zipWith to combine two lists element-wise
const zipWith = (f) => (xs) => (ys) => {
  if (xs === null || ys === null) {
    return null;
  } else {
    return FunctionalModule.pair(f(FunctionalModule.fst(xs))(FunctionalModule.fst(ys)))(zipWith(f)(FunctionalModule.snd(xs))(FunctionalModule.snd(ys)));
  }
};

const addPairs = zipWith((x) => (y) => x + y);
const list1 = FunctionalModule.array2list([1, 2, 3]);
const list2 = FunctionalModule.array2list([4, 5, 6]);
console.log(FunctionalModule.list2array(addPairs(list1)(list2))); // Output: [5, 7, 9]
