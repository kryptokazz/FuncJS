# Rules of Functional Programming:
1. no loops
2. no ifs
3. no side effects 
4. no arrays 
5. no assignments in functions
6. Function is a single return
7. Functions only have 0 or 1 argument


# Functional Programming Rules Example


## Recursive Sum Function
```
function sum(i) {
  return i <= 0 ? i + sum(i - 1);
}

```

## Curried Addition Function

```
function add(a) {
  return function(b) {
    return a + b;
}

add => (a) => (b) => a + b 

```

## Pair Function

```
let pair = (first) => (second) => {
  return { 
    first: first,
    second: second 
  };
}

pair (10) (20)

  let fst = (p) => p.first
  fst (pair (10) (20))
  
  let snd = (p) => p.second
  snd (pair (10) (20))

pair (3) (pair (2) (pair (1) (null)))

let xs = pair (3) (pair (2) (pair (1) (null)))

xs

fst (xs)

snd (xs) 




```
  

  
  

