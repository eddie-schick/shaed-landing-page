import { useEffect, useRef, useState } from 'react';

export function useInView(threshold = 0.2, { continuous = false } = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setHasAppeared(true);
          if (!continuous) observer.unobserve(el);
        } else if (continuous) {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, continuous]);

  return { ref, inView, hasAppeared };
}
