## Before Using the Functional Module 
```
let fizzBuzz = function (n) { 
  
    const arr = [] 
    for (i = 1; i <= n; i++) { 
        if (i % 15 === 0) arr.push("FizzBuzz") 
        else if (i % 3 === 0) arr.push("Fizz") 
        else if (i % 5 === 0) arr.push("Buzz") 
        else arr.push(i.toString()) 
    } 
    return arr 
  
}; 
console.log(fizzBuzz(15))
```

## FizzBuzz with Functional Module

```

// Import the functional module
const FunctionalModule = require('./functionalModule');

// Create a range from 1 to 5
const numbers = FunctionalModule.range(1)(5);

// Map a function to double each element
const doubledNumbers = FunctionalModule.map((x) => x * 2)(numbers);

console.log(FunctionalModule.list2array(doubledNumbers)); // Output: [2, 4, 6, 8, 10]



```
