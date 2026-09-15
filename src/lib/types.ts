export interface AppointmentRequest {
  id: string
  name: string
  phone: string
  email: string | null
  preferred_date: string
  preferred_time: string
  service: string
  message: string | null
  status: string
  created_at: string
}

export interface NewAppointment {
  name: string
  phone: string
  email?: string
  preferred_date: string
  preferred_time: string
  service: string
  message?: string
}
