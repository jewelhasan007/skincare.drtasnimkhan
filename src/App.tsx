import { useState } from 'react'
import { supabase } from './lib/supabase'
import type { NewAppointment } from './lib/types'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Credentials } from './components/Credentials'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { BookingForm } from './components/BookingForm'
import { Location } from './components/Location'
import { Footer } from './components/Footer'

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false)

  const handleSubmit = async (data: NewAppointment): Promise<{ success: boolean; error?: string }> => {
    const { error } = await supabase.from('appointment_requests').insert(data)
    if (error) return { success: false, error: error.message }
    return { success: true }
  }

  return (
    <div className="app">
      <Navbar onBookClick={() => setBookingOpen(true)} />
      <main>
        <Hero onBookClick={() => setBookingOpen(true)} />
        <Credentials />
        <Services />
        <Gallery />
        <BookingForm isOpen={bookingOpen} onClose={() => setBookingOpen(false)} onSubmit={handleSubmit} />
        <Location onBookClick={() => setBookingOpen(true)} />
      </main>
      <Footer />
      <div className="demo-banner">
        Demo concept for Dr. Tasnim Khan — Laser Chain Skin Center. This is a mockup website.
      </div>
    </div>
  )
}
