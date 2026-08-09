# Premium Dark-Themed Developer Portfolio

A futuristic, high-end single-page developer portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, **Lucide Icons**, and **Interactive Particle Background**.

Designed with deep black `#05010f` background, glowing purple/blue glassmorphism accents, smooth scrolling, project detail modals, timeline animations, and a print-ready resume viewer.

---

## 🌟 Features

- **Futuristic & Dark Theme**: Deep black (#05010f) canvas accented with purple and cyan ambient glows.
- **Connecting Particle Network**: Smooth canvas-based dot & linking line animation that moves dynamically and reacts to cursor interaction.
- **Floating Glassmorphism Navbar**: Pill-shaped top navigation bar with live scrollSpy section highlighting and mobile drawer.
- **Modular Data Architecture**: **All text, skills, experience, projects, achievements, and contacts are stored in `src/data/portfolioData.ts`**. You can update your portfolio content in minutes without touching layout code!
- **Interactive Sections**:
  - **About / Hero**: Bio summary, status indicator, action buttons, quick stats, and social links.
  - **Skills**: Filterable technology grid with level progress indicators and top tech ribbon badges.
  - **Projects**: Category filter, tech pills, source code links, live demo links, and detailed modal popup.
  - **Experience**: Animated vertical timeline with company roles, achievements, and tech badges.
  - **Volunteering**: Community leadership cards with impact metrics.
  - **Achievements**: Glass cards for certifications, honors, hackathons, and badges.
  - **Contact**: Interactive glass form with instant success toast notification + direct social cards.
- **Interactive Resume Modal**: Built-in resume viewer with instant print & PDF export functionality.
- **SEO Optimized**: Standard metadata tags, social card properties, semantic HTML5 tags, and custom favicon.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```

---

## ✏️ How to Customize Your Content

All portfolio information is stored in **`src/data/portfolioData.ts`**.

Simply edit the fields in `src/data/portfolioData.ts`:
- `personalDetails`: Your name, role, bio, social links, location, resume URL, and avatar image.
- `skillsData`: Add or remove technical skills, categories, proficiency %, and icon names.
- `experienceData`: Update work history, company names, key bullet points, and dates.
- `projectsData`: Add your own projects with images, live links, GitHub URLs, and descriptions.
- `volunteeringData`: Update community organizations and leadership roles.
- `achievementsData`: Highlight hackathon wins, AWS/cloud certifications, and awards.

---

## 🌐 One-Click Deployment

### Deploy to Vercel:
1. Push this repository to GitHub.
2. Import project into Vercel dashboard.
3. Build command: `npm run build`
4. Output directory: `dist`

### Deploy to Netlify:
1. Connect your GitHub repository to Netlify.
2. Set Build command to `npm run build`.
3. Set Publish directory to `dist`.

---

## 📄 License
MIT License. Free to use for personal portfolios and commercial showcases.
