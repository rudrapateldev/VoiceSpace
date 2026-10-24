import { useState } from 'react';
import { SERVICES_LIST } from '../../lib/constants';
import { validateQuoteForm } from '../../lib/validations';
import { QuoteFormData } from '../../types';
import { Loader2, CheckCircle2, AlertCircle, FileText, Printer, ArrowRight } from 'lucide-react';

interface QuoteFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

export default function QuoteForm({ initialService }: QuoteFormProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    service: initialService || SERVICES_LIST[0].title,
    projectScope: '',
    budgetRange: '$5,000 – $15,000',
    timeline: 'Within 1–2 months',
    engagementModel: 'Project-Based',
    teamSize: '1–3 specialists',
    coverageHours: 'Standard Business Hours (8/5)',
    consentGiven: false,
  });

  const [loading, setLoading] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState<{
    referenceNumber: string;
    submittedAt: string;
    data: QuoteFormData;
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
    if (errors.length > 0) setErrors([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateQuoteForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setLoading(true);
    setErrors([]);

    setTimeout(() => {
      const refNumber = `QUOTE-${Math.floor(100000 + Math.random() * 900000)}`;
      const timestamp = new Date().toLocaleString();

      try {
        const stored = JSON.parse(localStorage.getItem('voicespace_quotes') || '[]');
        stored.unshift({
          ...formData,
          referenceNumber: refNumber,
          submittedAt: timestamp,
        });
        localStorage.setItem('voicespace_quotes', JSON.stringify(stored));
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }

      setSubmittedQuote({
        referenceNumber: refNumber,
        submittedAt: timestamp,
        data: { ...formData },
      });
      setLoading(false);
    }, 750);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {submittedQuote ? (
        <div className="bg-white border border-slate-line rounded-2xl p-8 sm:p-12 shadow-sm space-y-6">
          <div className="flex items-center gap-3 text-emerald-600">
            <CheckCircle2 className="w-8 h-8 shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-navy-900">Proposal Request Verified</h3>
              <p className="text-xs text-slate-body">Reference: {submittedQuote.referenceNumber} · {submittedQuote.submittedAt}</p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-surface-alt border border-slate-line/80 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-navy-900">
              Quotation Summary
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block">Contact Name</span>
                <span className="font-semibold text-navy-900">{submittedQuote.data.fullName}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Corporate Email</span>
                <span className="font-semibold text-navy-900">{submittedQuote.data.email}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Target Service</span>
                <span className="font-semibold text-brand-blue">{submittedQuote.data.service}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Engagement Model</span>
                <span className="font-semibold text-navy-900">{submittedQuote.data.engagementModel}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Estimated Timeline</span>
                <span className="font-semibold text-navy-900">{submittedQuote.data.timeline}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Planned Budget Bracket</span>
                <span className="font-semibold text-navy-900">{submittedQuote.data.budgetRange}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-line text-xs">
              <span className="text-slate-400 block mb-1">Scope Description</span>
              <p className="text-navy-900 leading-relaxed bg-white p-3 rounded-lg border border-slate-line">
                {submittedQuote.data.projectScope}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2 no-print">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-line text-xs font-semibold text-navy-900 hover:bg-surface-alt transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save Proposal Slip</span>
            </button>
            <button
              onClick={() => setSubmittedQuote(null)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue text-xs font-semibold text-white hover:bg-blue-600 transition-colors cursor-pointer"
            >
              <span>Submit Another Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-slate-line rounded-2xl p-6 sm:p-10 shadow-xs space-y-6"
        >
          {errors.length > 0 && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs space-y-1">
              <div className="flex items-center gap-2 font-semibold">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Please complete the required specifications:</span>
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
              <label htmlFor="quoteFullName" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                Your Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="quoteFullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Alex Smith"
                className="w-full px-4 py-3 rounded-xl border border-slate-line bg-surface-alt/40 text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm transition-all"
              />
            </div>

            <div>
              <label htmlFor="quoteEmail" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                Work Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="quoteEmail"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@enterprise.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-line bg-surface-alt/40 text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm transition-all"
              />
            </div>

            <div>
              <label htmlFor="quoteCompany" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                Organization / Company
              </label>
              <input
                id="quoteCompany"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Acme Global Inc."
                className="w-full px-4 py-3 rounded-xl border border-slate-line bg-surface-alt/40 text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm transition-all"
              />
            </div>

            <div>
              <label htmlFor="quotePhone" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                Phone Number
              </label>
              <input
                id="quotePhone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 012-3456"
                className="w-full px-4 py-3 rounded-xl border border-slate-line bg-surface-alt/40 text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label htmlFor="quoteServiceSelect" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                Primary Service <span className="text-rose-500">*</span>
              </label>
              <select
                id="quoteServiceSelect"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-line bg-surface-alt/40 text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm cursor-pointer"
              >
                {SERVICES_LIST.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="quoteEngagementSelect" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                Engagement Model
              </label>
              <select
                id="quoteEngagementSelect"
                name="engagementModel"
                value={formData.engagementModel}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-line bg-surface-alt/40 text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm cursor-pointer"
              >
                <option value="Project-Based">Project-Based Delivery</option>
                <option value="Dedicated Team">Dedicated Remote Team</option>
                <option value="Ongoing Managed Services">Managed Services (Retainer)</option>
              </select>
            </div>

            <div>
              <label htmlFor="quoteTimelineSelect" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                Target Timeline
              </label>
              <select
                id="quoteTimelineSelect"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-line bg-surface-alt/40 text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm cursor-pointer"
              >
                <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
                <option value="Within 1–2 months">Within 1–2 months</option>
                <option value="Within 3–6 months">Within 3–6 months</option>
                <option value="Long-Term / Planning">Long-Term / Planning</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="quoteBudgetSelect" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                Estimated Budget Bracket
              </label>
              <select
                id="quoteBudgetSelect"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-line bg-surface-alt/40 text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm cursor-pointer"
              >
                <option value="< $5,000">&lt; $5,000 (Small sprint / pilot)</option>
                <option value="$5,000 – $15,000">$5,000 – $15,000 (Standard MVP / project)</option>
                <option value="$15,000 – $35,000">$15,000 – $35,000 (Multi-month architecture)</option>
                <option value="$35,000+">$35,000+ (Enterprise scale / full team)</option>
                <option value="Flexible / Needs Guidance">Flexible / Seeking Guidance</option>
              </select>
            </div>

            <div>
              <label htmlFor="quoteCoverageSelect" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                Coverage / Operating Hours
              </label>
              <select
                id="quoteCoverageSelect"
                name="coverageHours"
                value={formData.coverageHours}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-line bg-surface-alt/40 text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm cursor-pointer"
              >
                <option value="Standard Business Hours (8/5)">Standard Business Hours (8/5)</option>
                <option value="Extended Coverage (16/6)">Extended Shifts (16/6)</option>
                <option value="Round-the-Clock (24/7/365)">Round-the-Clock (24/7/365)</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="quoteScopeText" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
              Project Scope & Requirements <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="quoteScopeText"
              name="projectScope"
              required
              rows={4}
              value={formData.projectScope}
              onChange={handleChange}
              placeholder="Please describe technical specifications, business goals, team size expectations, or current bottlenecks..."
              className="w-full px-4 py-3 rounded-xl border border-slate-line bg-surface-alt/40 text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm transition-all"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              id="quoteConsentCheck"
              name="consentGiven"
              type="checkbox"
              checked={formData.consentGiven}
              onChange={handleChange}
              className="h-4 w-4 mt-0.5 rounded border-slate-line text-brand-blue focus:ring-brand-blue cursor-pointer"
            />
            <label htmlFor="quoteConsentCheck" className="text-xs text-slate-body leading-normal cursor-pointer">
              I understand this estimate is subject to formal statement of work validation and agree to VoiceSpace's Privacy Policy.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold bg-navy-900 text-white hover:bg-navy-800 transition-colors flex items-center justify-center cursor-pointer disabled:opacity-50 shadow-xs"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Calculating Proposal Scope...
              </>
            ) : (
              'Submit Scope for Formal Proposal'
            )}
          </button>
        </form>
      )}
    </div>
  );
}
