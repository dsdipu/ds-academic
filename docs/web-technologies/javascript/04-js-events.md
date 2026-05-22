---
title: "JavaScript Events"
description: "Master JavaScript event handling — addEventListener, event types, event object, event bubbling, delegation, and preventing defaults."
sidebar_position: 4
tags: [JavaScript, Web Technologies, Intermediate]
keywords: [javascript events, addEventListener, event listener, event object, event bubbling, event delegation, preventDefault, stopPropagation]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ProgressTracker from '@site/src/components/ProgressTracker';

# JavaScript Events

<LastUpdated date="2026-05-22" timeTo="3 hours" difficulty="Intermediate" />

## 📌 Quick Summary (30 seconds)

Events are things that happen in the browser — a click, a keypress, a form submission. Use `addEventListener('event', handler)` to listen for events. The event handler receives an **event object** with details. Events **bubble up** the DOM — a click on a button also fires on its parent div, then body, then document. Use `event.preventDefault()` to stop default behavior (like form submission).

## 📚 Core Concepts

### addEventListener

```javascript
// Syntax
element.addEventListener('eventType', handlerFunction);

// Examples
const btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
  console.log('Button clicked!');
  console.log(event.target); // the clicked element
});

// Arrow function handler
btn.addEventListener('click', (e) => {
  console.log(e.type);       // "click"
  console.log(e.target);     // the element that was clicked
  console.log(e.currentTarget); // element listener is attached to
});

// Remove listener (must use named function)
function handler() { console.log('clicked'); }
btn.addEventListener('click', handler);
btn.removeEventListener('click', handler);
```

### Common Event Types

```javascript
// Mouse events
el.addEventListener('click', handler);       // single click
el.addEventListener('dblclick', handler);    // double click
el.addEventListener('mouseenter', handler);  // mouse enters element
el.addEventListener('mouseleave', handler);  // mouse leaves element
el.addEventListener('mousemove', handler);   // mouse moves over element

// Keyboard events
document.addEventListener('keydown', (e) => {
  console.log(e.key);    // "Enter", "a", "ArrowUp", etc.
  console.log(e.code);   // "KeyA", "Enter", "Space"
  console.log(e.ctrlKey); // true if Ctrl held
});
document.addEventListener('keyup', handler);

// Form events
form.addEventListener('submit', (e) => {
  e.preventDefault(); // stop page reload
  // handle form data
});
input.addEventListener('change', handler);  // value changed (after blur)
input.addEventListener('input', handler);   // every keystroke
input.addEventListener('focus', handler);   // element gains focus
input.addEventListener('blur', handler);    // element loses focus

// Window events
window.addEventListener('load', handler);          // page fully loaded
window.addEventListener('DOMContentLoaded', handler); // DOM ready
window.addEventListener('resize', handler);        // window resized
window.addEventListener('scroll', handler);        // page scrolled
```

### The Event Object

```javascript
document.addEventListener('click', (event) => {
  console.log(event.type);          // "click"
  console.log(event.target);        // element that triggered event
  console.log(event.currentTarget); // element handler is on
  console.log(event.clientX, event.clientY); // mouse position
  console.log(event.pageX, event.pageY);     // position from page top
  
  // Prevent default behavior
  event.preventDefault();
  
  // Stop bubbling
  event.stopPropagation();
});
```

### Event Bubbling

Events bubble up from the target element through its ancestors.

```html
<div id="outer">
  <div id="inner">
    <button id="btn">Click Me</button>
  </div>
</div>
```

```javascript
document.querySelector('#btn').addEventListener('click', () => console.log('button'));
document.querySelector('#inner').addEventListener('click', () => console.log('inner'));
document.querySelector('#outer').addEventListener('click', () => console.log('outer'));

// Clicking button outputs: "button", "inner", "outer"
// (bubbles up through ancestors)

// Stop bubbling:
document.querySelector('#btn').addEventListener('click', (e) => {
  e.stopPropagation(); // only "button" is logged
});
```

### Event Delegation

Instead of attaching listeners to each item, attach ONE listener to the parent:

```javascript
// INEFFICIENT: listener on each item
document.querySelectorAll('.todo-item').forEach(item => {
  item.addEventListener('click', handleClick);
});
// Problem: doesn't work for dynamically added items!

// EFFICIENT: delegation — one listener on parent
document.querySelector('#todo-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('todo-item')) {
    handleClick(e);
  }
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove();
  }
});
// Works for dynamically added items too!
```

## 💻 Complete Form Validation Example

```javascript
document.querySelector('#registration-form').addEventListener('submit', (e) => {
  e.preventDefault(); // stop default form submission

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value;

  // Validate
  if (name.length < 2) {
    showError('name-error', 'Name must be at least 2 characters');
    return;
  }

  if (!email.includes('@')) {
    showError('email-error', 'Please enter a valid email');
    return;
  }

  if (password.length < 8) {
    showError('password-error', 'Password must be at least 8 characters');
    return;
  }

  // All valid — submit
  console.log('Form submitted:', { name, email });
});

function showError(id, message) {
  const errorEl = document.querySelector('#' + id);
  errorEl.textContent = message;
  errorEl.style.display = 'block';
}
```

## ⚠️ Common Mistakes

### Mistake 1: Using `onclick` Attribute Instead of `addEventListener`
```html
<!-- WRONG: mixes HTML and JS, can only have one handler -->
<button onclick="handleClick()">Click</button>

<!-- CORRECT: separation of concerns, multiple handlers possible -->
<button id="btn">Click</button>
<script>
  document.querySelector('#btn').addEventListener('click', handleClick);
</script>
```

### Mistake 2: Forgetting `preventDefault` on Form Submit
```javascript
// WRONG: page reloads on submit
form.addEventListener('submit', (e) => {
  processForm(); // Page reloads before this runs!
});

// CORRECT
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop reload first
  processForm();
});
```

## 📖 Exam Questions

### Question (5 marks)
**"Explain event bubbling and event delegation with examples."**
- Event bubbling: events propagate from target to root — (1 mark)
- Example showing event order — (1 mark)
- stopPropagation() to cancel bubbling — (1 mark)
- Delegation: single listener on parent handles child events — (1 mark)
- Code example of delegation — (1 mark)

<ProgressTracker noteId="/docs/web-technologies/javascript/js-events" totalNotes={21} />
