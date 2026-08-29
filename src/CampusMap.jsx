import { useState } from 'react'
import './CampusMap.css'

const facilities = [
  {
    id: '01',
    name: 'NMAMIT Main Building',
    type: 'ACADEMIC BLOCK',
    description:
      'Main academic area of NMAM Institute of Technology at the Nitte campus.',
    icon: '▣',
  },
  {
    id: '02',
    name: 'Central Library',
    type: 'LEARNING',
    description:
      'Central library and academic resource facility for students and participants.',
    icon: '▤',
  },
  {
    id: '03',
    name: 'Auditorium',
    type: 'EVENT VENUE',
    description:
      'Major venue for events, programmes, presentations and participant activities.',
    icon: '◉',
  },
  {
    id: '04',
    name: 'Canteen',
    type: 'FOOD & REFRESHMENTS',
    description:
      'Campus dining and refreshment facility for students and participants.',
    icon: '◈',
  },
  {
    id: '05',
    name: 'Hostels',
    type: 'ACCOMMODATION',
    description:
      'Residential facilities within the NMAMIT campus environment.',
    icon: '⌂',
  },
  {
    id: '06',
    name: 'Sports & Gymnasium',
    type: 'SPORTS',
    description:
      'Campus sports and fitness facilities available to students.',
    icon: '◇',
  },
]

function CampusMap() {
  const [selected, setSelected] = useState(facilities[0])

  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=NMAM+Institute+of+Technology+Nitte+Karkala'

  const mapEmbedUrl =
    'https://www.google.com/maps?q=NMAM+Institute+of+Technology,+Nitte,+Karkala,+Karnataka&output=embed'

  return (
    <section
      id="map"
      className="campus-map-section"
      aria-labelledby="campus-map-title"
    >

      {/* =====================================================
          ATMOSPHERIC LIGHT
      ====================================================== */}

      <div
        className="campus-map-glow campus-map-glow-one"
        aria-hidden="true"
      />

      <div
        className="campus-map-glow campus-map-glow-two"
        aria-hidden="true"
      />

      <div className="campus-map-container">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <div className="campus-map-heading">

          <div className="campus-map-eyebrow">
            <span />
            NMAMIT CAMPUS NAVIGATION
            <span />
          </div>

          <h2 id="campus-map-title">
            Explore NMAMIT
            <br />
            <strong>Nitte, Karkala.</strong>
          </h2>

          <p>
            Find NMAM Institute of Technology and
            explore the important facilities around
            the campus during your Semaphore experience.
          </p>

        </div>

        {/* =====================================================
            MAIN MAP LAYOUT
        ====================================================== */}

        <div className="campus-map-layout">

          {/* ===================================================
              REAL MAP
          ==================================================== */}

          <div className="campus-map-card">

            <div className="map-card-top">

              <div>
                <span className="map-live-dot" />

                NMAMIT CAMPUS MAP
              </div>

              <span className="map-coordinates">
                13.1831° N / 74.9342° E
              </span>

            </div>

            {/* =================================================
                ACTUAL GOOGLE MAP
            ================================================== */}

            <div className="real-map-container">

              <iframe
                title="NMAM Institute of Technology Campus Map"
                src={mapEmbedUrl}
                className="real-campus-map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map glass tint */}

              <div
                className="map-glass-overlay"
                aria-hidden="true"
              />

              {/* Location badge */}

              <div className="map-location-badge">

                <span className="map-location-dot" />

                <div>
                  <strong>
                    NMAMIT
                  </strong>

                  <small>
                    Nitte, Karkala
                  </small>
                </div>

              </div>

              {/* Compass */}

              <div className="real-map-compass">

                <span>
                  N
                </span>

                <strong>
                  ▲
                </strong>

              </div>

            </div>

            {/* =================================================
                MAP FOOTER
            ================================================== */}

            <div className="map-card-bottom">

              <span>
                <i />
                NMAMIT CAMPUS
              </span>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                OPEN IN GOOGLE MAPS
                <strong>
                  ↗
                </strong>
              </a>

            </div>

          </div>

          {/* ===================================================
              SELECTED FACILITY
          ==================================================== */}

          <aside className="facility-detail">

            <div className="facility-detail-top">

              <span>
                LOCATION {selected.id}
              </span>

              <span className="facility-status">
                CAMPUS
              </span>

            </div>

            <div className="facility-icon-large">
              {selected.icon}
            </div>

            <span className="facility-type">
              {selected.type}
            </span>

            <h3>
              {selected.name}
            </h3>

            <p>
              {selected.description}
            </p>

            <div className="facility-divider" />

            <div className="facility-meta">

              <div>
                <span>
                  CAMPUS
                </span>

                <strong>
                  NMAMIT
                </strong>
              </div>

              <div>
                <span>
                  LOCATION
                </span>

                <strong>
                  NITTE
                </strong>
              </div>

            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="facility-directions"
            >
              <span>
                Open campus map
              </span>

              <strong>
                ↗
              </strong>
            </a>

          </aside>

        </div>

        {/* =====================================================
            FACILITIES
        ====================================================== */}

        <div className="facilities-heading">

          <div>

            <span>
              EXPLORE
            </span>

            <h3>
              Around NMAMIT
            </h3>

          </div>

          <p>
            Select a facility to view information
            and open the real campus map.
          </p>

        </div>

        <div className="facility-cards">

          {facilities.map((facility) => {

            const active =
              selected.id === facility.id

            return (
              <button
                type="button"
                key={facility.id}
                className={`facility-card ${
                  active ? 'selected' : ''
                }`}
                onClick={() =>
                  setSelected(facility)
                }
              >

                <div className="facility-card-number">
                  {facility.id}
                </div>

                <div className="facility-card-icon">
                  {facility.icon}
                </div>

                <div className="facility-card-copy">

                  <span>
                    {facility.type}
                  </span>

                  <h4>
                    {facility.name}
                  </h4>

                </div>

                <div className="facility-card-arrow">
                  →
                </div>

                <div
                  className="facility-card-glow"
                  aria-hidden="true"
                />

              </button>
            )
          })}

        </div>

        {/* =====================================================
            CAMPUS LOCATION STRIP
        ====================================================== */}

        <div className="campus-location-strip">

          <div className="location-pulse">
            <span />
          </div>

          <div>

            <span>
              NMAM INSTITUTE OF TECHNOLOGY
            </span>

            <strong>
              Nitte, Karkala Taluk, Udupi – 574110
            </strong>

          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Directions
            <span>
              ↗
            </span>
          </a>

        </div>

      </div>

    </section>
  )
}

export default CampusMap