import { useEffect, useState } from 'react'
import type { NewAppointment } from '../lib/types'

interface BookingFormProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: NewAppointment) => Promise<{ success: boolean; error?: string }>
}

const services = [
  'Laser Hair Removal',
  'Anti-Aging Treatments',
  'Botox & Fillers',
  'Skin & VD Consultation',
  'Acne Treatment',
  'Pigmentation Treatment',
  'Other',
]

const timeSlots = [
  '10:00 AM – 11:00 AM',
  '11:00 AM – 12:00 PM',
  '12:00 PM – 1:00 PM',
  '3:00 PM – 4:00 PM',
  '4:00 PM – 5:00 PM',
  '5:00 PM – 6:00 PM',
]

const today = new Date().toISOString().split('T')[0]

export function BookingForm({ isOpen, onClose, onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState<NewAppointment>({
    name: '',
    phone: '',
    email: '',
    preferred_date: '',
    preferred_time: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setStatus('idle')
      setErrorMsg('')
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  const handleChange = (field: keyof NewAppointment, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')
    const result = await onSubmit(formData)
    if (result.success) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMsg(result.error || 'Something went wrong. Please try again or call us directly.')
    }
  }

  if (!isOpen) return null

  return (
    <div className={`booking-overlay ${isOpen ? 'booking-overlay--open' : ''}`} onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        {status === 'success' ? (
          <div className="form-success">
            <div className="form-success__icon">&#10003;</div>
            <h3 className="form-success__title">Request Received!</h3>
            <p className="form-success__text">
              Thank you, {formData.name.split(' ')[0]}. Our team at Laser Chain Skin Center will
              contact you within 24 hours to confirm your appointment for{' '}
              <strong>{formData.service}</strong>.
            </p>
            <button className="form-success__btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="booking-modal__header">
              <h2 className="booking-modal__title">Book a Consultation</h2>
              <p className="booking-modal__subtitle">Laser Chain Skin Center, Dhanmondi</p>
              <button className="booking-modal__close" onClick={onClose} aria-label="Close">&times;</button>
            </div>
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name <span className="required">*</span></label>
                  <input
                    className="form-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone <span className="required">*</span></label>
                  <input
                    className="form-input"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="01XXXXXXXXX"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="you@example.com (optional)"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Preferred Date <span className="required">*</span></label>
                  <input
                    className="form-input"
                    type="date"
                    required
                    min={today}
                    value={formData.preferred_date}
                    onChange={(e) => handleChange('preferred_date', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Preferred Time <span className="required">*</span></label>
                  <select
                    className="form-select"
                    required
                    value={formData.preferred_time}
                    onChange={(e) => handleChange('preferred_time', e.target.value)}
                  >
                    <option value="" disabled>Select a slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Treatment of Interest <span className="required">*</span></label>
                <select
                  className="form-select"
                  required
                  value={formData.service}
                  onChange={(e) => handleChange('service', e.target.value)}
                >
                  <option value="" disabled>Select a treatment</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell us about your concerns (optional)"
                />
              </div>

              {status === 'error' && errorMsg && (
                <div className="form-error">{errorMsg}</div>
              )}

              <button className="form-submit" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Request Appointment'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
