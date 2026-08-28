import { useState } from 'react'
import './FAQRules.css'

const faqGroups = [
  {
    category: 'ARRIVAL',
    questions: [
      {
        question: 'When should I arrive at the venue?',
        answer:
          'Please arrive within the designated participant arrival window mentioned in your event instructions. Arriving early gives you enough time to locate the venue, complete check-in and get comfortable before the programme begins.',
      },
      {
        question: 'Where should I go after reaching the campus?',
        answer:
          'Follow the event signage and participant directions displayed around the campus. If you are unsure, proceed to the designated participant help or check-in desk.',
      },
    ],
  },
  {
    category: 'CHECK-IN',
    questions: [
      {
        question: 'What do I need for check-in?',
        answer:
          'Keep your registration confirmation, participant details and any required identification or event documents easily accessible.',
      },
      {
        question: 'What happens after I complete check-in?',
        answer:
          'The event team will verify your details and provide the relevant instructions or materials. Follow the participant flow displayed at the venue.',
      },
    ],
  },
  {
    category: 'RULES',
    questions: [
      {
        question: 'What should I do during the event?',
        answer:
          'Follow the instructions of the event coordinators, respect the venue and other participants, and remain within the designated participant areas.',
      },
      {
        question: 'Can I ask the organisers for assistance?',
        answer:
          'Yes. The event team is available to help with participant-related questions, directions and other event requirements.',
      },
    ],
  },
  {
    category: 'SUPPORT',
    questions: [
      {
        question: 'What if I have a problem during arrival?',
        answer:
          'Use the Help section to locate the appropriate support contact or approach an event coordinator at the venue.',
      },
      {
        question: 'What if I cannot find the check-in desk?',
        answer:
          'Look for participant signage or contact the event helpdesk. The coordination team can guide you to the correct location.',
      },
    ],
  },
]

function FAQRules() {
  const [openItem, setOpenItem] = useState(null)

  const toggleItem = (id) => {
    setOpenItem((current) =>
      current === id ? null : id
    )
  }

  return (
    <section
      id="faq-rules"
      className="faq-rules-section"
      aria-labelledby="faq-rules-title"
    >
      <div
        className="faq-rules-orb faq-rules-orb-one"
        aria-hidden="true"
      />

      <div
        className="faq-rules-orb faq-rules-orb-two"
        aria-hidden="true"
      />

      <div className="faq-rules-container">

        {/* =================================================
            HEADER
        ================================================== */}

        <div className="faq-rules-heading">

          <div className="faq-rules-eyebrow">
            <span />
            FAQ &amp; EVENT RULES
            <span />
          </div>

          <h2 id="faq-rules-title">
            Everything you
            <br />
            <strong>need to know.</strong>
          </h2>

          <p>
            Explore the most important participant
            information, arrival instructions and
            event guidelines.
          </p>

        </div>

        {/* =================================================
            ACCORDION
        ================================================== */}

        <div className="faq-rules-list">

          {faqGroups.map((group) => (
            <div
              className="faq-rules-group"
              key={group.category}
            >

              <div className="faq-group-label">
                <span className="faq-group-dot" />
                {group.category}
              </div>

              <div className="faq-group-items">

                {group.questions.map(
                  (item, index) => {
                    const itemId =
                      `${group.category}-${index}`

                    const isOpen =
                      openItem === itemId

                    return (
                      <article
                        className={`faq-rule-item ${
                          isOpen ? 'open' : ''
                        }`}
                        key={item.question}
                      >

                        <button
                          type="button"
                          className="faq-rule-trigger"
                          onClick={() =>
                            toggleItem(itemId)
                          }
                          aria-expanded={isOpen}
                          aria-controls={`answer-${itemId}`}
                        >

                          <span className="faq-rule-number">
                            {String(index + 1).padStart(
                              2,
                              '0'
                            )}
                          </span>

                          <span className="faq-rule-question">
                            {item.question}
                          </span>

                          <span
                            className="faq-rule-plus"
                            aria-hidden="true"
                          >
                            <span />
                            <span />
                          </span>

                        </button>

                        <div
                          id={`answer-${itemId}`}
                          className="faq-rule-answer"
                          role="region"
                        >
                          <div className="faq-rule-answer-inner">

                            <span className="answer-marker">
                              RESPONSE
                            </span>

                            <p>
                              {item.answer}
                            </p>

                          </div>
                        </div>

                        <div
                          className="faq-rule-water"
                          aria-hidden="true"
                        />

                      </article>
                    )
                  }
                )}

              </div>

            </div>
          ))}

        </div>

        {/* =================================================
            BOTTOM STATUS
        ================================================== */}

        <div className="faq-rules-footer">

          <div className="faq-rules-status">
            <span className="status-pulse" />

            <div>
              <small>
                PARTICIPANT INFORMATION SYSTEM
              </small>

              <strong>
                Questions answered below the surface.
              </strong>
            </div>
          </div>

          <a
            href="#help"
            className="faq-help-button"
          >
            <span>
              Need more help?
            </span>

            <strong>
              →
            </strong>
          </a>

        </div>

      </div>
    </section>
  )
}

export default FAQRules