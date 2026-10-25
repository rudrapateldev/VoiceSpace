import { SITE_CONFIG } from '../lib/constants';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-slate-body dark:text-slate-300">
      <div>
        <div className="text-xs font-bold text-brand-blue dark:text-brand-cyan uppercase tracking-wider mb-2">
          Legal & Compliance
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Effective Date: October 2026</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-navy-900 dark:text-white">1. Information We Collect</h2>
        <p className="text-sm leading-relaxed">
          VoiceSpace collects personal and corporate information that you provide voluntarily when submitting inquiries, quote requests, or messages through {SITE_CONFIG.url}. This includes your name, business email address, company name, telephone number, service interests, and technical project scope notes.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-navy-900 dark:text-white">2. Purpose of Data Processing</h2>
        <p className="text-sm leading-relaxed">
          We process this information strictly to respond to project inquiries, formulate technical proposals and Statements of Work (SOW), coordinate agreed services, and maintain necessary business records. We do not sell, rent, or trade your contact information to third-party data brokers.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-navy-900 dark:text-white">3. Data Security & Storage</h2>
        <p className="text-sm leading-relaxed">
          We maintain physical, technical, and operational safeguards to protect your information against unauthorized access, loss, or misuse. All communications over our website are encrypted using industry-standard Transport Layer Security (TLS 1.3).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-navy-900 dark:text-white">4. Data Retention</h2>
        <p className="text-sm leading-relaxed">
          We retain inquiry information only for the duration required to evaluate requirements and manage ongoing professional client engagements, after which data is securely archived or expunged in accordance with statutory requirements.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-navy-900 dark:text-white">5. Contact Information</h2>
        <p className="text-sm leading-relaxed">
          For any questions or privacy inquiries, please contact our data governance team at{' '}
          <a href={`mailto:${SITE_CONFIG.email}`} className="text-brand-blue dark:text-brand-cyan underline">
            {SITE_CONFIG.email}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
