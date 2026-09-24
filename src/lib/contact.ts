// Destination for the contact form and newsletter signup.
export const CONTACT_EMAIL = 'support@shaed.ai';

export function openMailto(subject: string, body: string) {
  const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
}
