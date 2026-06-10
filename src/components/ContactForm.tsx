import { useState, FormEvent } from 'react';
import { Send, Check, Loader2, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useInView } from '../hooks/useInView';

const ROLES = ['Fleet Manager', 'Dealer', 'Upfitter', 'OEM', 'Other'] as const;

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const { ref, inView } = useInView(0.15);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName || !trimmedEmail) return;

    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase
      .from('contact_submissions')
      .insert({
        name: trimmedName,
        email: trimmedEmail,
        company: company.trim(),
        role,
        message: message.trim(),
      });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    } else {
      setStatus('success');
    }
  }

  function handleReset() {
    setName('');
    setEmail('');
    setCompany('');
    setRole('');
    setMessage('');
    setStatus('idle');
    setErrorMsg('');
  }

  const inputBase =
    'w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-teal/50 focus:ring-2 focus:ring-teal/20 transition-all';

  return (
    <section id="contact" className="bg-off-white dark:bg-gray-900 py-16 md:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.6s ease-out',
            }}
          >
            <p className="text-xs font-bold uppercase tracking-overline text-teal mb-3">
              Join the Network
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-headline text-gray-900 dark:text-white mb-5">
              Ready to modernize{' '}
              <span className="bg-gradient-to-r from-teal to-teal-600 gradient-text">
                your fleet operations?
              </span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
              Whether you manage a fleet, run a dealership, or build upfits, SHAED gives you one platform
              to procure, track, and document commercial vehicles.
            </p>

            <div className="space-y-5">
              {[
                { title: 'Quick onboarding', desc: 'Get set up in minutes with guided configuration.' },
                { title: 'Dedicated support', desc: 'Our team is here to help you every step of the way.' },
                { title: 'Enterprise ready', desc: 'SOC 2 compliant, Google Cloud infrastructure, 99.9% uptime.' },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateX(0)' : 'translateX(-16px)',
                    transition: `all 0.5s ease-out ${0.2 + i * 0.1}s`,
                  }}
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-3 h-3 text-teal" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{item.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.6s ease-out 0.15s',
            }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg shadow-gray-200/50 dark:shadow-black/20 p-6 md:p-8">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-5">
                    <Check className="w-7 h-7 text-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">We'll be in touch!</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-sm mx-auto">
                    Thanks for reaching out. A member of our team will follow up with you shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="text-sm font-semibold text-teal hover:text-teal-600 transition-colors"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className={inputBase}
                        disabled={status === 'loading'}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className={inputBase}
                        disabled={status === 'loading'}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Company
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company name"
                        className={inputBase}
                        disabled={status === 'loading'}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-role" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        I am a...
                      </label>
                      <select
                        id="contact-role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className={`${inputBase} ${!role ? 'text-gray-400' : ''}`}
                        disabled={status === 'loading'}
                      >
                        <option value="">Select your role</option>
                        {ROLES.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your needs..."
                      className={`${inputBase} resize-none`}
                      disabled={status === 'loading'}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-xs font-medium">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-teal hover:bg-teal-600 disabled:opacity-60 text-white py-3 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98]"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Get in Touch
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
