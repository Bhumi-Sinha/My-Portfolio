import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Certifications", "Achievements", "Contact"];

const SKILLS = {
  "Languages": ["Python", "C", "JavaScript", "SQL"],
  "AI / ML / GenAI": ["Machine Learning", "Deep Learning", "NLP", "LLM Fundamentals", "Attention Mechanisms", "Prompt Engineering", "Scikit-learn", "TensorFlow/Keras"],
  "Web Development": ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Flask/FastAPI"],
  "Big Data & Distributed Systems": ["Hadoop HDFS", "Apache Kafka", "Apache Zookeeper", "Apache Spark"],
  "Databases": ["MySQL", "MongoDB"],
  "Cybersecurity": ["Cryptography (AES, RSA)", "Linux Security", "SEED Labs"],
  "Tools & Platforms": ["Git", "GitHub", "VS Code", "Google Colab", "Figma", "Canva"],
};

const PROJECTS = [
  {
    title: "RhythmWave",
    type: "Full Stack",
    emoji: "🎵",
    description: "A sleek, full-stack music streaming platform with user login, real-time audio playback, custom playlists, and smooth search. Styled with modern JavaScript and CSS for a clean, responsive, and engaging music experience.",
    tech: ["MERN Stack", "JavaScript", "CSS", "MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/Bhumi-Sinha/RhythmWave_miniproject",
    accent: "#00f5c4",
  },
  {
    title: "Mini HDFS Simulation",
    type: "Distributed Systems · Team Lead",
    emoji: "🗄️",
    description: "Distributed file storage system inspired by Hadoop HDFS with Namenode, two Datanodes, and Client UI. Implemented 2MB file chunking, replication, heartbeat monitoring, metadata management, and end-to-end file upload/download with integrity checks.",
    tech: ["Python", "Flask/FastAPI", "TCP Sockets", "Multithreading", "HTML/JS", "Ubuntu"],
    github: "https://github.com/Bhumi-Sinha/41_Project1_BD",
    accent: "#7c6fff",
  },
  {
    title: "Traffic Flow Predictor",
    type: "Machine Learning",
    emoji: "🚦",
    description: "ML model to predict urban traffic congestion levels (0–4) using historical road, time, and day data. Implemented data preprocessing, one-hot encoding, feedforward neural network alongside a Random Forest baseline with trend visualizations.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow/Keras", "Matplotlib"],
    github: "https://github.com/Bhumi-Sinha/ML_miniproject",
    accent: "#ff6b6b",
  },
  {
    title: "Expense Tracker",
    type: "Full Stack",
    emoji: "💰",
    description: "Python Tkinter app to log and manage daily expenses with secure login, image uploads, date picker, and real-time spending statistics. Built with PIL, tkcalendar, and a themed UI for smooth user experience.",
    tech: ["Python", "Tkinter", "PIL", "CSV", "tkcalendar", "ttkthemes"],
    github: "https://github.com/Bhumi-Sinha/ExpenseTracker_miniproject",
    accent: "#ffa94d",
  },
];

const CERTS = [
  { name: "Python Problem Solving", issuer: "HackerRank", icon: "🐍" },
  { name: "SQL", issuer: "HackerRank", icon: "🗃️" },
  { name: "Frontend Development in React", issuer: "HackerRank", icon: "⚛️" },
];

const ACHIEVEMENTS = [
  { icon: "⚡", title: "Ingenius 12.0", desc: "24-hour hackathon participant" },
  { icon: "🌙", title: "Hacknight 6.0", desc: "19-hour hackathon participant" },
  { icon: "🔐", title: "Cryovault CTF", desc: "Cybersecurity CTF by ISFCR" },
  { icon: "🎨", title: "DSGNR Club", desc: "Active member of PES Design Club" },
];

function useIntersection(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Section({ id, children, className = "" }) {
  const [ref, visible] = useIntersection();
  return (
    <section
      id={id}
      ref={ref}
      className={`section ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

function GlitchText({ text }) {
  return (
    <span className="glitch" data-text={text}>
      {text}
    </span>
  );
}

export default function App() {
  const [activeNav, setActiveNav] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map(n => document.getElementById(n.toLowerCase()));
      const current = sections.find(s => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveNav(current.id.charAt(0).toUpperCase() + current.id.slice(1));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Custom cursor */}
      <div className="cursor" style={{ left: cursorPos.x, top: cursorPos.y }} />
      <div className="cursor-ring" style={{ left: cursorPos.x, top: cursorPos.y }} />

      {/* Noise overlay */}
      <div className="noise" />

      {/* Grid background */}
      <div className="grid-bg" />

      {/* NAV */}
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <span className="nav-logo" onClick={() => scrollTo("about")}>
            BS<span className="accent">.</span>
          </span>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            {NAV_LINKS.map(link => (
              <li key={link}>
                <button
                  className={`nav-link ${activeNav === link ? "active" : ""}`}
                  onClick={() => scrollTo(link)}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" className="hero">
        <div className="hero-orb orb1" />
        <div className="hero-orb orb2" />
        <div className="hero-orb orb3" />
        <div className="hero-content">
          <div className="hero-avatar">
            <img src="/profilepic.jpeg" alt="Bhumi Sinha" />
          </div>
          <div className="hero-badge">
            <span className="badge-dot" />
            Open to Internships & Placements
          </div>
          <h1 className="hero-name">
            <GlitchText text="Bhumi" />{" "}
            <span className="hero-name-last">Sinha</span>
          </h1>
          <div className="hero-role-row">
            <span className="hero-role">B.Tech CSE · 6th Sem · PES University</span>
          </div>
          <p className="hero-tagline">
            Building at the intersection of{" "}
            <span className="accent">Generative AI</span>,{" "}
            <span className="accent2">Full Stack</span> &{" "}
            <span className="accent3">Distributed Systems</span>
          </p>
          <div className="hero-chips">
            {["GenAI", "NLP", "LLM", "MERN Stack", "Big Data", "ML"].map(c => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
          <div className="hero-links">
            <a href="https://github.com/Bhumi-Sinha" target="_blank" rel="noreferrer" className="hero-btn primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/bhumi-sinha" target="_blank" rel="noreferrer" className="hero-btn secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="mailto:bhumisinha2005@gmail.com" className="hero-btn ghost">
              ✉ bhumisinha2005@gmail.com
            </a>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* SKILLS */}
      <Section id="skills">
        <div className="container">
          <h2 className="section-title">Technical <span className="accent">Skills</span></h2>
          <div className="skills-grid">
            {Object.entries(SKILLS).map(([category, items], i) => (
              <div key={category} className="skill-card" style={{ animationDelay: `${i * 0.08}s` }}>
                <h3 className="skill-cat">{category}</h3>
                <div className="skill-tags">
                  {items.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div className="genai-banner">
            <span className="pulse-dot" />
            <strong>Currently Building:</strong> GenAI project with LLM · NLP · RAG · Prompt Engineering
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects">
        <div className="container">
          <h2 className="section-title">Major <span className="accent">Projects</span></h2>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <div key={p.title} className="project-card" style={{ "--accent": p.accent, animationDelay: `${i * 0.1}s` }}>
                <div className="project-top">
                  <span className="project-emoji">{p.emoji}</span>
                  <span className="project-type">{p.type}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tech">
                  {p.tech.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
                <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  View on GitHub ↗
                </a>
                <div className="card-glow" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section id="certifications">
        <div className="container">
          <h2 className="section-title">Certi<span className="accent">fications</span></h2>
          <div className="cert-row">
            {CERTS.map((c, i) => (
              <div key={c.name} className="cert-card" style={{ animationDelay: `${i * 0.12}s` }}>
                <span className="cert-icon">{c.icon}</span>
                <div>
                  <p className="cert-name">{c.name}</p>
                  <p className="cert-issuer">{c.issuer}</p>
                </div>
                <span className="cert-verified">✓ Verified</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section id="achievements">
        <div className="container">
          <h2 className="section-title">Achieve<span className="accent">ments</span></h2>
          <div className="achieve-grid">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={a.title} className="achieve-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="achieve-icon">{a.icon}</span>
                <h3 className="achieve-title">{a.title}</h3>
                <p className="achieve-desc">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="edu-section">
            <h2 className="section-title" style={{ marginTop: "5rem" }}>Edu<span className="accent">cation</span></h2>
            <div className="edu-timeline">
              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-content">
                  <span className="edu-year">2023 – 2027</span>
                  <h3>B.Tech in Computer Science Engineering</h3>
                  <p>PES University, Bengaluru</p>
                  <span className="edu-score">CGPA: <strong>7.38</strong></span>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-content">
                  <span className="edu-year">2021 – 2023</span>
                  <h3>Senior Secondary (12th) · CBSE</h3>
                  <p>Notre Dame Academy, Patna</p>
                  <span className="edu-score">85.6%</span>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-content">
                  <span className="edu-year">2011 – 2021</span>
                  <h3>Secondary (10th) · CBSE</h3>
                  <p>Notre Dame Academy, Patna</p>
                  <span className="edu-score">92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <div className="container contact-container">
          <h2 className="section-title">Get In <span className="accent">Touch</span></h2>
          <p className="contact-sub">I'm actively looking for internships and placements. Let's build something amazing together.</p>
          <div className="contact-cards">
            <a href="mailto:bhumisinha2005@gmail.com" className="contact-card">
              <span className="cc-icon">✉</span>
              <span className="cc-label">Email</span>
              <span className="cc-value">bhumisinha2005@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/bhumi-sinha" target="_blank" rel="noreferrer" className="contact-card">
              <span className="cc-icon">💼</span>
              <span className="cc-label">LinkedIn</span>
              <span className="cc-value">bhumi-sinha</span>
            </a>
            <a href="https://github.com/Bhumi-Sinha" target="_blank" rel="noreferrer" className="contact-card">
              <span className="cc-icon">💻</span>
              <span className="cc-label">GitHub</span>
              <span className="cc-value">Bhumi-Sinha</span>
            </a>
            <a href="tel:8877665501" className="contact-card">
              <span className="cc-icon">📞</span>
              <span className="cc-label">Phone</span>
              <span className="cc-value">+91 8877665501</span>
            </a>
          </div>
        </div>
      </Section>

      <footer className="footer">
        <span>Designed & built by <span className="accent">Bhumi Sinha</span> · 2025</span>
      </footer>
    </div>
  );
}
