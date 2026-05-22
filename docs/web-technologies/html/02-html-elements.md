---
title: "HTML Elements"
description: "Deep dive into HTML elements — block vs inline, void elements, nesting rules, and the most commonly tested elements in exams."
sidebar_position: 2
tags: [HTML, Web Technologies, Beginner]
keywords: [html elements, block elements, inline elements, void elements, nesting, div, span, p, heading]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ProgressTracker from '@site/src/components/ProgressTracker';

# HTML Elements

<LastUpdated date="2026-05-22" timeTo="2 hours" difficulty="Beginner" />

## 📌 Quick Summary (30 seconds)

HTML elements are the building blocks of webpages. Every element is either **block-level** (takes full width, starts on new line — like `<div>`, `<p>`, `<h1>`) or **inline** (takes only needed width, stays on same line — like `<span>`, `<a>`, `<img>`). **Void elements** like `<br>` and `<img>` have no content and no closing tag.

## 📚 Block vs Inline Elements

### Block-Level Elements
Start on a new line and take up the full width available.

```html
<div>This is a div</div>
<p>This is a paragraph</p>
<h1>This is a heading</h1>
<ul><li>List item</li></ul>
<table></table>
<form></form>
<header>, <footer>, <section>, <article>, <nav>
```

### Inline Elements
Flow within text — don't start new lines.

```html
<span>Inline span</span>
<a href="#">Link</a>
<strong>Bold text</strong>
<em>Italic text</em>
<img src="img.jpg" alt="...">
<input type="text">
<button>Click</button>
<label>Label</label>
```

### Void Elements (Self-Closing)
No content, no closing tag:

```html
<br>     <!-- line break -->
<hr>     <!-- horizontal rule -->
<img src="" alt="">
<input type="text">
<meta charset="UTF-8">
<link rel="stylesheet" href="style.css">
```

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Elements Demo</title>
</head>
<body>
    <!-- Block elements -->
    <h1>Main Heading</h1>
    <h2>Sub Heading</h2>
    <p>This is a <strong>paragraph</strong> with <em>inline</em> elements inside.</p>

    <!-- Lists -->
    <ul>
        <li>Unordered item 1</li>
        <li>Unordered item 2</li>
    </ul>

    <ol>
        <li>Ordered item 1</li>
        <li>Ordered item 2</li>
    </ol>

    <!-- Link and Image -->
    <a href="https://example.com" target="_blank">External Link</a>
    <br>
    <img src="photo.jpg" alt="A landscape photo" width="300">

    <!-- Div for grouping -->
    <div class="card">
        <h3>Card Title</h3>
        <p>Card content here.</p>
    </div>
</body>
</html>
```

## ⚠️ Common Mistakes

### Mistake 1: Nesting Block Inside Inline
```html
<!-- WRONG -->
<span><div>Content</div></span>

<!-- CORRECT: inline inside block -->
<div><span>Content</span></div>
```

### Mistake 2: Missing `alt` on Images
```html
<!-- WRONG -->
<img src="photo.jpg">

<!-- CORRECT -->
<img src="photo.jpg" alt="Description of photo">
```

## 📖 Exam Questions

**Q (5 marks): Differentiate between block-level and inline elements in HTML with examples.**

Model answer:
- Block elements start on new line, take full width (1 mark)
- Inline elements flow with text, take only needed width (1 mark)
- 2 block examples: `<div>`, `<p>`, `<h1>` (1 mark)
- 2 inline examples: `<span>`, `<a>`, `<strong>` (1 mark)
- Code demonstration (1 mark)

<ProgressTracker noteId="/docs/web-technologies/html/html-elements" totalNotes={21} />
