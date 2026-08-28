import { useState } from 'react'
import './CampusMap.css'

const locations = [
  {
    id: '01',
    category: 'ACADEMIC',
    name: 'S. Ramanujan Block',
    description:
      'Administrative Building 1 and an important academic block of NMAMIT.',
    icon: '▣',
    search:
      'S Ramanujan Block NMAMIT Nitte Karkala Karnataka',
  },
  {
    id: '02',
    category: 'ACADEMIC',
    name: 'APJ Kalam Block',
    description:
      'Administrative Building 2 and home to academic and seminar facilities.',
    icon: '▣',
    search:
      'APJ Kalam Block NMAMIT Nitte Karkala Karnataka',
  },
  {
    id: '03',
    category: 'ACADEMIC',
    name: 'Sir C.V. Raman Block',
    description:
      'Lecture Hall Complex used for academic sessions and participant activities.',
    icon: '▤',
    search:
      'Sir CV Raman Block NMAMIT Nitte Karkala Karnataka',
  },
  {
    id: '04',
    category: 'ACADEMIC',
    name: 'Sir M.V. Block',
    description:
      'Lecture Hall Complex serving the academic community at NMAMIT.',
    icon: '▤',
    search:
      'Sir MV Block NMAMIT Nitte Karkala Karnataka',
  },
  {
    id: '05',
    category: 'INNOVATION',
    name: 'Atal Block',
    description:
      'Home to the Entrepreneurship Development Cell and academic facilities.',
    icon: '◇',
    search:
      'Atal Block NMAMIT Nitte Karkala Karnataka',
  },
  {
    id: '06',
    category: 'LEARNING',
    name: 'Central Library',
    description:
      'The NMAMIT Central Library is housed in the main wing of the college academic building.',
    icon: '▤',
    search:
      'Central Library NMAMIT Nitte Karkala Karnataka',
  },
  {
    id: '07',
    category: 'EVENT',
    name: 'Sadananda Open Air Auditorium',
    description:
      'Open-air auditorium located near the Hockey Ground at the B.C. Alva Sports Complex.',
    icon: '◉',
    search:
      'Sadananda Open Air Auditorium NMAMIT Nitte Karkala Karnataka',
  },
  {
    id: '08',
    category: 'EVENT',
    name: 'Sambhram Auditorium',
    description:
      'Auditorium associated with the S. Ramanujan Block.',
    icon: '◉',
    search:
      'Sambhram Auditorium NMAMIT Nitte Karkala Karnataka',
  },
  {
    id: '09',
    category: 'EVENT',
    name: 'Shambhavi Auditorium',
    description:
      'Auditorium associated with the APJ Kalam Block.',
    icon: '◉',
    search:
      'Shambhavi Auditorium NMAMIT Nitte Karkala Karnataka',
  },
  {
    id: '10',
    category: 'SPORTS',
    name: 'B.C. Alva Sports Complex',
    description:
      'Major sports facility with indoor and outdoor sporting infrastructure.',
    icon: '◇',
    search:
      'BC Alva Sports Complex NMAMIT Nitte Karkala Karnataka',
  },
  {
    id: '11',
    category: 'FOOD',
    name: 'NMAMIT Canteen',
    description:
      'Campus food and refreshment facility.',
    icon: '◈',
    search:
      'NMAMIT Canteen Nitte Karkala Karnataka',
  },
  {
    id: '12',
    category: 'HOSTELS',
    name: 'Boys Hostel Block 7',
    description:
      'One of the boys hostel blocks within the NMAMIT campus.',
    icon: '⌂',
    search:
      'Boys Hostel Block 7 NMAMIT Nitte Karkala Karnataka',
  },
  {
    id: '13',
    category: 'HOSTELS',
    name: 'Ladies Hostel Block 1',
    description:
      'One of the girls hostel blocks within the NMAMIT campus.',
    icon: '⌂',
    search:
      'Ladies Hostel Block 1 NMAMIT Nitte Karkala Karnataka',
  },
  {
    id: '14',
    category: 'HEALTH',
    name: 'Health Centre',
    description:
      'Healthcare facility available on the NMAMIT campus.',
    icon: '+',
    search:
      'Health Centre NMAMIT Nitte Karkala Karnataka',
  },
  {
    id: '15',
    category: 'SERVICES',
    name: 'Bank & Post Office',
    description:
      'Campus banking and postal services.',
    icon: '◇',
    search:
      'Bank Post Office NMAMIT Nitte Karkala Karnataka',
  },
]

const campusSearch =
  'NMAM Institute of Technology Nitte Karkala Karnataka'

function CampusMap() {
  const [selected, setSelected] = useState(null)
  const [mapQuery, setMapQuery] = useState(campusSearch)
  const [mapKey, setMapKey] = useState(0)

  const buildMapUrl = (query) => {
    return (
      'https://www.google.com/maps' +
      '?q=' +
      encodeURIComponent(query) +
      '&output=embed'
    )
  }

  const selectLocation = (location) => {
    setSelected(location)
    setMapQuery(location.search)

    // Force iframe refresh so Google Maps
    // resolves the newly selected destination.
    setMapKey((key) => key + 1)
  }

  const resetMap = () => {
    setSelected(null)
    setMapQuery(campusSearch)
    setMapKey((key) => key + 1)
  }

  return (
    <section
      id="map"
      className="campus-map-section"
      aria-labelledby="campus-map-title"
    >

      {/* =====================================================
          ATMOSPHERE
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
            <strong>Everywhere you need to go.</strong>
          </h2>

          <p>
            Explore the NMAM Institute of Technology
            campus in Nitte, Karkala. Select a building,
            facility or event venue to focus the map on
            that destination.
          </p>

        </div>

        {/* =====================================================
            MAIN MAP AREA
        ====================================================== */}

        <div className="campus-map-layout">

          {/* =================================================
              MAP
          ================================================== */}

          <div className="campus-map-card">

            <div className="map-card-top">

              <div className="map-title-status">

                <span className="map-live-dot" />

                <span>
                  {selected
                    ? `FOCUS · ${selected.name.toUpperCase()}`
                    : 'FULL CAMPUS VIEW'}
                </span>

              </div>

              <span className="map-coordinates">
                13.1831° N / 74.9342° E
              </span>

            </div>

            {/* =================================================
                REAL MAP
            ================================================== */}

            <div className="real-map-container">

              <iframe
                key={mapKey}
                title={
                  selected
                    ? `${selected.name} NMAMIT map`
                    : 'NMAMIT Nitte campus map'
                }
                src={buildMapUrl(mapQuery)}
                className="real-campus-map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Underwater colour treatment */}

              <div
                className="map-atmosphere"
                aria-hidden="true"
              />

              {/* Selected destination */}

              {selected && (
                <div className="selected-map-badge">

                  <span className="selected-map-pulse" />

                  <div>
                    <small>
                      SELECTED DESTINATION
                    </small>

                    <strong>
                      {selected.name}
                    </strong>
                  </div>

                </div>
              )}

              {/* Compass */}

              <div
                className="map-compass"
                aria-hidden="true"
              >
                <small>N</small>
                <strong>▲</strong>
              </div>

              {/* Reset */}

              {selected && (
                <button
                  type="button"
                  className="map-reset"
                  onClick={resetMap}
                >
                  <span>↺</span>
                  FULL CAMPUS
                </button>
              )}

            </div>

            {/* =================================================
                MAP FOOTER
            ================================================== */}

            <div className="map-card-bottom">

              <span>
                <i />
                REAL CAMPUS MAP
              </span>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  selected
                    ? selected.search
                    : campusSearch,
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                OPEN IN GOOGLE MAPS
                <strong>↗</strong>
              </a>

            </div>

          </div>

          {/* =================================================
              SELECTED LOCATION
          ================================================== */}

          <aside className="facility-detail">

            {selected ? (
              <>
                <div className="facility-detail-top">

                  <span>
                    LOCATION {selected.id}
                  </span>

                  <span className="facility-status">
                    SELECTED
                  </span>

                </div>

                <div className="facility-icon-large">
                  {selected.icon}
                </div>

                <span className="facility-type">
                  {selected.category}
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
                      AREA
                    </span>

                    <strong>
                      NITTE
                    </strong>
                  </div>

                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    selected.search,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="facility-directions"
                >
                  <span>
                    Open destination
                  </span>

                  <strong>
                    ↗
                  </strong>
                </a>
              </>
            ) : (
              <>
                <div className="facility-detail-top">

                  <span>
                    NMAMIT CAMPUS
                  </span>

                  <span className="facility-status">
                    READY
                  </span>

                </div>

                <div className="facility-icon-large campus-icon">
                  N
                </div>

                <span className="facility-type">
                  NITTE · KARKALA
                </span>

                <h3>
                  Full Campus
                </h3>

                <p>
                  Select any location below to focus
                  the map on that destination.
                </p>

                <div className="facility-divider" />

                <div className="facility-meta">

                  <div>
                    <span>
                      LOCATIONS
                    </span>

                    <strong>
                      {locations.length}
                    </strong>
                  </div>

                  <div>
                    <span>
                      CAMPUS
                    </span>

                    <strong>
                      NMAMIT
                    </strong>
                  </div>

                </div>

                <button
                  type="button"
                  className="facility-directions reset-button"
                  onClick={resetMap}
                >
                  <span>
                    Reset full campus
                  </span>

                  <strong>
                    ↺
                  </strong>
                </button>
              </>
            )}

          </aside>

        </div>

        {/* =====================================================
            LOCATION DIRECTORY
        ====================================================== */}

        <div className="facilities-heading">

          <div>
            <span>
              CAMPUS DIRECTORY
            </span>

            <h3>
              Find your destination
            </h3>
          </div>

          <p>
            Click a destination to move the map
            directly to that part of NMAMIT.
          </p>

        </div>

        <div className="facility-cards">

          {locations.map((location) => {

            const active =
              selected?.id === location.id

            return (
              <button
                type="button"
                key={location.id}
                className={`facility-card ${
                  active ? 'selected' : ''
                }`}
                onClick={() =>
                  selectLocation(location)
                }
              >

                <div className="facility-card-number">
                  {location.id}
                </div>

                <div className="facility-card-icon">
                  {location.icon}
                </div>

                <div className="facility-card-copy">

                  <span>
                    {location.category}
                  </span>

                  <h4>
                    {location.name}
                  </h4>

                </div>

                <div className="facility-card-arrow">
                  {active ? '●' : '→'}
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
            LOCATION STRIP
        ====================================================== */}

        <div className="campus-location-strip">

          <div className="location-pulse">
            <span />
          </div>

          <div className="location-copy">

            <span>
              NMAM INSTITUTE OF TECHNOLOGY
            </span>

            <strong>
              Nitte, Karkala Taluk, Udupi – 574110
            </strong>

          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=NMAM+Institute+of+Technology+Nitte+Karkala+Karnataka"
            target="_blank"
            rel="noreferrer"
          >
            Directions
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  )
}

export default CampusMap