---
title: "JavaScript Functions"
description: "Master JavaScript functions — declarations, expressions, arrow functions, parameters, return values, scope, and closures."
sidebar_position: 2
tags: [JavaScript, Web Technologies, Beginner]
keywords: [javascript functions, function declaration, function expression, arrow function, parameters, return, scope, closure, callback]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ExamSidebar from '@site/src/components/ExamSidebar';
import ProgressTracker from '@site/src/components/ProgressTracker';
import TeacherPerspective from '@site/src/components/TeacherPerspective';

# JavaScript Functions

<LastUpdated date="2026-05-22" timeTo="3 hours" difficulty="Beginner" />

<ExamSidebar
  examWeight="12–15% of exam"
  questionTypes={["Write a function (code question)", "Explain arrow vs declaration", "Predict output with closures"]}
  keywords={["function declaration", "function expression", "arrow function", "parameters", "arguments", "return", "scope", "closure", "callback", "hoisting"]}
  timeAllocation="18–20 minutes"
/>

## 📌 Quick Summary (30 seconds)

Functions are **reusable blocks of code** that perform a task. JavaScript has three main ways to define them: **function declarations** (hoisted, named), **function expressions** (not hoisted, assigned to variable), and **arrow functions** (ES6, concise, no own `this`). Functions have their own **scope** — variables declared inside are not accessible outside.

## 📚 Core Concepts

### Three Ways to Define Functions

```javascript
// 1. Function Declaration — hoisted, can be called before definition
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob"));   // "Hello, Bob!" — reusable!

// 2. Function Expression — NOT hoisted, assigned to variable
const greetExpr = function(name) {
  return "Hi, " + name;
};

// 3. Arrow Function (ES6) — concise syntax, no own 'this'
const greetArrow = (name) => "Hey, " + name;
const square = n => n * n;           // single param: no parentheses needed
const add = (a, b) => a + b;         // multiple params: need parentheses
const getObj = () => ({ key: "val" }); // returning object: wrap in ()
```

### Parameters vs Arguments

```javascript
// Parameters: variables in function definition
function add(a, b) { // a and b are PARAMETERS
  return a + b;
}

// Arguments: values passed when calling
add(3, 5); // 3 and 5 are ARGUMENTS

// Default parameters (ES6)
function greet(name = "Student") {
  return "Hello, " + name;
}
greet();         // "Hello, Student"
greet("Alice");  // "Hello, Alice"

// Rest parameters — collects remaining args into array
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3, 4, 5); // 15
```

### Return Values

```javascript
// Without return: function returns undefined
function sayHi() {
  console.log("Hi!");
  // no return statement
}
const result = sayHi(); // result = undefined

// With return: function returns the value
function double(n) {
  return n * 2;
}
const result = double(5); // result = 10

// Early return pattern
function checkAge(age) {
  if (age < 18) return "Minor";
  if (age < 65) return "Adult";
  return "Senior";
}
```

### Function Scope

```javascript
const x = "global";

function outer() {
  const x = "outer"; // shadows global x
  
  function inner() {
    const x = "inner"; // shadows outer x
    console.log(x);    // "inner"
  }
  
  inner();
  console.log(x);  // "outer"
}

outer();
console.log(x);   // "global"
```

### Closures — Advanced (Exam Favourite)

A closure is when a function **remembers** the variables from its outer scope even after the outer function has finished.

```javascript
function makeCounter() {
  let count = 0;       // count is in outer scope
  
  return function() {  // inner function returned
    count++;           // inner function "closes over" count
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// count persists across calls!
```

### Callbacks

```javascript
// A callback is a function passed as argument to another function
function doMath(a, b, operation) {
  return operation(a, b);
}

doMath(5, 3, (a, b) => a + b); // 8
doMath(5, 3, (a, b) => a * b); // 15

// Very common with array methods:
[1, 2, 3, 4, 5].filter(n => n > 2);      // [3, 4, 5]
[1, 2, 3].map(n => n * 2);               // [2, 4, 6]
[1, 2, 3].reduce((sum, n) => sum + n, 0); // 6
```

## ⚠️ Common Mistakes

### Mistake 1: Calling Function Without `()`
```javascript
// WRONG: referencing the function, not calling it
const result = greet;       // result is the function itself
console.log(result);        // [Function: greet]

// CORRECT: adding () calls it
const result = greet("Ali"); // calls the function
```

### Mistake 2: Forgetting `return`
```javascript
// WRONG: no return
function add(a, b) {
  a + b; // computed but not returned!
}
add(2, 3); // undefined

// CORRECT
function add(a, b) {
  return a + b;
}
```

### Mistake 3: Arrow Functions and `this`
```javascript
const obj = {
  name: "Alice",
  greet: () => {
    console.log("Hi, " + this.name); // 'this' is NOT the object!
  }
};
obj.greet(); // "Hi, undefined"

// CORRECT: use regular function for methods
const obj = {
  name: "Alice",
  greet: function() {
    console.log("Hi, " + this.name); // 'this' is the object
  }
};
obj.greet(); // "Hi, Alice"
```

## 📖 Exam Questions

### Question 1 (5 marks)
**"Explain the difference between function declarations and arrow functions."**
- Declaration is hoisted, arrow function is not — (1 mark)
- Different syntax shown — (1 mark)
- Arrow functions have no own `this` — (1 mark)
- Arrow functions can be concise (implicit return) — (1 mark)
- Code example of each — (1 mark)

### Question 2 (3 marks) — Predict Output
```javascript
function outer() {
  let x = 10;
  function inner() { return x + 5; }
  return inner();
}
console.log(outer());
```
**Answer:** `15`. inner() accesses outer's x=10 via closure.

<TeacherPerspective
  topic="JavaScript Functions"
  whatGetsFullMarks={["Explaining hoisting difference", "Demonstrating closures", "Arrow vs regular 'this' difference", "Callback examples with array methods"]}
  commonDeductions={["Missing () when calling functions", "Forgetting return statement", "Using arrow functions for object methods"]}
  keywords={["function declaration", "function expression", "arrow function", "parameter", "argument", "return", "scope", "closure", "callback", "hoisting"]}
/>

<ProgressTracker noteId="/docs/web-technologies/javascript/js-functions" totalNotes={21} />
