import { Cloud, Shield, Brain, TrendingUp } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { useInView } from '../hooks/useInView';

const CARDS = [
  {
    icon: Cloud,
    title: 'Google Cloud',
    description: 'Built on Google Cloud Platform for reliability and global scale.',
    highlight: '99.9%',
    highlightLabel: 'uptime SLA',
  },
  {
    icon: Shield,
    title: 'SOC 2 Aligned',
    description: 'Security controls designed to meet SOC 2 compliance standards.',
    highlight: 'Enterprise',
    highlightLabel: 'grade security',
  },
  {
    icon: Brain,
    title: 'AI-Powered',
    description: 'Predictive intelligence at every stage of the procurement journey.',
    highlight: 'Real-time',
    highlightLabel: 'insights',
  },
  {
    icon: TrendingUp,
    title: 'Designed to Scale',
    description: 'From single dealerships to national fleets — one platform grows with you.',
    highlight: 'Unlimited',
    highlightLabel: 'growth capacity',
  },
];

export default function Enterprise() {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="bg-white dark:bg-gray-950 py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Enterprise Ready"
          headline="Built on Cloud. Built for enterprise."
          subtext="Your data protected by the same infrastructure that powers Google."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((c, i) => (
            <div
              key={c.title}
              className="group bg-navy rounded-2xl p-6 text-white transition-all duration-300 hover:shadow-xl hover:shadow-teal/10 hover:-translate-y-1.5 relative overflow-hidden"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-full blur-2xl translate-x-8 -translate-y-8 group-hover:bg-teal/10 transition-colors duration-500" />

              {inView && (
                <div className={`card-shimmer ${i > 0 ? `card-shimmer-delay-${i}` : ''}`} />
              )}

              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-teal/15 flex items-center justify-center mb-5 group-hover:bg-teal/25 transition-colors duration-300">
                  <c.icon className="w-5 h-5 text-teal-300" />
                </div>

                <h3 className="text-base font-bold mb-2">{c.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{c.description}</p>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xl font-bold text-teal-300">{c.highlight}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{c.highlightLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
