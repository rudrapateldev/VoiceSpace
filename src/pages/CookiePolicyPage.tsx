import { SITE_CONFIG } from '../lib/constants';

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-slate-body">
      <div>
        <div className="text-xs font-bold text-brand-blue uppercase tracking-wider mb-2">
          Legal & Compliance
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900">Cookie Policy</h1>
        <p className="text-xs text-slate-400 mt-1">Last Updated: October 2026</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-navy-900">1. What Are Cookies</h2>
        <p className="text-sm leading-relaxed">
          Cookies are small text files stored on your device that allow web applications to maintain session state, security, and responsive preferences.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-navy-900">2. How VoiceSpace Uses Cookies</h2>
        <p className="text-sm leading-relaxed">
          VoiceSpace uses strictly essential cookies and local storage tokens to preserve form data during your session, remember your quote configurations, and maintain security tokens. We do not deploy invasive third-party cross-site trackers.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-navy-900">3. Managing Preferences</h2>
        <p className="text-sm leading-relaxed">
          You may configure your browser to reject cookies or notify you when a cookie is placed. Note that disabling essential cookies may affect form persistence.
        </p>
      </section>
    </div>
  );
}
