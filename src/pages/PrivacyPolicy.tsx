import LegalPageLayout from '../components/LegalPageLayout';
import PrivacyPolicyContent from '../components/legal/PrivacyPolicyContent';
import { privacySections } from '../components/legal/privacySections';

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="SHAED, Inc. — For U.S. Residents"
      pdfPath="/Shaed_Privacy_Policy.pdf"
      sections={privacySections}
    >
      <PrivacyPolicyContent />
    </LegalPageLayout>
  );
}
