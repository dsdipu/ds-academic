---
title: "CSS Responsive Design"
description: "Master responsive web design — media queries, mobile-first approach, viewport meta tag, flexible units, and responsive images."
sidebar_position: 5
tags: [CSS, Web Technologies, Intermediate]
keywords: [responsive design, media queries, mobile-first, viewport, rem, em, vw, vh, fluid layout, breakpoints]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ProgressTracker from '@site/src/components/ProgressTracker';

# CSS Responsive Design

<LastUpdated date="2026-05-22" timeTo="3 hours" difficulty="Intermediate" />

## 📌 Quick Summary (30 seconds)

Responsive design makes websites look good on all screen sizes. The essential tools: **viewport meta tag** (tells mobile browsers not to zoom out), **media queries** (`@media (max-width: 768px)`) to apply different styles at different widths, **flexible units** (`rem`, `%`, `vw`) instead of fixed `px`, and **mobile-first** development (start small, scale up).

## 📚 Detailed Explanation

### The Viewport Meta Tag — Always First

```html
<!-- Required in every responsive page's <head> -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Without this, mobile browsers assume the page is 980px wide and zoom out. This one line is essential.

### Media Queries

```css
/* Mobile-first: base styles apply to all screens */
.container { padding: 1rem; }
.card { width: 100%; }

/* Tablet: 768px and wider */
@media (min-width: 768px) {
  .container { padding: 2rem; }
  .card { width: 48%; }
}

/* Desktop: 1024px and wider */
@media (min-width: 1024px) {
  .container { max-width: 1200px; margin: 0 auto; }
  .card { width: 31%; }
}

/* Large desktop */
@media (min-width: 1280px) {
  .card { width: 23%; }
}
```

### Common Breakpoints

| Breakpoint | Target |
|-----------|--------|
| `< 576px` | Mobile (small) |
| `576px–768px` | Mobile (large) |
| `768px–1024px` | Tablet |
| `1024px–1280px` | Desktop |
| `> 1280px` | Large desktop |

### Flexible Units

```css
/* px — fixed, not responsive */
font-size: 16px;

/* rem — relative to root font size (usually 16px) */
font-size: 1rem;    /* = 16px */
font-size: 1.5rem;  /* = 24px */

/* em — relative to parent font size */
padding: 1em;   /* 1× parent font-size */

/* % — relative to parent width */
width: 100%;

/* vw/vh — percentage of viewport */
width: 100vw;   /* full viewport width */
height: 100vh;  /* full viewport height */
font-size: 5vw; /* 5% of viewport width */

/* clamp(min, preferred, max) */
font-size: clamp(1rem, 2.5vw, 1.5rem);
```

### Responsive Images

```css
/* Make all images responsive by default */
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

```html
<!-- Serve different image sizes -->
<picture>
  <source media="(min-width: 1024px)" srcset="hero-large.jpg">
  <source media="(min-width: 768px)"  srcset="hero-medium.jpg">
  <img src="hero-small.jpg" alt="Hero image">
</picture>
```

### Responsive Navigation Pattern

```css
/* Mobile: hamburger menu (hidden links) */
.nav-links {
  display: none;
  flex-direction: column;
}

.nav-links.open {
  display: flex;
}

/* Desktop: horizontal links */
@media (min-width: 768px) {
  .nav-links {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  .hamburger { display: none; }
}
```

## ⚠️ Common Mistakes

### Mistake 1: Missing Viewport Meta Tag
Without `<meta name="viewport">`, media queries appear to not work on mobile. Always include it.

### Mistake 2: Desktop-First Then Mobile Becomes Complex
Desktop-first requires undoing styles with `max-width`. Mobile-first is simpler:
```css
/* Mobile-first: add, don't override */
.grid { display: block; }
@media (min-width: 768px) { .grid { display: grid; grid-template-columns: 1fr 1fr; } }
```

## 📖 Exam Questions

### Question (5 marks)
**"Explain media queries with a code example."**
- Definition: CSS technique to apply styles based on device conditions — (1 mark)
- Syntax: `@media (condition) { CSS rules }` — (1 mark)
- min-width vs max-width explained — (1 mark)
- Working code example — (1 mark)
- Mobile-first approach mentioned — (1 mark)

<ProgressTracker noteId="/docs/web-technologies/css/css-responsive" totalNotes={21} />
