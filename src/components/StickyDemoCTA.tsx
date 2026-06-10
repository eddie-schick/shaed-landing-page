import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

export default function StickyDemoCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cta = document.getElementById('hero-cta');
    if (!cta) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(false);
          return;
        }
        const ctaBottom = cta.getBoundingClientRect().bottom + window.scrollY;
        setVisible(window.scrollY > ctaBottom);
      },
      { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
    );

    observer.observe(cta);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed top-16 left-0 right-0 z-40 md:hidden transition-all duration-300 ${
        visible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2.5">
          <Button href="#contact" className="w-full !py-2.5 !text-xs">
            <span className="flex items-center justify-center gap-2">
              Request a Demo
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
