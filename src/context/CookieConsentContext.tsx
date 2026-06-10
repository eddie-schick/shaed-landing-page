import { createContext, useContext, useState } from 'react';

export type ConsentCategory = 'necessary' | 'analytics' | 'marketing';

export interface ConsentPreferences {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
}

interface StoredConsent {
  version: number;
  timestamp: string;
  preferences: ConsentPreferences;
}

interface CookieConsentContextValue {
  consent: ConsentPreferences | null;
  bannerVisible: boolean;
  preferencesOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (prefs: Pick<ConsentPreferences, 'analytics' | 'marketing'>) => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

const STORAGE_KEY = 'shaed-cookie-consent';
const CONSENT_VERSION = 1;

function readStoredConsent(): ConsentPreferences | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: StoredConsent = JSON.parse(raw);
    if (parsed.version !== CONSENT_VERSION || !parsed.preferences) return null;
    return {
      necessary: true,
      analytics: Boolean(parsed.preferences.analytics),
      marketing: Boolean(parsed.preferences.marketing),
    };
  } catch {
    return null;
  }
}

function persistConsent(preferences: ConsentPreferences) {
  const stored: StoredConsent = {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    preferences,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentPreferences | null>(readStoredConsent);
  const [bannerVisible, setBannerVisible] = useState(() => readStoredConsent() === null);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  function applyConsent(prefs: ConsentPreferences) {
    persistConsent(prefs);
    setConsent(prefs);
    setBannerVisible(false);
    setPreferencesOpen(false);
  }

  function acceptAll() {
    applyConsent({ necessary: true, analytics: true, marketing: true });
  }

  function rejectNonEssential() {
    applyConsent({ necessary: true, analytics: false, marketing: false });
  }

  function savePreferences(prefs: Pick<ConsentPreferences, 'analytics' | 'marketing'>) {
    applyConsent({ necessary: true, ...prefs });
  }

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        bannerVisible,
        preferencesOpen,
        openPreferences: () => setPreferencesOpen(true),
        closePreferences: () => setPreferencesOpen(false),
        acceptAll,
        rejectNonEssential,
        savePreferences,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error('useCookieConsent must be used within CookieConsentProvider');
  return ctx;
}
