// Undeclared variable
try {
  console.log(undeclaredVariable); // This will throw a ReferenceError
} catch (error) {
  console.error("Error: Undeclared variable");
}

// Null value
let nullableVariable = null;
if (nullableVariable === null) {
  console.log("Nullable variable is null");
} else {
  console.log("Nullable variable is not null");
}

// Undefined value
let undefinedVariable;
if (typeof undefinedVariable === 'undefined') {
  console.log("Undefined variable is undefined");
} else {
  console.log("Undefined variable is defined");
}
