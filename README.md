# 🌑 BlackMargin Translations | Studio Template

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

A high-performance, single-file landing page designed for **Translation Groups, Scanlation Teams, and Localization Studios**. 

This template features a "Dark/Glass" aesthetic, integrated service pricing, and a logic-driven contact form that captures specific project details.

## ⚡ Features

* **Zero Dependencies:** No frameworks (React/Vue) or build steps required. Just pure HTML/CSS/JS.
* **Animation Engine:** Custom CSS Bezier curves and Intersection Observers for smooth reveal animations on scroll.
* **Smart Contact Form:**
    * **Dynamic Context:** Clicking a pricing tier (e.g., "Full Production") automatically fills a hidden field in the contact form so you know exactly what the client wants.
    * **Spam Protection:** Includes a custom "Honeypot" logic to block bots before they reach the server.
    * **AJAX Submission:** Submits data without refreshing the page using the Fetch API.
* **Interactive UI:**
    * **Lightbox:** Click any gallery image for a full-screen preview.
    * **TOS Modal:** A built-in pop-up for quick Terms of Service reading.
    * **FAQ Accordions:** Clean, CSS-driven expand/collapse sections.

## 🛠️ Configuration & Setup

### 1. The Contact Form (Crucial)
This site uses **FormSubmit** to send emails without a backend. You **must** update the email address, or you will not receive inquiries.

Open `index.html` and find the Javascript section (near the bottom):
```javascript
// Look for this line inside the form logic:
const response = await fetch("[https://formsubmit.co/ajax/blackmargin7371@gmail.com](https://formsubmit.co/ajax/blackmargin7371@gmail.com)", {
