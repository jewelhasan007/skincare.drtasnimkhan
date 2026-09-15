const services = [
  {
    title: 'Laser Hair Removal',
    desc: 'Safe, FDA-approved laser technology for permanent hair reduction across all skin types. Painless, precise, and effective.',
    tag: 'Most Popular',
    img: 'https://images.pexels.com/photos/5619448/pexels-photo-5619448.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Anti-Aging Treatments',
    desc: 'Botox, fillers, and thread lifts tailored to restore youthful contours. Personalized treatment plans for natural-looking results.',
    tag: 'Signature',
    img: 'https://images.pexels.com/photos/32260064/pexels-photo-32260064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Skin & VD Care',
    desc: 'Comprehensive diagnosis and treatment for acne, eczema, psoriasis, pigmentation, and all dermatological conditions.',
    tag: 'Medical',
    img: 'https://images.pexels.com/photos/7581072/pexels-photo-7581072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
]

export function Services() {
  return (
    <section className="section" id="services">
      <div className="section__header">
        <span className="section__eyebrow">Our Treatments</span>
        <h2 className="section__title">Comprehensive Aesthetic Care</h2>
        <p className="section__desc">
          From medical dermatology to cutting-edge aesthetic procedures — every treatment is
          delivered with clinical precision and personalized care.
        </p>
      </div>
      <div className="services__grid">
        {services.map((s) => (
          <article key={s.title} className="service-card">
            <img className="service-card__img" src={s.img} alt={s.title} loading="lazy" />
            <div className="service-card__body">
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <span className="service-card__tag">{s.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
