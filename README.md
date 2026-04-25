# 🌐 Bhumi Sinha — Personal Portfolio

> A dark, futuristic personal portfolio website built with React + Vite. Designed to replace a traditional resume with an interactive, scrollable experience.

**Live Site:** `https://bhumi-sinha-portfolio.vercel.app` *(update this once deployed)*

---

## ✨ Features

- Glitch text animation on hero section
- Scroll-triggered fade-in animations for every section
- Custom animated cursor
- Animated ambient orbs + grid background with noise texture
- Sticky navbar with active section highlighting
- Fully responsive (mobile + desktop)
- No external UI libraries — pure React + CSS

---

## 🗂️ Sections

| Section | Content |
|---|---|
| **Hero** | Name, role, tech chips, GitHub / LinkedIn / email links |
| **Skills** | All technical skills grouped by category |
| **Projects** | 4 major projects with descriptions, tech stack, GitHub links |
| **Certifications** | HackerRank certifications with verified badges |
| **Achievements** | Hackathons, CTF, club activities |
| **Education** | Full education timeline |
| **Contact** | Email, LinkedIn, GitHub, phone |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| CSS3 | All styling (no Tailwind, no UI libraries) |
| Google Fonts | Syne · JetBrains Mono · Outfit |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm

### Run Locally

```bash
# Clone the repo
git clone https://github.com/Bhumi-Sinha/portfolio.git

# Navigate into the folder
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

Creates a `dist/` folder ready for deployment.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── photo.jpg          ← your profile photo (add this)
├── src/
│   ├── App.jsx            ← all components + data
│   ├── App.css            ← all styles
│   └── main.jsx           ← entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ✏️ How to Customize

**Update your info** — all content lives at the top of `src/App.jsx` in these arrays:

```js
const SKILLS = { ... }
const PROJECTS = [ ... ]
const CERTS = [ ... ]
const ACHIEVEMENTS = [ ... ]
```

**Add a new project** — append to the `PROJECTS` array:

```js
{
  title: "Your Project Name",
  type: "Full Stack",
  emoji: "🚀",
  description: "What it does...",
  tech: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/Bhumi-Sinha/your-repo",
  accent: "#00f5c4",   // pick any color
},
```

**Change accent color** — edit `--accent` in `src/App.css`:

```css
:root {
  --accent: #00f5c4;   /* change this */
}
```

**Add your photo** — place `photo.jpg` in the `public/` folder, then in `App.jsx` inside `.hero-content`:

```jsx
<div className="hero-avatar">
  <img src="/photo.jpg" alt="Bhumi Sinha" />
</div>
```

---

## 🌍 Deployment (Vercel — Free)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New Project** → import this repo
4. Vercel auto-detects Vite — click **Deploy**
5. Your site is live at `https://your-project.vercel.app`

Every future `git push` auto-updates the live site.

---

## 📬 Contact

| Platform | Link |
|---|---|
| Email | bhumisinha2005@gmail.com |
| LinkedIn | [bhumi-sinha](https://www.linkedin.com/in/bhumi-sinha) |
| GitHub | [Bhumi-Sinha](https://github.com/Bhumi-Sinha) |
| Phone | +91 8877665501 |

---

<p align="center">Designed & built by <strong>Bhumi Sinha</strong> · 2025</p>
