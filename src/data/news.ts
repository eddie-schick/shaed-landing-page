export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  published_date: string; // YYYY-MM-DD
  location: string;
  summary: string;
  body: string; // HTML
  category: string;
  media_contact_name: string;
  media_contact_title: string;
  media_contact_email: string;
  media_contact_phone: string;
}

// Newest first. Add new releases at the top.
export const NEWS_ARTICLES: NewsArticle[] = [
  {
    "id": "shaed-announces-strategic-expansion",
    "title": "SHAED Announces Strategic Expansion from Marketplace to AI-Powered Commercial Vehicle Intelligence Platform",
    "slug": "shaed-announces-strategic-expansion",
    "published_date": "2026-03-04",
    "location": "Minneapolis, Minnesota",
    "summary": "SHAED today announced a strategic expansion from its foundation as an electric vehicle (EV) marketplace, unveiling the technology behind CommercialEVs.com. The move positions SHAED as an AI-powered fuel-agnostic technology and business intelligence provider focused on improving clarity, speed, and visibility across commercial vehicle procurement.",
    "body": "<p><strong>Minneapolis, Minnesota &mdash; March 4, 2026</strong> &mdash; SHAED today announced a strategic expansion from its foundation as an electric vehicle (EV) marketplace, unveiling the technology behind CommercialEVs.com. The move positions SHAED as an AI-powered fuel-agnostic technology and business intelligence provider focused on improving clarity, speed, and visibility across commercial vehicle procurement, one of the industry's most complex processes.</p><p>SHAED's first product, CommercialEVs.com, addressed a critical gap in commercial EV purchasing at a time when no clear process existed. While CommercialEVs.com served as a visible entry point to the market, the underlying SHAED platform was developed and validated in parallel, <strong><u>processing over 3.8 billion dollars in vehicle transaction volume</u></strong> and surfacing a universal industry challenge: fragmented systems, limited visibility, and manual coordination across commercial vehicle procurement.</p><blockquote><p>&ldquo;CommercialEVs.com was a deliberate starting point,&rdquo; said <strong>Eddie Schick, CFO and Co-Founder of SHAED</strong>. &ldquo;It allowed us to prove the technology in the most complex segment of the market. What we're unveiling now is the next phase. We are introducing the technology behind CommercialEVs.com in a scalable, unified platform designed for the broader commercial vehicle market.&rdquo;</p></blockquote><p>While sustainability remains an important outcome, SHAED's expanded platform focuses on simplifying commercial vehicle procurement across all vehicle powertrains. As the company moves beyond EVs, it is rolling out an updated visual identity, shifting from green to teal to represent intelligence, simplicity, and neutrality across ICE, hybrid, and electric commercial vehicles.</p><h3>A Unified, Fuel-Agnostic Platform for Commercial Vehicle Procurement</h3><p>SHAED consolidates what has historically required dozens of disconnected steps into a single, end-to-end platform built exclusively for commercial vehicle procurement. The platform brings vehicle purchasing and order management, documentation, and real-time status tracking into one shared system. SHAED replaces spreadsheets, emails, and fragmented software across all stakeholders, including dealers, OEMs, upfitters, logistics providers, and buyers.</p><p>Unlike consumer automotive platforms or single-point software solutions, SHAED is built exclusively for the commercial market, where a single vehicle purchase typically involves months of coordination, numerous stakeholders, and extensive documentation.</p><p>The SHAED platform replaces fragmented tools with three core products:</p><ul><li><strong>Shop:</strong> an omnichannel vehicle discovery experience, from public marketplaces to private, buyer-specific catalogs and compliance-driven purchasing channels such as the Sourcewell Portal</li><li><strong>Track:</strong> live, end-to-end order visibility across production, upfitting, and delivery, eliminating uncertainty and manual status updates</li><li><strong>Document:</strong> a secure, automated document hub that generates, organizes, and stores quotes, specs, contracts, warranties, and more, with integrated e-signatures and audit trails</li></ul><blockquote><p>&ldquo;SHAED fundamentally changed how we manage commercial vehicle orders,&rdquo; said <strong>Cory Thorpe, Director of Sales at Pritchard Companies</strong>, a SHAED customer. &ldquo;Instead of juggling emails and spreadsheets, our team and partners work from a single source of truth. The ease of order visibility alone has saved us significant time and cost.&rdquo;</p></blockquote><h3>AI-Powered Infrastructure Built for Scale</h3><p>Built on Google Cloud and powered by BigQuery and Vertex AI, SHAED's AI-first architecture enables intelligent matching and discovery, real-time visibility across the procurement lifecycle, and automated documentation with secure storage, e-signatures, and full audit trails. To facilitate enhanced communication between the business, sales, and development teams, the SHAED leadership team has completed Google Cloud's AI Certification across Generative AI and Cloud Digital, creating a shared foundation in responsible AI use and ensuring AI is consistently embedded into product decisions, operational execution, and long-term business strategy.</p><p>As commercial fleets navigate shifting fuel strategies, increasing complexity, and rising operational demands, SHAED is building the intelligence layer that connects the entire procurement ecosystem.</p><hr /><div class=\"about-section\"><h4>About SHAED</h4><p>SHAED is an AI-powered commercial vehicle procurement and intelligence platform designed to bring clarity, speed, and visibility to fleet purchasing. Built to support ICE, hybrid, and EV fleets, SHAED connects buyers and partners, including dealers, OEMs, upfitters, and logistics providers through a unified system for vehicle discovery, order tracking, and document management. Learn more at <a href=\"https://www.shaed.ai\" target=\"_blank\" rel=\"noopener noreferrer\">www.shaed.ai</a></p></div>",
    "category": "Press Release",
    "media_contact_name": "Eddie Schick",
    "media_contact_title": "CFO",
    "media_contact_email": "Eddie.Schick@shaed.ai",
    "media_contact_phone": "612-230-0192"
  }
];

export function getArticleBySlug(slug: string | undefined): NewsArticle | undefined {
  return NEWS_ARTICLES.find((a) => a.slug === slug);
}
