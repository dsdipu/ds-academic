---
title: "CSS Selectors"
description: "Master CSS selectors — element, class, ID, combinators, pseudo-classes, and specificity. With exam questions and common mistakes."
sidebar_position: 1
tags: [CSS, Web Technologies, Beginner]
keywords: [css selectors, class selector, id selector, specificity, combinators, pseudo-class, css rules]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ExamSidebar from '@site/src/components/ExamSidebar';
import TeacherPerspective from '@site/src/components/TeacherPerspective';
import ProgressTracker from '@site/src/components/ProgressTracker';
import DownloadPDF from '@site/src/components/DownloadPDF';

# CSS Selectors

<LastUpdated date="2026-05-22" timeTo="2–3 hours" difficulty="Beginner" />

<ExamSidebar
  examWeight="8–12% of exam"
  questionTypes={["Short definition (3 marks)", "Compare selector types (5 marks)", "Specificity calculation"]}
  keywords={["selector", "specificity", "class", "ID", "combinator", "pseudo-class", "cascade"]}
  timeAllocation="12–15 minutes"
  lastYear="Specificity question in 2023 Midterm"
/>

---

## 📌 Quick Summary (30 seconds)

CSS selectors are patterns used to **select HTML elements** you want to style. The three most important: **element selector** (`p`) targets all paragraphs, **class selector** (`.highlight`) targets elements with that class, and **ID selector** (`#header`) targets one specific element. **Specificity** determines which rule wins when multiple rules target the same element.

---

## 📚 Detailed Explanation

### The Anatomy of a CSS Rule

```css
selector {
    property: value;
    property: value;
}
```

Example:
```css
p {                     /* selector */
    color: blue;        /* declaration: property + value */
    font-size: 16px;
}
```

### Types of CSS Selectors

#### 1. Element Selector (Type Selector)
Selects ALL elements of that type.

```css
h1 {
    color: navy;
}

p {
    font-size: 16px;
    line-height: 1.6;
}
```

Use when: You want ALL headings or ALL paragraphs styled the same way.

#### 2. Class Selector (`.classname`)
Selects all elements with that `class` attribute. **Most commonly used.**

```html
<!-- HTML -->
<p class="highlight">Important paragraph</p>
<span class="highlight">Important span</span>
```

```css
/* CSS */
.highlight {
    background-color: yellow;
    font-weight: bold;
}
```

**Key facts:**
- Starts with a dot (`.`)
- Same class can be used on **multiple** elements
- One element can have **multiple** classes: `class="highlight large bold"`

#### 3. ID Selector (`#idname`)
Selects the **ONE** element with that specific `id` attribute.

```html
<header id="main-header">...</header>
```

```css
#main-header {
    background-color: #1A5F7A;
    color: white;
}
```

**Key facts:**
- Starts with `#`
- ID must be **unique** on a page — only one element per ID
- Higher specificity than class

#### 4. Universal Selector (`*`)
Selects **every single element** on the page.

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

Use sparingly — it affects everything.

#### 5. Attribute Selector
Selects elements based on their attribute values.

```css
input[type="text"] {
    border: 1px solid #ccc;
}

a[target="_blank"] {
    color: red; /* Links that open in new tab */
}
```

### Combinator Selectors

Combinators describe relationships between elements.

| Combinator | Symbol | Example | Selects |
|-----------|--------|---------|---------|
| Descendant | (space) | `div p` | Any `<p>` inside a `<div>` (any depth) |
| Child | `>` | `div > p` | `<p>` that is a **direct** child of `<div>` |
| Adjacent Sibling | `+` | `h1 + p` | First `<p>` immediately after `<h1>` |
| General Sibling | `~` | `h1 ~ p` | All `<p>` elements after `<h1>` (same parent) |

```css
/* Descendant: all <a> inside <nav> */
nav a {
    text-decoration: none;
}

/* Child: only direct <li> of <ul> (not nested ones) */
ul > li {
    list-style: square;
}

/* Adjacent sibling: the <p> right after <h2> */
h2 + p {
    font-size: 1.1em;
    color: #555;
}
```

### Pseudo-Classes

Pseudo-classes select elements based on their **state** or **position**.

```css
/* Link states */
a:link    { color: blue; }      /* unvisited link */
a:visited { color: purple; }   /* visited link */
a:hover   { color: red; }      /* mouse over */
a:active  { color: green; }    /* being clicked */

/* Structural pseudo-classes */
li:first-child  { font-weight: bold; }  /* first list item */
li:last-child   { color: gray; }         /* last list item */
li:nth-child(2) { background: yellow; } /* second item */
li:nth-child(odd) { background: #f5f5f5; } /* all odd items */
```

---

## 🎨 Visual Diagram: Specificity

```
Specificity Score (0, 0, 0, 0):
         │  │  │  │
         │  │  │  └─ Element selectors: h1, p, div     (+0,0,0,1 each)
         │  │  └──── Class selectors: .highlight        (+0,0,1,0 each)
         │  └─────── ID selectors: #header              (+0,1,0,0 each)
         └────────── Inline styles: style=""            (+1,0,0,0 each)
         
         !important  ← Overrides everything (use sparingly!)

Examples:
  p                  → (0,0,0,1)   ← lowest
  .highlight         → (0,0,1,0)
  p.highlight        → (0,0,1,1)
  #header            → (0,1,0,0)
  #header .highlight → (0,1,1,0)
  style=""           → (1,0,0,0)   ← highest (without !important)
```

**Explanation:** When two rules target the same element, the one with the **higher specificity score wins**. Compare left to right — a single ID (0,1,0,0) always beats any number of classes (0,0,5,0).

---

## 💻 Code Examples

### Complete Example: Selector Priority

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Selectors Demo</title>
    <style>
        /* Element selector - lowest priority */
        p {
            color: black;
            font-size: 16px;
        }

        /* Class selector - overrides element */
        .special {
            color: blue;
            font-weight: bold;
        }

        /* ID selector - overrides class */
        #unique {
            color: red;
        }

        /* Combinator: only p inside .container */
        .container > p {
            background: #f0f8ff;
        }

        /* Pseudo-class */
        p:hover {
            background: lightyellow;
        }
    </style>
</head>
<body>
    <div class="container">
        <p>Normal paragraph (black, blue bg)</p>
        <p class="special">Special paragraph (blue, bold, blue bg)</p>
        <p id="unique" class="special">Unique paragraph (red wins - ID beats class)</p>
    </div>
    <p>Outside container (no blue bg)</p>
</body>
</html>
```

---

## ⚠️ Common Mistakes to Avoid

### Mistake 1: Confusing Class (`.`) and ID (`#`) Symbols

**What students write:**
```css
/* Wrong: Using # for a class */
#highlight {
    color: red;
}
```
```html
<p class="highlight">Text</p>  <!-- This won't work! -->
```

**Why it's wrong:**
`#highlight` in CSS targets an element with `id="highlight"`. But the HTML has `class="highlight"`. The styles will not apply.

**The correct way:**
```css
/* For class="highlight", use . */
.highlight { color: red; }

/* For id="highlight", use # */
#highlight { color: blue; }
```

**Teacher's perspective:** "This is one of the most common errors in CSS questions. Students mix up `#` and `.` under exam pressure. Always double-check: dot for class, hash for ID."

---

### Mistake 2: Misunderstanding Descendant vs Child Selector

**What students write:**
```css
/* Student thinks this only affects direct children */
div p {
    color: red;
}
```

**Why it's wrong:**
`div p` (descendant selector) targets **all** `<p>` elements inside `<div>`, at any nesting depth — children, grandchildren, great-grandchildren.

**The correct way:**
```css
/* Direct children only: */
div > p { color: red; }

/* All descendants: */
div p { color: red; }
```

**Teacher's perspective:** "Scenario questions often test this. They show nested HTML and ask 'which elements does this selector affect?'"

---

### Mistake 3: Using ID for Multiple Elements

**What students write:**
```html
<p id="highlight">First</p>
<p id="highlight">Second</p>
<p id="highlight">Third</p>
```

**Why it's wrong:**
IDs must be unique — only one element on a page should have a given ID. Having multiple elements with the same ID is invalid HTML. Use a class instead for styling multiple elements.

**The correct way:**
```html
<p class="highlight">First</p>
<p class="highlight">Second</p>
<p class="highlight">Third</p>
```

```css
.highlight { background: yellow; }
```

---

## 📝 Practice Problems

### Problem 1 (Difficulty: Easy)
Write CSS to style all `<h2>` headings with dark blue colour and all paragraphs with `class="intro"` with a light grey background.

<details>
<summary>Click to reveal solution</summary>

```css
h2 {
    color: #003366;
}

.intro {
    background-color: #f5f5f5;
    padding: 1rem;
    border-left: 4px solid #003366;
}
```

</details>

### Problem 2 (Difficulty: Medium)
Calculate the specificity of these selectors and rank them from lowest to highest:
- `p`
- `div.container p`
- `#sidebar .menu a`
- `.nav > li`

<details>
<summary>Click to reveal solution</summary>

| Selector | Calculation | Score |
|----------|-------------|-------|
| `p` | 1 element | (0,0,0,1) |
| `.nav > li` | 1 class + 1 element | (0,0,1,1) |
| `div.container p` | 1 class + 2 elements | (0,0,1,2) |
| `#sidebar .menu a` | 1 ID + 1 class + 1 element | (0,1,1,1) |

Ranking (lowest → highest): `p` → `.nav > li` → `div.container p` → `#sidebar .menu a`

</details>

---

## 📖 Common Exam Questions

### Question 1 (5 marks)
**"Explain the different types of CSS selectors with examples."**

**Model Answer Structure:**
- Element selector with example — (1 mark)
- Class selector with example — (1 mark)
- ID selector with example — (1 mark)
- Difference between class and ID — (1 mark)
- One combinator or pseudo-class — (1 mark)

### Question 2 (5 marks)
**"What is specificity in CSS? How is it calculated?"**

**Model Answer Structure:**
- Definition: mechanism for resolving conflicts — (1 mark)
- Four levels: inline, ID, class, element — (2 marks)
- Calculation example — (1 mark)
- Correct ranking/outcome — (1 mark)

---

## 🎤 Viva/Interview Questions

**Q1: What is the difference between a class and an ID selector?**
**A1:** A class selector (`.name`) can be applied to multiple elements on a page and is used for reusable styles. An ID selector (`#name`) targets a single unique element. IDs have higher specificity than classes. In practice, use classes for styling and IDs for JavaScript targeting or anchor links.

**Q2: What does "cascading" mean in CSS?**
**A2:** "Cascading" means CSS applies rules from multiple sources in a specific order of priority: browser defaults → external stylesheets → internal styles → inline styles. Within the same source, specificity determines priority, and if specificity is equal, the **last rule wins** (source order).

---

## 👨‍🏫 From a Student's Perspective

The concept that confused me most was the difference between `div p` and `div > p`. I kept using the space combinator thinking it meant "direct children" — it doesn't. Space = ANY descendant. `>` = direct children only.

For specificity calculations, I made a simple rule for myself: **ID > Class > Element**. You can have 100 class selectors and a single ID still beats them all.

**What gets higher marks:** Show the specificity score in bracket notation (0,1,0,0) when answering specificity questions — examiners love it.

---

## 🔗 Next Steps

- **Recommended:** [CSS Box Model →](/docs/web-technologies/css/02-css-box-model)
- **Related:** [CSS Flexbox →](/docs/web-technologies/css/03-css-flexbox)

## 📥 Resources

<DownloadPDF filename="css-selectors" label="Download CSS Selectors PDF" />

<TeacherPerspective
  topic="CSS Selectors"
  whatGetsFullMarks={["Using dot for class, hash for ID", "Correct specificity calculation", "Code examples with HTML + CSS together", "Explaining descendant vs child combinator"]}
  commonDeductions={["Mixing up . and # symbols", "Claiming IDs can be reused", "Wrong specificity score"]}
  keywords={["selector", "class", "ID", "specificity", "cascade", "combinator", "pseudo-class", "descendant"]}
/>

<ProgressTracker noteId="/docs/web-technologies/css/css-selectors" totalNotes={21} />
