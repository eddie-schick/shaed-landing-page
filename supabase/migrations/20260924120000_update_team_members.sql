/*
  # Update team members (September 2026)

  1. Changes
    - Add Arpit Gupta, Chief Product and Technology Officer
    - Update Lane Gayken's title to Business Development Manager
    - Reorder: Ryan, Eddie, Arpit, Scott, Thomas, Lane
    - Hide Zack Huey, Barbara Kern, and David Cook (display_order = -1)

  2. Notes
    - Hidden members are kept in the table but excluded by the public
      SELECT policy (display_order >= 0). Delete them later if desired.
*/

-- Hide departed members (kept for recovery; not publicly readable)
UPDATE team_members SET display_order = -1
WHERE name IN ('Zack Huey', 'Barbara Kern', 'David Cook');

-- Title change
UPDATE team_members SET title = 'Business Development Manager'
WHERE name = 'Lane Gayken';

-- Reorder remaining members
UPDATE team_members SET display_order = 1 WHERE name = 'Ryan Pritchard';
UPDATE team_members SET display_order = 2 WHERE name = 'Eddie Schick';
UPDATE team_members SET display_order = 4 WHERE name = 'Scott Phillippi';
UPDATE team_members SET display_order = 5 WHERE name = 'Thomas Schick';
UPDATE team_members SET display_order = 6 WHERE name = 'Lane Gayken';

-- Add Arpit Gupta (bio copy is a placeholder to be refined)
INSERT INTO team_members (name, title, initials, photo_url, bio_1, bio_2, bio_3, linkedin, display_order)
SELECT
  'Arpit Gupta',
  'Chief Product and Technology Officer',
  'AG',
  '/ArpitGupta.png',
  'Arpit leads SHAED''s product and technology organization, bringing product strategy and engineering together under a single roadmap.',
  'He focuses on building scalable, enterprise-grade platforms and leading high-performing product and engineering teams.',
  'His customer-driven approach to product design ensures SHAED''s platform delivers for every stakeholder in the commercial vehicle network.',
  NULL,
  3
WHERE NOT EXISTS (SELECT 1 FROM team_members WHERE name = 'Arpit Gupta');
