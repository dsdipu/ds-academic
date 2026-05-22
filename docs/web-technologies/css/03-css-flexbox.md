---
title: "CSS Flexbox"
description: "Master CSS Flexbox — flex container, flex items, justify-content, align-items, flex-wrap, flex-grow. With exam examples and common mistakes."
sidebar_position: 3
tags: [CSS, Web Technologies, Intermediate]
keywords: [css flexbox, flex container, flex items, justify-content, align-items, flex-direction, flex-wrap, flex-grow]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ExamSidebar from '@site/src/components/ExamSidebar';
import TeacherPerspective from '@site/src/components/TeacherPerspective';
import ProgressTracker from '@site/src/components/ProgressTracker';

# CSS Flexbox

<LastUpdated date="2026-05-22" timeTo="3 hours" difficulty="Intermediate" />

<ExamSidebar
  examWeight="12–18% of exam"
  questionTypes={["Write flexbox CSS for given layout", "Explain justify-content vs align-items", "Fix broken flex layout"]}
  keywords={["display:flex", "flex-direction", "justify-content", "align-items", "flex-wrap", "flex-grow", "main axis", "cross axis"]}
  timeAllocation="18–22 minutes"
  lastYear="'Create a navigation bar using Flexbox' — 2024 Final"
/>

## 📌 Quick Summary (30 seconds)

Flexbox is a **one-dimensional** layout system. Set `display: flex` on a parent (flex container) and its direct children become flex items that can be aligned, ordered, and distributed automatically. `justify-content` controls alignment along the **main axis** (horizontal by default); `align-items` controls the **cross axis** (vertical by default).

## 📚 Core Concepts

### Enabling Flexbox
```css
.container {
  display: flex;
}
```
That's it — all direct children are now flex items.

### The Two Axes

```
flex-direction: row (default)

Main Axis →  ←──────────────────────────────────────→
             │ Item 1 │ Item 2 │ Item 3 │ Item 4 │
             ↑
Cross Axis   │
(vertical)   ↓
```

```
flex-direction: column

Cross Axis → (horizontal)
Main Axis   ┌──────────┐
(vertical)  │  Item 1  │
↓           │──────────│
            │  Item 2  │
            │──────────│
            │  Item 3  │
            └──────────┘
```

### Container Properties

```css
.container {
  display: flex;

  /* Direction of main axis */
  flex-direction: row;         /* → default */
  flex-direction: row-reverse; /* ← */
  flex-direction: column;      /* ↓ */
  flex-direction: column-reverse; /* ↑ */

  /* Main axis alignment (horizontal when row) */
  justify-content: flex-start;    /* items at start */
  justify-content: flex-end;      /* items at end */
  justify-content: center;        /* items centered */
  justify-content: space-between; /* equal space BETWEEN */
  justify-content: space-around;  /* equal space AROUND */
  justify-content: space-evenly;  /* equal space everywhere */

  /* Cross axis alignment (vertical when row) */
  align-items: stretch;     /* default: fill height */
  align-items: flex-start;  /* align to top */
  align-items: flex-end;    /* align to bottom */
  align-items: center;      /* vertically centered */
  align-items: baseline;    /* align text baselines */

  /* Wrapping */
  flex-wrap: nowrap;   /* default: single line */
  flex-wrap: wrap;     /* items wrap to next line */
  flex-wrap: wrap-reverse;

  /* Gap between items */
  gap: 20px;           /* row and column gap */
  gap: 10px 20px;      /* row-gap column-gap */
}
```

### Item Properties

```css
.item {
  /* Grow: how much to expand to fill space */
  flex-grow: 0;   /* default: don't grow */
  flex-grow: 1;   /* grow to fill available space */
  flex-grow: 2;   /* grow twice as much as flex-grow:1 */

  /* Shrink: how much to shrink if not enough space */
  flex-shrink: 1; /* default: can shrink */
  flex-shrink: 0; /* don't shrink */

  /* Base size before grow/shrink */
  flex-basis: auto;  /* default */
  flex-basis: 200px; /* start at 200px */

  /* Shorthand: grow shrink basis */
  flex: 1;          /* flex: 1 1 0 */
  flex: 1 0 200px;  /* grow:1 shrink:0 basis:200px */

  /* Override container's align-items for this item */
  align-self: center;
  align-self: flex-start;

  /* Reorder visually (not in DOM) */
  order: -1; /* move to front */
  order: 0;  /* default */
  order: 1;  /* move to end */
}
```

## 💻 Code Examples

### Example 1: Navigation Bar (Most Common Exam Question)

```html
<nav class="navbar">
  <div class="logo">DS Academic</div>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/docs">Notes</a></li>
    <li><a href="/blog">Blog</a></li>
  </ul>
  <button class="cta">Login</button>
</nav>
```

```css
.navbar {
  display: flex;
  justify-content: space-between; /* logo left, links center, cta right */
  align-items: center;            /* vertically centered */
  padding: 1rem 2rem;
  background: #1A5F7A;
}

.nav-links {
  display: flex;       /* horizontal list */
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a { color: white; text-decoration: none; }
.logo { color: white; font-weight: 700; font-size: 1.25rem; }
.cta { background: #22A699; color: white; border: none; padding: 0.5rem 1.25rem; border-radius: 6px; cursor: pointer; }
```

### Example 2: Card Grid with Equal Heights

```css
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card {
  flex: 1 1 280px; /* grow, shrink, min-width of 280px */
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}
```

### Example 3: Perfect Center (Most Asked)

```css
.centered-container {
  display: flex;
  justify-content: center; /* horizontal center */
  align-items: center;     /* vertical center */
  height: 100vh;           /* full viewport height */
}
```

## ⚠️ Common Mistakes

### Mistake 1: Applying Flex Properties to the Wrong Element
```css
/* WRONG: trying to center items by styling the items */
.item { justify-content: center; } /* justify-content is a CONTAINER property! */

/* CORRECT: style the container */
.container { display: flex; justify-content: center; }
```

### Mistake 2: Confusing Main Axis Direction
```css
/* flex-direction: row (default) */
justify-content: center; /* horizontal center */
align-items: center;     /* vertical center */

/* flex-direction: column */
justify-content: center; /* NOW vertical center */
align-items: center;     /* NOW horizontal center */
/* The axes swap! */
```
**Teacher's perspective:** "This trips up 60% of students. The axes switch with flex-direction. Mention this in your answer for extra marks."

## 📖 Exam Questions

### Question 1 (5 marks)
**"Write CSS to create a navigation bar with logo on left, links in center, button on right, all vertically aligned."**
```css
nav { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; }
```
Mark scheme: display:flex (1), justify-content:space-between (1), align-items:center (1), padding/styling (1), correct HTML structure (1).

### Question 2 (3 marks)
**"What is the difference between justify-content and align-items?"**
- justify-content aligns along main axis — (1 mark)
- align-items aligns along cross axis — (1 mark)
- Default: main axis is horizontal (row), cross axis is vertical — (1 mark)

<TeacherPerspective
  topic="CSS Flexbox"
  whatGetsFullMarks={["Correct axis explanation (main vs cross)", "justify-content on container not item", "Explaining how flex-direction swaps axes", "Complete working navbar example"]}
  commonDeductions={["Putting justify-content on flex items", "Confusing which axis is which", "Missing display:flex on container"]}
  keywords={["display:flex", "flex container", "flex item", "main axis", "cross axis", "justify-content", "align-items", "flex-direction", "flex-wrap"]}
/>

<ProgressTracker noteId="/docs/web-technologies/css/css-flexbox" totalNotes={21} />
