import { ClipboardList, Unplug, Search, ChevronDown, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import Button from './Button';

const PROBLEMS = [
  {
    icon: ClipboardList,
    title: 'Manual Processes',
    description: 'Orders tracked in spreadsheets. Status updates by phone. Specs buried in email threads.',
    stat: '40+ hrs/mo',
    statLabel: 'wasted on status calls',
  },
  {
    icon: Unplug,
    title: 'Disconnected Systems',
    description: 'Fleets, dealers, upfitters, and OEMs all working in silos with no shared visibility.',
    stat: '5+ tools',
    statLabel: 'to manage one order',
  },
  {
    icon: Search,
    title: 'Limited Visibility',
    description: "No one knows where an order stands until someone picks up the phone and asks.",
    stat: '0%',
    statLabel: 'real-time tracking',
  },
];

export default function ProblemSolution() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="problem" className="bg-white dark:bg-gray-950 py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p
            className="text-xs font-bold uppercase tracking-overline text-teal mb-3"
            style={{
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.5s ease-out',
            }}
          >
            The Problem
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-headline mb-4 text-gray-900 dark:text-white"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(12px)',
              transition: 'all 0.5s ease-out 0.1s',
            }}
          >
            Procurement hasn't changed in 30 years.
          </h2>
          <p
            className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(12px)',
              transition: 'all 0.5s ease-out 0.2s',
            }}
          >
            We're still running on spreadsheets, phone calls, and legacy systems. It's manual, disconnected, and invisible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.title}
              className="group bg-off-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 transition-all duration-500 hover:border-red-200 dark:hover:border-red-900 hover:bg-red-50/30 dark:hover:bg-red-950/30"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-colors duration-300">
                <p.icon className="w-5 h-5 text-teal group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">{p.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{p.description}</p>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-2xl font-bold text-navy dark:text-teal-300">{p.stat}</p>
                <p className="text-xs text-gray-400 mt-0.5">{p.statLabel}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex justify-center mb-10"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.5s ease-out 0.6s',
          }}
        >
          <div className="w-0.5 h-12 bg-gradient-to-b from-teal/20 to-teal rounded-full relative">
            <ChevronDown
              className="w-5 h-5 text-teal absolute -bottom-2 left-1/2 -translate-x-1/2"
              strokeWidth={2.5}
            />
          </div>
        </div>

        <div
          className="max-w-3xl mx-auto bg-gradient-to-br from-navy to-navy-600 rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.98)',
            transition: 'all 0.6s ease-out 0.7s',
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-teal/20 rounded-full px-3 py-1 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              <span className="text-xs font-semibold text-teal-200">The Solution</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">One platform. Every stakeholder.</h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl">
              SHAED replaces fragmented procurement with a single, intelligent transaction network &mdash; from chassis to completion, order to delivery, from data to intelligence.
            </p>
            <Button href="#platform">
              <span className="flex items-center gap-2">
                See how it works
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
