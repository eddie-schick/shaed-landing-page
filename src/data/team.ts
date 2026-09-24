export interface TeamMember {
  id: string;
  name: string;
  title: string;
  initials: string;
  photo_url: string | null;
  bio_1: string;
  bio_2: string;
  bio_3: string;
  linkedin: string | null;
}

// Order here is display order.
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'ryan-pritchard',
    name: 'Ryan Pritchard',
    title: 'Chief Executive Officer',
    initials: 'RP',
    photo_url: '/RyanPritchard.png',
    bio_1:
      'Ryan is on a mission to transform the transportation industry through innovative, digitized products and services that deliver value to customers, stakeholders, and society.',
    bio_2:
      'With over 21 years of experience in automotive, focused on mobility solutions, he brings unmatched expertise to our team.',
    bio_3:
      'A recognized authority in commercial vehicle procurement, Ryan combines a powerful network and a proven record of revenue growth to drive our entrepreneurial success. Google-certified in generative AI and cloud.',
    linkedin: 'https://www.linkedin.com/in/ev-ryan-pritchard/',
  },
  {
    id: 'eddie-schick',
    name: 'Eddie Schick',
    title: 'Chief Financial Officer',
    initials: 'ES',
    photo_url: '/EddieSchick.png',
    bio_1:
      "Eddie serves as a strategic partner to the CEO and owns SHAED's financial and operating backbone: FP&A, treasury, internal controls and the legal and compliance stack, plus day-to-day operations.",
    bio_2:
      'He has raised $9.6M across multiple rounds. Previously FP&A at Coty through its KKR divestiture, and six years auditing commercial clients at RSM.',
    bio_3:
      "CPA, and Google-certified in generative AI, with Claude embedded in SHAED's planning and reporting.",
    linkedin: 'https://www.linkedin.com/in/eddie-schick-05338616/',
  },
  {
    id: 'arpit-gupta',
    name: 'Arpit Gupta',
    title: 'Chief Product and Technology Officer',
    initials: 'AG',
    photo_url: '/ArpitGupta.png',
    bio_1:
      "Arpit leads product and technology at SHAED, owning the platform roadmap, the anchor partnerships, SOC 2, and the engineering team.",
    bio_2:
      "Previously he led product for WEX's global fleet and trucking businesses, five units at 60% of company revenue serving 600,000 customers, and ran the 100-person product organization behind Kelley Blue Book and Autotrader at Cox Automotive.",
    bio_3:
      'His AI cost analytics reached 50,000 fleet managers.',
    linkedin: 'https://www.linkedin.com/in/thearpitgupta/',
  },
  {
    id: 'scott-phillippi',
    name: 'Scott Phillippi',
    title: 'Chief Community Officer',
    initials: 'SP',
    photo_url: '/ScottPhillippi.png',
    bio_1:
      'Scott brings unmatched experience to our team with over 30 years in fleet management and auto engineering.',
    bio_2:
      'Formerly the Chief Continuity Officer at REE Automotive and VP of Fleet Maintenance & Engineering at UPS, he is a true industry veteran.',
    bio_3:
      "Scott's board roles at Calstart, Clean Cities Georgia, and the Green Truck Association demonstrate his commitment to sustainable transportation.",
    linkedin: 'https://www.linkedin.com/in/scott-phillippi-b4263064/',
  },
  {
    id: 'thomas-schick',
    name: 'Thomas Schick',
    title: 'Director, Finance',
    initials: 'TS',
    photo_url: '/ThomasSchick.png',
    bio_1:
      'Thomas is an expert in crafting accounting frameworks, designing processes, and setting controls for critical functions.',
    bio_2:
      'As a CPA and ex-Assurance Senior Associate at PwC, he brings 4+ years of expertise dialed into the EV scene.',
    bio_3:
      "Armed with a master's degree in accounting from the University of Iowa, Thomas is at SHAED to make a mark driving meaningful change in a pivotal industry.",
    linkedin: 'https://www.linkedin.com/in/thomas-schick-cpa-47036912a/',
  },
  {
    id: 'lane-gayken',
    name: 'Lane Gayken',
    title: 'Business Development Manager',
    initials: 'LG',
    photo_url: '/LaneGayken.png',
    bio_1:
      'Lane supports strategic growth and operational efficiency at SHAED, contributing fresh insights and hands-on execution to key initiatives.',
    bio_2:
      "He's actively engaged in driving organizational effectiveness and learning across business operations within the sustainable mobility space.",
    bio_3: '',
    linkedin: 'https://www.linkedin.com/in/lane-gayken-526474311/',
  },
];
