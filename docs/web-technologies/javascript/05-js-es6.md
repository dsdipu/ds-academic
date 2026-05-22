---
title: "JavaScript ES6+ Features"
description: "Master ES6+ JavaScript features — destructuring, spread/rest, template literals, modules, promises, async/await, and optional chaining."
sidebar_position: 5
tags: [JavaScript, Web Technologies, Intermediate]
keywords: [ES6, destructuring, spread operator, rest, template literals, modules, promise, async await, optional chaining]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ProgressTracker from '@site/src/components/ProgressTracker';

# JavaScript ES6+ Features

<LastUpdated date="2026-05-22" timeTo="4 hours" difficulty="Intermediate" />

## 📌 Quick Summary (30 seconds)

ES6 (ES2015) modernised JavaScript with: **arrow functions**, **let/const**, **template literals** (backtick strings), **destructuring** (extract values), **spread/rest operators** (`...`), **classes**, **modules** (import/export), and **Promises**. ES2017 added **async/await** for cleaner async code. These are all heavily exam-tested.

## 📚 Key ES6+ Features

### Template Literals

```javascript
const name = "Alice";
const age = 21;

// Old way (concatenation)
const msg1 = "Hello, " + name + "! You are " + age + " years old.";

// Template literal (backticks, ${expression})
const msg2 = `Hello, ${name}! You are ${age} years old.`;
const math = `2 + 2 = ${2 + 2}`;           // expressions work
const multiLine = `Line 1
Line 2
Line 3`;                                     // real line breaks
```

### Destructuring

```javascript
// Array destructuring
const [first, second, third] = [10, 20, 30];
const [a, , c] = [1, 2, 3]; // skip second element
const [head, ...rest] = [1, 2, 3, 4]; // head=1, rest=[2,3,4]

// Object destructuring
const user = { name: "Alice", age: 21, city: "Dhaka" };
const { name, age } = user;       // extract by key name
const { name: userName } = user;  // rename: userName = "Alice"
const { country = "Bangladesh" } = user; // default value

// In function parameters
function displayUser({ name, age }) {
  console.log(`${name} is ${age}`);
}
displayUser(user); // "Alice is 21"
```

### Spread and Rest Operators

```javascript
// SPREAD: expand iterable into individual elements
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
const copy = [...arr1];              // shallow copy

// Spread with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a:1, b:2, c:3, d:4 }
const updated = { ...user, age: 22 }; // update one property

// REST: collect remaining into array
function logArgs(first, ...rest) {
  console.log(first); // first argument
  console.log(rest);  // array of remaining arguments
}
logArgs(1, 2, 3, 4); // first=1, rest=[2,3,4]
```

### Classes (ES6 OOP)

```javascript
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    return `${this.name} says ${this.sound}!`;
  }

  static create(name, sound) { // static method
    return new Animal(name, sound);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "Woof"); // call parent constructor
  }

  fetch() {
    return `${this.name} fetches the ball!`;
  }
}

const dog = new Dog("Rex");
dog.speak();  // "Rex says Woof!"
dog.fetch();  // "Rex fetches the ball!"
```

### Modules (Import/Export)

```javascript
// math.js
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export default class Calculator { ... }

// app.js
import Calculator from './math.js';         // default import
import { PI, add } from './math.js';        // named imports
import { add as sum } from './math.js';     // rename import
import * as MathUtils from './math.js';     // import all
```

### Promises and Async/Await

```javascript
// Promise-based fetch
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Async/Await (cleaner, exam-preferred)
async function getUsers() {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
getUsers();
```

### Optional Chaining and Nullish Coalescing

```javascript
// Optional chaining (?.)
const user = { profile: { name: "Alice" } };
console.log(user?.profile?.name);    // "Alice"
console.log(user?.address?.city);    // undefined (no error!)

// Without optional chaining:
// user.address.city // TypeError!

// Nullish coalescing (??) — returns right side if left is null/undefined
const name = user?.name ?? "Anonymous"; // "Anonymous" if null/undefined
const count = 0 ?? 10;   // 0 (not 10! 0 is not null/undefined)
const text = "" ?? "N/A"; // "" (not "N/A"!)

// Compare: || returns right side if left is FALSY (0, "", false, null, undefined)
const count2 = 0 || 10;   // 10 (because 0 is falsy)
```

## ⚠️ Common Mistakes

### Mistake 1: Spread Creates Shallow Copy Only
```javascript
const original = { a: 1, nested: { b: 2 } };
const copy = { ...original };
copy.nested.b = 99; // modifies original.nested.b too!
console.log(original.nested.b); // 99 — not a deep copy!
```

### Mistake 2: Confusing `??` with `||`
```javascript
const input = 0;
input || "default"; // "default" — wrong! 0 is falsy but valid
input ?? "default"; // 0 — correct! 0 is not null/undefined
```

## 📖 Exam Questions

### Question (5 marks)
**"What are template literals? Show 3 use cases."**
- Backtick strings with ${} interpolation — (1 mark)
- Expression evaluation inside ${} — (1 mark)
- Multi-line strings — (1 mark)
- Tagged templates (advanced) — (1 mark)
- Code examples — (1 mark)

<ProgressTracker noteId="/docs/web-technologies/javascript/js-es6" totalNotes={21} />
