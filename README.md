# 🌊 SEMAPHORE 2K26 — Participant Website

<div align="center">

**An immersive participant information portal for Semaphore 2K26**

Built with **React + Vite** and designed around a modern underwater visual experience.

[![React](https://img.shields.io/badge/React-18%2B-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Git](https://img.shields.io/badge/Git-Feature%20Branch%20Workflow-F05032?logo=git&logoColor=white)](https://git-scm.com/)

</div>

---

## 📖 About the Project

**Semaphore 2K26 Participant Website** is a centralized information portal created to help participants quickly find everything they need before and during the event.

The website combines practical participant information with an immersive **underwater-inspired interface**, including atmospheric depth, water effects, floating particles, bubbles, and a distinctive Semaphore visual identity.

The project is developed as a modular React application where each major website feature can be developed independently on its own Git feature branch and later integrated through Pull Requests.

---

## 🎯 Project Goals

- Provide participants with a single place to access essential event information.
- Make important information easy to discover through clear navigation.
- Present event schedules and dates in an engaging way.
- Provide practical arrival and check-in guidance.
- Help participants prepare using a dedicated checklist.
- Make FAQs and rules easy to search and browse.
- Provide campus locations and facility information.
- Give participants quick access to helpdesk and emergency contacts.
- Maintain a responsive experience across desktop and mobile devices.
- Keep the codebase modular so features can be developed independently.

---

## ✨ Features

### 🧭 Header & Navigation

A responsive navigation system that provides access to the major participant sections.

Includes:

- Home
- Events
- Arrival Guide
- Checklist
- FAQ
- Help
- Check-In action
- Mobile navigation menu
- NITTE and SAMCA branding area
- Semaphore wordmark

---

### 📅 Events Page

The Events section presents the Semaphore 2K26 event information in a dedicated interface.

Includes:

- Event overview
- **17–18 September 2026** event dates
- Countdown to **17 September 2026**
- Day 01 / Day 02 event selection
- Event category cards
- Event information
- Responsive styling

---

### 🚶 Arrival & Check-In Guide

Helps participants understand what to do when arriving at the event.

Designed to provide:

- Arrival guidance
- Check-in information
- Important participant instructions
- Easy access from the main navigation

---

### ✅ Participant Checklist Hub

A dedicated preparation area for participants.

The checklist is intended to help participants make sure they have completed important preparations before attending the event.

---

### 🔎 Instant FAQ Search

Allows participants to quickly find answers without manually browsing the entire FAQ content.

The feature is designed around fast information discovery and a simple search experience.

---

### 📚 FAQ & Rules Accordion

A structured FAQ and rules section where information can be expanded and collapsed.

Benefits:

- Cleaner presentation
- Less visual clutter
- Easier scanning
- Quick access to individual questions and rules

---

### 🗺️ Campus Map & Facilities

Provides campus-related information through map and facility cards.

Designed to help participants locate important areas and understand available facilities.

---

### 🆘 Helpdesk & Emergency Contacts

A dedicated support section for participant assistance.

Provides a clear location for:

- Helpdesk information
- Emergency contacts
- Support-related information

---

### 🔗 Footer & Main Website Link

The footer provides closing navigation and a link back to the main website.

It also gives the website a consistent ending section and reinforces the event identity.

---

## 🎨 Design System

The project uses a clean institutional palette combined with the underwater Semaphore visual theme.

### Core Colors

| Color | Hex | Usage |
|---|---|---|
| Off-White | `#F8FAFC` | Page background |
| Dark Slate | `#1E293B` | Main text |
| Indigo | `#4F46E5` | Buttons and accents |
| White | `#FFFFFF` | Cards and surfaces |
| Soft Amber | `#D97706` | Countdown timers and highlights |

### Visual Direction

The main visual direction includes:

- 🌊 Underwater atmosphere
- 💧 Water-inspired motion
- ✨ Floating particles
- 🫧 Rising bubbles
- ☀️ Underwater light rays
- 🌫️ Atmospheric depth
- 📱 Responsive layouts
- 🎓 Professional college-event styling

---

## 🏗️ Project Structure

```text
participant-website/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   │
│   ├── Events.jsx
│   ├── Events.css
│   │
│   ├── ArrivalCheckin.jsx
│   ├── ArrivalCheckin.css
│   │
│   ├── ParticipantChecklist.jsx
│   ├── ParticipantChecklist.css
│   │
│   ├── FAQSearch.jsx
│   ├── FAQSearch.css
│   │
│   ├── FAQRules.jsx
│   ├── FAQRules.css
│   │
│   ├── CampusMap.jsx
│   ├── CampusMap.css
│   │
│   ├── HelpdeskEmergency.jsx
│   ├── HelpdeskEmergency.css
│   │
│   ├── Footer.jsx
│   ├── Footer.css
│   │
│   └── UnderwaterScene.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
