import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { showComingSoon } from '../lib/toast';
import FooterBar from './FooterBar';

const PLATFORM_LINKS = [
  { label: 'Shop', href: '#platform' },
  { label: 'Track', href: '#platform' },
  { label: 'Document', href: '#platform' },
];

const COMPANY_LINKS = [
  { label: 'Team', href: '#team' },
  { label: 'Vision', href: '#vision' },
  { label: 'Investors', href: null, comingSoon: true },
];

const RESOURCE_LINKS = [
  { label: 'News', href: '/news', routerLink: true },
  { label: 'Contact', href: '#contact' },
  { label: 'Terms & Conditions', href: '/terms', routerLink: true },
  { label: 'Privacy Policy', href: '/privacy', routerLink: true },
];

type LinkItem = { label: string; href: string | null; comingSoon?: boolean; routerLink?: boolean; external?: boolean };
type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email: trimmed });

    if (error) {
      if (error.code === '23505') {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg('Something went wrong. Please try again.');
      }
    } else {
      setStatus('success');
    }

    setEmail('');
  }

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-14">
          <div className="md:col-span-5 md:pr-12">
            <img
              src="/SHAEDLogo_updated.png"
              alt="SHAED"
              className="h-7 brightness-0 invert mb-5"
            />
            <p className="text-sm leading-relaxed max-w-sm mb-8">
              The smarter way to procure commercial vehicles. One platform, every stakeholder.
            </p>

            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5">
              <p className="text-sm font-semibold text-white mb-1">Stay in the loop</p>
              <p className="text-xs text-gray-500 mb-4">Get the latest updates on SHAED and the commercial vehicle industry.</p>

              {status === 'success' ? (
                <div className="flex items-center gap-2 text-teal text-sm py-2">
                  <Check className="w-4 h-4" />
                  <span>You're subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30 transition-all"
                      disabled={status === 'loading'}
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="bg-teal hover:bg-teal-600 disabled:opacity-60 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 flex-shrink-0"
                    >
                      {status === 'loading' ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {status === 'error' && (
                    <p className="text-red-500 text-xs">{errorMsg}</p>
                  )}
                </form>
              )}
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <FooterColumn title="Platform" links={PLATFORM_LINKS} />
              <FooterColumn title="Company" links={COMPANY_LINKS} />
              <FooterColumn title="Resources" links={RESOURCE_LINKS} />
            </div>
          </div>
        </div>
      </div>

      <FooterBar />
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-overline text-gray-500 mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            {l.comingSoon ? (
              <button
                onClick={() => showComingSoon(l.label)}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </button>
            ) : l.routerLink ? (
              <Link to={l.href!} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                {l.label}
              </Link>
            ) : (
              <a
                href={l.href!}
                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
