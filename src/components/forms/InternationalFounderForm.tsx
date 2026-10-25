import { useState } from 'react';
import {
  Building2,
  Mail,
  Phone,
  Globe2,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  MessageSquare,
  Printer,
  ArrowRight,
  ShieldCheck,
  Check,
  Copy,
  ExternalLink,
} from 'lucide-react';

export interface InternationalLeadData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  country: string;
  businessCategory: string;
  objectives: string[];
  timeline: string;
  budgetBracket: string;
  productDescription: string;
  consentGiven: boolean;
}

const OBJECTIVE_OPTIONS = [
  'Legal Entity Incorporation (Pvt Ltd / WOS / MCA / ROC)',
  'Official Physical Corporate Head Office in Delhi-NCR (Faridabad facility)',
  'Product Sales Launch on Amazon India, Flipkart, ONDC & D2C',
  'Native Payment Rails (UPI: Google Pay, PhonePe, Paytm, Razorpay & COD)',
  'Local Indian Customer Support Desk (+91 Phone & WhatsApp)',
  'Domestic Returns, Warranty & RMA Fulfillment in India',
  'Resident Indian Director & Annual Regulatory Compliance',
];

const BUSINESS_CATEGORIES = [
  'Physical Consumer Products & E-Commerce',
  'Software, SaaS & Digital Platforms',
  'Consumer Electronics & Hardware',
  'D2C Fashion, Apparel & Lifestyle',
  'Health, Wellness & Beauty',
  'Industrial Equipment & Manufacturing',
  'Consulting & Professional Services',
  'Other / Multi-Category',
];

const TIMELINE_OPTIONS = [
  'Immediate (Within 30 Days)',
  'Near Term (1–3 Months)',
  'Medium Term (3–6 Months)',
  'Exploratory / Planning Stage',
];

const BUDGET_OPTIONS = [
  '$5,000 – $15,000 (Initial Setup & Incorporation)',
  '$15,000 – $30,000 (Entity + Physical HQ + Launch)',
  '$30,000 – $60,000 (Full-Scale India Market Operations)',
  '$60,000+ (Enterprise Multi-City Expansion)',
];

export default function InternationalFounderForm() {
  const [formData, setFormData] = useState<InternationalLeadData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    country: '',
    businessCategory: BUSINESS_CATEGORIES[0],
    objectives: [
      'Legal Entity Incorporation (Pvt Ltd / WOS / MCA / ROC)',
      'Official Physical Corporate Head Office in Delhi-NCR (Faridabad facility)',
      'Local Indian Customer Support Desk (+91 Phone & WhatsApp)',
    ],
    timeline: TIMELINE_OPTIONS[0],
    budgetBracket: BUDGET_OPTIONS[1],
    productDescription: '',
    consentGiven: false,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<{
    referenceId: string;
    submittedAt: string;
    data: InternationalLeadData;
  } | null>(null);

  const toggleObjective = (item: string) => {
    setFormData((prev) => {
      const exists = prev.objectives.includes(item);
      const updated = exists
        ? prev.objectives.filter((o) => o !== item)
        : [...prev.objectives, item];
      return { ...prev, objectives: updated };
    });
  };

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

  const generateEmailBody = (leadId: string, timestamp: string, data: InternationalLeadData) => {
    return `NEW INTERNATIONAL FOUNDER / BRAND APPLICATION FOR INDIA ENTRY
----------------------------------------------------------------------
Reference ID: ${leadId}
Submission Date: ${timestamp}
Sent to: contact@voicespace.in

FOUNDER & COMPANY DETAILS:
- Full Name: ${data.fullName}
- Business Email: ${data.email}
- Phone / WhatsApp: ${data.phone}
- Company / Brand Name: ${data.companyName}
- Country of Origin / HQ: ${data.country}
- Business Category: ${data.businessCategory}

INDIA SETUP OBJECTIVES:
${data.objectives.map((o) => `  * ${o}`).join('\n')}

TIMELINE & BUDGET:
- Target Launch Timeline: ${data.timeline}
- Estimated Budget Bracket: ${data.budgetBracket}

PRODUCT / EXPANSION BRIEF:
${data.productDescription}

----------------------------------------------------------------------
Applicant Consent Given: Yes
VoiceSpace India Head Office Operating Facility:
3373, Sector 56, Faridabad, Haryana, India 121004
Hotlines: +91 9289590900 / +91 9452508443
Email: contact@voicespace.in`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];

    if (!formData.fullName.trim()) newErrors.push('Founder / Contact Name is required.');
    if (!formData.email.trim() || !formData.email.includes('@'))
      newErrors.push('A valid business email is required.');
    if (!formData.phone.trim()) newErrors.push('Contact phone / WhatsApp number is required.');
    if (!formData.companyName.trim()) newErrors.push('Company or Brand name is required.');
    if (!formData.country.trim()) newErrors.push('Country of origin / HQ is required.');
    if (formData.objectives.length === 0)
      newErrors.push('Please select at least one India setup objective.');
    if (!formData.productDescription.trim())
      newErrors.push('Please provide a brief description of your product and goals in India.');
    if (!formData.consentGiven)
      newErrors.push('You must confirm consent to receive our India setup consultation proposal.');

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors([]);

    setTimeout(() => {
      const refId = `IN-LEAD-${Math.floor(100000 + Math.random() * 900000)}`;
      const timestamp = new Date().toLocaleString();

      // Persist in localStorage so data is securely preserved
      try {
        const stored = JSON.parse(
          localStorage.getItem('voicespace_international_leads') || '[]'
        );
        stored.unshift({
          referenceId: refId,
          submittedAt: timestamp,
          recipient: 'contact@voicespace.in',
          data: formData,
        });
        localStorage.setItem('voicespace_international_leads', JSON.stringify(stored));
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }

      setSubmittedLead({
        referenceId: refId,
        submittedAt: timestamp,
        data: { ...formData },
      });
      setLoading(false);
    }, 700);
  };

  const handleCopySummary = () => {
    if (!submittedLead) return;
    const text = generateEmailBody(
      submittedLead.referenceId,
      submittedLead.submittedAt,
      submittedLead.data
    );
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full">
      {submittedLead ? (
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0F172A] border-2 border-emerald-500/40 shadow-xl space-y-6">
          {/* Header Banner */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <span>Application Routed to contact@voicespace.in</span>
              </div>
              <h3 className="text-2xl font-extrabold text-navy-900 dark:text-white">
                Application Received Successfully!
              </h3>
              <p className="text-sm text-slate-body dark:text-slate-300">
                Your India Business Entry & Head Office dossier has been generated and dispatched to our global expansion leadership at <strong className="text-brand-blue dark:text-brand-cyan">contact@voicespace.in</strong>.
              </p>
            </div>
          </div>

          {/* Reference Card */}
          <div className="p-5 rounded-2xl bg-surface-alt/70 dark:bg-slate-900/90 border border-slate-line dark:border-slate-800 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-line/60 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[11px] uppercase font-bold text-slate-400 block">
                  Application Reference ID
                </span>
                <span className="text-lg font-mono font-extrabold text-navy-900 dark:text-brand-cyan">
                  {submittedLead.referenceId}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[11px] uppercase font-bold text-slate-400 block">
                  Official Recipient Desk
                </span>
                <span className="text-sm font-semibold text-brand-blue dark:text-brand-cyan">
                  contact@voicespace.in
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block">Founder / Applicant:</span>
                <span className="font-semibold text-navy-900 dark:text-slate-200">
                  {submittedLead.data.fullName}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Company / Brand:</span>
                <span className="font-semibold text-navy-900 dark:text-slate-200">
                  {submittedLead.data.companyName} ({submittedLead.data.country})
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Target Timeline:</span>
                <span className="font-semibold text-navy-900 dark:text-slate-200">
                  {submittedLead.data.timeline}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Work Email:</span>
                <span className="font-semibold text-navy-900 dark:text-slate-200">
                  {submittedLead.data.email}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Phone / WhatsApp:</span>
                <span className="font-semibold text-navy-900 dark:text-slate-200">
                  {submittedLead.data.phone}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Estimated Budget Bracket:</span>
                <span className="font-semibold text-navy-900 dark:text-slate-200">
                  {submittedLead.data.budgetBracket}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-line/60 dark:border-slate-800 text-xs">
              <span className="text-slate-400 block mb-1 font-bold">Selected India Objectives:</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-4 list-disc text-slate-700 dark:text-slate-300">
                {submittedLead.data.objectives.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-slate-line/60 dark:border-slate-800 text-xs">
              <span className="text-slate-400 block mb-1 font-bold">Product & India Goal Summary:</span>
              <p className="text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-line/60 dark:border-slate-700 whitespace-pre-line leading-relaxed">
                {submittedLead.data.productDescription}
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Direct Mailto to contact@voicespace.in */}
            <a
              href={`mailto:contact@voicespace.in?subject=${encodeURIComponent(
                `India Entry Application: ${submittedLead.data.companyName} (${submittedLead.referenceId})`
              )}&body=${encodeURIComponent(
                generateEmailBody(
                  submittedLead.referenceId,
                  submittedLead.submittedAt,
                  submittedLead.data
                )
              )}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-blue hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Open in Email Client to contact@voicespace.in</span>
            </a>

            {/* Gmail Web Shortcut */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=contact@voicespace.in&su=${encodeURIComponent(
                `India Entry Application: ${submittedLead.data.companyName} (${submittedLead.referenceId})`
              )}&body=${encodeURIComponent(
                generateEmailBody(
                  submittedLead.referenceId,
                  submittedLead.submittedAt,
                  submittedLead.data
                )
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Send via Gmail Web</span>
            </a>

            {/* WhatsApp Direct Forward */}
            <a
              href={`https://wa.me/919289590900?text=${encodeURIComponent(
                `Hello VoiceSpace India Expansion team, I submitted an India Entry & Head Office application (Ref: ${submittedLead.referenceId}) for ${submittedLead.data.companyName} from ${submittedLead.data.country}. Sent to contact@voicespace.in. Let's discuss!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss on WhatsApp (+91 9289590900)</span>
            </a>

            {/* Copy Dossier */}
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-line dark:border-slate-700 text-navy-900 dark:text-slate-200 hover:bg-surface-alt dark:hover:bg-slate-800 text-xs font-semibold transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Dossier!' : 'Copy Summary'}</span>
            </button>

            {/* Submit New */}
            <button
              onClick={() => setSubmittedLead(null)}
              className="text-xs text-brand-blue dark:text-brand-cyan hover:underline font-semibold ml-auto cursor-pointer"
            >
              Submit Another Application &rarr;
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 shadow-xl space-y-8 transition-colors"
        >
          {/* Header Info Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-line/80 dark:border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-1">
                <span>🇮🇳 Direct Intake Dossier</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
                India Market Entry & Head Office Application
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-surface-alt dark:bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-line/60 dark:border-slate-700">
              <Mail className="w-4 h-4 text-brand-blue dark:text-brand-cyan shrink-0" />
              <span>
                All inquiries automatically routed to <strong className="text-navy-900 dark:text-white">contact@voicespace.in</strong>
              </span>
            </div>
          </div>

          {errors.length > 0 && (
            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs space-y-1">
              <div className="flex items-center gap-2 font-semibold">
                <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                <span>Please complete the required details before submitting:</span>
              </div>
              <ul className="list-disc pl-5 space-y-0.5">
                {errors.map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Section 1: Founder & Brand Information */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-brand-blue text-white inline-flex items-center justify-center text-[10px]">
                1
              </span>
              <span>Founder & Company Identity</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2">
                  Founder / Lead Executive Name <span className="text-rose-500">*</span>
                </label>
                <input
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Johnathan Smith"
                  className="w-full px-4 py-3 rounded-xl border border-slate-line dark:border-slate-700 bg-surface-alt/40 dark:bg-slate-800 text-navy-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2">
                  Corporate / Work Email <span className="text-rose-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@yourbrand.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-line dark:border-slate-700 bg-surface-alt/40 dark:bg-slate-800 text-navy-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2">
                  Phone / WhatsApp (With Country Code) <span className="text-rose-500">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +1 (415) 555-0182 or +44 7911 123456"
                  className="w-full px-4 py-3 rounded-xl border border-slate-line dark:border-slate-700 bg-surface-alt/40 dark:bg-slate-800 text-navy-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2">
                  Company or Brand Name <span className="text-rose-500">*</span>
                </label>
                <input
                  name="companyName"
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Lumina Technologies Ltd"
                  className="w-full px-4 py-3 rounded-xl border border-slate-line dark:border-slate-700 bg-surface-alt/40 dark:bg-slate-800 text-navy-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2">
                  Country of Origin / Global HQ <span className="text-rose-500">*</span>
                </label>
                <input
                  name="country"
                  type="text"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g. United States, United Kingdom, Singapore, Germany"
                  className="w-full px-4 py-3 rounded-xl border border-slate-line dark:border-slate-700 bg-surface-alt/40 dark:bg-slate-800 text-navy-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2">
                  Industry / Business Category <span className="text-rose-500">*</span>
                </label>
                <select
                  name="businessCategory"
                  value={formData.businessCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-line dark:border-slate-700 bg-surface-alt/40 dark:bg-slate-800 text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm cursor-pointer"
                >
                  {BUSINESS_CATEGORIES.map((cat, i) => (
                    <option key={i} value={cat} className="dark:bg-slate-800 dark:text-white">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: India Setup Objectives (Multi-select) */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-brand-blue text-white inline-flex items-center justify-center text-[10px]">
                  2
                </span>
                <span>Services You Need In India (Select All That Apply)</span>
              </h4>
              <span className="text-[11px] text-slate-400">
                {formData.objectives.length} selected
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {OBJECTIVE_OPTIONS.map((obj, i) => {
                const checked = formData.objectives.includes(obj);
                return (
                  <label
                    key={i}
                    onClick={() => toggleObjective(obj)}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      checked
                        ? 'bg-brand-blue/10 dark:bg-brand-blue/20 border-brand-blue text-navy-900 dark:text-white shadow-xs'
                        : 'bg-surface-alt/40 dark:bg-slate-800/60 border-slate-line dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {}}
                      className="mt-0.5 rounded text-brand-blue focus:ring-brand-blue shrink-0 cursor-pointer"
                    />
                    <span className="text-xs font-medium leading-relaxed">{obj}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Section 3: Timeline & Budget Bracket */}
          <div className="space-y-4 pt-2">
            <h4 className="text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-brand-blue text-white inline-flex items-center justify-center text-[10px]">
                3
              </span>
              <span>Launch Timeline & Budget Framework</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2">
                  Target Launch Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-line dark:border-slate-700 bg-surface-alt/40 dark:bg-slate-800 text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm cursor-pointer"
                >
                  {TIMELINE_OPTIONS.map((opt, i) => (
                    <option key={i} value={opt} className="dark:bg-slate-800 dark:text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2">
                  Estimated India Investment / Budget Bracket
                </label>
                <select
                  name="budgetBracket"
                  value={formData.budgetBracket}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-line dark:border-slate-700 bg-surface-alt/40 dark:bg-slate-800 text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm cursor-pointer"
                >
                  {BUDGET_OPTIONS.map((opt, i) => (
                    <option key={i} value={opt} className="dark:bg-slate-800 dark:text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Section 4: Product Description & Goals in India */}
          <div className="space-y-3 pt-2">
            <label className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider">
              Product Overview & Objectives in the Indian Market <span className="text-rose-500">*</span>
            </label>
            <textarea
              name="productDescription"
              required
              rows={4}
              value={formData.productDescription}
              onChange={handleChange}
              placeholder="Tell us about the products or services you wish to sell in India, existing regulatory certifications (CE, FCC, FDA, BIS), intended sales channels (Amazon, Flipkart, D2C), and any questions regarding physical head office address or local customer support setup."
              className="w-full px-4 py-3 rounded-xl border border-slate-line dark:border-slate-700 bg-surface-alt/40 dark:bg-slate-800 text-navy-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm leading-relaxed transition-all"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="consentGiven"
                checked={formData.consentGiven}
                onChange={handleChange}
                className="mt-1 rounded text-brand-blue focus:ring-brand-blue cursor-pointer"
              />
              <span className="text-xs text-slate-body dark:text-slate-400 leading-relaxed">
                I authorize VoiceSpace India Private Limited to process this international expansion brief and dispatch our consultation proposal to our designated business email and to <strong>contact@voicespace.in</strong> in compliance with our Privacy Policy.
              </span>
            </label>
          </div>

          {/* Submit Button & Direct Dispatch Notice */}
          <div className="pt-4 border-t border-slate-line/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>100% Confidential · Strict Non-Disclosure Agreement Guaranteed</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold bg-brand-blue hover:bg-blue-600 text-white shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting to contact@voicespace.in...</span>
                </>
              ) : (
                <>
                  <span>Submit Application to contact@voicespace.in</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
