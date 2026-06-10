import { useCookieConsent } from '../context/CookieConsentContext';

export default function FooterBar() {
  const { openPreferences } = useCookieConsent();

  return (
    <div className="border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} SHAED. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={openPreferences}
            className="hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
          >
            Cookie Settings
          </button>
          <p>Built on Google Cloud</p>
        </div>
      </div>
    </div>
  );
}
