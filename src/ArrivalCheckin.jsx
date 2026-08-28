import './ArrivalCheckin.css'

const steps = [
  {
    number: '01',
    title: 'Prepare before arrival',
    text: 'Keep your registration details and required documents ready before reaching the venue.',
    icon: '◈',
  },
  {
    number: '02',
    title: 'Reach the venue',
    text: 'Follow the event directions and arrive within the designated participant arrival window.',
    icon: '⌖',
  },
  {
    number: '03',
    title: 'Find the check-in desk',
    text: 'Proceed to the participant check-in area and keep your registration information available.',
    icon: '▣',
  },
  {
    number: '04',
    title: 'Complete check-in',
    text: 'Verify your details with the event team and collect the information provided.',
    icon: '✓',
  },
]

function ArrivalCheckin() {
  return (
    <section
      id="guide"
      className="arrival-section"
      aria-labelledby="arrival-title"
    >
      <div
        className="arrival-glow arrival-glow-one"
        aria-hidden="true"
      />

      <div
        className="arrival-glow arrival-glow-two"
        aria-hidden="true"
      />

      <div className="arrival-container">

        <div className="arrival-heading">

          <div className="arrival-eyebrow">
            <span className="arrival-line" />
            ARRIVAL &amp; CHECK-IN
            <span className="arrival-line" />
          </div>

          <h2 id="arrival-title">
            Begin your journey
            <br />
            <span>with confidence.</span>
          </h2>

          <p>
            A simple step-by-step guide to help you
            arrive, check in and get ready for the
            Semaphore experience.
          </p>

        </div>

        <div className="arrival-flow">

          <div
            className="flow-line"
            aria-hidden="true"
          />

          {steps.map((step) => (
            <article
              className="arrival-card"
              key={step.number}
            >
              <div className="card-number">
                {step.number}
              </div>

              <div
                className="card-icon"
                aria-hidden="true"
              >
                {step.icon}
              </div>

              <div className="card-content">
                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.text}
                </p>
              </div>

              <div
                className="card-water-glow"
                aria-hidden="true"
              />
            </article>
          ))}

        </div>

        <div className="arrival-info-grid">

          <article className="arrival-info-card">
            <span className="info-label">
              BEFORE YOU ARRIVE
            </span>

            <h3>
              Keep everything ready.
            </h3>

            <p>
              Registration details, identification
              and any required event material should
              be easily accessible.
            </p>
          </article>

          <article className="arrival-info-card highlight">
            <span className="info-label">
              CHECK-IN
            </span>

            <h3>
              Follow the flow.
            </h3>

            <p>
              Reach the designated participant desk,
              verify your details and follow the
              instructions from the event team.
            </p>
          </article>

          <article className="arrival-info-card">
            <span className="info-label">
              NEED HELP?
            </span>

            <h3>
              We&apos;re here for you.
            </h3>

            <p>
              If you are unsure where to go,
              use the Help section or contact
              the event helpdesk.
            </p>
          </article>

        </div>

        <div className="arrival-bottom">

          <div className="arrival-bottom-copy">
            <span className="bottom-status">
              ● PARTICIPANT GUIDE
            </span>

            <strong>
              Arrive prepared. Stay informed.
            </strong>
          </div>

          <a
            href="#checklist"
            className="arrival-cta"
          >
            <span>
              View Checklist
            </span>

            <span
              className="arrival-cta-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  )
}

export default ArrivalCheckin