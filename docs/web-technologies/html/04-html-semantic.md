---
title: "HTML Semantic Elements"
description: "Learn HTML5 semantic elements — header, nav, main, section, article, aside, footer — and why they matter for SEO and accessibility."
sidebar_position: 4
tags: [HTML, Web Technologies, Intermediate]
keywords: [semantic html, header, nav, main, section, article, aside, footer, html5, accessibility, seo]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ExamSidebar from '@site/src/components/ExamSidebar';
import TeacherPerspective from '@site/src/components/TeacherPerspective';
import ProgressTracker from '@site/src/components/ProgressTracker';

# HTML Semantic Elements

<LastUpdated date="2026-05-22" timeTo="2 hours" difficulty="Intermediate" />

<ExamSidebar
  examWeight="8–12% of exam"
  questionTypes={["List semantic elements (5 marks)", "Compare div vs semantic elements", "Draw page layout with semantic tags"]}
  keywords={["semantic", "header", "nav", "main", "section", "article", "aside", "footer", "accessibility", "SEO"]}
  timeAllocation="12–15 minutes"
  lastYear="'What are semantic elements and why use them?' — 2023 exam"
/>

## 📌 Quick Summary (30 seconds)

Semantic HTML elements have **meaningful names** that describe their purpose — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`. Unlike `<div>`, which means nothing, `<nav>` tells browsers, search engines, and screen readers "this is a navigation area." Semantic HTML improves SEO and accessibility.

## 📚 Detailed Explanation

### Semantic vs Non-Semantic

```html
<!-- Non-semantic: div tells us nothing -->
<div id="header">...</div>
<div id="nav">...</div>
<div id="content">...</div>
<div id="footer">...</div>

<!-- Semantic: elements describe themselves -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
```

### Key Semantic Elements

| Element | Purpose |
|---------|---------|
| `<header>` | Introductory content — site logo, page title, navigation |
| `<nav>` | Navigation links |
| `<main>` | Dominant content of the page (only ONE per page) |
| `<section>` | Thematic grouping of content with a heading |
| `<article>` | Self-contained content (blog post, news article, forum post) |
| `<aside>` | Related but secondary content (sidebar, pull quote, ads) |
| `<footer>` | Footer — copyright, links, contact info |
| `<figure>` | Image, diagram, or code with caption |
| `<figcaption>` | Caption for `<figure>` |
| `<time>` | Machine-readable date/time |
| `<mark>` | Highlighted/marked text |

### Section vs Article — The Key Distinction

- **`<section>`** — part of a larger whole; needs the page's context to make sense
- **`<article>`** — stands alone; makes sense if lifted out and published elsewhere

```html
<!-- Article: a complete blog post -->
<article>
  <h2>How to Learn CSS in 30 Days</h2>
  <p>Learning CSS doesn't have to be hard...</p>
  <footer>Published: <time datetime="2026-05-22">May 22, 2026</time></footer>
</article>

<!-- Section: chapter inside a tutorial page -->
<section>
  <h2>Chapter 3: Flexbox</h2>
  <p>Flexbox is a layout model...</p>
</section>
```

## 🎨 Visual Diagram

```
Complete Page Layout with Semantic Elements:

┌─────────────────────────────────────┐
│ <header>                            │
│   Logo    Site Title                │
│   ┌─────────────────────────────┐   │
│   │ <nav>  Home  About  Contact │   │
│   └─────────────────────────────┘   │
└─────────────────────────────────────┘
┌──────────────────────┐ ┌────────────┐
│ <main>               │ │ <aside>    │
│  ┌──────────────────┐│ │            │
│  │ <article>        ││ │ Related    │
│  │  <h1>Title</h1>  ││ │ links,     │
│  │  <section>       ││ │ ads,       │
│  │    Chapter 1     ││ │ sidebar    │
│  │  </section>      ││ │ content    │
│  │  <section>       ││ │            │
│  │    Chapter 2     ││ └────────────┘
│  │  </section>      ││
│  │ </article>       ││
│  └──────────────────┘│
└──────────────────────┘
┌─────────────────────────────────────┐
│ <footer>  © 2026 DS Academic        │
└─────────────────────────────────────┘
```

## 💻 Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DS Academic - HTML Semantic Demo</title>
</head>
<body>

  <header>
    <h1>DS Academic</h1>
    <nav aria-label="Main navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/docs">Notes</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h2>Understanding CSS Flexbox</h2>
        <p>By DS Dipu | <time datetime="2026-05-22">May 22, 2026</time></p>
      </header>

      <section>
        <h3>What is Flexbox?</h3>
        <p>Flexbox is a one-dimensional layout model...</p>
      </section>

      <section>
        <h3>Key Properties</h3>
        <p>The main container properties are...</p>
        <figure>
          <img src="flexbox-diagram.png" alt="Flexbox main axis and cross axis">
          <figcaption>Figure 1: Flexbox axes explained</figcaption>
        </figure>
      </section>
    </article>

    <aside aria-label="Related articles">
      <h3>Related Notes</h3>
      <ul>
        <li><a href="/css-grid">CSS Grid</a></li>
        <li><a href="/css-responsive">Responsive Design</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 DS Academic. Built for students.</p>
    <nav aria-label="Footer navigation">
      <a href="/privacy">Privacy</a> |
      <a href="/about">About</a>
    </nav>
  </footer>

</body>
</html>
```

## ⚠️ Common Mistakes

### Mistake 1: Using `<section>` as a Generic Wrapper (use `<div>` instead)
```html
<!-- Wrong: section has no heading, just used for styling -->
<section class="wrapper">
  <p>Some content</p>
</section>

<!-- Correct: section should have a heading -->
<section>
  <h2>About Us</h2>
  <p>Some content</p>
</section>

<!-- For generic styling wrapper, use div -->
<div class="wrapper">
  <p>Some content</p>
</div>
```

### Mistake 2: Multiple `<main>` Elements
```html
<!-- Wrong: two <main> elements -->
<main>Primary content</main>
<main>More content</main>

<!-- Correct: exactly ONE <main> per page -->
<main>All primary content here</main>
```

## 📖 Exam Questions

### Question 1 (5 marks)
**"What are semantic HTML elements? Name 5 semantic elements and explain their purpose."**

Model answer — 1 mark each for: definition + any 5 from: header, nav, main, section, article, aside, footer, figure, time, mark — with correct purpose stated.

### Question 2 (3 marks)
**"Why should you use semantic HTML instead of `<div>` for everything?"**
- Improves SEO — search engines understand content structure — (1 mark)
- Improves accessibility — screen readers navigate by landmarks — (1 mark)
- Improves code readability and maintainability — (1 mark)

## 🎤 Viva Questions

**Q: What is the difference between `<section>` and `<article>`?**
**A:** `<article>` is for self-contained content that makes sense on its own — like a blog post or news story. `<section>` is for thematic groupings within a page that need context — like chapters within an article. An article can contain multiple sections, but a section is rarely put inside an article's internal structure.

<TeacherPerspective
  topic="HTML Semantic Elements"
  whatGetsFullMarks={["Correct definition of semantic", "Listing 5+ elements with correct purposes", "Explaining SEO + accessibility benefits", "Drawing a page layout using semantic tags"]}
  commonDeductions={["Using section as div replacement", "Having multiple main elements", "Confusing article and section"]}
  keywords={["semantic", "accessibility", "SEO", "screen reader", "landmark", "header", "nav", "main", "article", "section", "footer"]}
/>

<ProgressTracker noteId="/docs/web-technologies/html/html-semantic" totalNotes={21} />
