const galleryItems = [
  { label: 'Laser Therapy', img: '/gallery/gallery-1.png' },
  { label: 'Facial Treatment', img: '/gallery/gallery-2.png' },
  { label: 'Skin Care', img: '/gallery/gallery-3.png' },
  { label: 'Anti-Aging', img: '/gallery/gallery-4.png' },
  { label: 'Clinical Care', img: '/gallery/gallery-5.png' },
  { label: 'Aesthetic Procedure', img: '/gallery/gallery-6.png' },
  { label: 'Skincare Products', img: '/gallery/gallery-7.png' },
  { label: 'Dermatology', img: '/gallery/gallery-8.png' },
]

export function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="section__header">
        <span className="section__eyebrow">Visual Showcase</span>
        <h2 className="section__title">Inside the Clinic</h2>
        <p className="section__desc">
          A glimpse into our state-of-the-art facility and the treatments we deliver every day.
        </p>
      </div>
      <div className="gallery__grid">
        {galleryItems.map((item) => (
          <div key={item.label} className="gallery__item">
            <img src={item.img} alt={item.label} loading="lazy" />
            <span className="gallery__item-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
