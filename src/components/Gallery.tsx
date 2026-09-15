const galleryItems = [
  { label: 'Laser Therapy', img: 'https://images.pexels.com/photos/4586727/pexels-photo-4586727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { label: 'Facial Treatment', img: 'https://images.pexels.com/photos/7581072/pexels-photo-7581072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { label: 'Skin Care', img: 'https://images.pexels.com/photos/39392892/pexels-photo-39392892.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { label: 'Anti-Aging', img: 'https://images.pexels.com/photos/39452544/pexels-photo-39452544.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { label: 'Clinical Care', img: 'https://images.pexels.com/photos/7789612/pexels-photo-7789612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { label: 'Aesthetic Procedure', img: 'https://images.pexels.com/photos/5619456/pexels-photo-5619456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { label: 'Skincare Products', img: 'https://images.pexels.com/photos/39448506/pexels-photo-39448506.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { label: 'Dermatology', img: 'https://images.pexels.com/photos/38822007/pexels-photo-38822007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
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
