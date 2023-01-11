# Evaluation

Please make sure you **preview** this file in order to see it formatted properly
You can click right click on the file name at the top and then click Open Preview

## Motivation

For each question it would also be a good idea to provide a brief comment justifying your answer wherever possible.

---

## Question 0

Consider the code below:

```js
const arr = [];
arr[3] = "hi";
```

What will `arr.length` evaluate to?

a) `0`

b) `1`

c) `3`

d) `4` // arr.length will be 4, the first 0,1,2, indexes will be left empty but created

---

## Question 1

Consider the code below:

```js
const letters = ["a", "b", "c"];
console.log(letters[2]);
console.log(letters[1]);
console.log(letters[0]);
```

Which order will the following `console.log`s appear?

a) `c`, `b`, `a`  // this is the order of these console logs

b) `a`, `c`, `b`

c) `c`, `a`, `b`

d) `a`, `c`, `b`

---

## Question 2

What will be printed to the console in this example? 👉

```js
const items = ["hello", , , "there"];
console.log(items.length);
```

a) `2`

b) `3`

c) `4` //this will be the length

d) Won't work - will throw a `SyntaxError`

---

## Question 3

What will happen when the following block of code is ran:

This question is designed to make you think about breaking down complex expressions.
Hint: Start at the left-hand side of the expression when you're evaluating the expression below.

```js
const people = [["Marie Curie"], ["Albert Einstein"]];

console.log(people[0][0][1]);
```

a) `"M"` will be printed to the `console`

b) It will throw an error

c) `"C"` will be printed to the `console`

d) `"a`" will be printed to the `console`   // a will be printed

---

## Question 4

Consider the code below:

```js
const arr = [];
arr[100] = "X";
```

What will `arr.length` evaluate to?

a) `0`

b) `101`  // this will be the length

c) `100`

d) `undefined`

---

## Question 5

**Part 1** What will happen when the following piece of code is executed?

```js
const emptyArray = [];
console.log(emptyArray[0]);
```

a) Will print `undefined` // this one

b) Will print `0`

c) Will print `[]`

d) Will throw an `Error`

**Part 2** What will happen when the following piece of code is executed?

```js
const emptyArray = [];
console.log(emptyArray[0][1]);
```

a) Will print `undefined`

b) Will print `0`

c) Will print `[]`

d) Will throw an `Error`  // will throw an error because unlike before this index CANNOT be defined

---
