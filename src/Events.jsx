import { useMemo, useState } from 'react'
import './Events.css'

const events = [
  {
    id: 1,
    title: 'Semaphore 2026',
    category: 'Flagship',
    date: '15 September 2026',
    time: '9:00 AM',
    venue: 'NMAMIT Campus',
    description:
      'The flagship technical and cultural experience bringing participants together for an exciting campus-wide event.',
    featured: true,
  },
  {
    id: 2,
    title: 'Tech Innovation Challenge',
    category: 'Technical',
    date: '16 September 2026',
    time: '10:00 AM',
    venue: 'Innovation Centre',
    description:
      'A challenge focused on creativity, problem solving and innovative technology solutions.',
    featured: false,
  },
  {
    id: 3,
    title: 'Cultural Showcase',
    category: 'Cultural',
    date: '16 September 2026',
    time: '5:00 PM',
    venue: 'Main Auditorium',
    description:
      'Experience performances, creativity and talent from participants across different institutions.',
    featured: false,
  },
  {
    id: 4,
    title: 'Gaming Arena',
    category: 'Gaming',
    date: '17 September 2026',
    time: '11:00 AM',
    venue: 'Student Activity Centre',
    description:
      'Compete with fellow participants in a high-energy gaming experience.',
    featured: false,
  },
  {
    id: 5,
    title: 'Industry Connect',
    category: 'Workshop',
    date: '17 September 2026',
    time: '2:00 PM',
    venue: 'Seminar Hall',
    description:
      'Connect with industry professionals and explore opportunities, insights and emerging technologies.',
    featured: false,
  },
]

const categories = [
  'All',
  'Flagship',
  'Technical',
  'Cultural',
  'Gaming',
  'Workshop',
]

function Events() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredEvents = useMemo(() => {
    if (activeCategory === 'All') {
      return events
    }

    return events.filter(
      (event) => event.category === activeCategory
    )
  }, [activeCategory])

  const featuredEvent = events.find(
    (event) => event.featured
  )

  return (
    <main className="events-page">

      {/* =====================================================
          EVENTS HERO
      ====================================================== */}

      <section className="events-hero">

        <div className="events-hero-content">

          <span className="events-eyebrow">
            NITTE • SAMCA
          </span>

          <h1>
            Discover
            <span> What's Happening.</span>
          </h1>

          <p>
            Explore upcoming events, workshops, competitions
            and experiences happening at NMAMIT.
          </p>

          <div className="events-hero-actions">
            <a
              href="#upcoming-events"
              className="events-primary-button"
            >
              Explore Events
              <span>→</span>
            </a>

            <a
              href="#featured-event"
              className="events-secondary-button"
            >
              Featured Event
            </a>
          </div>

        </div>

        <div className="events-hero-visual">

          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <div className="hero-event-card">

            <span className="hero-card-label">
              NEXT EVENT
            </span>

            <strong>
              {featuredEvent.title}
            </strong>

            <div className="hero-card-date">
              <span>
                {featuredEvent.date}
              </span>

              <span>
                {featuredEvent.time}
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          COUNTDOWN / HIGHLIGHT
      ====================================================== */}

      <section
        className="events-highlight"
        id="featured-event"
      >

        <div className="highlight-copy">

          <span className="section-kicker">
            DON'T MISS IT
          </span>

          <h2>
            {featuredEvent.title}
          </h2>

          <p>
            {featuredEvent.description}
          </p>

        </div>

        <div className="countdown-panel">

          <span className="countdown-label">
            EVENT HIGHLIGHT
          </span>

          <div className="countdown-values">

            <div>
              <strong>15</strong>
              <small>SEP</small>
            </div>

            <div>
              <strong>09</strong>
              <small>AM</small>
            </div>

            <div>
              <strong>01</strong>
              <small>DAY</small>
            </div>

          </div>

          <span className="countdown-note">
            Save the date
          </span>

        </div>

      </section>

      {/* =====================================================
          UPCOMING EVENTS
      ====================================================== */}

      <section
        className="upcoming-events"
        id="upcoming-events"
      >

        <div className="events-section-heading">

          <div>
            <span className="section-kicker">
              THE SCHEDULE
            </span>

            <h2>
              Upcoming Events
            </h2>
          </div>

          <p>
            Find something that interests you.
          </p>

        </div>

        {/* CATEGORY FILTER */}

        <div className="event-filters">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? 'active'
                  : ''
              }
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>
          ))}

        </div>

        {/* EVENT GRID */}

        <div className="events-grid">

          {filteredEvents.map((event) => (
            <article
              key={event.id}
              className={`event-card ${
                event.featured ? 'featured' : ''
              }`}
            >

              <div className="event-card-top">

                <span className="event-category">
                  {event.category}
                </span>

                <span className="event-number">
                  {String(event.id).padStart(2, '0')}
                </span>

              </div>

              <div className="event-date-block">

                <strong>
                  {event.date}
                </strong>

                <span>
                  {event.time}
                </span>

              </div>

              <h3>
                {event.title}
              </h3>

              <p>
                {event.description}
              </p>

              <div className="event-card-footer">

                <span>
                  {event.venue}
                </span>

                <button type="button">
                  View Event
                  <span>→</span>
                </button>

              </div>

            </article>
          ))}

        </div>

        {filteredEvents.length === 0 && (
          <div className="events-empty">
            No events found in this category.
          </div>
        )}

      </section>

      {/* =====================================================
          EVENT CTA
      ====================================================== */}

      <section className="events-cta">

        <div>

          <span className="section-kicker">
            STAY CONNECTED
          </span>

          <h2>
            Be there when it happens.
          </h2>

          <p>
            Keep an eye on the event schedule for updates,
            announcements and important changes.
          </p>

        </div>

        <a
          href="#upcoming-events"
          className="events-primary-button"
        >
          View Schedule
          <span>→</span>
        </a>

      </section>

    </main>
  )
}

export default Events