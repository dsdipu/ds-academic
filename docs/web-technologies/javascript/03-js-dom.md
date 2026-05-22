---
title: "JavaScript DOM"
description: "Master JavaScript DOM manipulation — selecting elements, changing content, styling, creating/removing elements, and traversing the DOM."
sidebar_position: 3
tags: [JavaScript, Web Technologies, Intermediate]
keywords: [DOM, document object model, querySelector, getElementById, innerHTML, addEventListener, createElement, appendChild]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ProgressTracker from '@site/src/components/ProgressTracker';

# JavaScript DOM

<LastUpdated date="2026-05-22" timeTo="4 hours" difficulty="Intermediate" />

## 📌 Quick Summary (30 seconds)

The DOM (Document Object Model) is the browser's in-memory representation of an HTML page as a **tree of objects**. JavaScript can select any element, change its content, style, or attributes, and add/remove elements entirely. The most important methods: `querySelector` (single element), `querySelectorAll` (multiple), `innerHTML`, `textContent`, `style`, `classList`, `createElement`, `appendChild`.

## 📚 Core DOM Methods

### Selecting Elements

```javascript
// Single element (returns first match or null)
const title = document.querySelector('h1');
const btn = document.querySelector('#submit-btn');
const card = document.querySelector('.card');
const input = document.querySelector('input[type="email"]');

// Single element by ID (fastest)
const header = document.getElementById('main-header');

// Multiple elements (returns NodeList)
const allParagraphs = document.querySelectorAll('p');
const allCards = document.querySelectorAll('.card');

// Iterate NodeList
allCards.forEach(card => {
  card.style.border = '1px solid blue';
});
```

### Reading and Changing Content

```javascript
const el = document.querySelector('p');

// Reading
console.log(el.textContent);  // plain text only
console.log(el.innerHTML);    // HTML including tags

// Writing
el.textContent = 'New plain text';  // safe: no HTML parsing
el.innerHTML = '<strong>Bold</strong> text'; // parses HTML

// Attributes
const img = document.querySelector('img');
img.src = 'new-image.jpg';
img.alt = 'New description';

const link = document.querySelector('a');
console.log(link.getAttribute('href')); // get attribute
link.setAttribute('href', 'https://new-url.com'); // set attribute
link.removeAttribute('target'); // remove attribute
```

### Changing Styles

```javascript
const box = document.querySelector('.box');

// Direct style (camelCase property names)
box.style.backgroundColor = '#1A5F7A';
box.style.padding = '20px';
box.style.fontSize = '1.2rem';
box.style.display = 'none'; // hide element

// Using classList (preferred)
box.classList.add('active');
box.classList.remove('hidden');
box.classList.toggle('collapsed'); // add if absent, remove if present
console.log(box.classList.contains('active')); // true/false
```

### Creating and Removing Elements

```javascript
// Create element
const newCard = document.createElement('div');
newCard.className = 'card';
newCard.innerHTML = '<h3>New Card</h3><p>Card content</p>';

// Add to DOM
document.body.appendChild(newCard);  // add at end of body
const container = document.querySelector('.container');
container.appendChild(newCard);     // add at end of container
container.prepend(newCard);         // add at beginning

// Remove element
const oldEl = document.querySelector('.old-element');
oldEl.remove();                     // remove from DOM
container.removeChild(oldEl);      // alternative method
```

## 💻 Complete Example — Dynamic TODO List

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TODO List</title>
  <style>
    body { font-family: sans-serif; max-width: 500px; margin: 2rem auto; }
    .todo-item { display: flex; justify-content: space-between; padding: 0.5rem; border-bottom: 1px solid #eee; }
    .done { text-decoration: line-through; opacity: 0.5; }
  </style>
</head>
<body>
  <h1>My TODO List</h1>
  <div style="display:flex;gap:0.5rem;margin-bottom:1rem">
    <input type="text" id="todo-input" placeholder="Add a task...">
    <button id="add-btn">Add</button>
  </div>
  <ul id="todo-list"></ul>

  <script>
    const input = document.querySelector('#todo-input');
    const addBtn = document.querySelector('#add-btn');
    const list = document.querySelector('#todo-list');

    addBtn.addEventListener('click', () => {
      const text = input.value.trim();
      if (!text) return;

      // Create list item
      const li = document.createElement('li');
      li.className = 'todo-item';

      const span = document.createElement('span');
      span.textContent = text;
      span.addEventListener('click', () => span.classList.toggle('done'));

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '×';
      deleteBtn.addEventListener('click', () => li.remove());

      li.appendChild(span);
      li.appendChild(deleteBtn);
      list.appendChild(li);

      input.value = '';  // clear input
      input.focus();     // refocus
    });

    // Allow Enter key to add todo
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') addBtn.click();
    });
  </script>
</body>
</html>
```

## ⚠️ Common Mistakes

### Mistake 1: Running DOM Code Before Page Loads
```javascript
// WRONG: script in <head>, DOM not built yet
const btn = document.querySelector('#btn'); // null!

// CORRECT Option A: script at end of <body>
// CORRECT Option B: DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#btn');
});
// CORRECT Option C: async/defer attribute on script tag
```

### Mistake 2: Using innerHTML with User Input (XSS Risk)
```javascript
// WRONG: XSS vulnerability
const userInput = '<img src=x onerror="alert(document.cookie)">';
el.innerHTML = userInput; // executes malicious code!

// CORRECT: use textContent for user data
el.textContent = userInput; // displays as plain text, safe
```

## 📖 Exam Questions

### Question (8 marks)
**"Write JavaScript to: select a button, on click change a paragraph's text and add a CSS class to it."**
```javascript
const btn = document.querySelector('#myBtn');
const para = document.querySelector('#myPara');

btn.addEventListener('click', () => {
  para.textContent = 'Text changed by JavaScript!';
  para.classList.add('highlighted');
});
```
Mark scheme: querySelector (1), addEventListener (1), click event (1), textContent change (2), classList.add (2), correct structure (1).

<ProgressTracker noteId="/docs/web-technologies/javascript/js-dom" totalNotes={21} />
