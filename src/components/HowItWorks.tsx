import { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from '../hooks/useInView';

const STEPS = [
  {
    number: '01',
    title: 'List or discover vehicles',
    body: 'Dealers publish inventory to the SHAED network. Fleet managers search 12,000+ commercial vehicles with fleet-specific filters, pricing, and Sourcewell contract terms.',
    audience: 'Fleets & Dealers',
  },
  {
    number: '02',
    title: 'Configure & order',
    body: 'Spec vehicles with the right chassis, body, and upfit configuration. Generate quotes, apply contract pricing, and issue purchase orders \u2014 all from one screen.',
    audience: 'Fleets & Dealers',
  },
  {
    number: '03',
    title: 'Track through production',
    body: 'Follow every unit from factory order through upfitting and delivery. Live status updates replace status phone calls. Customers get shareable tracking links.',
    audience: 'Fleets, Dealers & Upfitters',
  },
  {
    number: '04',
    title: 'Close and document',
    body: 'Spec sheets, purchase orders, warranties, and compliance documents auto-generate, get signed electronically, and are stored securely \u2014 searchable forever.',
    audience: 'All Stakeholders',
  },
];

const AUTO_PLAY_MS = 2500;
const RESUME_DELAY_MS = 5000;

function StepCard({
  step,
  active,
  onTap,
  onHoverStart,
  onHoverEnd,
}: {
  step: (typeof STEPS)[number];
  active: boolean;
  onTap: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const highlighted = hovered || active;

  return (
    <div
      role="button"
      tabIndex={0}
      className={`relative rounded-xl p-6 flex flex-col cursor-pointer border outline-none focus-visible:ring-2 focus-visible:ring-teal/50 transition-[background-color,border-color,box-shadow] duration-500 ease-in-out ${
        highlighted
          ? 'bg-navy border-navy dark:shadow-[0_0_24px_rgba(59,140,125,0.2)]'
          : 'bg-off-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-none'
      }`}
      onMouseEnter={() => {
        setHovered(true);
        onHoverStart();
      }}
      onMouseLeave={() => {
        setHovered(false);
        onHoverEnd();
      }}
      onClick={onTap}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onTap();
        }
      }}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-teal transition-transform duration-500 ease-in-out ${
          highlighted ? 'scale-x-100 origin-left' : 'scale-x-0 origin-right'
        }`}
      />

      <span
        className={`text-5xl font-black leading-none mb-6 select-none transition-colors duration-300 ${
          highlighted
            ? 'text-teal/10 dark:text-teal/15'
            : 'text-gray-200 dark:text-gray-800'
        }`}
      >
        {step.number}
      </span>

      <h3
        className={`text-lg font-bold leading-snug mb-2 transition-colors duration-300 ${
          highlighted ? 'text-white' : 'text-gray-900 dark:text-gray-100'
        }`}
      >
        {step.title}
      </h3>

      <p
        className={`text-sm leading-relaxed mb-4 flex-1 transition-colors duration-300 ${
          highlighted ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'
        }`}
      >
        {step.body}
      </p>

      <div
        className={`mt-auto pt-4 border-t transition-colors duration-300 ${
          highlighted ? 'border-white/10' : 'border-gray-200 dark:border-gray-700'
        }`}
      >
        <span
          className={`text-[11px] font-semibold uppercase tracking-overline transition-colors duration-300 ${
            highlighted ? 'text-teal-300' : 'text-teal'
          }`}
        >
          {step.audience}
        </span>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const { ref, inView, hasAppeared } = useInView(0.15, { continuous: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const pause = useCallback(() => {
    pausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY_MS);
  }, []);

  const handleTap = useCallback(
    (i: number) => {
      pause();
      setActiveIndex(i);
    },
    [pause]
  );

  useEffect(() => {
    if (!inView) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = undefined;
      return;
    }

    intervalRef.current = setInterval(() => {
      if (pausedRef.current) return;
      setActiveIndex((prev) => (prev + 1) % STEPS.length);
    }, AUTO_PLAY_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [inView]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section id="process" className="bg-white dark:bg-gray-950 py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center max-w-3xl mx-auto mb-12 transition-all duration-500"
          style={{
            opacity: hasAppeared ? 1 : 0,
            transform: hasAppeared ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <p className="text-xs font-bold uppercase tracking-overline text-teal mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-headline text-gray-900 dark:text-white mb-4">
            From search to delivery in one place.
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            SHAED connects every step of the commercial vehicle transaction &mdash; no chasing updates.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500"
          style={{
            opacity: hasAppeared ? 1 : 0,
            transform: hasAppeared ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              style={{
                opacity: hasAppeared ? 1 : 0,
                transform: hasAppeared ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s ease-out',
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <StepCard
                step={step}
                active={activeIndex === i}
                onTap={() => handleTap(i)}
                onHoverStart={pause}
                onHoverEnd={() => {}}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
