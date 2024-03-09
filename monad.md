### Starting Code

```
function square(x: number): number {
    return x*x
}
```
```
function addOne(x: number): number {
    return x + 1
}
```

### Starting Call 
```
addOne(square(2)) => 5
```

### Call With Logging
```
addOne(square(2)) => {
  result: 5,
  logs: [
  "Squared 2 to get 4.",
  "Added 1 to 4 to get 5."
  ]
}
```


