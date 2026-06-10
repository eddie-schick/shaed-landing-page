import AnimatedCounter from './AnimatedCounter';
import { useInView } from '../hooks/useInView';

const METRICS = [
  { value: 250, suffix: '+', label: 'Partners on the network', detail: 'Fleets, dealers, OEMs & upfitters' },
  { value: 100, suffix: 'K+', label: 'Transactions processed', detail: 'Orders tracked end-to-end' },
  { value: 205, suffix: 'K+', label: 'Documents managed', detail: 'Specs, quotes & contracts' },
];

export default function Traction() {
  const { ref, inView } = useInView(0.3);

  return (
    <section className="relative border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <p
          className="text-xs font-bold uppercase tracking-overline text-teal mb-3"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(12px)',
            transition: 'all 0.5s ease-out',
          }}
        >
          Real Network Momentum
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold tracking-headline mb-14 text-gray-900 dark:text-white"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(12px)',
            transition: 'all 0.5s ease-out 0.1s',
          }}
        >
          We've lived it. Now we're scaling it.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className={`transition-all duration-500 ${
                i < METRICS.length - 1 ? 'md:border-r md:border-gray-200 dark:md:border-gray-800' : ''
              }`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <p className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-navy dark:text-teal-300 mb-2 tabular-nums">
                <AnimatedCounter target={m.value} suffix={m.suffix} active={inView} />
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">{m.label}</p>
              <p className="text-xs text-gray-400">{m.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
