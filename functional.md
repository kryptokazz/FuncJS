# Rules of Functional Programming:
1. no loops
2. no ifs
3. no side effects 
4. no arrays 
5. no assignments in functions
6. Function is a single return
7. Functions only have 0 or 1 argument

```
function sum(i) {
  return i <= 0 ? i + sum(i - 1);
}

```
```
function add(a) {
  return function(b) {
    return a + b;
}

add => (a) => (b) => a + b 

```
```
let pair = (first) => (second) => {
  return { 
    first: first,
    second: second 
  };
}

pair ((10) (20)) 

  {first: 10, second: 20} 

  let fst = (p) => p.first
  fst (pair (10) (20))
  
  let snd = (p) => p.second
  snd (pair (10) (20))

```
  

  
  

