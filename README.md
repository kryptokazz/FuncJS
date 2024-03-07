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
[
  '1',        '2',
  'Fizz',     '4',
  'Buzz',     'Fizz',
  '7',        '8',
  'Fizz',     'Buzz',
  '11',       'Fizz',
  '13',       '14',
  'FizzBuzz'
]

```

## FizzBuzz with Functional Module

```
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
```



```
