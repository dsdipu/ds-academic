---
title: "CSS Common Mistakes"
description: "Top CSS mistakes that lose exam marks — specificity wars, not using box-sizing, misusing inline styles, and more."
sidebar_position: 6
tags: [CSS, Web Technologies, Beginner]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ProgressTracker from '@site/src/components/ProgressTracker';

# CSS Common Mistakes

<LastUpdated date="2026-05-22" timeTo="1 hour" difficulty="Beginner" />

## 📌 Quick Summary

The biggest CSS mistakes: using `!important` to fix specificity issues (masks problems), not setting `box-sizing: border-box` globally (causes sizing surprises), using inline styles for design (breaks separation of concerns), and using `px` for font sizes (not accessible).

## Top CSS Exam Mistakes

### ❌ Mistake 1: Overusing `!important`
```css
/* WRONG: using !important to force styles */
p { color: red !important; }
.special { color: blue !important; }

/* CORRECT: fix specificity properly */
.content .special { color: blue; } /* higher specificity wins naturally */
```
**Why wrong:** `!important` makes debugging impossible. Examiners expect specificity solutions, not overrides.

---

### ❌ Mistake 2: Not Setting `box-sizing: border-box` Globally
```css
/* WRONG: unpredictable element sizes */
div { width: 200px; padding: 20px; } /* actual width: 240px! */

/* CORRECT: always start with this reset */
*, *::before, *::after { box-sizing: border-box; }
div { width: 200px; padding: 20px; } /* actual width: 200px */
```

---

### ❌ Mistake 3: Using `px` for Font Sizes (Accessibility)
```css
/* WRONG: ignores user's browser font settings */
body { font-size: 16px; }
h1   { font-size: 32px; }

/* CORRECT: rem respects user preferences */
body { font-size: 1rem; }
h1   { font-size: 2rem; }
```

---

### ❌ Mistake 4: Setting Both `width` and `height` on Images
```css
/* WRONG: distorts aspect ratio */
img { width: 300px; height: 200px; }

/* CORRECT: set one dimension, auto the other */
img { width: 300px; height: auto; }
/* Or use object-fit for cover/contain: */
img { width: 300px; height: 200px; object-fit: cover; }
```

---

### ❌ Mistake 5: Not Removing Default `margin`/`padding`
```css
/* WRONG: browser adds default styles → inconsistent layout */
/* (no reset) */

/* CORRECT: CSS reset at top of stylesheet */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

---

### ❌ Mistake 6: Inline Styles for Design
```html
<!-- WRONG: inline styles for layout -->
<p style="color: red; font-size: 18px; margin: 10px;">Text</p>

<!-- CORRECT: class in CSS file -->
<p class="highlighted">Text</p>
```
```css
.highlighted { color: red; font-size: 1.125rem; margin: 0.625rem 0; }
```
**Why wrong:** Inline styles have highest specificity (except !important), can't be overridden easily, and violate separation of concerns.

---

### ❌ Mistake 7: Using `float` for Modern Layouts
```css
/* WRONG: float was never meant for layout */
.column { float: left; width: 33%; }

/* CORRECT: use flexbox or grid */
.container { display: flex; }
.column { flex: 1; }
```

---

## Quick CSS Quality Checklist

- [ ] `box-sizing: border-box` applied globally
- [ ] No `!important` unless absolutely necessary
- [ ] Font sizes in `rem`, not `px`
- [ ] No inline styles for visual design
- [ ] Images have `max-width: 100%; height: auto`
- [ ] No floats for layout (use flex/grid)
- [ ] Viewport meta tag present in HTML

<ProgressTracker noteId="/docs/web-technologies/css/css-mistakes" totalNotes={21} />
