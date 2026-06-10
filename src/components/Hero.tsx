import { ArrowRight, Zap, Eye, FolderOpen } from 'lucide-react';
import Button from './Button';
import { useInView } from '../hooks/useInView';

const FEATURES = [
  { icon: Zap, label: 'Instant quotes' },
  { icon: Eye, label: 'Real-time order visibility' },
  { icon: FolderOpen, label: 'Every document, one place' },
];

export default function Hero() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="hero" className="bg-white dark:bg-gray-950 pt-10 pb-12 md:pt-16 md:pb-24 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center">
          <div
            className="order-1 lg:col-start-1 lg:row-start-1 self-start w-fit inline-flex items-center gap-2 bg-teal/5 border border-teal/20 rounded-full px-4 py-1.5"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(12px)',
              transition: 'all 0.5s ease-out',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
            </span>
            <span className="text-xs font-semibold text-teal tracking-wide">$3.8B+ in Transactions Processed</span>
          </div>

          <h1
            className="order-2 lg:col-start-1 lg:row-start-2 mt-3 md:mt-4 text-[2rem] md:text-5xl lg:text-[3.5rem] font-bold tracking-headline leading-[1.1] text-gray-900 dark:text-white"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out 0.1s',
            }}
          >
            The smarter way to procure{' '}
            <span className="bg-gradient-to-r from-teal to-teal-600 gradient-text">
              commercial vehicles.
            </span>
          </h1>

          <div
            className="order-3 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-5 relative mt-5 lg:mt-0 lg:pl-8"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.2s',
            }}
          >
            <div className="rounded-xl lg:rounded-2xl overflow-hidden shadow-lg lg:shadow-2xl shadow-gray-200/60 dark:shadow-black/30 border border-gray-100 dark:border-gray-800 relative group">
              <img
                src="/Shaed_Hero_Image-muICIVuL%20copy.png"
                alt="SHAED Vehicle Inventory Platform Interface"
                width={1056}
                height={1089}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="hidden lg:block absolute -top-4 -left-4 w-32 h-32 bg-navy/5 dark:bg-navy/10 rounded-2xl -z-10" />
            <div className="hidden lg:block absolute -bottom-4 -right-4 w-24 h-24 bg-teal/5 dark:bg-teal/10 rounded-2xl -z-10" />
          </div>

          <p
            className="order-4 lg:col-start-1 lg:row-start-3 mt-4 md:mt-4 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 0.6s ease-out 0.2s',
            }}
          >
            SHAED connects fleets, dealers, upfitters, and OEMs into one intelligent platform. Powered by AI and enterprise-grade infrastructure.
          </p>

          <div
            id="hero-cta"
            className="order-5 lg:order-6 lg:col-start-1 lg:row-start-5 mt-6 md:mt-8"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 0.6s ease-out 0.5s',
            }}
          >
            <Button href="#contact" className="w-full md:w-auto">
              <span className="flex items-center justify-center gap-2">
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>

          <div className="order-6 lg:order-5 lg:col-start-1 lg:row-start-4 mt-8 lg:mt-10 pt-6 lg:pt-0 border-t border-gray-100 dark:border-gray-800 lg:border-0 flex flex-col gap-2">
            {FEATURES.map((f, i) => (
              <div
                key={f.label}
                className={`shimmer-chip shimmer-delay-${i + 1} flex items-center gap-3.5 bg-teal-50/70 dark:bg-teal-900/20 border border-teal-200/50 dark:border-teal-700/30 rounded-xl px-4 py-3 lg:max-w-sm`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(14px)',
                  transition: `all 0.5s ease-out ${0.6 + i * 0.15}s`,
                }}
              >
                <span className="w-9 h-9 rounded-lg bg-teal flex items-center justify-center shrink-0 shadow-sm">
                  <f.icon className="w-[18px] h-[18px] text-white" />
                </span>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
