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

function list2array(xs) {
    let result = [];
     while (xs !== null) {
        result.push(head(xs));
        xs = tail(xs);
}
return result;

}

list2array(xs)

xs

function array2list(arrayLike) {
  let result = null;
  let xs = Array.from(arrayLike).reverse();
  for (let i = 0; i < xs.length; ++i) {
    result = pair (xs[i]) (result);
    }
return result;
}

array2list([1, 2, 3])
array2list(list2array(xs))
array2list("Hello")

let range = (low) => (high) =>

    low > high
    ? null
    : pair (low) (range (low + 1) (high))

range (1) (100)

list2array(range (1) (100))

let map = (f) => (xs) =>
  xs === null
  ? null
  : pair (f (head (xs))) (map (f) (tail (xs)));

list2array(map ((x) => x*x ) (range (1) (10)))

let fizzbuzz = (n) =>
  ((n % 3 === 0 ? 'Fizz' : '') + (n % 5 === 0 ? 'Buzz' : '') || n);


fizzbuzz(3)
fizzbuzz(5)

list2array(map (fizzbuzz) (range (1) (100)))

```

```
fizzbuzz n
| n `mod` 15 == 0 = 'Fizzbuzz'
| n `mod` 3 == 0 = 'Fizz'
| n `mod` 5 == 0 = 'Buzz'
| otherwise = show n

map fizzbuzz [1..100]
```

  
  

