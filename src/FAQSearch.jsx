import { useMemo, useState } from 'react'
import './FAQSearch.css'

const faqData = [
  {
    category: 'ARRIVAL',
    question: 'When should I arrive at the venue?',
    answer:
      'Participants should arrive within the designated arrival window mentioned in the event instructions.',
  },
  {
    category: 'CHECK-IN',
    question: 'Where do I check in?',
    answer:
      'Follow the participant signs after entering the venue and proceed to the designated check-in desk.',
  },
  {
    category: 'REGISTRATION',
    question: 'What should I bring for registration?',
    answer:
      'Keep your registration confirmation, identification and any required event documents readily available.',
  },
  {
    category: 'VENUE',
    question: 'How do I find the event venue?',
    answer:
      'Use the campus directions and venue information provided in the Arrival Guide.',
  },
  {
    category: 'PARTICIPATION',
    question: 'What should I do after checking in?',
    answer:
      'Complete your check-in process and follow the instructions provided by the event coordination team.',
  },
  {
    category: 'HELP',
    question: 'Who can I contact if I need help?',
    answer:
      'Use the Help section to find the appropriate event support or emergency contact.',
  },
]

function FAQSearch() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const search = query.trim().toLowerCase()

    if (!search) {
      return faqData
    }

    return faqData.filter((faq) =>
      `${faq.category} ${faq.question} ${faq.answer}`
        .toLowerCase()
        .includes(search)
    )
  }, [query])

  return (
    <section
      id="faq"
      className="faq-search-section"
    >
      <div
        className="faq-search-glow"
        aria-hidden="true"
      />

      <div className="faq-search-container">

        {/* Heading */}

        <div className="faq-search-heading">

          <div className="faq-search-eyebrow">
            <span />
            INSTANT FAQ SEARCH
            <span />
          </div>

          <h2>
            Find your
            <br />
            <strong>answer instantly.</strong>
          </h2>

          <p>
            Search participant information, arrival
            instructions and common questions without
            leaving the experience.
          </p>

        </div>

        {/* Search */}

        <div className="faq-search-box">

          <div
            className="faq-search-icon"
            aria-hidden="true"
          >
            ⌕
          </div>

          <input
            type="search"
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="Search your question..."
            aria-label="Search frequently asked questions"
          />

          {query && (
            <button
              type="button"
              className="faq-clear-button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
            >
              ×
            </button>
          )}

          <div
            className="faq-search-status"
            aria-hidden="true"
          >
            {results.length}
          </div>

        </div>

        {/* Results */}

        <div className="faq-results">

          {results.length > 0 ? (
            results.map((faq, index) => (
              <article
                className="faq-result-card"
                key={faq.question}
                style={{
                  '--faq-delay': `${index * 60}ms`,
                }}
              >

                <div className="faq-result-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="faq-result-content">

                  <span className="faq-result-category">
                    {faq.category}
                  </span>

                  <h3>
                    {faq.question}
                  </h3>

                  <p>
                    {faq.answer}
                  </p>

                </div>

                <span
                  className="faq-result-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>

              </article>
            ))
          ) : (
            <div className="faq-empty-state">

              <div className="faq-empty-orb">
                ?
              </div>

              <span>
                NO MATCHING QUESTIONS
              </span>

              <h3>
                Nothing surfaced from the deep.
              </h3>

              <p>
                Try a different keyword such as
                arrival, check-in, registration or help.
              </p>

              <button
                type="button"
                onClick={() => setQuery('')}
              >
                Clear search
              </button>

            </div>
          )}

        </div>

      </div>
    </section>
  )
}

export default FAQSearch