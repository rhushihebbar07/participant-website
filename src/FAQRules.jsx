import { useState } from 'react'
import './FAQRules.css'

const faqItems = [
  {
    question: 'What should I bring for the event?',
    answer:
      'Keep your registration details, valid identification and any required event materials easily accessible before arriving at the venue.',
  },
  {
    question: 'Where do I check in?',
    answer:
      'Follow the participant signs after entering the campus and proceed to the designated check-in desk. The event team will guide you if you need assistance.',
  },
  {
    question: 'What time should I arrive?',
    answer:
      'Arrive within the participant arrival window communicated by the event organisers so you have enough time to complete registration and settle in.',
  },
  {
    question: 'What happens after check-in?',
    answer:
      'After your details are verified, follow the instructions provided by the event team and proceed to your designated area.',
  },
  {
    question: 'Can I get help if I am lost?',
    answer:
      'Yes. Use the Helpdesk & Emergency section for assistance, directions and important contact information.',
  },
  {
    question: 'Where can I find campus facilities?',
    answer:
      'Use the Campus Map section to explore important locations and facilities around the NMAM Institute of Technology campus.',
  },
  {
    question: 'What are the important event rules?',
    answer:
      'Follow the instructions provided by the organisers, respect campus guidelines and arrive at your assigned locations on time.',
  },
  {
    question: 'Who should I contact during an emergency?',
    answer:
      'Use the emergency contacts displayed in the Helpdesk & Emergency section and immediately inform the nearest event coordinator or campus staff member.',
  },
]

function FAQRules() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex((current) =>
      current === index ? null : index
    )
  }

  return (
    <section
      id="faq-rules"
      className="faq-rules-section"
    >
      <div className="faq-rules-glow faq-glow-one" />
      <div className="faq-rules-glow faq-glow-two" />

      <div className="faq-rules-container">

        {/* HEADER */}

        <div className="faq-rules-heading">

          <div className="faq-rules-eyebrow">
            <span />
            FAQ & RULES
            <span />
          </div>

          <h2>
            Everything you need
            <br />
            <span>to know.</span>
          </h2>

          <p>
            Find quick answers to common participant
            questions and important event guidelines
            before you begin your Semaphore experience.
          </p>

        </div>

        {/* FAQ LIST */}

        <div className="faq-rules-content">

          <div className="faq-rules-list">

            {faqItems.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <article
                  className={`faq-rule-item ${
                    isOpen ? 'is-open' : ''
                  }`}
                  key={item.question}
                >

                  <button
                    type="button"
                    className="faq-rule-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >

                    <span className="faq-rule-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="faq-rule-title">
                      {item.question}
                    </span>

                    <span className="faq-rule-toggle">
                      {isOpen ? '−' : '+'}
                    </span>

                  </button>

                  <div
                    className={`faq-rule-answer ${
                      isOpen ? 'visible' : ''
                    }`}
                  >
                    <p>
                      {item.answer}
                    </p>
                  </div>

                </article>
              )
            })}

          </div>

          {/* RULES SIDE CARD */}

          <aside className="faq-rules-side">

            <div className="rules-card">

              <span className="rules-card-label">
                PARTICIPANT NOTE
              </span>

              <div className="rules-card-icon">
                ✓
              </div>

              <h3>
                Stay informed.
                <br />
                Stay prepared.
              </h3>

              <p>
                Keep your registration details ready,
                follow event instructions and reach
                your assigned locations on time.
              </p>

              <div className="rules-card-line" />

              <span className="rules-status">
                ● EVENT GUIDELINES
              </span>

            </div>

            <a
              href="#help"
              className="faq-help-link"
            >
              Need more help?
              <span>→</span>
            </a>

          </aside>

        </div>

        {/* BOTTOM */}

        <div className="faq-rules-bottom">

          <div className="faq-bottom-status">
            <span>●</span>
            QUICK REFERENCE
          </div>

          <p>
            Still have a question? Contact the
            participant helpdesk for assistance.
          </p>

          <a
            href="#help"
            className="faq-bottom-cta"
          >
            Contact Helpdesk
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  )
}

export default FAQRules