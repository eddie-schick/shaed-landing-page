import { useState } from 'react';
import { ShoppingCart, MapPin, FileText, Check, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { useInView } from '../hooks/useInView';

type Audience = 'fleets' | 'dealers';

interface ProductCard {
  icon: typeof ShoppingCart;
  title: string;
  tagline: Record<Audience, string>;
  description: Record<Audience, string>;
  features: Record<Audience, string[]>;
  color: string;
}

const PRODUCTS: ProductCard[] = [
  {
    icon: ShoppingCart,
    title: 'SHOP',
    color: 'from-teal to-teal-600',
    tagline: {
      fleets: 'One catalog. Every channel.',
      dealers: 'List once. Reach every buyer. Win more deals.',
    },
    description: {
      fleets: 'Search across dealers, OEMs, and Sourcewell contract pricing in one place. Filter by spec, price, and availability.',
      dealers: 'One upload puts your inventory in front of fleet, government, and private buyers, with pricing you control.',
    },
    features: {
      fleets: [
        '12,000+ vehicles searchable',
        'Sourcewell contract pricing',
        'Compare specs side-by-side',
        'Save searches & alerts',
      ],
      dealers: [
        'Meet buyers everywhere',
        'DMS Integration',
        'Customer-specific catalogs',
        'Live in minutes, not hours',
      ],
    },
  },
  {
    icon: MapPin,
    title: 'TRACK',
    color: 'from-navy to-navy-600',
    tagline: {
      fleets: 'From order to delivery. No gaps. No guessing.',
      dealers: 'Ditch the spreadsheets. Give buyers real-time updates.',
    },
    description: {
      fleets: 'See exactly where every unit is in production, upfit, and transit. Get proactive alerts instead of making status calls.',
      dealers: 'Production, upfit, logistics: all visible in one place. Fewer status calls, more time selling.',
    },
    features: {
      fleets: [
        'Live production status updates',
        'Upfit progress tracking',
        'Delivery ETAs and alerts',
        'Fleet-wide order dashboard',
      ],
      dealers: [
        'One dashboard, every order',
        'Customer-facing tracking links',
        'Proactive delay notifications',
        'Track OEMs and upfitters in one view',
      ],
    },
  },
  {
    icon: FileText,
    title: 'DOCUMENT',
    color: 'from-teal-700 to-navy',
    tagline: {
      fleets: 'Every document. Every deal. Always accessible.',
      dealers: 'From spec sheet to signed deal. All in one place.',
    },
    description: {
      fleets: 'Specs, quotes, contracts, and warranties organized and stored securely. No more digging through email for that one PDF.',
      dealers: 'Stop chasing docs across your DMS, OEM portals, and email. We organize everything in one secure place.',
    },
    features: {
      fleets: [
        'Auto-generated spec sheets',
        'Secure document vault',
        'Complete audit trail',
        'Instant document retrieval',
      ],
      dealers: [
        'Every deal document in one place',
        'E-signature integration',
        'Search any document in seconds',
        'Team-wide deal visibility',
      ],
    },
  },
];

export default function Products() {
  const [audience, setAudience] = useState<Audience>('fleets');
  const { ref, inView } = useInView(0.1);

  return (
    <section id="platform" className="bg-off-white dark:bg-gray-900 py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="The Platform"
          headline="Shop. Track. Document."
          subtext="Search smarter. Configure faster. Track every order and document."
        />

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-1 shadow-sm">
            {(['fleets', 'dealers'] as Audience[]).map((a) => (
              <button
                key={a}
                onClick={() => setAudience(a)}
                aria-pressed={audience === a}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  audience === a
                    ? 'bg-navy text-white shadow-md'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                For {a === 'fleets' ? 'Fleets' : 'Dealers'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-7 transition-all duration-300 hover:border-teal/40 hover:shadow-xl hover:shadow-teal/5 hover:-translate-y-1.5 relative overflow-hidden"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                <p.icon className="w-5 h-5 text-white" />
              </div>

              <h3 className="text-lg font-bold tracking-wide mb-1 dark:text-white">{p.title}</h3>
              <p className="text-teal text-sm font-semibold mb-3 leading-snug">
                {p.tagline[audience]}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                {p.description[audience]}
              </p>

              <ul className="space-y-3 mb-6">
                {p.features[audience].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-teal" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-600 transition-colors group/link">
                Learn more
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
