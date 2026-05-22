---
title: "Common Exam Questions"
description: "Compiled list of the most frequently asked exam questions across HTML, CSS, JavaScript, and Docker — with model answer structures."
sidebar_position: 2
tags: [Exam Prep, Strategy]
keywords: [exam questions, common questions, html exam, css exam, javascript exam, docker exam, model answers]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ProgressTracker from '@site/src/components/ProgressTracker';

# Common Exam Questions

<LastUpdated date="2026-05-22" timeTo="2 hours" difficulty="Beginner" />

> These questions have appeared repeatedly across CSE exam papers. Preparing these guarantees coverage of the highest-probability topics.

---

## 📄 HTML Questions

### Q1 (3 marks) — Definition
**"What is HTML? Write its full form and explain each word."**

✅ HTML = HyperText Markup Language (1)
✅ HyperText = text with links to other documents (1)
✅ Markup Language = uses tags to annotate/structure content, not a programming language (1)

---

### Q2 (8 marks) — Structure
**"Explain the basic structure of an HTML document with a labelled example."**

Must include: DOCTYPE, html lang, head (meta charset + title), body — each with explanation. Diagram or indented code showing nesting.

---

### Q3 (5 marks) — Forms
**"Write HTML code for a student registration form with name, email, password, department (dropdown), and a submit button."**

✅ `<form action method>` (1) ✅ Correct input types (2) ✅ Labels with for/id (1) ✅ Submit button (1)

---

### Q4 (5 marks) — Semantic
**"What are semantic HTML elements? Name 5 with their purpose."**

✅ Definition: meaningful element names (1)
✅ Any 4 from: header, nav, main, section, article, aside, footer — with purpose (4)

---

### Q5 (3 marks) — Find the Error
**"Identify all errors in this HTML snippet:"**
```html
<html>
<head><title>My Page</title></head>
<body>
<img src=pic.jpg>
<p>Hello World
</html>
```
Errors: Missing DOCTYPE, missing `lang`, `src` not quoted, missing `alt`, unclosed `<p>`

---

## 🎨 CSS Questions

### Q6 (5 marks) — Selectors
**"Explain class selector vs ID selector in CSS. When would you use each?"**

✅ Class (`.name`) = multiple elements, reusable (1)
✅ ID (`#name`) = single unique element (1)
✅ Specificity: ID > Class (1)
✅ Code example of each (1)
✅ Use class for styling, ID for JS/anchors (1)

---

### Q7 (5 marks) — Box Model
**"Draw and explain the CSS box model. Calculate the total width of an element with width:200px, padding:15px, border:3px."**

✅ Diagram with all 4 layers labeled (2)
✅ Each layer explained (1)
✅ Calculation: 200 + 30 + 6 = 236px (1)
✅ Mention box-sizing: border-box (1)

---

### Q8 (8 marks) — Flexbox
**"Explain CSS Flexbox. Write CSS to create a navigation bar with logo on the left and links on the right."**

✅ Definition: 1D layout, flex container + flex items (1)
✅ Main vs cross axis (1)
✅ justify-content and align-items explained (2)
✅ Complete navbar code (3)
✅ Correct output described (1)

---

### Q9 (5 marks) — Specificity
**"What is CSS specificity? Calculate and rank: `p`, `#header p`, `.nav a`, `div.container > p`"**

| Selector | Score |
|----------|-------|
| `p` | (0,0,0,1) |
| `.nav a` | (0,0,1,1) |
| `div.container > p` | (0,0,1,2) |
| `#header p` | (0,1,0,1) |

---

## ⚡ JavaScript Questions

### Q10 (5 marks) — Variables
**"What is the difference between `var`, `let`, and `const` in JavaScript?"**

| | var | let | const |
|--|-----|-----|-------|
| Scope | Function | Block | Block |
| Hoisting | Yes (undefined) | TDZ | TDZ |
| Reassign | ✅ | ✅ | ❌ |
| Redeclare | ✅ | ❌ | ❌ |

---

### Q11 (3 marks) — Hoisting
**"What is hoisting? What does this code output?"**
```javascript
console.log(x);
var x = 5;
console.log(x);
```
Answer: `undefined`, then `5` — with explanation of var declaration being hoisted.

---

### Q12 (5 marks) — DOM
**"Write JavaScript code to select a button by ID and on click, change a paragraph's text and add a CSS class."**

```javascript
const btn = document.getElementById('myBtn');
const para = document.getElementById('myPara');
btn.addEventListener('click', () => {
  para.textContent = 'Changed!';
  para.classList.add('active');
});
```

---

### Q13 (5 marks) — Functions
**"Explain the difference between function declarations and arrow functions with examples."**

✅ Declaration is hoisted, arrow is not (1)
✅ Arrow has no own `this` (1)
✅ Arrow concise return (1)
✅ Code example of each (2)

---

### Q14 (5 marks) — Events
**"Explain event bubbling and event delegation."**

✅ Bubbling: events propagate up DOM from target (1)
✅ Example: click on child fires on parent too (1)
✅ stopPropagation() (1)
✅ Delegation: parent handles children's events (1)
✅ Code example (1)

---

## 🐳 Docker Questions

### Q15 (5 marks) — Basics
**"What is Docker? What problem does it solve?"**

✅ Platform for containerizing applications (1)
✅ Solves "works on my machine" problem (1)
✅ Packages app + dependencies + runtime (1)
✅ Runs consistently across environments (1)
✅ Example use case (1)

---

### Q16 (8 marks) — Docker vs VM
**"Compare Docker containers with virtual machines."**

| Feature | Container | VM |
|---------|-----------|-----|
| OS | Shared kernel | Own guest OS |
| Size | MBs | GBs |
| Start time | Seconds | Minutes |
| Isolation | Process-level | Hardware-level |
| Performance | Higher | Lower |

Plus introduction + conclusion = 8 marks.

---

### Q17 (5 marks) — Image vs Container
**"Explain the difference between a Docker image and a Docker container with an analogy."**

✅ Image: read-only blueprint/template (1)
✅ Container: running instance of image (1)
✅ Analogy: class vs object / recipe vs meal (1)
✅ docker build creates image, docker run creates container (1)
✅ Multiple containers from one image (1)

---

### Q18 (8 marks) — Dockerfile
**"Write a Dockerfile for a Node.js application that runs on port 3000."**

```dockerfile
FROM node:18-alpine          # 1 mark
WORKDIR /app                 # 1 mark
COPY package*.json ./        # 1 mark
RUN npm install              # 1 mark
COPY . .                     # 1 mark
EXPOSE 3000                  # 1 mark
CMD ["node", "server.js"]    # 1 mark
```
+ Explanation of each instruction = 8 marks

---

### Q19 (5 marks) — Docker Compose
**"What is Docker Compose? Write a docker-compose.yml for a web app + database."**

✅ Definition (1) ✅ YAML structure (1) ✅ Two services (1) ✅ depends_on (1) ✅ Named volume (1)

---

## 📊 Question Frequency Analysis

| Topic | Question Frequency | Typical Marks |
|-------|--------------------|---------------|
| HTML Structure | Very High ⬆️ | 5–8 |
| HTML Forms | Very High ⬆️ | 5–10 |
| CSS Selectors/Specificity | High ⬆️ | 5 |
| CSS Box Model | High ⬆️ | 3–5 |
| CSS Flexbox | High ⬆️ | 5–8 |
| JS Variables/Hoisting | Very High ⬆️ | 3–5 |
| JS DOM | High ⬆️ | 5–8 |
| Docker vs VM | Very High ⬆️ | 5–8 |
| Dockerfile | High ⬆️ | 5–8 |
| Docker Compose | Medium | 5 |

<ProgressTracker noteId="/docs/exam-prep/common-exam-questions" totalNotes={21} />
