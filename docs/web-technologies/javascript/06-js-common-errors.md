---
title: "JavaScript Common Errors"
description: "The most frequent JavaScript errors in exams — TypeError, ReferenceError, undefined vs null, == vs ===, and debugging strategies."
sidebar_position: 6
tags: [JavaScript, Web Technologies, Beginner]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ProgressTracker from '@site/src/components/ProgressTracker';

# JavaScript Common Errors

<LastUpdated date="2026-05-22" timeTo="1.5 hours" difficulty="Beginner" />

## 📌 Quick Summary (30 seconds)

The 5 JavaScript errors that appear most in exams: **using `==` instead of `===`** (type coercion surprises), **calling methods on null** (TypeError), **accessing variables before declaration** (ReferenceError with let/const), **forgetting async/await** (getting Promises instead of values), and **mutating state directly** (in React, but also general JS).

## Top JavaScript Exam Errors

### ❌ Error 1: Using `==` Instead of `===`

```javascript
// == does TYPE COERCION (converts types before comparing)
0 == false   // true  (0 and false both falsy)
"" == false  // true
"5" == 5     // true  (string converted to number)
null == undefined // true

// === STRICT equality (no coercion)
0 === false  // false (different types)
"5" === 5    // false (different types)
null === undefined // false

// ALWAYS use === in JavaScript
```

### ❌ Error 2: TypeError — Cannot Read Properties of Null

```javascript
// Code
const el = document.querySelector('#non-existent');
el.textContent = 'Hello'; // TypeError: Cannot set properties of null

// Why: querySelector returns null when element not found

// Fix 1: Check before use
const el = document.querySelector('#non-existent');
if (el) {
  el.textContent = 'Hello';
}

// Fix 2: Optional chaining
document.querySelector('#non-existent')?.setAttribute('class', 'active');
```

### ❌ Error 3: ReferenceError — Variable Not Defined

```javascript
console.log(myVar); // ReferenceError: myVar is not defined
// Different from: console.log(varX); where var varX is declared (undefined)

// Common cause: typo
const userName = "Alice";
console.log(username); // ReferenceError! (case mismatch)
console.log(userName); // "Alice" ✓
```

### ❌ Error 4: Async Mistakes — Getting Promise Instead of Value

```javascript
// WRONG: forgot await
async function getUser() {
  const response = fetch('https://api.example.com/user');  // missing await
  console.log(response); // Promise {<pending>} — not the data!
}

// CORRECT
async function getUser() {
  const response = await fetch('https://api.example.com/user');
  const data = await response.json();
  console.log(data); // actual data object
}

// WRONG: calling async function without await
const user = getUser(); // Promise, not user data!
user.name; // undefined

// CORRECT
const user = await getUser(); // only inside async function
```

### ❌ Error 5: Object/Array Mutation Confusion

```javascript
// Arrays and objects are REFERENCE types
const arr1 = [1, 2, 3];
const arr2 = arr1;    // arr2 points to SAME array
arr2.push(4);
console.log(arr1);    // [1, 2, 3, 4] — arr1 is mutated!

// Fix: create a copy
const arr2 = [...arr1];  // spread creates new array
arr2.push(4);
console.log(arr1);    // [1, 2, 3] — unchanged

// Object same issue
const obj1 = { a: 1 };
const obj2 = obj1;    // same reference
obj2.b = 2;
console.log(obj1);    // { a: 1, b: 2 } — mutated!
const obj2 = { ...obj1 }; // fix with spread
```

### ❌ Error 6: `this` in Wrong Context

```javascript
const obj = {
  name: "Alice",
  greetLater: function() {
    setTimeout(function() {
      console.log("Hi, " + this.name); // 'this' is window/undefined!
    }, 1000);
  }
};

// Fix 1: Arrow function (no own 'this')
greetLater: function() {
  setTimeout(() => {
    console.log("Hi, " + this.name); // 'this' is obj ✓
  }, 1000);
}
```

## Quick Debugging Tips

```javascript
// 1. console.log to check values at each step
function processData(data) {
  console.log('Input:', data);       // check input
  const result = transform(data);
  console.log('After transform:', result); // check result
  return result;
}

// 2. typeof to check variable types
console.log(typeof null);       // "object" (JS quirk!)
console.log(typeof undefined);  // "undefined"
console.log(typeof 42);         // "number"
console.log(typeof "str");      // "string"
console.log(typeof []);         // "object" (not "array"!)
console.log(Array.isArray([])); // true

// 3. Try-catch for error handling
try {
  const data = JSON.parse(invalidJSON);
} catch (error) {
  console.error('Parse failed:', error.message);
}
```

## Exam Quick Reference: Error Types

| Error | Cause | Example |
|-------|-------|---------|
| ReferenceError | Variable doesn't exist | `console.log(x)` (no `var x`) |
| TypeError | Wrong type operation | `null.property` |
| SyntaxError | Invalid JS syntax | Missing `}` |
| RangeError | Value out of range | `new Array(-1)` |

<ProgressTracker noteId="/docs/web-technologies/javascript/js-common-errors" totalNotes={21} />
