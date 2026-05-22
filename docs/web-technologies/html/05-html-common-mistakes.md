---
title: "HTML Common Mistakes"
description: "The top 10 HTML mistakes that lose exam marks — with wrong code, correct code, and teacher commentary for each."
sidebar_position: 5
tags: [HTML, Web Technologies, Beginner]
keywords: [html mistakes, html errors, common html errors, html validation, html exam mistakes]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ProgressTracker from '@site/src/components/ProgressTracker';

# HTML Common Mistakes

<LastUpdated date="2026-05-22" timeTo="1 hour" difficulty="Beginner" />

> This note compiles the most frequent HTML errors seen in exam papers. Each mistake has real wrong code, explanation, and the correct fix.

## 📌 Quick Summary (30 seconds)

The 3 most costly HTML exam mistakes: **missing DOCTYPE**, **unclosed tags**, and **missing `alt` on images**. These are 1-mark deductions each and take seconds to fix. The deeper mistakes — wrong nesting, using `<br>` for spacing, wrong form method — show fundamental misunderstanding and cost 2+ marks.

---

## The Top 10 HTML Exam Mistakes

### ❌ Mistake 1: Missing DOCTYPE
```html
<!-- WRONG -->
<html lang="en">
<head><title>Page</title></head>
<body></body>
</html>

<!-- CORRECT -->
<!DOCTYPE html>
<html lang="en">
<head><title>Page</title></head>
<body></body>
</html>
```
**Why it matters:** Browser enters quirks mode. Missing DOCTYPE = automatic 1 mark deduction in most marking schemes.

---

### ❌ Mistake 2: Unclosed Tags
```html
<!-- WRONG -->
<p>First paragraph
<p>Second paragraph
<ul>
  <li>Item 1
  <li>Item 2
</ul>

<!-- CORRECT -->
<p>First paragraph</p>
<p>Second paragraph</p>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

---

### ❌ Mistake 3: Missing alt on Images
```html
<!-- WRONG: no alt -->
<img src="photo.jpg">

<!-- CORRECT -->
<img src="photo.jpg" alt="A student studying at a desk">
```
**Why it matters:** Accessibility violation. Fails W3C validation. 1 mark deduction.

---

### ❌ Mistake 4: Using `<br>` for Spacing
```html
<!-- WRONG -->
<h2>Section 1</h2>
<br><br><br>
<h2>Section 2</h2>

<!-- CORRECT: use CSS margin -->
<h2>Section 1</h2>
<h2>Section 2</h2>
<!-- Then: h2 { margin-top: 2rem; } in CSS -->
```

---

### ❌ Mistake 5: Putting Block Elements Inside Inline Elements
```html
<!-- WRONG: div (block) inside span (inline) -->
<span>
  <div>Content</div>
</span>

<!-- WRONG: p inside a -->
<a href="#"><p>Click me</p></a>

<!-- CORRECT -->
<div><span>Content</span></div>
<a href="#"><span>Click me</span></a>
```

---

### ❌ Mistake 6: Attribute Values Without Quotes
```html
<!-- WRONG -->
<img src=photo.jpg alt=My photo width=300>
<a href=https://google.com>Google</a>

<!-- CORRECT -->
<img src="photo.jpg" alt="My photo" width="300">
<a href="https://google.com">Google</a>
```

---

### ❌ Mistake 7: Using `<b>` and `<i>` Instead of `<strong>` and `<em>`
```html
<!-- WRONG: purely visual, no semantic meaning -->
<b>Important text</b>
<i>Emphasized text</i>

<!-- CORRECT: semantic meaning -->
<strong>Important text</strong>  <!-- strong importance -->
<em>Emphasized text</em>          <!-- stress emphasis -->
```
**Teacher's note:** Examiners look for `<strong>` and `<em>` in semantic questions.

---

### ❌ Mistake 8: Skipping Heading Levels
```html
<!-- WRONG: jumping from h1 to h4 -->
<h1>Main Title</h1>
<h4>Subsection</h4>

<!-- CORRECT: sequential order -->
<h1>Main Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
```
**Why it matters:** Screen readers and search engines use heading hierarchy for navigation.

---

### ❌ Mistake 9: `<label>` Not Connected to Input
```html
<!-- WRONG: label and input not associated -->
<label>Email:</label>
<input type="email" name="email">

<!-- CORRECT: for= matches id= -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

---

### ❌ Mistake 10: Encoding Special Characters Wrong
```html
<!-- WRONG -->
<p>Price: 5 < 10 & discount > 0</p>
<p>Company name: AT&T</p>

<!-- CORRECT: use HTML entities -->
<p>Price: 5 &lt; 10 &amp; discount &gt; 0</p>
<p>Company name: AT&amp;T</p>
```

| Character | Entity |
|-----------|--------|
| `<` | `&lt;` |
| `>` | `&gt;` |
| `&` | `&amp;` |
| `"` | `&quot;` |
| `©` | `&copy;` |
| `®` | `&reg;` |

---

## 📖 Quick Validation Checklist

Before submitting any HTML in an exam:

- [ ] `<!DOCTYPE html>` on line 1
- [ ] `<html lang="en">` root element
- [ ] `<meta charset="UTF-8">` in head
- [ ] `<title>` present in head
- [ ] All tags opened and closed
- [ ] All attribute values in quotes
- [ ] All images have `alt` attributes
- [ ] Labels connected to inputs via `for`/`id`
- [ ] No block elements inside inline elements
- [ ] Special characters encoded with entities

<ProgressTracker noteId="/docs/web-technologies/html/html-common-mistakes" totalNotes={21} />
