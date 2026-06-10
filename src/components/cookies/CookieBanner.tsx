import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';
import { useCookieConsent } from '../../context/CookieConsentContext';

export default function CookieBanner() {
  const { bannerVisible, preferencesOpen, acceptAll, rejectNonEssential, openPreferences } = useCookieConsent();

  if (!bannerVisible || preferencesOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-6 animate-slide-up"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl shadow-gray-900/15 dark:shadow-black/40 p-4 sm:p-6 max-h-[80dvh] overflow-y-auto">
        <div className="flex items-start gap-4">
          <span className="hidden sm:flex w-10 h-10 rounded-xl bg-teal/10 items-center justify-center shrink-0">
            <Cookie className="w-5 h-5 text-teal" aria-hidden="true" />
          </span>
          <div className="flex-1">
            <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-1">We value your privacy</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              We use cookies to enhance your browsing experience and analyze our traffic. Strictly
              necessary cookies are always active. You can accept all cookies, reject non-essential
              ones, or customize your preferences. Read our{' '}
              <Link to="/privacy" className="text-teal hover:underline font-medium">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <button
                type="button"
                onClick={acceptAll}
                className="px-5 py-3 sm:py-2.5 rounded-lg bg-teal hover:bg-teal-600 text-white text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="px-5 py-3 sm:py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:border-teal hover:text-teal transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
              >
                Reject non-essential
              </button>
              <button
                type="button"
                onClick={openPreferences}
                className="px-5 py-3 sm:py-2.5 rounded-lg text-teal text-sm font-semibold hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
              >
                Customize
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
