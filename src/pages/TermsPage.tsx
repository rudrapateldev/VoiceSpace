import { SITE_CONFIG } from '../lib/constants';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-slate-body dark:text-slate-300">
      <div>
        <div className="text-xs font-bold text-brand-blue dark:text-brand-cyan uppercase tracking-wider mb-2">
          Legal & Compliance
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white">Terms and Conditions</h1>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Last Updated: October 2026</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-navy-900 dark:text-white">1. Acceptance of Terms</h2>
        <p className="text-sm leading-relaxed">
          By accessing and browsing {SITE_CONFIG.url}, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of this site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-navy-900 dark:text-white">2. Professional Services Engagements</h2>
        <p className="text-sm leading-relaxed">
          The materials, descriptions, service scopes, and estimates displayed on this website are provided for informational and preliminary scoping purposes only. They do not constitute a binding unilateral contract or warranty of deliverables. All commercial engagements with {SITE_CONFIG.legalName} require a mutually executed Master Services Agreement (MSA) and Statement of Work (SOW).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-navy-900 dark:text-white">3. Intellectual Property</h2>
        <p className="text-sm leading-relaxed">
          All original website text, custom code, diagrams, trademarks, and branding assets on this website are the proprietary property of {SITE_CONFIG.legalName}. Client project work and software codebases are assigned 100% to clients as explicitly governed by their respective bilateral contracts.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-navy-900 dark:text-white">4. Limitation of Liability</h2>
        <p className="text-sm leading-relaxed">
          In no event will VoiceSpace be liable for any indirect, incidental, or consequential damages resulting from the use of or inability to use this website.
        </p>
      </section>
    </div>
  );
}
