---
title: "CSS Box Model"
description: "Master the CSS box model — content, padding, border, margin, box-sizing. Learn how browsers calculate element dimensions with exam-ready examples."
sidebar_position: 2
tags: [CSS, Web Technologies, Beginner]
keywords: [css box model, padding, margin, border, content, box-sizing, width, height, outline]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ExamSidebar from '@site/src/components/ExamSidebar';
import TeacherPerspective from '@site/src/components/TeacherPerspective';
import ProgressTracker from '@site/src/components/ProgressTracker';

# CSS Box Model

<LastUpdated date="2026-05-22" timeTo="2 hours" difficulty="Beginner" />

<ExamSidebar
  examWeight="10–15% of exam"
  questionTypes={["Draw the box model diagram", "Calculate total element width", "Explain box-sizing"]}
  keywords={["content", "padding", "border", "margin", "box-sizing", "border-box", "content-box", "total width"]}
  timeAllocation="15–20 minutes"
  lastYear="'Calculate total element width' — 2024 Midterm"
/>

## 📌 Quick Summary (30 seconds)

Every HTML element is a rectangular box with 4 layers: **content** (text/image), **padding** (space inside border), **border** (visible outline), **margin** (space outside). By default, `width` only sets content width — total element width = content + padding + border. `box-sizing: border-box` makes `width` include padding and border, which is much more intuitive.

## 📚 Detailed Explanation

### The Four Layers

```
┌─────────────── MARGIN ───────────────────┐
│  ┌─────────── BORDER ──────────────────┐ │
│  │  ┌──────── PADDING ──────────────┐  │ │
│  │  │  ┌──── CONTENT ────────────┐  │  │ │
│  │  │  │  text, images, etc.     │  │  │ │
│  │  │  └────────────────────────┘  │  │ │
│  │  └──────────────────────────────┘  │ │
│  └────────────────────────────────────┘ │
└──────────────────────────────────────────┘
```

- **Content** — actual text, images, or child elements. Sized by `width` and `height`.
- **Padding** — transparent space between content and border. Has the element's background color.
- **Border** — a line around the padding. Can have color, width, style.
- **Margin** — transparent space outside the border. Always transparent (never shows background).

### Calculating Total Width (Critical for Exams)

```css
div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

**Total rendered width** (default `box-sizing: content-box`):
```
content (200) + padding-left (20) + padding-right (20) + border-left (5) + border-right (5)
= 200 + 40 + 10 = 250px

Total space taken including margin:
= 250 + margin-left (10) + margin-right (10) = 270px
```

### box-sizing: border-box

```css
/* Default: width = content only */
.content-box {
  box-sizing: content-box; /* default */
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  /* Rendered width = 200 + 40 + 10 = 250px */
}

/* Modern: width = content + padding + border */
.border-box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  /* Rendered width = 200px exactly */
  /* Content area = 200 - 40 - 10 = 150px */
}
```

**Best practice:** Apply `border-box` globally:
```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

### Shorthand Properties

```css
/* All four sides same */
margin: 10px;
padding: 20px;

/* top/bottom  left/right */
margin: 10px 20px;
padding: 15px 30px;

/* top  left/right  bottom */
margin: 10px 20px 15px;

/* top  right  bottom  left (clockwise) */
margin: 10px 20px 15px 5px;
padding: 10px 20px 15px 5px;

/* Individual sides */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 10px;
margin-left: 20px;

/* Border shorthand */
border: 2px solid #1A5F7A;
border-top: 3px dashed red;
```

### Margin Collapsing

Adjacent vertical margins **collapse** — the larger one wins:

```css
.element-1 { margin-bottom: 30px; }
.element-2 { margin-top: 20px; }
/* Actual gap = 30px (not 50px!) */
```

Horizontal margins never collapse.

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Box Model Demo</title>
  <style>
    * { box-sizing: border-box; }

    .card {
      width: 300px;
      padding: 20px;
      border: 2px solid #1A5F7A;
      margin: 20px auto;
      background: #f0f8ff;
    }

    .card h2 {
      margin-top: 0;       /* remove default margin */
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
    }

    .card p {
      margin: 0;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Box Model Card</h2>
    <p>This card is 300px wide including padding and border.</p>
  </div>
</body>
</html>
```

## ⚠️ Common Mistakes

### Mistake 1: Forgetting box-sizing in Width Calculations
**Wrong thinking:** "I set `width: 200px` so the box is 200px wide."
**Reality:** Default `content-box` means the box is actually `200 + padding + border` wide.
**Fix:** Use `box-sizing: border-box` globally.

### Mistake 2: Using Margin for Internal Spacing
```css
/* Wrong: margin is OUTSIDE the border */
.box { margin: 20px; background: blue; }
/* The 20px gap has NO background color */

/* Correct: padding is INSIDE the border */
.box { padding: 20px; background: blue; }
/* The 20px gap HAS background color */
```

## 📖 Exam Questions

### Question 1 (3 marks) — Calculate Total Width
```css
div { width: 300px; padding: 15px; border: 3px solid black; margin: 20px; }
```
**Answer:** Total rendered width = 300 + (15×2) + (3×2) = 336px. Total space with margin = 376px.

### Question 2 (5 marks)
**"Draw and explain the CSS box model."**
Draw all 4 layers with labels, explain each layer's purpose, mention `box-sizing`. Full marks require the diagram.

<TeacherPerspective
  topic="CSS Box Model"
  whatGetsFullMarks={["Correct diagram with all 4 layers labeled", "Correct total width calculation", "Explaining box-sizing: border-box", "Distinguishing padding (has background) from margin (transparent)"]}
  commonDeductions={["Wrong width calculation (forgetting padding/border)", "Drawing margin inside border", "Not mentioning box-sizing"]}
  keywords={["content", "padding", "border", "margin", "box-sizing", "border-box", "total width", "margin collapse"]}
/>

<ProgressTracker noteId="/docs/web-technologies/css/css-box-model" totalNotes={21} />
