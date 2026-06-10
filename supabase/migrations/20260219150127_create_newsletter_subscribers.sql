/*
  # Create newsletter subscribers table

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null) - subscriber email address
      - `subscribed_at` (timestamptz, default now()) - when the subscription was created

  2. Security
    - Enable RLS on `newsletter_subscribers` table
    - Add INSERT policy for anonymous users to subscribe
    - No SELECT/UPDATE/DELETE policies (admin-only access via service role)

  3. Notes
    - The anon key can only insert new subscribers
    - Reading/managing subscribers requires the service role key (admin)
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (email IS NOT NULL AND email <> '');
