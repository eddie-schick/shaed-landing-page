import TermsSections1to3 from './TermsSections1to3';
import TermsSections4to6 from './TermsSections4to6';
import TermsSections7to9 from './TermsSections7to9';
import TermsSections10to13 from './TermsSections10to13';
import TermsScheduleA from './TermsScheduleA';

export default function TermsContent() {
  return (
    <div className="legal-content">
      <section id="intro">
        <p>
          These Platform Terms and Conditions (these "Terms and Conditions" or "GTCs") are
          incorporated by reference into all order forms (each an "Order Form") entered into
          between SHAED, INC., a Delaware corporation with offices located at One TeamQuest
          Way, Clear Lake, Iowa 50428 ("SHAED") and the party named in the Order Form
          ("Customer" or "Platform Participant"). These Terms and Conditions and the Order Form
          executed by SHAED and Customer constitute a binding agreement and together are
          collectively referred to as the "Agreement". Capitalized terms used but not defined
          herein have the meanings set forth in Schedule A (Definitions) attached hereto.
        </p>
      </section>

      <TermsSections1to3 />
      <TermsSections4to6 />
      <TermsSections7to9 />
      <TermsSections10to13 />
      <TermsScheduleA />

      <p className="text-center text-sm text-gray-400 mt-12 pt-8 border-t border-gray-100">
        [End of Terms and Conditions] — Version 2.0 — Effective February 2026
      </p>
    </div>
  );
}
