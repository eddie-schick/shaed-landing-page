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
      "Ryan's mission is to transform the transportation industry with innovative and sustainable products and services that meet the needs and expectations of customers, stakeholders, and society.",
    bio_2:
      'With 21+ years of automotive experience, centered around the global trends of shared, autonomous, and electrified mobility, he brings unparalleled expertise to our team.',
    bio_3:
      'As a recognized authority on commercial vehicle procurement, a robust network, and a proven track-record of revenue generation, Ryan is the entrepreneurial force behind our success.',
    linkedin: 'https://www.linkedin.com/in/ev-ryan-pritchard/',
  },
  {
    id: 'eddie-schick',
    name: 'Eddie Schick',
    title: 'Chief Financial Officer',
    initials: 'ES',
    photo_url: '/EddieSchick.png',
    bio_1:
      "Eddie is a strategic partner to the CEO and serves as the lead for SHAED's investor relations, fundraising, and overall financial health.",
    bio_2:
      'He has a proven record in overseeing and managing all financial-related activities of companies such as Pritchard EV, Coty, and RSM.',
    bio_3:
      'His dedication to boosting sales and nurturing customer relationships ensures our success, one strategic pipeline at a time.',
    linkedin: 'https://www.linkedin.com/in/eddie-schick-05338616/',
  },
  {
    id: 'arpit-gupta',
    name: 'Arpit Gupta',
    title: 'Chief Product and Technology Officer',
    initials: 'AG',
    photo_url: '/ArpitGupta.png',
    bio_1:
      "Arpit brings deep engineering leadership and a proven ability to scale high-growth SaaS platforms, making him instrumental in advancing SHAED's technology vision.",
    bio_2:
      'With a strong background in building resilient systems and leading high-performing development teams, Arpit combines technical depth with strategic clarity.',
    bio_3:
      "His focus on scalable architecture, disciplined execution, and product-driven engineering ensures SHAED's platform is built to perform at enterprise scale.",
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
