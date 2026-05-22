---
title: "HTML Forms"
description: "Master HTML forms — input types, labels, validation, form structure, and exam-ready examples. One of the most exam-tested HTML topics."
sidebar_position: 3
tags: [HTML, Web Technologies, Intermediate]
keywords: [html forms, input types, form validation, label, textarea, select, submit, action, method]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ExamSidebar from '@site/src/components/ExamSidebar';
import TeacherPerspective from '@site/src/components/TeacherPerspective';
import ProgressTracker from '@site/src/components/ProgressTracker';
import DownloadPDF from '@site/src/components/DownloadPDF';

# HTML Forms

<LastUpdated date="2026-05-22" timeTo="3 hours" difficulty="Intermediate" />

<ExamSidebar
  examWeight="15–20% of exam"
  questionTypes={["Code writing: build a registration form", "Explain form attributes (5 marks)", "Identify errors in broken form code"]}
  keywords={["form", "input", "label", "action", "method", "GET", "POST", "required", "placeholder", "type"]}
  timeAllocation="20–25 minutes"
  lastYear="'Write a registration form' — asked in 2024 and 2023 exams"
/>

---

## 📌 Quick Summary (30 seconds)

HTML forms collect user input. The `<form>` element wraps inputs and sends data to a server using `action` (URL) and `method` (GET or POST). Every `<input>` should have a matching `<label>`. The `type` attribute on `<input>` determines what control appears (text, email, password, checkbox, radio, etc.).

---

## 📚 Detailed Explanation

### The `<form>` Element

```html
<form action="/submit" method="POST">
  <!-- inputs go here -->
</form>
```

| Attribute | Purpose | Values |
|-----------|---------|--------|
| `action` | URL where form data is sent | Any URL or `/path` |
| `method` | HTTP method for submission | `GET` or `POST` |
| `enctype` | Encoding type (required for file uploads) | `multipart/form-data` |
| `novalidate` | Disable browser's built-in validation | (boolean) |

**GET vs POST:**
- **GET** — data appended to URL as query string (`?name=Alice&age=21`). Visible, bookmarkable. Use for search forms.
- **POST** — data sent in request body. Not visible in URL. Use for login, registration, sensitive data.

---

### Input Types

```html
<!-- Text inputs -->
<input type="text"     placeholder="Full name">
<input type="email"    placeholder="email@example.com">
<input type="password" placeholder="Password">
<input type="number"   min="0" max="100">
<input type="tel"      placeholder="+880-1xxx-xxxxxx">
<input type="url"      placeholder="https://example.com">
<input type="search"   placeholder="Search...">

<!-- Date/Time -->
<input type="date">
<input type="time">
<input type="datetime-local">

<!-- Selection -->
<input type="checkbox" name="agree" value="yes">
<input type="radio"    name="gender" value="male">
<input type="radio"    name="gender" value="female">

<!-- File & Color -->
<input type="file"   accept=".pdf,.jpg">
<input type="color">
<input type="range"  min="0" max="100" step="5">

<!-- Hidden & Submit -->
<input type="hidden" name="token" value="abc123">
<input type="submit" value="Submit Form">
<input type="reset"  value="Clear Form">
```

### Labels — Critical for Accessibility

Every input MUST have a label. Two correct ways:

```html
<!-- Method 1: for + id (preferred) -->
<label for="username">Username:</label>
<input type="text" id="username" name="username">

<!-- Method 2: Wrapping (no id needed) -->
<label>
  Username:
  <input type="text" name="username">
</label>
```

The `for` attribute on `<label>` must match the `id` on `<input>`. This:
- Makes the label clickable (focuses the input)
- Required for screen readers (accessibility)
- Gets marks in exams

### Textarea and Select

```html
<!-- Multi-line text -->
<label for="bio">Biography:</label>
<textarea id="bio" name="bio" rows="5" cols="40" placeholder="Tell us about yourself..."></textarea>

<!-- Dropdown -->
<label for="dept">Department:</label>
<select id="dept" name="dept">
  <option value="">-- Select --</option>
  <option value="cse">Computer Science</option>
  <option value="eee">Electrical Engineering</option>
  <option value="me">Mechanical Engineering</option>
</select>

<!-- Multi-select -->
<select name="skills" multiple>
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
</select>
```

### HTML5 Validation Attributes

```html
<input type="text"  required>                 <!-- Can't be empty -->
<input type="text"  minlength="3" maxlength="50">
<input type="number" min="18" max="120">
<input type="text"  pattern="[A-Za-z]{3,}">  <!-- Regex pattern -->
<input type="email">                          <!-- Auto-validates email format -->
```

---

## 🎨 Visual Diagram

```
Form Structure:
┌─────────────────────────────────────────┐
│  <form action="/register" method="POST">│
│                                         │
│  <label for="name">Name:</label>        │
│  <input type="text" id="name"           │
│         name="name" required>           │
│                                         │
│  <label for="email">Email:</label>      │
│  <input type="email" id="email"         │
│         name="email" required>          │
│                                         │
│  <label for="dept">Dept:</label>        │
│  <select id="dept" name="dept">         │
│    <option>CSE</option>                 │
│  </select>                              │
│                                         │
│  <button type="submit">Register</button>│
│  </form>                                │
└─────────────────────────────────────────┘

Data Flow: Browser → HTTP POST → Server (action URL)
```

---

## 💻 Complete Registration Form Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Registration</title>
</head>
<body>
  <h1>Student Registration Form</h1>

  <form action="/register" method="POST">

    <!-- Full Name -->
    <div>
      <label for="fullname">Full Name:</label>
      <input type="text" id="fullname" name="fullname"
             placeholder="Enter your full name"
             required minlength="3" maxlength="100">
    </div>

    <!-- Email -->
    <div>
      <label for="email">Email Address:</label>
      <input type="email" id="email" name="email"
             placeholder="student@example.com"
             required>
    </div>

    <!-- Password -->
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password"
             minlength="8" required>
    </div>

    <!-- Student ID -->
    <div>
      <label for="studentid">Student ID:</label>
      <input type="text" id="studentid" name="studentid"
             pattern="CSE-[0-9]{4}-[0-9]{3}"
             placeholder="CSE-2024-001" required>
    </div>

    <!-- Date of Birth -->
    <div>
      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" name="dob" required>
    </div>

    <!-- Department -->
    <div>
      <label for="department">Department:</label>
      <select id="department" name="department" required>
        <option value="">-- Select Department --</option>
        <option value="cse">Computer Science &amp; Engineering</option>
        <option value="eee">Electrical &amp; Electronic Engineering</option>
        <option value="me">Mechanical Engineering</option>
        <option value="ce">Civil Engineering</option>
      </select>
    </div>

    <!-- Gender (Radio) -->
    <fieldset>
      <legend>Gender:</legend>
      <label>
        <input type="radio" name="gender" value="male"> Male
      </label>
      <label>
        <input type="radio" name="gender" value="female"> Female
      </label>
      <label>
        <input type="radio" name="gender" value="other"> Other
      </label>
    </fieldset>

    <!-- Bio -->
    <div>
      <label for="bio">Short Bio:</label>
      <textarea id="bio" name="bio" rows="4"
                placeholder="Tell us about yourself (optional)"
                maxlength="500"></textarea>
    </div>

    <!-- Terms -->
    <div>
      <label>
        <input type="checkbox" name="terms" value="agreed" required>
        I agree to the Terms and Conditions
      </label>
    </div>

    <!-- Buttons -->
    <div>
      <button type="submit">Register</button>
      <button type="reset">Clear Form</button>
    </div>

  </form>
</body>
</html>
```

---

## ⚠️ Common Mistakes to Avoid

### Mistake 1: Missing `for`/`id` Connection on Labels

**Wrong:**
```html
<label>Username:</label>
<input type="text" name="username">
```

**Correct:**
```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```

**Teacher's perspective:** "Missing label-input connection is a 1-mark deduction in most form questions. It's also an accessibility violation."

---

### Mistake 2: Using GET for Login/Registration Forms

**Wrong:**
```html
<form action="/login" method="GET">
  <input type="password" name="password">
</form>
<!-- URL becomes: /login?password=mySecretPass123 — VISIBLE in URL bar! -->
```

**Correct:**
```html
<form action="/login" method="POST">
  <input type="password" name="password">
</form>
```

**Teacher's perspective:** "Using GET for a password form is a security error. Examiners will deduct marks and expect you to explain WHY POST is required."

---

### Mistake 3: Using `<input type="submit">` Inside `<div>` Outside `<form>`

**Wrong:**
```html
<form action="/submit" method="POST">
  <input type="text" name="data">
</form>
<input type="submit" value="Submit">  <!-- Outside the form! Won't work! -->
```

**Correct:**
```html
<form action="/submit" method="POST">
  <input type="text" name="data">
  <input type="submit" value="Submit">
</form>
```

---

## 📝 Practice Problems

### Problem 1 (Difficulty: Medium)
Write a contact form with: Name (text), Email, Subject (dropdown: General/Technical/Billing), Message (textarea), Submit button.

<details>
<summary>Click to reveal solution</summary>

```html
<form action="/contact" method="POST">
  <div>
    <label for="cname">Name:</label>
    <input type="text" id="cname" name="name" required>
  </div>
  <div>
    <label for="cemail">Email:</label>
    <input type="email" id="cemail" name="email" required>
  </div>
  <div>
    <label for="subject">Subject:</label>
    <select id="subject" name="subject" required>
      <option value="">-- Select --</option>
      <option value="general">General</option>
      <option value="technical">Technical</option>
      <option value="billing">Billing</option>
    </select>
  </div>
  <div>
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="6" required></textarea>
  </div>
  <button type="submit">Send Message</button>
</form>
```

</details>

---

## 📖 Common Exam Questions

### Question 1 (8 marks)
**"Write the HTML code for a student registration form with at least 5 different input types."**

Mark scheme: 1 mark per distinct, correctly implemented input type (text, email, password, radio, checkbox, select, textarea). 1 mark for proper label usage. 1 mark for form tag with action and method.

### Question 2 (3 marks)
**"What is the difference between GET and POST methods in HTML forms?"**

- GET appends data to URL, POST sends in request body — (1 mark)
- GET is visible/bookmarkable, POST is hidden — (1 mark)
- GET for search/filter, POST for sensitive data like login — (1 mark)

---

## 🎤 Viva Questions

**Q: Why is the `name` attribute important on form inputs?**
**A:** The `name` attribute is the key that identifies the data when the form is submitted. Without `name`, the input's value is NOT sent to the server. In `method="GET"`, the URL becomes `?name=value&email=user@example.com` — these keys are the `name` attributes.

**Q: What does `required` do in HTML5?**
**A:** The `required` attribute enables built-in browser validation. If the user submits the form and the required field is empty, the browser displays a native error message and prevents submission — without any JavaScript needed. It's a client-side validation feature introduced in HTML5.

---

## 👨‍🏫 From a Student's Perspective

Form questions are the most predictable exam questions — "write a registration form" appears almost every year. My strategy: memorise the structure of ONE complete form (like the example above) and adapt it. Every registration form needs: text, email, password, select/radio, checkbox (terms), and submit.

**What gets the highest marks:** Using `<fieldset>` and `<legend>` for radio button groups, and showing HTML5 validation attributes (required, minlength, pattern). Most students just write basic inputs — these extras score bonus marks.

<DownloadPDF filename="html-forms" label="Download HTML Forms PDF" />

<TeacherPerspective
  topic="HTML Forms"
  whatGetsFullMarks={[
    "label for= matching input id=",
    "POST method for sensitive forms",
    "At least 5 different input types",
    "fieldset/legend for radio groups",
    "HTML5 validation attributes"
  ]}
  commonDeductions={[
    "Missing for/id connection on labels",
    "Using GET for password forms",
    "Submit button outside the form tag",
    "Missing name attribute on inputs"
  ]}
  keywords={["form", "action", "method", "POST", "GET", "input", "label", "required", "type", "name", "id"]}
/>

<ProgressTracker noteId="/docs/web-technologies/html/html-forms" totalNotes={21} />
