/*
# Create appointment_requests table (single-tenant, no auth)

1. New Tables
- `appointment_requests`
- `id` (uuid, primary key)
- `name` (text, patient's full name)
- `phone` (text, contact number)
- `email` (text, optional email)
- `preferred_date` (date, requested appointment date)
- `preferred_time` (text, requested time slot)
- `service` (text, which treatment they're interested in)
- `message` (text, optional additional notes)
- `status` (text, default 'pending' — tracks whether receptionist has handled the request)
- `created_at` (timestamptz, when the request was submitted)

2. Security
- Enable RLS on `appointment_requests`.
- Allow anon + authenticated to INSERT (public booking form, no sign-in required).
- Allow anon + authenticated to SELECT so the demo can display submitted requests.
- Allow anon + authenticated to UPDATE/DELETE for demo management purposes.
- Data is intentionally public/shared in this single-tenant demo context.
*/

CREATE TABLE IF NOT EXISTS appointment_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  service text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointment_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_appointments" ON appointment_requests;
CREATE POLICY "anon_select_appointments"
ON appointment_requests FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_appointments" ON appointment_requests;
CREATE POLICY "anon_insert_appointments"
ON appointment_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_appointments" ON appointment_requests;
CREATE POLICY "anon_update_appointments"
ON appointment_requests FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_appointments" ON appointment_requests;
CREATE POLICY "anon_delete_appointments"
ON appointment_requests FOR DELETE
TO anon, authenticated USING (true);
