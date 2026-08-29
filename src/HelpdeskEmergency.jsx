import './HelpdeskEmergency.css'

const contacts = [
  {
    type: 'EVENT HELPDESK',
    title: 'Participant Helpdesk',
    description:
      'For registration issues, directions, schedules, check-in assistance and general participant support.',
    contact: 'Event Helpdesk',
    action: 'Contact Helpdesk',
    icon: '◈',
  },
  {
    type: 'CAMPUS SUPPORT',
    title: 'Campus Assistance',
    description:
      'For help finding buildings, facilities, transport points or other locations around the NMAMIT campus.',
    contact: 'Campus Support',
    action: 'Get Assistance',
    icon: '⌖',
  },
  {
    type: 'MEDICAL',
    title: 'Health Centre',
    description:
      'For medical assistance or health-related support during your time on campus.',
    contact: 'Campus Health Centre',
    action: 'Find Health Centre',
    icon: '+',
  },
  {
    type: 'EMERGENCY',
    title: 'Emergency Services',
    description:
      'For urgent situations requiring immediate assistance, contact the appropriate emergency service.',
    contact: 'Emergency Services',
    action: 'Emergency Help',
    icon: '!',
  },
]

function HelpdeskEmergency() {
  return (
    <section
      id="help"
      className="helpdesk-section"
      aria-labelledby="helpdesk-title"
    >

      <div
        className="helpdesk-glow helpdesk-glow-one"
        aria-hidden="true"
      />

      <div
        className="helpdesk-glow helpdesk-glow-two"
        aria-hidden="true"
      />

      <div className="helpdesk-container">

        {/* =================================================
            HEADING
        ================================================== */}

        <div className="helpdesk-heading">

          <div className="helpdesk-eyebrow">
            <span />
            HELP & EMERGENCY SUPPORT
            <span />
          </div>

          <h2 id="helpdesk-title">
            Need assistance?
            <br />
            <strong>We're here to help.</strong>
          </h2>

          <p>
            Whether you need help finding your way,
            completing check-in or dealing with an
            urgent situation, find the right support
            below.
          </p>

        </div>

        {/* =================================================
            EMERGENCY BANNER
        ================================================== */}

        <div className="emergency-banner">

          <div className="emergency-pulse">
            <span />
          </div>

          <div className="emergency-copy">

            <span>
              IN CASE OF AN EMERGENCY
            </span>

            <strong>
              Stay calm and contact the appropriate
              emergency service immediately.
            </strong>

          </div>

          <a
            href="tel:112"
            className="emergency-call"
          >
            <span>112</span>
            <small>EMERGENCY</small>
          </a>

        </div>

        {/* =================================================
            CONTACT CARDS
        ================================================== */}

        <div className="helpdesk-grid">

          {contacts.map((contact) => (
            <article
              className={`helpdesk-card ${
                contact.type === 'EMERGENCY'
                  ? 'emergency-card'
                  : ''
              }`}
              key={contact.title}
            >

              <div className="helpdesk-card-top">

                <span className="helpdesk-card-type">
                  {contact.type}
                </span>

                <span className="helpdesk-card-number">
                  {String(
                    contacts.indexOf(contact) + 1,
                  ).padStart(2, '0')}
                </span>

              </div>

              <div className="helpdesk-icon">
                {contact.icon}
              </div>

              <h3>
                {contact.title}
              </h3>

              <p>
                {contact.description}
              </p>

              <div className="helpdesk-card-divider" />

              <div className="helpdesk-contact">

                <span>
                  {contact.contact}
                </span>

                <a
                  href={
                    contact.type === 'EMERGENCY'
                      ? 'tel:112'
                      : '#help'
                  }
                  onClick={(event) => {
                    if (
                      contact.type !== 'EMERGENCY'
                    ) {
                      event.preventDefault()
                    }
                  }}
                >
                  {contact.action}
                  <strong>→</strong>
                </a>

              </div>

            </article>
          ))}

        </div>

        {/* =================================================
            SUPPORT STRIP
        ================================================== */}

        <div className="helpdesk-support-strip">

          <div className="support-status">
            <span />
            SUPPORT AVAILABLE
          </div>

          <div className="support-message">
            <strong>
              Can't find what you need?
            </strong>

            <span>
              Ask the event team for assistance at
              the participant helpdesk.
            </span>
          </div>

          <a
            href="#guide"
            className="support-guide-link"
          >
            View Arrival Guide
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  )
}

export default HelpdeskEmergency