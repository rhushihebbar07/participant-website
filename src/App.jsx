import { useState } from 'react'
import './App.css'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Arrival Guide', href: '#guide' },
  { name: 'Checklist', href: '#checklist' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Help', href: '#help' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="semaphore-page">

      {/* =====================================================
          REAL UNDERWATER BACKGROUND
      ====================================================== */}

      <div className="underwater-scene" aria-hidden="true">
        <div className="scene-surface" />
        <div className="scene-rays scene-rays-one" />
        <div className="scene-rays scene-rays-two" />
        <div className="scene-caustics" />
        <div className="scene-haze" />

        <div className="scene-particles">
          {Array.from({ length: 42 }).map((_, index) => (
            <span
              key={index}
              className={`scene-particle particle-${index + 1}`}
            />
          ))}
        </div>

        <div className="scene-bubbles">
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={index}
              className={`scene-bubble bubble-${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Atmospheric depth */}
      <div className="depth-overlay" aria-hidden="true" />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="semaphore-header">

        <div className="header-top-shimmer" />

        {/* TOP ROW */}
        <div className="header-top">

          {/* NITTE + SAMCA */}
          <div className="institution-group">

            <a href="#home" className="institution nitte">
              <div className="logo-box nitte-logo">
                <span>N</span>
              </div>

              <div className="institution-copy">
                <strong>NITTE</strong>
                <small>Deemed to be University</small>
              </div>
            </a>

            <div className="institution-divider" />

            <a href="#home" className="institution samca">
              <div className="logo-box samca-logo">
                <span>S</span>
              </div>

              <div className="institution-copy">
                <strong>SAMCA</strong>
                <small>NITTE</small>
              </div>
            </a>

          </div>

          {/* SEMAPHORE */}
          <a href="#home" className="semaphore-wordmark" aria-label="Semaphore">
            <span>S</span>
            <span>E</span>
            <span>M</span>
            <span>A</span>
            <span>P</span>
            <span>H</span>
            <span className="ocean-o">O</span>
            <span>R</span>
            <span>E</span>
          </a>

          {/* DESKTOP CHECK IN */}
          <a href="#checkin" className="checkin-button">
            <span>Check In</span>
            <span className="checkin-arrow">→</span>
          </a>

          {/* MOBILE MENU */}
          <button
            className={`mobile-menu ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>

        </div>

        {/* DIVIDER */}
        <div className="header-divider" />

        {/* NAVIGATION */}
        <nav
          className={`main-navigation ${menuOpen ? 'open' : ''}`}
          aria-label="Main navigation"
        >
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`navigation-item ${
                index === 0 ? 'current' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        {/* WATER EDGE */}
        <div className="header-water-edge" aria-hidden="true">
          <div className="water-wave wave-one" />
          <div className="water-wave wave-two" />
          <div className="water-wave wave-three" />
          <div className="edge-light" />
        </div>

      </header>

      {/* =====================================================
          TEMPORARY HERO
          We'll replace this with the actual module.
      ====================================================== */}

      <main className="temporary-space" id="home">

        <div className="hero-depth-glow" />

        <div className="temporary-inner">

          <div className="eyebrow">
            <span />
            SEMAPHORE
            <span />
          </div>

          <h1>
            Welcome to the
            <br />
            <strong>underwater experience.</strong>
          </h1>

          <p>
            Participant information portal
          </p>

        </div>

      </main>

    </div>
  )
}

export default App