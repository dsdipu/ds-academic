---
title: "How to Write Exam Answers"
description: "A complete guide on how teachers grade CSE exam answers, what keywords get marks, and how to structure answers for maximum marks."
sidebar_position: 1
tags: [Exam Prep, Strategy, Beginner]
keywords: [exam answers, how to write answers, exam technique, mark scheme, CSE exam, exam strategy]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ProgressTracker from '@site/src/components/ProgressTracker';
import DownloadPDF from '@site/src/components/DownloadPDF';

# How to Write Exam Answers

<LastUpdated date="2026-05-22" timeTo="1 hour" difficulty="Beginner" />

> **This is the most important note on this site.** You can know every HTML tag, every CSS property, and every JavaScript concept — but if you can't express it in an exam, you won't get marks. Read this before any other note.

---

## 📌 Quick Summary (30 seconds)

Teachers grade with a **mark scheme** — a checklist of specific points, each worth 1 mark. Your job isn't to write the best essay; it's to **hit those checkboxes**. Use the exact keywords they're looking for, structure answers clearly, and always include an example. 5 focused points beat 2 paragraphs of vague explanation every time.

---

## 📚 How Teachers Grade

### The Mark Scheme System

Every exam question has a pre-written mark scheme. The examiner is looking for specific **trigger words and concepts** — when they see them, they tick a mark.

Example mark scheme (what the teacher has in their hand):

**Question:** "What is CSS? (3 marks)"

| Acceptable Answer | Marks |
|-------------------|-------|
| CSS stands for Cascading Style Sheets | ✅ 1 mark |
| It is used for styling/formatting/presenting HTML elements | ✅ 1 mark |
| Any valid example: `color: red;` or `font-size: 16px;` | ✅ 1 mark |

A student who writes three vague sentences about CSS might score 0 if they don't include those trigger points. A student who writes three precise bullet points hits all 3 marks.

### What Examiners Actually Think

I've talked to several examiners. Here's what they say:

- **"I scan for keywords, not paragraphs."** Long answers are fine but only if the keywords are in there.
- **"I reward structure."** A bulleted list is easier to mark than continuous prose. It's also safer — the marker can't miss a point buried in a paragraph.
- **"I look for examples."** For almost every concept question, an example earns 1 mark.
- **"I subtract marks for contradictions."** If you write something wrong after writing something right, some examiners will question your understanding.

---

## 📚 Detailed Explanation

### Types of Questions and How to Answer Each

#### Type 1: Definition Question (1–3 marks)
*Example: "What is HTML?" or "Define a function in JavaScript."*

**Formula:** Definition + Expansion + Example

```
HTML is [definition: markup language for structuring web content].
It uses [expansion: tags to define elements like headings, paragraphs, and links].
Example: [example: <h1>Hello</h1> creates a top-level heading].
```

Don't write more than 3–4 lines. Every extra line is wasted time.

---

#### Type 2: Compare/Contrast Question (4–8 marks)
*Example: "Compare Docker containers and virtual machines."*

**Always use a table.** Examiners can mark tables faster and more accurately.

```
| Feature      | Docker Container | Virtual Machine |
|--------------|-----------------|-----------------|
| OS           | Shares host OS  | Own guest OS    |
| Size         | Megabytes       | Gigabytes       |
| Start time   | Seconds         | Minutes         |
| Performance  | High            | Lower           |
| Isolation    | Process-level   | Hardware-level  |
```

Minimum 3–4 comparison rows for a 5-mark question. If the question asks for 5 marks, provide 5–6 rows.

---

#### Type 3: Explain/Describe Question (5–10 marks)
*Example: "Explain the concept of CSS specificity." or "Describe how JavaScript hoisting works."*

**Structure:**
1. **Opening sentence** — state the concept clearly (1 mark)
2. **Mechanism** — explain HOW it works (2–3 marks)
3. **Example** — show it with code or a diagram (1–2 marks)
4. **Why it matters** — practical significance (1 mark)

Example answer structure for "Explain JavaScript hoisting":
```
1. Definition: Hoisting is JavaScript's behaviour of moving variable 
   and function declarations to the top of their scope before code executes.

2. How it works: During the compilation phase, before any code runs, 
   JavaScript scans for all var declarations and places them at the 
   top of their containing function (or global scope). However, only 
   the DECLARATION is hoisted — not the value. The value remains 
   undefined until the assignment line is reached.

3. Example:
   console.log(x); // undefined (NOT an error)
   var x = 5;
   console.log(x); // 5

4. Significance: This can cause unexpected behaviour. let and const 
   are also hoisted but are in the "Temporal Dead Zone" — accessing 
   them before declaration throws a ReferenceError.
```

---

#### Type 4: Code Writing Question (5–10 marks)
*Example: "Write HTML code for a registration form with 4 fields."*

**Rules:**
1. **Start with DOCTYPE** — always, even if not asked
2. **Write complete code** — not just the relevant snippet
3. **Use proper indentation** — shows nesting understanding
4. **Add comments** — shows you understand what each part does
5. **Close all tags**
6. **Test mentally** — read your code and imagine the output

**Marking usually works like this:**
- 1 mark for overall correct structure
- 1 mark per correctly implemented feature (each field, each attribute)
- 1 mark for proper nesting/validity

---

#### Type 5: Scenario / "What Would Happen" (5–8 marks)
*Example: "A developer's webpage isn't loading correctly. The code is below. Identify the problems."*

**Approach:**
1. Read the scenario carefully — identify EVERY error
2. State each error explicitly: "Error 1: Missing DOCTYPE declaration"
3. Explain the consequence: "This causes the browser to enter quirks mode..."
4. Provide the fix: "Add `<!DOCTYPE html>` as the first line"

Don't just say "there's an error here" — name it, explain it, fix it.

---

### The PEEL Method for Broad Questions

For 8–10 mark paragraph answers:

**P** — **Point** — State your main point  
**E** — **Evidence** — Provide an example or code  
**E** — **Explain** — Explain why it matters / how it works  
**L** — **Link** — Connect back to the question

```
P: CSS Flexbox is a one-dimensional layout model.

E: For example:
   .container { display: flex; justify-content: center; }

E: This makes the browser treat the container's children as flex 
   items that can be aligned and distributed automatically, without 
   using floats or positioning.

L: This makes Flexbox ideal for navigation bars and card layouts, 
   as demonstrated in the given scenario.
```

---

## 🎨 Before vs After Answer Comparison

### Question: "What is the box model in CSS? (5 marks)"

#### ❌ Low-Mark Answer (What Many Students Write)
> "The CSS box model is a model that shows how elements are displayed on a webpage. It has different parts. The content is in the middle and there are some spaces around it. This is used in CSS to make layouts work properly."

**Why this gets ≤2/5 marks:** Vague, no technical terms, no diagram, no examples.

#### ✅ High-Mark Answer

> The CSS box model is a conceptual model that treats every HTML element as a rectangular box composed of four layers:
>
> 1. **Content** — the actual text/image inside the element
> 2. **Padding** — transparent space between content and border
> 3. **Border** — a visible line around the padding
> 4. **Margin** — transparent space outside the border (separates elements)
>
> Diagram:
> ```
> ┌─────────────── Margin ──────────────────┐
> │  ┌─────────── Border ──────────────┐   │
> │  │  ┌──────── Padding ─────────┐   │   │
> │  │  │         Content         │   │   │
> │  │  └─────────────────────────┘   │   │
> │  └─────────────────────────────────┘   │
> └─────────────────────────────────────────┘
> ```
>
> Example:
> ```css
> p {
>     width: 200px;
>     padding: 20px;
>     border: 2px solid black;
>     margin: 10px;
> }
> ```
> Total width = 200 + (20×2) + (2×2) + (10×2) = 264px

**Why this gets 5/5:** Technical terms used correctly, diagram included, code example, calculation shown.

---

## ⚠️ Common Exam Answer Mistakes

### Mistake 1: Not Writing the Question Back

**What students do:** Jump straight into the answer without restating the concept.

**Why it's risky:** If your first line is wrong, the marker has no context.

**Better approach:** Start with a clear statement of what you're about to explain.

---

### Mistake 2: Using Vague Words Instead of Technical Terms

**Weak answer:** "Docker makes applications work better and faster across different computers."

**Strong answer:** "Docker provides containerisation — packaging an application with its dependencies and runtime into isolated containers that run consistently across different host environments, regardless of OS differences."

**The difference:** The second uses the exact keywords examiners are scanning for.

---

### Mistake 3: Writing Code Without Running It Mentally

Students write code examples full of syntax errors in exams. Before writing code:
1. Think through the structure
2. Check every tag is opened and closed
3. Check all attributes have quotes around values
4. Add indentation to make nesting visible

---

### Mistake 4: Spending Too Long on Easy Questions

**Strategy:** If a 3-mark question takes more than 5 minutes, move on. Come back.

**Time guide:**
- 1 mark = 1–2 minutes
- 5 marks = 7–10 minutes
- 10 marks = 15–18 minutes

---

## 📝 Practice Problems

### Problem 1: Rewrite This Answer for Higher Marks
Original (2/5): "CSS Flexbox is used for layouts. You can put elements in a row or column and they get aligned nicely."

<details>
<summary>See improved version</summary>

**Improved (5/5):**

CSS Flexbox (Flexible Box Module) is a one-dimensional layout model that allows elements in a container to be automatically arranged, aligned, and distributed.

Key concepts:
- **Flex container** — the parent element with `display: flex`
- **Flex items** — the direct children of the flex container
- **Main axis** — the primary direction (`flex-direction: row` or `column`)
- **Cross axis** — perpendicular to the main axis

Example:
```css
.nav {
    display: flex;
    justify-content: space-between; /* distributes along main axis */
    align-items: center;           /* centers along cross axis */
}
```

This creates a horizontal navigation bar where items are equally spaced and vertically centered — common in responsive web design.

</details>

---

## 📖 Common Exam Questions

### Question 1 (5 marks)
**"List 5 tips for writing effective exam answers in CSE."**

**Model Answer (5 points, 1 mark each):**
- Use technical terms and keywords relevant to the topic
- Structure answers with numbered points or tables for comparison questions
- Always include a code example when explaining programming concepts
- Manage time — allocate marks × 1.5 minutes per question
- Restate the question concept in your first sentence

---

## 🎤 Viva Questions

**Q1: How do you approach a question you're unsure about?**
**A1:** Write what you DO know first. Partial marks exist in most marking schemes. Attempt every question — a blank answer guarantees 0.

**Q2: How much should you write for a 5-mark question?**
**A2:** Aim for 5 clearly distinguishable points. Quality over quantity — 5 precise technical points score higher than 2 pages of vague explanations.

---

## 👨‍🏫 From a Student's Perspective

The biggest game-changer for my own exams was learning to think like an examiner. I started asking: "What keyword is the teacher expecting here? What would be on their mark scheme?"

Once I learned the CSS Box Model, I didn't just memorise "content, padding, border, margin" — I practiced saying it in a sentence, drawing the diagram, and writing the code example. That preparation meant I could write a 5/5 answer in 8 minutes.

**The single most impactful change:** **Adding a code example to every programming concept answer.** Even when the question doesn't explicitly ask for one. Every teacher gives +1 mark for a relevant, correct example.

---

## 🔗 Next Steps

- **Recommended:** [Common Exam Questions →](/docs/exam-prep/common-exam-questions)
- **Related:** [Time Management →](/docs/exam-prep/time-management)

## 📥 Resources

<DownloadPDF filename="how-to-write-exam-answers" label="Download Exam Guide PDF" />

<ProgressTracker noteId="/docs/exam-prep/how-to-write-answers" totalNotes={21} />

---

*⏱ Time to read: 1 hour | 🟢 Difficulty: Beginner | This guide applies to ALL subjects*
