---
title: "HTML Introduction"
description: "Learn what HTML is, its basic structure, common tags, and how to write your first webpage. Includes exam questions and common mistakes."
sidebar_position: 1
tags: [HTML, Web Technologies, Beginner]
keywords: [html, hypertext markup language, html structure, doctype, html tags, web development]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ExamSidebar from '@site/src/components/ExamSidebar';
import TeacherPerspective from '@site/src/components/TeacherPerspective';
import ProgressTracker from '@site/src/components/ProgressTracker';
import DownloadPDF from '@site/src/components/DownloadPDF';

# HTML Introduction

<LastUpdated date="2026-05-22" timeTo="2–3 hours" difficulty="Beginner" />

<ExamSidebar
  examWeight="10–15% of exam"
  questionTypes={["3-mark short answer", "8-mark broad question", "Scenario-based"]}
  keywords={["HyperText", "Markup Language", "DOCTYPE", "structure", "tags", "elements", "attributes"]}
  timeAllocation="15–20 minutes"
  lastYear="Asked in 2024 Final Exam"
/>

---

## 📌 Quick Summary (30 seconds)

HTML (HyperText Markup Language) is the **skeleton of every webpage**. It defines the structure and meaning of web content using **tags** — special labels enclosed in angle brackets like `<h1>` or `<p>`. Every webpage you visit starts with an HTML file. Without HTML, browsers have nothing to display.

---

## 📚 Detailed Explanation

### What is HTML?

HTML stands for **HyperText Markup Language**.

- **HyperText** — text that contains links to other documents (hyperlinks)
- **Markup** — annotations added to content to define its structure and meaning
- **Language** — a set of rules and syntax for writing web content

HTML is **not** a programming language — it doesn't have logic, loops, or variables. It is a **markup language** that describes the structure of a document.

### The Basic Structure of an HTML Page

Every valid HTML page follows this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first webpage.</p>
</body>
</html>
```

Let's break each part down:

| Part | What It Does |
|------|-------------|
| `<!DOCTYPE html>` | Tells the browser this is HTML5. Must be the very first line. |
| `<html lang="en">` | Root element. Everything goes inside this. `lang` helps accessibility/SEO. |
| `<head>` | Contains metadata — information **about** the page, not visible to users. |
| `<meta charset="UTF-8">` | Sets character encoding so special characters display correctly. |
| `<meta name="viewport">` | Makes the page mobile-responsive. |
| `<title>` | Text shown in browser tab. Also used by search engines. |
| `<body>` | Everything users actually **see** goes here. |

### Tags vs Elements vs Attributes

These three terms are often confused in exams:

**Tag** — The actual label in angle brackets:
```html
<p>        ← opening tag
</p>       ← closing tag
<br>       ← self-closing tag (no content needed)
```

**Element** — The complete unit: opening tag + content + closing tag:
```html
<p>This is a paragraph element.</p>
```

**Attribute** — Extra information added inside the opening tag:
```html
<a href="https://google.com" target="_blank">Google</a>
    ↑ attribute name    ↑ attribute value
```

### Common HTML Tags Reference

| Tag | Purpose | Example |
|-----|---------|---------|
| `<h1>` to `<h6>` | Headings (h1 = most important) | `<h1>Title</h1>` |
| `<p>` | Paragraph | `<p>Text here</p>` |
| `<a>` | Hyperlink | `<a href="url">Link</a>` |
| `<img>` | Image | `<img src="pic.jpg" alt="desc">` |
| `<ul>` / `<ol>` | Unordered/Ordered list | See below |
| `<li>` | List item | `<li>Item</li>` |
| `<div>` | Generic block container | `<div>...</div>` |
| `<span>` | Generic inline container | `<span>text</span>` |
| `<br>` | Line break (self-closing) | `Line 1<br>Line 2` |
| `<hr>` | Horizontal rule (self-closing) | `<hr>` |

---

## 🎨 Visual Diagram

```
Document Structure:
┌─────────────────────────────────┐
│ <!DOCTYPE html>                 │
│ ┌─────────────────────────────┐ │
│ │ <html>                      │ │
│ │  ┌──────────────────────┐   │ │
│ │  │ <head>               │   │ │
│ │  │   <title>Page</title>│   │ │
│ │  │   <meta charset>     │   │ │
│ │  └──────────────────────┘   │ │
│ │  ┌──────────────────────┐   │ │
│ │  │ <body>               │   │ │
│ │  │   <h1>Heading</h1>   │   │ │
│ │  │   <p>Paragraph</p>   │   │ │
│ │  └──────────────────────┘   │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

**Explanation:** The HTML document has a tree structure. `<html>` is the root, with `<head>` (metadata) and `<body>` (visible content) as its two children. Every element is nested inside another — this is called the **DOM tree**.

---

## 💻 Code Examples

### Example 1: Complete First Webpage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Profile Page</title>
</head>
<body>
    <h1>DS Dipu</h1>
    <p>CSE Student | Web Developer</p>

    <h2>About Me</h2>
    <p>I am learning web development at DS Academic.</p>

    <h2>My Skills</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>

    <h2>Contact</h2>
    <p>Email: <a href="mailto:ds@example.com">ds@example.com</a></p>
</body>
</html>
```

**Expected Output:** A page with a name heading, about section, skills list, and contact email.

### Example 2: Image with Link

```html
<!-- Image inside a link - click image to go to URL -->
<a href="https://dsdipu.vercel.app" target="_blank">
    <img src="profile.jpg" alt="DS Dipu's profile photo" width="200">
</a>
```

---

## ⚠️ Common Mistakes to Avoid (CRITICAL SECTION)

### Mistake 1: Forgetting DOCTYPE or Writing It Wrong

**What students write:**
```html
<!-- Wrong: Missing DOCTYPE entirely -->
<html>
<head><title>Page</title></head>
<body><h1>Hello</h1></body>
</html>

<!-- Also wrong: Old syntax -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
```

**Why it's wrong:**
Without `<!DOCTYPE html>`, the browser goes into "quirks mode" — it tries to guess the HTML version and may render your page incorrectly. In exams, missing DOCTYPE loses 1 mark automatically.

**The correct way:**
```html
<!DOCTYPE html>
<html lang="en">
...
```

**Teacher's perspective:** Examiners look for `<!DOCTYPE html>` as the very first line. Even if the rest of the HTML is perfect, missing DOCTYPE loses marks. It takes 0.5 seconds to type — never forget it.

---

### Mistake 2: Not Closing Tags (Especially `<p>`, `<li>`, `<div>`)

**What students write:**
```html
<ul>
    <li>Item 1
    <li>Item 2
    <li>Item 3
</ul>

<p>First paragraph
<p>Second paragraph
```

**Why it's wrong:**
While browsers are forgiving about unclosed tags, it creates unpredictable rendering, fails validation, and examiners penalise it. The W3C validator will flag every unclosed tag.

**The correct way:**
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<p>First paragraph</p>
<p>Second paragraph</p>
```

**Teacher's perspective:** "Proper nesting and tag closure is worth 1 mark in most marking schemes. Students lose easy marks here."

---

### Mistake 3: Using `<br>` for Spacing Instead of Proper Structure

**What students write:**
```html
<p>Name: John</p>
<br><br><br>
<p>Email: john@example.com</p>
```

**Why it's wrong:**
`<br>` is for line breaks **within** text content — like in a poem or address. Using multiple `<br>` tags for visual spacing is wrong semantically. Spacing is CSS's job, not HTML's.

**The correct way:**
```html
<!-- Use CSS margin/padding for spacing -->
<p>Name: John</p>
<p>Email: john@example.com</p>

<!-- Then in CSS: p { margin-bottom: 1.5rem; } -->
```

**Teacher's perspective:** "This shows a student doesn't understand separation of concerns. HTML = structure. CSS = styling. Mix them and you lose marks in quality-assessed answers."

---

## 📝 Practice Problems

### Problem 1: Build a Student Profile Page — (Difficulty: Easy)

Create an HTML page for a student profile with:
- Name as h1 heading
- Student ID and department as paragraphs
- A list of 3 subjects
- A link to their university website
- An email link

<details>
<summary>Click to reveal solution</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Profile</title>
</head>
<body>
    <h1>Rahim Ahmed</h1>
    <p>Student ID: CSE-2021-045</p>
    <p>Department: Computer Science and Engineering</p>

    <h2>Enrolled Subjects</h2>
    <ul>
        <li>Web Technologies</li>
        <li>Database Management</li>
        <li>Algorithms</li>
    </ul>

    <h2>University</h2>
    <p>
        <a href="https://www.buet.ac.bd" target="_blank">
            Bangladesh University of Engineering and Technology
        </a>
    </p>

    <h2>Contact</h2>
    <p>Email: <a href="mailto:rahim@student.buet.ac.bd">rahim@student.buet.ac.bd</a></p>
</body>
</html>
```

**Explanation:** Notice DOCTYPE on line 1, proper `lang` attribute, all tags closed, semantic headings used in order (h1 → h2), and links with `target="_blank"` for external sites.

</details>

### Problem 2: Identify the Errors — (Difficulty: Medium)

Find ALL the mistakes in this HTML:

```html
<html>
<head>
<title>Broken Page
</head>
<body>
<H1>Welcome</H1>
<p>Click <a href=google.com>here</a> to visit Google
<img src=photo.jpg>
</body>
```

<details>
<summary>Click to reveal solution</summary>

**Errors found:**
1. Missing `<!DOCTYPE html>`
2. Missing `lang` attribute on `<html>`
3. `<title>` not closed — missing `</title>`
4. `<H1>` should be lowercase `<h1>` (HTML is case-insensitive but convention is lowercase)
5. `href` value not in quotes — should be `href="https://google.com"` (missing `https://`)
6. `<p>` not closed
7. `<a>` not closed
8. `<img>` missing `alt` attribute
9. `src` value not in quotes

**Corrected version:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Fixed Page</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>Click <a href="https://google.com">here</a> to visit Google</p>
    <img src="photo.jpg" alt="A photograph">
</body>
</html>
```

</details>

---

## 📖 Common Exam Questions

### Question 1 (3 marks)
**"What is HTML? Explain its full form with meaning."**

**Model Answer Structure:**
- HTML stands for HyperText Markup Language — (1 mark)
- HyperText = text with links to other documents — (1 mark)
- Markup Language = uses tags to annotate/structure content — (1 mark)

**Full answer example:**
HTML stands for HyperText Markup Language. "HyperText" refers to text that contains hyperlinks — clickable references to other documents or resources on the web. "Markup" means the language uses special tags to annotate content, telling the browser how to display and structure it. Unlike programming languages, HTML has no logic — it only describes structure.

---

### Question 2 (8 marks — Broad)
**"Explain the basic structure of an HTML document with a complete example."**

**Model Answer Structure:**
- DOCTYPE declaration with explanation — (1 mark)
- `<html>` root element — (1 mark)
- `<head>` section and its contents (meta, title) — (2 marks)
- `<body>` section and its purpose — (1 mark)
- Complete working code example — (2 marks)
- Explanation of nesting/tree structure — (1 mark)

---

### Question 3 — Scenario/Case Study
**"A student wrote the following HTML and their page doesn't display correctly in the browser. Identify what is wrong and explain how to fix it."**

```html
<html>
<head><title>My Page</title></head>
<body>
<h1>Welcome
<p>This is my page
</html>
```

**What teachers expect:**
1. Identify missing `<!DOCTYPE html>` → browser in quirks mode
2. Missing `lang` attribute on `<html>`
3. `<h1>` not closed → rendering issue
4. `<p>` not closed → rendering issue
5. Provide corrected code
6. Explain each fix

---

## 🎤 Viva/Interview Questions

**Q1: What is the difference between HTML tags and HTML elements?**
**A1:** A **tag** is just the label — like `<p>` or `</p>`. An **element** is the complete unit: opening tag + content + closing tag. So `<p>Hello</p>` is one element made of two tags and the text content between them. (Keywords teachers listen for: "opening tag", "closing tag", "content")

**Q2: Why do we write `<!DOCTYPE html>` at the top?**
**A2:** `<!DOCTYPE html>` is a declaration — not an HTML tag — that tells the browser this is an HTML5 document. Without it, browsers enter "quirks mode" and try to replicate old, inconsistent rendering behavior from the 1990s. With it, browsers use "standards mode" and render the page correctly. (Keywords: "declaration", "HTML5", "standards mode", "quirks mode")

**Q3: What is the `alt` attribute in `<img>` and why is it important?**
**A3:** The `alt` attribute provides alternative text for an image when the image cannot be displayed — due to a slow connection, broken link, or the user using a screen reader. It's critical for accessibility (screen readers read it aloud) and for SEO (search engines index it). It is required by W3C standards. (Keywords: "accessibility", "screen reader", "SEO", "required")

---

## 👨‍🏫 From a Student's Perspective

The first time I studied HTML, I made the mistake of thinking `<!DOCTYPE html>` was optional because browsers still rendered my page without it. That was wrong — in exams, missing DOCTYPE = instant mark deduction.

**How teachers think when making questions on this topic:**
- They love asking "what does each part mean" because it tests understanding, not copying
- Scenario questions (find the error) test if you can apply knowledge, which is worth more marks
- They often include a correct answer with ONE mistake — you need to spot it

**What makes answer sheets get higher marks:**
- Write the DOCTYPE first thing when showing code
- Use proper indentation in your code examples — it shows you understand nesting
- When defining HTML, mention what it's NOT (not a programming language) — this shows deeper understanding
- Include the `lang` attribute on `<html>` even if they didn't ask for it

---

## 🔗 Next Steps

- **Recommended:** [HTML Elements →](/docs/web-technologies/html/02-html-elements)
- **Related:** [HTML Forms →](/docs/web-technologies/html/03-html-forms)
- **Jump ahead:** [CSS Selectors →](/docs/web-technologies/css/01-css-selectors)

---

## 📥 Resources

<DownloadPDF filename="html-introduction" label="Download this note as PDF" />

<TeacherPerspective
  topic="HTML Introduction"
  whatGetsFullMarks={[
    "Including DOCTYPE declaration",
    "Correct nesting of elements",
    "Using lang attribute on <html>",
    "Explaining tags vs elements vs attributes",
    "Providing working code examples"
  ]}
  commonDeductions={[
    "Missing DOCTYPE (-1 mark)",
    "Unclosed tags (-0.5 per tag)",
    "Missing alt attribute on images",
    "Using uppercase tag names"
  ]}
  keywords={["HyperText", "Markup Language", "DOCTYPE", "element", "attribute", "nesting", "structure"]}
/>

<ProgressTracker noteId="/docs/web-technologies/html/html-introduction" totalNotes={21} />

---

*⏱ Time to master: 2–3 hours | 🟢 Difficulty: Beginner | 🗓 Last updated: May 22, 2026*
