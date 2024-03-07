## Undeclared variable
```
try {
  console.log(undeclaredVariable); // This will throw a ReferenceError
} catch (error) {
  console.error("Error: Undeclared variable");
}
```

## Null value
```
let nullableVariable = null;
if (nullableVariable === null) {
  console.log("Nullable variable is null");
} else {
  console.log("Nullable variable is not null");
}
```
## Null value alternative 

```
const isUndefined = val => val === undefined;

isUndefined(undefined); // true

```

## Undefined value
```
let undefinedVariable;
if (typeof undefinedVariable === 'undefined') {
  console.log("Undefined variable is undefined");
} else {
  console.log("Undefined variable is defined");
{
```

## Undefine value alternative
```
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```

## Nil value 
```
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
isNil(''); // false
```

## Boolean value 
```
const isBoolean = val => typeof val === 'boolean';

isBoolean(true); // true
isBoolean(false); // true
isBoolean('true'); // false
isBoolean(null); // false
```
## Number value
```
const isNumber = val => typeof val === 'number' && !Number.isNaN(val);

isNumber(1); // true
isNumber('1'); // false
isNumber(NaN); // false
```
