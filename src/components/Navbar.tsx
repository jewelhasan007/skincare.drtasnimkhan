import { useEffect, useState } from 'react'

interface NavbarProps {
  onBookClick: () => void
}

export function Navbar({ onBookClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__brand">
        <div>
          <div className="navbar__brand-text">Dr. Tasnim Khan</div>
          <div className="navbar__brand-sub">Laser & Skin Specialist</div>
        </div>
      </div>
      <div className="navbar__links">
        <a href="#services" className="navbar__link">Treatments</a>
        <a href="#gallery" className="navbar__link">Gallery</a>
        <a href="#location" className="navbar__link">Location</a>
        <button className="navbar__cta" onClick={onBookClick}>Book Appointment</button>
      </div>
      <button className="navbar__menu-btn" onClick={onBookClick} aria-label="Book appointment">
        &#9776;
      </button>
    </nav>
  )
}
