import { useEffect, useRef, useState } from 'react';
import { X, ShieldCheck, BarChart3, Megaphone } from 'lucide-react';
import { useCookieConsent } from '../../context/CookieConsentContext';

const CATEGORIES = [
  {
    id: 'necessary' as const,
    icon: ShieldCheck,
    title: 'Strictly Necessary',
    description:
      'Essential for the site to function — security, page navigation, and remembering your cookie choices. These cannot be disabled.',
    locked: true,
  },
  {
    id: 'analytics' as const,
    icon: BarChart3,
    title: 'Analytics',
    description:
      'Help us understand how visitors use the site so we can improve performance and content. All data is aggregated and anonymous.',
    locked: false,
  },
  {
    id: 'marketing' as const,
    icon: Megaphone,
    title: 'Marketing',
    description:
      'Used to deliver relevant content and measure the effectiveness of our outreach across other platforms.',
    locked: false,
  },
];

export default function CookiePreferencesModal() {
  const { preferencesOpen, closePreferences, consent, savePreferences, acceptAll, rejectNonEssential } =
    useCookieConsent();

  const [analytics, setAnalytics] = useState(consent?.analytics ?? false);
  const [marketing, setMarketing] = useState(consent?.marketing ?? false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (preferencesOpen) {
      setAnalytics(consent?.analytics ?? false);
      setMarketing(consent?.marketing ?? false);
    }
  }, [preferencesOpen, consent]);

  useEffect(() => {
    if (!preferencesOpen) return;

    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialog?.querySelector<HTMLElement>('button, [tabindex]')?.focus();
    document.body.style.overflow = 'hidden';

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closePreferences();
        return;
      }
      if (e.key !== 'Tab' || !dialog) return;
      const focusables = dialog.querySelectorAll<HTMLElement>(
        'button, [href], input, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, [preferencesOpen, closePreferences]);

  if (!preferencesOpen) return null;

  const toggleState = { necessary: true, analytics, marketing };
  const setters = {
    analytics: setAnalytics,
    marketing: setMarketing,
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6">
      <div
        className="absolute inset-0 bg-gray-950/60 backdrop-blur-sm animate-fade-in"
        onClick={closePreferences}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-preferences-title"
        className="relative w-full sm:max-w-lg bg-white dark:bg-gray-900 rounded-t-2xl sm:rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 max-h-[85dvh] flex flex-col animate-modal-in"
      >
        <div className="flex items-center justify-between px-4 sm:px-6 pt-5 pb-4 border-b border-gray-100 dark:border-gray-800">
          <h2 id="cookie-preferences-title" className="text-lg font-bold text-gray-900 dark:text-white">
            Cookie Preferences
          </h2>
          <button
            type="button"
            onClick={closePreferences}
            aria-label="Close cookie preferences"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-4 sm:px-6 py-5 overflow-y-auto overscroll-contain">
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
            Manage how cookies are used on this site. Your choices are saved on this device and you
            can change them anytime via the Cookie Settings link in the footer.
          </p>

          <ul className="space-y-4">
            {CATEGORIES.map((cat) => (
              <li
                key={cat.id}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex items-start gap-3.5"
              >
                <span className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                  <cat.icon className="w-[18px] h-[18px] text-teal" aria-hidden="true" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {cat.title}
                    </span>
                    {cat.locked ? (
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-teal bg-teal/10 rounded-full px-2.5 py-1">
                        Always on
                      </span>
                    ) : (
                      <button
                        type="button"
                        role="switch"
                        aria-checked={toggleState[cat.id]}
                        aria-label={`${cat.title} cookies`}
                        onClick={() => setters[cat.id as 'analytics' | 'marketing']((v) => !v)}
                        className={`relative w-11 h-6 rounded-full transition-colors shrink-0 before:content-[''] before:absolute before:-inset-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 ${
                          toggleState[cat.id] ? 'bg-teal' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                            toggleState[cat.id] ? 'translate-x-5' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="px-4 sm:px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-2 sm:justify-between"
          style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
        >
          <div className="flex flex-col sm:flex-row gap-2 order-2 sm:order-1">
            <button
              type="button"
              onClick={rejectNonEssential}
              className="px-4 py-3 sm:py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:border-teal hover:text-teal transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
            >
              Reject non-essential
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="px-4 py-3 sm:py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:border-teal hover:text-teal transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
            >
              Accept all
            </button>
          </div>
          <button
            type="button"
            onClick={() => savePreferences({ analytics, marketing })}
            className="px-5 py-3 sm:py-2.5 rounded-lg bg-teal hover:bg-teal-600 text-white text-sm font-semibold transition-colors order-1 sm:order-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
          >
            Save preferences
          </button>
        </div>
      </div>
    </div>
  );
}
