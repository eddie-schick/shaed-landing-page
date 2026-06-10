/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - unique identifier
      - `name` (text, not null) - submitter's name
      - `email` (text, not null) - submitter's email
      - `company` (text, nullable) - company name
      - `role` (text, nullable) - role/type (Fleet Manager, Dealer, Upfitter, OEM, Other)
      - `message` (text, nullable) - optional message
      - `submitted_at` (timestamptz, default now()) - submission timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add INSERT policy for anonymous users with basic validation
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  email text NOT NULL,
  company text DEFAULT '',
  role text DEFAULT '',
  message text DEFAULT '',
  submitted_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    email IS NOT NULL AND email <> '' AND
    name IS NOT NULL AND name <> ''
  );