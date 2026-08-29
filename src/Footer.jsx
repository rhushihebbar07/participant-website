import './Footer.css'

function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Arrival Guide', href: '#guide' },
    { name: 'Checklist', href: '#checklist' },
    { name: 'FAQ', href: '#faq-rules' },
    { name: 'Helpdesk', href: '#help' },
  ]

  return (
    <footer className="semaphore-footer">

      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <div className="footer-container">

        {/* Main footer */}

        <div className="footer-main">

          {/* Brand */}

          <div className="footer-brand">

            <a
              href="#home"
              className="footer-wordmark"
            >
              SEMAPHORE
            </a>

            <p>
              Participant information portal
              for a smooth, prepared and memorable
              event experience.
            </p>

            <span className="footer-status">
              <span>●</span>
              PARTICIPANT PORTAL
            </span>

          </div>

          {/* Quick links */}

          <div className="footer-links">

            <span className="footer-label">
              EXPLORE
            </span>

            <nav aria-label="Footer navigation">

              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                >
                  {link.name}
                  <span>→</span>
                </a>
              ))}

            </nav>

          </div>

          {/* Main website */}

          <div className="footer-website">

            <span className="footer-label">
              MAIN WEBSITE
            </span>

            <h3>
              Explore NITTE
            </h3>

            <p>
              Visit the main NITTE website for
              university information, updates and
              official resources.
            </p>

            <a
              href="https://nitte.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="footer-main-link"
            >
              Visit Main Website
              <span>↗</span>
            </a>

          </div>

        </div>

        {/* Footer divider */}

        <div className="footer-divider" />

        {/* Bottom row */}

        <div className="footer-bottom">

          <div className="footer-institutions">

            <strong>NITTE</strong>

            <span>×</span>

            <strong>SAMCA</strong>

          </div>

          <p>
            © {new Date().getFullYear()} Semaphore.
            All rights reserved.
          </p>

          <a
            href="#home"
            className="footer-back-top"
          >
            Back to top
            <span>↑</span>
          </a>

        </div>

      </div>

    </footer>
  )
}

export default Footer