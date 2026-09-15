interface HeroProps {
  onBookClick: () => void
}

export function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <img
          src="https://images.pexels.com/photos/7581072/pexels-photo-7581072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Aesthetic skincare treatment in a clinical setting"
        />
      </div>
      <div className="hero__content">
        <span className="hero__eyebrow">Laser Chain Skin Center — Dhanmondi, Dhaka</span>
        <h1 className="hero__title">
          Advanced Skin, Laser &<br /><em>Anti-Aging</em> Care
        </h1>
        <p className="hero__subtitle">
          Led by Dr. Tasnim Khan, Associate Professor of Skin & VD. Trusted by thousands
          of patients for results-driven dermatology and aesthetic treatments in the heart of Dhaka.
        </p>
        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary" onClick={onBookClick}>
            Book a Consultation
          </button>
          <a href="#services" className="hero__btn hero__btn--ghost">
            Explore Treatments
          </a>
        </div>
      </div>
      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
