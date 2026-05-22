---
title: "JavaScript Variables"
description: "Understand var, let, and const in JavaScript — scope, hoisting, temporal dead zone, and when to use each. With exam questions."
sidebar_position: 1
tags: [JavaScript, Web Technologies, Beginner]
keywords: [javascript variables, var let const, scope, hoisting, temporal dead zone, block scope, function scope]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ExamSidebar from '@site/src/components/ExamSidebar';
import TeacherPerspective from '@site/src/components/TeacherPerspective';
import ProgressTracker from '@site/src/components/ProgressTracker';
import DownloadPDF from '@site/src/components/DownloadPDF';

# JavaScript Variables

<LastUpdated date="2026-05-22" timeTo="3–4 hours" difficulty="Beginner" />

<ExamSidebar
  examWeight="12–18% of exam"
  questionTypes={["Predict output (tricky)", "Compare var/let/const (5 marks)", "Error identification"]}
  keywords={["var", "let", "const", "scope", "hoisting", "block scope", "function scope", "temporal dead zone"]}
  timeAllocation="20–25 minutes"
  lastYear="'Predict the output' var hoisting question — 2024 Final"
/>

---

## 📌 Quick Summary (30 seconds)

JavaScript has three ways to declare variables: `var` (old, function-scoped, hoisted), `let` (modern, block-scoped, reassignable), and `const` (modern, block-scoped, cannot be reassigned). **Use `const` by default, `let` when you need to reassign, and avoid `var` entirely in modern code.** Hoisting is what causes `var` to behave weirdly — the declaration is moved to the top but the value is not.

---

## 📚 Detailed Explanation

### What Is a Variable?

A variable is a **named storage location** in memory. You give it a name, store a value, and use that name to access or change the value.

```javascript
let studentName = "Rahim Ahmed";
let age = 21;
let isEnrolled = true;
```

### The Three Keywords: `var`, `let`, `const`

#### `var` — The Old Way (ES5 and before)

```javascript
var name = "Alice";
var age = 25;
```

**Characteristics:**
- **Function-scoped** — accessible anywhere within the containing function
- **Globally scoped** if declared outside a function
- **Hoisted** — declaration moved to top of scope, value is `undefined`
- **Can be re-declared** in the same scope (dangerous!)

#### `let` — Modern Reassignable Variable (ES6+)

```javascript
let count = 0;
count = count + 1;  // ✅ Can reassign
```

**Characteristics:**
- **Block-scoped** — only accessible within `{}` where declared
- **Not hoisted** to usable state (Temporal Dead Zone)
- **Cannot be re-declared** in the same scope
- Can be reassigned

#### `const` — Modern Constant (ES6+)

```javascript
const PI = 3.14159;
const DB_URL = "mongodb://localhost/mydb";
```

**Characteristics:**
- **Block-scoped** — same as `let`
- **Cannot be reassigned** after initial assignment
- **Must be initialized** when declared
- Objects/arrays declared with `const` can still be **mutated** (properties changed)

### Scope Explained

**Scope** = where a variable is accessible.

```javascript
// Global scope
var globalVar = "I'm global";
let globalLet = "I'm also global";

function myFunction() {
    // Function scope
    var funcVar = "Only inside this function";
    let funcLet = "Also only inside this function";

    if (true) {
        // Block scope
        var blockVar = "I escape the block! (var)";
        let blockLet = "I stay in the block (let)";
        const blockConst = "I also stay in the block (const)";
        
        console.log(blockLet);   // ✅ Works
        console.log(blockConst); // ✅ Works
    }
    
    console.log(blockVar);   // ✅ Works! (var ignores blocks)
    console.log(blockLet);   // ❌ ReferenceError (let is block-scoped)
}
```

### Hoisting — The Most Exam-Tested Concept

**Hoisting** is JavaScript's behaviour of moving declarations to the top of their scope during the compilation phase — **before** any code executes.

**`var` hoisting (declaration hoisted, value NOT):**
```javascript
console.log(x);  // Output: undefined (NOT an error!)
var x = 5;
console.log(x);  // Output: 5

// JavaScript interprets this as:
var x;           // Declaration hoisted to top
console.log(x);  // undefined
x = 5;           // Assignment stays here
console.log(x);  // 5
```

**`let` and `const` hoisting (Temporal Dead Zone):**
```javascript
console.log(y);  // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 5;

// let/const ARE hoisted, but they're in the "Temporal Dead Zone"
// until the line where they're declared — accessing them throws an error
```

### The `const` with Objects Trap

```javascript
const person = { name: "Alice", age: 25 };

// This WORKS — mutating the object (not reassigning the variable)
person.name = "Bob";      // ✅ Allowed
person.age = 26;          // ✅ Allowed

// This FAILS — reassigning the variable
person = { name: "Carol" }; // ❌ TypeError: Assignment to constant variable
```

---

## 🎨 Visual Diagram

```
SCOPE VISUALIZATION:

Global Scope
│
├── var globalVar ──────────────────── accessible everywhere
│
├── function myFunc() {
│   │
│   ├── var funcVar ─────────────────── accessible in myFunc + nested blocks
│   ├── let funcLet ─────────────────── accessible in myFunc + nested blocks
│   │
│   └── if (condition) {     ← block
│       ├── var blockVar ───────────── ESCAPES block → accessible in myFunc
│       ├── let blockLet ───────────── STAYS in block only
│       └── const blockConst ────────── STAYS in block only
│       }
│   }
│

HOISTING TIMELINE:
Compilation Phase:     Runtime Phase:
   ↓ (hoist var)          ↓ (execute)
[var x; → top]      [console.log(x) → undefined]
                    [x = 5]
                    [console.log(x) → 5]
```

---

## 💻 Code Examples

### Example 1: Predicting Output — Classic Exam Question

```javascript
// Question: What is the output of this code?
console.log(a);   // ?
console.log(b);   // ?

var a = 10;
let b = 20;

// Answer:
// Line 1: undefined (var hoisted with undefined value)
// Line 2: ReferenceError (let in Temporal Dead Zone)
```

### Example 2: The `var` Loop Problem

```javascript
// Classic bug with var in loops:
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);  // Outputs: 3, 3, 3 (NOT 0, 1, 2!)
    }, 100);
}

// Fixed with let:
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);  // Outputs: 0, 1, 2 ✅
    }, 100);
}
```

**Explanation:** `var i` is function-scoped, so all three callbacks reference the same `i`. By the time they run, the loop has finished and `i = 3`. `let i` creates a new binding for each iteration.

### Example 3: When to Use Each

```javascript
// ✅ Best Practice:

// const for values that don't change
const MAX_SIZE = 100;
const API_URL = "https://api.example.com";
const config = { timeout: 5000 };  // const but object can be mutated

// let for values that change
let currentUser = null;
let score = 0;

function playGame() {
    score += 10;  // reassigning — needs let
    currentUser = "Alice";  // reassigning — needs let
}

// Never use var in modern JS
```

---

## ⚠️ Common Mistakes to Avoid

### Mistake 1: Using `var` and Getting Surprised by Hoisting

**What students write:**
```javascript
function greet() {
    console.log("Hello, " + name);  // Expected: error. Actual: "Hello, undefined"
    var name = "Alice";
    console.log("Hello, " + name);  // "Hello, Alice"
}
greet();
```

**Why it's wrong:**
Students expect the first `console.log` to throw an error because `name` hasn't been defined yet. But `var` is hoisted, so `name` exists as `undefined` before the assignment.

**The correct way:**
```javascript
function greet() {
    let name = "Alice";  // Declare before use
    console.log("Hello, " + name);  // "Hello, Alice"
}
```

**Teacher's perspective:** "Predict-the-output questions about hoisting appear in almost every JS exam. Understanding that `var` is hoisted with `undefined` is guaranteed exam content."

---

### Mistake 2: Trying to Reassign `const`

**What students write:**
```javascript
const score = 0;
score = 100;  // Student expects this to work
```

**Why it's wrong:**
`const` means the **binding** (the variable name) cannot point to a different value. The assignment `score = 100` attempts to rebind `score`, which throws `TypeError: Assignment to constant variable`.

**The correct way:**
```javascript
let score = 0;  // Use let when you need to reassign
score = 100;    // ✅ Works
```

---

### Mistake 3: Thinking `const` Makes Objects Immutable

**What students write (in exams):**
> "const prevents any changes to the variable's value"

**Why it's wrong:**
`const` only prevents **reassignment of the variable binding**. If `const` holds an object or array, the **contents** can still be modified.

**The correct explanation:**
```javascript
const arr = [1, 2, 3];
arr.push(4);        // ✅ Works — mutating the array
arr = [1, 2, 3, 4]; // ❌ TypeError — reassigning the variable

// To make an object truly immutable:
const frozen = Object.freeze({ x: 1, y: 2 });
frozen.x = 99;  // Silently fails (or error in strict mode)
```

---

## 📝 Practice Problems

### Problem 1: Predict the Output (Difficulty: Medium)
```javascript
var x = 1;
function test() {
    console.log(x);
    var x = 2;
    console.log(x);
}
test();
console.log(x);
```

<details>
<summary>Click to reveal solution</summary>

```
Output:
undefined
2
1
```

**Explanation:**
- Inside `test()`, `var x` is hoisted to the top of the function. So when the first `console.log(x)` runs, it sees the local `x` which is `undefined` (not the global `x = 1`).
- After `x = 2`, the second `console.log(x)` shows `2`.
- Outside `test()`, the global `var x = 1` is still `1`.

</details>

### Problem 2: Fix the Code (Difficulty: Medium)

```javascript
const student = {
    name: "Alice",
    grade: "A"
};

student = { name: "Bob", grade: "B" };  // Error!
```

<details>
<summary>Click to reveal solution</summary>

```javascript
// Option 1: Change const to let if you want to reassign
let student = { name: "Alice", grade: "A" };
student = { name: "Bob", grade: "B" };  // ✅ Now works

// Option 2: Mutate the existing object (keep const)
const student = { name: "Alice", grade: "A" };
student.name = "Bob";   // ✅ Works
student.grade = "B";    // ✅ Works
```

</details>

---

## 📖 Common Exam Questions

### Question 1 (5 marks)
**"What is the difference between `var`, `let`, and `const` in JavaScript?"**

**Model Answer Structure:**
- `var`: function-scoped, hoisted, can be re-declared — (2 marks)
- `let`: block-scoped, not usable before declaration, reassignable — (1.5 marks)
- `const`: block-scoped, must be initialized, cannot be reassigned — (1.5 marks)

### Question 2 (3 marks)
**"What is hoisting in JavaScript? Explain with an example."**

**Model Answer Structure:**
- Definition: JavaScript moves declarations to top of scope before execution — (1 mark)
- Example with `var` showing `undefined` output — (1 mark)
- Contrast with `let` showing ReferenceError — (1 mark)

### Question 3 — Predict the Output (5 marks)
```javascript
console.log(typeof x);
var x = 5;
let y = 10;
const z = 15;
console.log(x + y + z);
```

**Expected answer:**
- Line 1: `"undefined"` (var x is hoisted, value not yet assigned) — (2 marks)
- Line 2: `30` (5 + 10 + 15) — (1 mark)
- Explanation of why line 1 doesn't throw an error — (2 marks)

---

## 🎤 Viva/Interview Questions

**Q1: Why should we avoid `var` in modern JavaScript?**
**A1:** `var` has function scope, not block scope, which causes bugs — especially in loops and conditionals. Its hoisting behaviour (undefined before assignment) leads to confusing output. `var` can be accidentally re-declared in the same scope. ES6 introduced `let` and `const` which are safer — block-scoped and not usable before declaration (Temporal Dead Zone). In modern codebases, `var` is considered legacy.

**Q2: What is the Temporal Dead Zone?**
**A2:** The Temporal Dead Zone (TDZ) is the period between the start of a block and the point where a `let` or `const` variable is declared. During this period, the variable exists in the scope (it's been hoisted) but accessing it throws a `ReferenceError`. This is different from `var`, which is hoisted with the value `undefined`.

---

## 👨‍🏫 From a Student's Perspective

The hoisting concept took me the longest to understand. My trick: think of JavaScript as doing **two passes** — first it scans all `var` declarations and puts them at the top with value `undefined`, then it runs the code. That mental model explains every hoisting question.

**For exams:** When you see a predict-the-output question with `var`, always check if there's a variable used before its declaration. That variable will be `undefined`, not an error.

**What gets higher marks:** Mention "Temporal Dead Zone" when comparing `let/const` vs `var`. Most students don't know this term — using it shows advanced understanding and gets bonus marks from impressed examiners.

---

## 🔗 Next Steps

- **Recommended:** [JavaScript Functions →](/docs/web-technologies/javascript/02-js-functions)
- **Related:** [JavaScript Common Errors →](/docs/web-technologies/javascript/06-js-common-errors)

## 📥 Resources

<DownloadPDF filename="js-variables" label="Download JS Variables PDF" />

<TeacherPerspective
  topic="JavaScript Variables"
  whatGetsFullMarks={["Correctly explaining hoisting with undefined", "Mentioning Temporal Dead Zone", "Predicting output questions correctly", "Explaining const ≠ immutable for objects"]}
  commonDeductions={["Saying let/const are never hoisted (they are, just TDZ)", "Thinking const makes objects immutable", "Incorrect output predictions"]}
  keywords={["var", "let", "const", "hoisting", "scope", "block scope", "function scope", "Temporal Dead Zone", "undefined"]}
/>

<ProgressTracker noteId="/docs/web-technologies/javascript/js-variables" totalNotes={21} />
