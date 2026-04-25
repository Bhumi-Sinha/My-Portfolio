# Bhumi Sinha — Portfolio

A dark, futuristic React portfolio website with scroll animations, glitch effects, and a cyber-terminal aesthetic.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation & Run

```bash
# 1. Navigate into the folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Then open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder you can deploy anywhere.

---

## 🌐 Deploy to GitHub Pages (Free hosting)

1. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Add to `vite.config.js`:
   ```js
   base: '/your-repo-name/',
   ```

4. Run:
   ```bash
   npm run deploy
   ```

---

## 📁 File Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx        ← All components
│   ├── App.css        ← All styles
│   └── main.jsx       ← Entry point
├── index.html
├── package.json
└── vite.config.js
```

## ✏️ How to Customize

- **Update info**: Edit `SKILLS`, `PROJECTS`, `CERTS`, `ACHIEVEMENTS` arrays at the top of `App.jsx`
- **Change accent color**: Edit `--accent` in `:root` inside `App.css`
- **Add your photo**: Add an `<img>` tag in the hero section in `App.jsx`
- **Add GenAI project**: Add a new entry to the `PROJECTS` array

---

Built with React + Vite · No external UI libraries
