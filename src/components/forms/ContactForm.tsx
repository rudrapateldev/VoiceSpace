import { useState } from 'react';
import { SERVICES_LIST } from '../../lib/constants';
import { validateContactForm } from '../../lib/validations';
import { ContactFormData } from '../../types';
import { Loader2, CheckCircle2, AlertCircle, Copy, Check, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    country: '',
    service: SERVICES_LIST[0].title,
    preferredContact: 'email',
    message: '',
    consentGiven: false,
  });

  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submissionTicket, setSubmissionTicket] = useState<{
    id: string;
    timestamp: string;
  } | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    // clear field errors on edit
    if (errors.length > 0) setErrors([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setLoading(true);
    setErrors([]);

    // Simulate realistic processing time and persist inquiry in localStorage
    setTimeout(() => {
      const ticketId = `VS-${Math.floor(100000 + Math.random() * 900000)}`;
      const timestamp = new Date().toLocaleString();

      try {
        const stored = JSON.parse(localStorage.getItem('voicespace_inquiries') || '[]');
        stored.unshift({
          ...formData,
          id: ticketId,
          submittedAt: timestamp,
          status: 'Received',
        });
        localStorage.setItem('voicespace_inquiries', JSON.stringify(stored));
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }

      setSubmissionTicket({ id: ticketId, timestamp });
      setLoading(false);
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        phone: '',
        country: '',
        service: SERVICES_LIST[0].title,
        preferredContact: 'email',
        message: '',
        consentGiven: false,
      });
    }, 700);
  };

  const handleCopyTicket = () => {
    if (submissionTicket) {
      navigator.clipboard.writeText(submissionTicket.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6 transition-colors"
    >
      {submissionTicket && (
        <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-sm space-y-2">
          <div className="flex items-center gap-2 font-semibold">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Inquiry Received Successfully</span>
          </div>
          <p className="text-emerald-800 dark:text-emerald-300 text-xs leading-relaxed">
            Thank you for contacting VoiceSpace. Our technical directors will review your scope and follow up within 24 business hours.
          </p>
          <div className="pt-2 flex items-center justify-between bg-white/80 dark:bg-slate-900/80 p-3 rounded-lg border border-emerald-200/60 dark:border-emerald-800/60">
            <span className="text-xs font-mono text-emerald-950 dark:text-emerald-300 font-bold">
              Ticket ID: {submissionTicket.id}
            </span>
            <button
              type="button"
              onClick={handleCopyTicket}
              className="inline-flex items-center gap-1 text-xs text-brand-blue dark:text-brand-cyan hover:underline cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Ticket'}</span>
            </button>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-emerald-200/60 dark:border-emerald-800/60">
            <span className="text-[11px] text-emerald-800 dark:text-emerald-400">Need immediate scoping assistance?</span>
            <a
              href={`https://wa.me/919289590900?text=${encodeURIComponent(
                `Hi VoiceSpace India team, I just submitted an inquiry on your website. Ticket ID: ${submissionTicket.id}. Looking forward to connecting!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-2xs transition-colors cursor-pointer w-fit"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {errors.length > 0 && (
        <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs space-y-1">
          <div className="flex items-center gap-2 font-semibold">
            <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
            <span>Please review the following requirements:</span>
          </div>
          <ul className="list-disc pl-5 space-y-0.5">
            {errors.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contactFullName" className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="contactFullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Jane Doe"
            className="w-full px-4 py-3 rounded-xl border border-slate-line dark:border-slate-700 bg-surface-alt/40 dark:bg-slate-800 text-navy-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm transition-all"
          />
        </div>

        <div>
          <label htmlFor="contactEmail" className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2">
            Business Email <span className="text-rose-500">*</span>
          </label>
          <input
            id="contactEmail"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-line dark:border-slate-700 bg-surface-alt/40 dark:bg-slate-800 text-navy-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm transition-all"
          />
        </div>

        <div>
          <label htmlFor="contactCompany" className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2">
            Company Name (Optional)
          </label>
          <input
            id="contactCompany"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="w-full px-4 py-3 rounded-xl border border-slate-line dark:border-slate-700 bg-surface-alt/40 dark:bg-slate-800 text-navy-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm transition-all"
          />
        </div>

        <div>
          <label htmlFor="contactPhone" className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2">
            Phone / WhatsApp (Optional)
          </label>
          <input
            id="contactPhone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 555-0199 or +91 98..."
            className="w-full px-4 py-3 rounded-xl border border-slate-line dark:border-slate-700 bg-surface-alt/40 dark:bg-slate-800 text-navy-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contactService" className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2">
            Primary Service <span className="text-rose-500">*</span>
          </label>
          <select
            id="contactService"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-line dark:border-slate-700 bg-surface-alt/40 dark:bg-slate-800 text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm cursor-pointer"
          >
            {SERVICES_LIST.map((s) => (
              <option key={s.slug} value={s.title} className="dark:bg-slate-800 dark:text-white">
                {s.title}
              </option>
            ))}
            <option value="Multi-Disciplinary / Other" className="dark:bg-slate-800 dark:text-white">Multi-Disciplinary / Custom Architecture</option>
          </select>
        </div>

        <div>
          <label htmlFor="contactPreferred" className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2">
            Preferred Contact Method
          </label>
          <select
            id="contactPreferred"
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-line dark:border-slate-700 bg-surface-alt/40 dark:bg-slate-800 text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm cursor-pointer"
          >
            <option value="email" className="dark:bg-slate-800 dark:text-white">Email Response</option>
            <option value="phone" className="dark:bg-slate-800 dark:text-white">Phone Call</option>
            <option value="whatsapp" className="dark:bg-slate-800 dark:text-white">WhatsApp Message</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contactMessage" className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2">
          Project Details & Objectives <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="contactMessage"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your technical requirements, team needs, timeline expectations, or current operational hurdles..."
          className="w-full px-4 py-3 rounded-xl border border-slate-line dark:border-slate-700 bg-surface-alt/40 dark:bg-slate-800 text-navy-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm transition-all"
        />
      </div>

      <div className="flex items-start gap-3 pt-1">
        <input
          id="contactConsent"
          name="consentGiven"
          type="checkbox"
          checked={formData.consentGiven}
          onChange={handleChange}
          className="h-4 w-4 mt-0.5 rounded border-slate-line dark:border-slate-700 text-brand-blue focus:ring-brand-blue cursor-pointer"
        />
        <label htmlFor="contactConsent" className="text-xs text-slate-body dark:text-slate-400 leading-normal cursor-pointer">
          I consent to VoiceSpace processing my information to respond to this request in accordance with the Privacy Policy.
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold bg-brand-blue hover:bg-blue-600 text-white transition-all flex items-center justify-center cursor-pointer disabled:opacity-50 shadow-md active:scale-[0.99]"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Submitting Inquiry...
          </>
        ) : (
          'Send Inquiry to VoiceSpace'
        )}
      </button>
    </form>
  );
}
