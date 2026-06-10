import { ArrowRight } from 'lucide-react';
import Button from './Button';
import { useInView } from '../hooks/useInView';

export default function Vision() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="vision" className="relative bg-navy py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[600px] h-[80vw] max-h-[600px] bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-teal/3 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-navy-300/5 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div
          className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(12px)',
            transition: 'all 0.5s ease-out',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
          <span className="text-xs font-semibold text-gray-300">The Future of Fleet</span>
        </div>

        <h2
          className="text-3xl md:text-5xl font-bold text-white tracking-headline mb-6"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.5s ease-out 0.1s',
          }}
        >
          Modern mobility{' '}
          <span className="bg-gradient-to-r from-teal-300 to-teal-100 gradient-text">starts here.</span>
        </h2>

        <p
          className="text-base md:text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(12px)',
            transition: 'all 0.5s ease-out 0.2s',
          }}
        >
          The future of fleet is intelligence. From disconnected to unified. From manual to automated.
          From complexity to clarity. Shape it with us.
        </p>

        <div
          className="flex flex-wrap justify-center gap-3"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(12px)',
            transition: 'all 0.5s ease-out 0.3s',
          }}
        >
          <Button href="#contact">
            <span className="flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </span>
          </Button>
          <Button variant="secondary-white" href="#contact">Join the Network</Button>
        </div>
      </div>
    </section>
  );
}
