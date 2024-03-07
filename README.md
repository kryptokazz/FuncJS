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

const FunctionalModule = require('functional-module');

const fizzbuzz = (n) =>
  ((n % 3 === 0 ? 'Fizz' : '') + (n % 5 === 0 ? 'Buzz' : '') || n);

const numbers = FunctionalModule.range(1)(100);
const fizzbuzzResult = FunctionalModule.map(fizzbuzz)(numbers);

FunctionalModule.list2array(fizzbuzzResult).forEach((item) => {
  console.log(item);
});

```
