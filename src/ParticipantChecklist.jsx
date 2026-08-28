import { useState } from 'react'
import './ParticipantChecklist.css'

const checklistItems = [
  {
    id: 1,
    category: 'REGISTRATION',
    title: 'Registration details ready',
    description:
      'Keep your registration confirmation or participant details accessible.',
    icon: '◇',
  },
  {
    id: 2,
    category: 'IDENTIFICATION',
    title: 'Identification prepared',
    description:
      'Carry the identification or documents required for participant verification.',
    icon: '◎',
  },
  {
    id: 3,
    category: 'ARRIVAL',
    title: 'Arrival plan checked',
    description:
      'Review your route, venue information and expected arrival time.',
    icon: '⌖',
  },
  {
    id: 4,
    category: 'DIGITAL',
    title: 'Phone & QR ready',
    description:
      'Keep your phone charged and have digital registration information ready.',
    icon: '▣',
  },
  {
    id: 5,
    category: 'ESSENTIALS',
    title: 'Personal essentials packed',
    description:
      'Prepare the items you may need throughout your participation.',
    icon: '◇',
  },
  {
    id: 6,
    category: 'FINAL CHECK',
    title: 'Final details reviewed',
    description:
      'Review the participant information and make sure nothing important is missed.',
    icon: '✓',
  },
]

function ParticipantChecklist() {
  const [completed, setCompleted] = useState([])

  const toggleItem = (id) => {
    setCompleted((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    )
  }

  const completedCount = completed.length

  const progress = Math.round(
    (completedCount / checklistItems.length) * 100
  )

  return (
    <section
      id="checklist"
      className="checklist-section"
    >
      <div
        className="checklist-atmosphere"
        aria-hidden="true"
      />

      <div className="checklist-container">

        {/* =================================================
            HEADING
        ================================================== */}

        <div className="checklist-heading">

          <div className="checklist-eyebrow">
            <span />

            PARTICIPANT CHECKLIST

            <span />
          </div>

          <h2>
            Prepare for
            <br />
            <strong>the dive.</strong>
          </h2>

          <p>
            Complete your preparation before you arrive.
            Your progress is saved while this page remains
            open.
          </p>

        </div>

        {/* =================================================
            PROGRESS
        ================================================== */}

        <div className="checklist-progress-panel">

          <div className="progress-copy">

            <span>
              PREPARATION STATUS
            </span>

            <strong>
              {completedCount} / {checklistItems.length}
            </strong>

          </div>

          <div className="progress-track">

            <div
              className="progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

          <div className="progress-bottom">

            <span>
              {progress === 100
                ? 'READY FOR ARRIVAL'
                : 'KEEP GOING'}
            </span>

            <strong>
              {progress}%
            </strong>

          </div>

        </div>

        {/* =================================================
            CHECKLIST GRID
        ================================================== */}

        <div className="checklist-grid">

          {checklistItems.map((item) => {

            const isCompleted =
              completed.includes(item.id)

            return (
              <button
                key={item.id}
                type="button"
                className={`checklist-item ${
                  isCompleted
                    ? 'completed'
                    : ''
                }`}
                onClick={() =>
                  toggleItem(item.id)
                }
              >

                <div className="checklist-item-top">

                  <span className="checklist-category">
                    {item.category}
                  </span>

                  <span className="checklist-number">
                    {String(item.id).padStart(2, '0')}
                  </span>

                </div>

                <div
                  className="checklist-icon"
                  aria-hidden="true"
                >
                  {isCompleted
                    ? '✓'
                    : item.icon}
                </div>

                <div className="checklist-item-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

                <div className="checkmark">

                  <span>
                    {isCompleted
                      ? '✓'
                      : ''}
                  </span>

                </div>

                <div
                  className="checklist-light"
                  aria-hidden="true"
                />

              </button>
            )
          })}

        </div>

        {/* =================================================
            COMPLETION MESSAGE
        ================================================== */}

        <div
          className={`checklist-complete ${
            progress === 100
              ? 'visible'
              : ''
          }`}
        >

          <div className="complete-orb">
            ✓
          </div>

          <div>

            <span>
              ALL SYSTEMS READY
            </span>

            <strong>
              You&apos;re ready for the Semaphore experience.
            </strong>

          </div>

        </div>

      </div>
    </section>
  )
}

export default ParticipantChecklist