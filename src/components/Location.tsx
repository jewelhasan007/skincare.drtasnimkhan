interface LocationProps {
  onBookClick: () => void
}

const hours = [
  { day: 'Saturday', time: '10:00 AM – 6:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 6:00 PM' },
  { day: 'Monday', time: '10:00 AM – 6:00 PM' },
  { day: 'Tuesday', time: '10:00 AM – 6:00 PM' },
  { day: 'Wednesday', time: '10:00 AM – 6:00 PM' },
  { day: 'Thursday', time: '10:00 AM – 6:00 PM' },
  { day: 'Friday', time: 'Closed', closed: true },
]

export function Location({ onBookClick }: LocationProps) {
  return (
    <section className="section" id="location" style={{ maxWidth: 'none', padding: 0 }}>
      <div className="location">
        <div className="location__info">
          <div className="location__info-inner">
            <span className="location__subtitle">Visit Us</span>
            <h2 className="location__title">Laser Chain Skin Center</h2>
            <div className="location__detail">
              <div className="location__detail-icon">&#9873;</div>
              <div>
                <div className="location__detail-label">📍Address</div>
                <div className="location__detail-value"> Shaptak Square, Road No. 27 (Old) / 16 (New), Dhanmondi, Dhaka</div>
              </div>
            </div>
            <div className="location__detail">
              <div className="location__detail-icon">&#9742;</div>
              <div>
                <div className="location__detail-label">📞 Appointment Book করতে কল করুন এখনই:</div>
                <div className="location__detail-value"> ‪+8801707063506‬</div>
              </div>
            </div>
            <div className="location__hours">
              <div className="location__detail-label" style={{ marginBottom: '0.75rem' }}>Clinic Hours</div>
              {hours.map((h) => (
                <div key={h.day} className="location__hours-row">
                  <span className="location__hours-day">{h.day}</span>
                  <span className={`location__hours-time ${h.closed ? 'closed' : ''}`}>{h.time}</span>
                </div>
              ))}
            </div>
            <button className="location__cta" onClick={onBookClick}>Book an Appointment</button>
          </div>
        </div>
        <div className="location__map">
          <iframe
            src="https://www.google.com/maps?q=Dhanmondi,+Dhaka,+Bangladesh&output=embed"
            title="Laser Chain Skin Center location map"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
