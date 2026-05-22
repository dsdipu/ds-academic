---
title: "CSS Grid"
description: "Master CSS Grid — grid-template-columns, grid-template-rows, grid areas, gap, and spanning. Complete with exam examples and common mistakes."
sidebar_position: 4
tags: [CSS, Web Technologies, Intermediate]
keywords: [css grid, grid-template-columns, grid-template-rows, grid-area, fr unit, gap, span, grid layout]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ProgressTracker from '@site/src/components/ProgressTracker';
import TeacherPerspective from '@site/src/components/TeacherPerspective';

# CSS Grid

<LastUpdated date="2026-05-22" timeTo="3 hours" difficulty="Intermediate" />

## 📌 Quick Summary (30 seconds)

CSS Grid is a **two-dimensional** layout system (rows AND columns simultaneously). Define a grid with `display: grid`, set columns with `grid-template-columns`, rows with `grid-template-rows`. The `fr` unit distributes available space proportionally. Named grid areas with `grid-template-areas` create readable page layouts.

## 📚 Core Concepts

### Creating a Grid
```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr; /* 3 columns: fixed, flexible, flexible */
  grid-template-rows: 80px auto 60px;    /* 3 rows */
  gap: 20px;                             /* space between all cells */
}
```

### The `fr` Unit
`fr` = fraction of available space after fixed sizes are subtracted.
```css
grid-template-columns: 1fr 2fr 1fr;
/* Column 1 = 25%, Column 2 = 50%, Column 3 = 25% of available width */
```

### repeat() Function
```css
grid-template-columns: repeat(3, 1fr);       /* 3 equal columns */
grid-template-columns: repeat(4, 200px);     /* 4 fixed 200px columns */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* responsive! */
```

### Named Grid Areas
```css
.container {
  display: grid;
  grid-template-areas:
    "header  header  header"
    "sidebar main    main"
    "footer  footer  footer";
  grid-template-columns: 250px 1fr 1fr;
  grid-template-rows: 80px auto 60px;
  gap: 10px;
}

header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
main    { grid-area: main; }
footer  { grid-area: footer; }
```

### Column and Row Spanning
```css
.item {
  grid-column: 1 / 3;    /* spans columns 1 and 2 */
  grid-row: 1 / 2;       /* row 1 only */
  
  grid-column: span 2;   /* spans 2 columns from current position */
  grid-column: 1 / -1;   /* spans full row (to last line) */
}
```

## 💻 Complete Page Layout Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Grid Layout</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      display: grid;
      grid-template-areas:
        "header"
        "nav"
        "main"
        "sidebar"
        "footer";
      min-height: 100vh;
    }

    @media (min-width: 768px) {
      body {
        grid-template-areas:
          "header  header"
          "nav     nav"
          "sidebar main"
          "footer  footer";
        grid-template-columns: 250px 1fr;
        grid-template-rows: 70px 50px 1fr 60px;
      }
    }

    header  { grid-area: header; background: #1A5F7A; color: white; padding: 1rem; }
    nav     { grid-area: nav; background: #22A699; padding: 0.75rem; }
    .sidebar { grid-area: sidebar; background: #f5f5f5; padding: 1rem; }
    main    { grid-area: main; padding: 1.5rem; }
    footer  { grid-area: footer; background: #333; color: white; padding: 1rem; text-align: center; }
  </style>
</head>
<body>
  <header><h1>DS Academic</h1></header>
  <nav>Home | Notes | Blog</nav>
  <aside class="sidebar"><h3>Navigation</h3></aside>
  <main><h2>Content Area</h2><p>Main content here.</p></main>
  <footer>© 2026 DS Academic</footer>
</body>
</html>
```

## ⚠️ Common Mistakes

### Mistake 1: Forgetting `display: grid`
```css
/* WRONG: properties have no effect without display:grid */
.container { grid-template-columns: 1fr 1fr; }

/* CORRECT */
.container { display: grid; grid-template-columns: 1fr 1fr; }
```

### Mistake 2: Misunderstanding Grid Lines
```css
/* Grid with 3 columns has 4 grid LINES: 1, 2, 3, 4 */
/* (and -1, -2, -3, -4 from the end) */

.item { grid-column: 1 / 4; } /* spans all 3 columns */
.item { grid-column: 1 / -1; } /* same: 1 to last line */
```

## 📖 Exam Questions

### Question (5 marks)
**"Create a CSS Grid layout with 3 equal columns and a header spanning all columns."**
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.header { grid-column: 1 / -1; } /* spans all 3 */
```

### Grid vs Flexbox — When to Use Which

| Situation | Use |
|-----------|-----|
| Navigation bar (1 row) | Flexbox |
| Card grid layout | Grid or Flexbox |
| Full page layout | Grid |
| Vertical centering | Flexbox |
| Two-dimensional layout | Grid |

<TeacherPerspective
  topic="CSS Grid"
  whatGetsFullMarks={["Correct grid-template-columns syntax", "Using fr unit with explanation", "Named areas with grid-template-areas", "Explaining grid lines for spanning"]}
  commonDeductions={["Missing display:grid", "Wrong grid line numbers for spanning", "Confusing fr and %"]}
  keywords={["display:grid", "grid-template-columns", "fr unit", "grid-area", "gap", "span", "repeat", "minmax"]}
/>

<ProgressTracker noteId="/docs/web-technologies/css/css-grid" totalNotes={21} />
