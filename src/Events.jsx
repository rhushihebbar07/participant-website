import { useEffect, useState } from 'react'
import './Events.css'

const targetDate = new Date(
  '2026-09-17T00:00:00+05:30'
).getTime()

const eventDays = [
  {
    id: 'day1',
    label: 'DAY 01',
    date: '17',
    month: 'SEP',
    title: 'Opening Protocol',
    description:
      'The first day of Semaphore 2K26 brings together participants for a full day of technical challenges, competitions and experiences.',
  },
  {
    id: 'day2',
    label: 'DAY 02',
    date: '18',
    month: 'SEP',
    title: 'Final Transmission',
    description:
      'The second day continues the competition with advanced challenges, finals, closing activities and the culmination of Semaphore 2K26.',
  },
]

const eventCategories = [
  {
    icon: '⌘',
    title: 'Technical Events',
    description:
      'Challenge your programming, problem-solving and technical skills.',
  },
  {
    icon: '◈',
    title: 'Creative Events',
    description:
      'Showcase creativity, ideas and digital expression.',
  },
  {
    icon: '⚡',
    title: 'Competitive Events',
    description:
      'Compete with participants and push your skills to the next level.',
  },
]

function getTimeLeft() {
  const difference = targetDate - Date.now()

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  return {
    days: Math.floor(
      difference / (1000 * 60 * 60 * 24)
    ),

    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),

    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),

    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  }
}

function AppCountdown() {
  const [timeLeft, setTimeLeft] = useState(
    getTimeLeft()
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="events-countdown">

      <div className="countdown-heading">
        <span />
        COUNTDOWN TO SEMAPHORE 2K26
        <span />
      </div>

      <div className="countdown-grid">

        <div className="countdown-item">
          <strong>
            {String(timeLeft.days).padStart(2, '0')}
          </strong>

          <span>
            DAYS
          </span>
        </div>

        <div className="countdown-separator">
          :
        </div>

        <div className="countdown-item">
          <strong>
            {String(timeLeft.hours).padStart(2, '0')}
          </strong>

          <span>
            HOURS
          </span>
        </div>

        <div className="countdown-separator">
          :
        </div>

        <div className="countdown-item">
          <strong>
            {String(timeLeft.minutes).padStart(2, '0')}
          </strong>

          <span>
            MINUTES
          </span>
        </div>

        <div className="countdown-separator">
          :
        </div>

        <div className="countdown-item">
          <strong>
            {String(timeLeft.seconds).padStart(2, '0')}
          </strong>

          <span>
            SECONDS
          </span>
        </div>

      </div>

      <p className="countdown-date">
        17 SEPTEMBER 2026
      </p>

    </div>
  )
}

function Events() {
  const [activeDay, setActiveDay] =
    useState('day1')

  const selectedDay =
    eventDays.find(
      (day) => day.id === activeDay
    ) || eventDays[0]

  return (
    <section
      className="events-section"
      id="events"
    >

      {/* =================================================
          ATMOSPHERIC BACKGROUND
      ================================================== */}

      <div
        className="events-grid"
        aria-hidden="true"
      />

      <div
        className="events-glow events-glow-one"
        aria-hidden="true"
      />

      <div
        className="events-glow events-glow-two"
        aria-hidden="true"
      />

      {/* =================================================
          MAIN CONTAINER
      ================================================== */}

      <div className="events-container">

        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <div className="events-heading">

          <div className="events-eyebrow">

            <span />

            SEMAPHORE 2K26

            <span />

          </div>

          <h2>
            Enter the
            <strong>
              event zone.
            </strong>
          </h2>

          <p>
            Two days. Multiple challenges.
            One unforgettable experience.
          </p>

          {/* Event dates */}

          <div className="events-date">

            <span>
              17
            </span>

            <i>
              —
            </i>

            <span>
              18
            </span>

            <span className="events-date-month">
              SEPTEMBER
            </span>

          </div>

          {/* =================================================
              COUNTDOWN
          ================================================== */}

          <AppCountdown />

        </div>

        {/* =================================================
            DAY SELECTOR
        ================================================== */}

        <div className="events-day-selector">

          {eventDays.map((day) => (

            <button
              key={day.id}
              type="button"
              className={`event-day-button ${
                activeDay === day.id
                  ? 'active'
                  : ''
              }`}
              onClick={() =>
                setActiveDay(day.id)
              }
            >

              <span className="event-day-label">
                {day.label}
              </span>

              <strong>
                {day.date}
              </strong>

              <small>
                {day.month}
              </small>

            </button>

          ))}

        </div>

        {/* =================================================
            ACTIVE DAY
        ================================================== */}

        <div className="active-event-day">

          <div className="active-day-number">

            <span>
              {selectedDay.date}
            </span>

            <small>
              {selectedDay.month}
            </small>

          </div>

          <div className="active-day-copy">

            <span>
              {selectedDay.label}
            </span>

            <h3>
              {selectedDay.title}
            </h3>

            <p>
              {selectedDay.description}
            </p>

          </div>

          <div className="active-day-status">

            <span className="status-dot" />

            EVENT DAY

          </div>

        </div>

        {/* =================================================
            EVENT CATEGORIES
        ================================================== */}

        <div className="events-subheading">

          <span>
            EXPLORE
          </span>

          <h3>
            Choose your challenge.
          </h3>

        </div>

        <div className="event-category-grid">

          {eventCategories.map(
            (category, index) => (

              <article
                className="event-category-card"
                key={category.title}
              >

                <div className="event-card-number">
                  0{index + 1}
                </div>

                <div className="event-card-icon">
                  {category.icon}
                </div>

                <h4>
                  {category.title}
                </h4>

                <p>
                  {category.description}
                </p>

                <button
                  type="button"
                  className="event-explore-button"
                >
                  Explore

                  <span>
                    →
                  </span>

                </button>

              </article>

            )
          )}

        </div>

        {/* =================================================
            EVENT INFORMATION
        ================================================== */}

        <div className="events-info-strip">

          <div>

            <span>
              EVENT
            </span>

            <strong>
              SEMAPHORE 2K26
            </strong>

          </div>

          <div>

            <span>
              DATES
            </span>

            <strong>
              17 — 18 SEPTEMBER
            </strong>

          </div>

          <div>

            <span>
              VENUE
            </span>

            <strong>
              NMAMIT, NITTE
            </strong>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Events