/*
  # Create team members table

  1. New Tables
    - `team_members`
      - `id` (uuid, primary key)
      - `name` (text, not null) - Full name
      - `title` (text, not null) - Job title
      - `initials` (text, not null) - Two-letter initials for avatar fallback
      - `photo_url` (text, nullable) - URL to team member photo
      - `bio_1` (text, not null) - First paragraph of bio
      - `bio_2` (text, not null) - Second paragraph of bio
      - `bio_3` (text, not null) - Third paragraph of bio
      - `linkedin` (text, nullable) - LinkedIn profile URL
      - `display_order` (integer, not null) - Controls display ordering
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `team_members` table
    - Add policy for anonymous/public read access (team info is public content)
    - No insert/update/delete policies for anonymous users
*/

CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title text NOT NULL,
  initials text NOT NULL DEFAULT '',
  photo_url text,
  bio_1 text NOT NULL DEFAULT '',
  bio_2 text NOT NULL DEFAULT '',
  bio_3 text NOT NULL DEFAULT '',
  linkedin text,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Team members are publicly readable"
  ON team_members
  FOR SELECT
  TO anon
  USING (display_order >= 0);
