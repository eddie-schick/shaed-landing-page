import LegalPageLayout from '../components/LegalPageLayout';
import TermsContent from '../components/legal/TermsContent';
import { termsSections } from '../components/legal/termsSections';

export default function TermsAndConditions() {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      subtitle="Version 2.0 — Effective February 2026"
      pdfPath="/SHAED_Platform_Terms_and_Conditions.pdf"
      sections={termsSections}
    >
      <TermsContent />
    </LegalPageLayout>
  );
}
