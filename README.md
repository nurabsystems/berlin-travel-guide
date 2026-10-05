# Berlin Travel Guide

> A collaborative mini-site built by **Group A-2** for the **Mayerfield Consulting Frontend Development Practicum**.

## 📖 About the Project

The **Berlin Travel Guide** is a five-page mini-site created as **Task 2** of the Frontend Practicum. Each group member contributed one page, following a shared design system and semantic HTML standards.


## 👥 Team — Group A-2

| Member | Role | Assigned Page | Contact |
|--------|------|---------------|---------|
| **Nurudeen Abdulsalam** | Group Coordinator | `index.html` — Home | nurudeen.abdulsalam@gmail.com |
| **Bruno Nunes** | Team Member | `about.html` — About Berlin | brunonunes084@gmail.com |
| **Lee Skink** | Team Member | `attractions.html` — Attractions | leeskink21@gmail.com |
| **Marcel Musela** | Team Member | `food.html` — Food | marcelmusela45@gmail.com |
| **Youssef Tourirt** | Team Member | `transport.html` — Transport | y.tourirt5@gmail.com |

**Coordinator responsibilities:** repository setup, PR reviews, integration testing, final submission.

---

## 🗂️ Project Structure

berlin-travel-guide/
├── .gitignore
├── README.md
└── task2-minisite/
├── _starter-template.html # Base template for teammates
├── index.html # Home (Nurudeen)
├── about.html # About Berlin (Bruno)
├── attractions.html # Attractions (Lee)
├── food.html # Food (Marcel)
├── transport.html # Transport (Youssef)
├── style.css # Shared stylesheet
├── script.js # Shared JS (hamburger menu, modals)
├── favicon.svg # Site favicon
├── site.webmanifest # PWA manifest
└── images/ # Shared images folder

Features

### Content
- Five topic pages with consistent header, nav, and footer
- Semantic HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Unique `<title>` and `<meta description>` per page

### Design System
- **CSS custom properties** (design tokens) for colors, spacing, shadows
- **Inter** font via Google Fonts
- **Gradient hero** and card-based layouts
- **CSS Grid** for lists and galleries
- **Mobile-first** responsive design

### Interactivity
- **Hamburger menu** on mobile (accessible — ARIA attributes, keyboard close, outside-click close)
- **AOS animations** — subtle fade-up on scroll
- **Hover states** on cards, buttons, and images
- **Focus-visible** outlines for keyboard users
- **Reduced-motion** support via `prefers-reduced-motion`

### Accessibility
- Semantic landmarks and heading hierarchy
- Descriptive `alt` text on all images
- ARIA attributes on interactive elements
- Sufficient color contrast
- Keyboard navigable

### Required Elements (Task 2 Brief)
- ✅ Navigation links between all pages (relative paths)
- ✅ External link with `target="_blank"` and `rel="noopener noreferrer"`
- ✅ `mailto:` link
- ✅ Images with `alt`, `width`, and `height`
- ✅ One image wrapped in `<a>` (image as link)
- ✅ Unique `<title>` per page
- ✅ Favicon
- ✅ `<ul>` or `<ol>` list
- ✅ Table with `<thead>`, `<tbody>`, and `colspan`/`rowspan`
