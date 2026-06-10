/*
  # Create news_articles table

  1. New Tables
    - `news_articles`
      - `id` (uuid, primary key)
      - `title` (text) - article headline
      - `slug` (text, unique) - URL-friendly identifier
      - `published_date` (date) - publication date
      - `location` (text) - dateline location
      - `summary` (text) - short excerpt for listing cards
      - `body` (text) - full article HTML content
      - `category` (text) - article type, e.g. "Press Release"
      - `media_contact_name` (text) - media contact person
      - `media_contact_title` (text) - media contact job title
      - `media_contact_email` (text) - media contact email
      - `media_contact_phone` (text) - media contact phone
      - `published` (boolean) - whether article is visible
      - `created_at` (timestamptz) - record creation timestamp

  2. Security
    - Enable RLS on `news_articles` table
    - Add policy for anonymous/public read access to published articles only
*/

CREATE TABLE IF NOT EXISTS news_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  published_date date NOT NULL,
  location text NOT NULL DEFAULT '',
  summary text NOT NULL DEFAULT '',
  body text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT 'Press Release',
  media_contact_name text NOT NULL DEFAULT '',
  media_contact_title text NOT NULL DEFAULT '',
  media_contact_email text NOT NULL DEFAULT '',
  media_contact_phone text NOT NULL DEFAULT '',
  published boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published articles"
  ON news_articles
  FOR SELECT
  TO anon, authenticated
  USING (published = true);
