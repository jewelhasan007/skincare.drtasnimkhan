const credentials = [
  { icon: 'M', label: 'Associate Professor', value: 'Skin & VD' },
  { icon: 'L', label: 'Specialization', value: 'Laser Expert' },
  { icon: 'A', label: 'Focus Area', value: 'Anti-Aging' },
  { icon: '8.7K+', label: 'Instagram', value: 'Followers' },
]

export function Credentials() {
  return (
    <section className="credentials">
      <div className="credentials__inner">
        {credentials.map((c) => (
          <div key={c.label} className="credential-card">
            <div className="credential-card__icon">{c.icon}</div>
            <div className="credential-card__value">{c.value}</div>
            <div className="credential-card__label">{c.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
