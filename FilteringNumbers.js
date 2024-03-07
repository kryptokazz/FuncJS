const FunctionalModule = require('./functionalModule');


// Filter numbers greater than 3
const numbers = FunctionalModule.range(1)(5);
const filteredNumbers = FunctionalModule.list2array(FunctionalModule.filter((x) => x > 3)(numbers));
console.log(filteredNumbers); // Output: [4, 5]

