import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  MapPin,
  ShoppingBag,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Globe2,
  Mail,
  Phone,
  MessageSquare,
  FileText,
  CreditCard,
  Truck,
  Sparkles,
  Award,
  ChevronDown,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';
import InternationalFounderForm from '../components/forms/InternationalFounderForm';
import Accordion from '../components/ui/Accordion';
import { SITE_CONFIG } from '../lib/constants';

interface InternationalFoundersPageProps {
  onNavigate: (path: string) => void;
}

export default function InternationalFoundersPage({ onNavigate }: InternationalFoundersPageProps) {
  const [activeTab, setActiveTab] = useState<'entity' | 'hq' | 'sales' | 'trust'>('entity');

  const pillars = [
    {
      id: 'entity',
      icon: Building2,
      badge: 'Pillar 01 · Legal Entity',
      title: '100% Legal Entity Incorporation & Clearances',
      summary:
        'Complete end-to-end setup of your Indian Private Limited or Wholly-Owned Subsidiary (WOS) with MCA, ROC, and RBI compliance.',
      highlights: [
        'Wholly-Owned Subsidiary (WOS) & Private Limited registration via SPICe+ MCA',
        'Digital Signature Certificates (DSC) & Director Identification Numbers (DIN)',
        'Permanent Account Number (PAN), Tax Deduction Account (TAN), and EPFO/ESIC',
        'Goods & Services Tax (GST) registration & Import-Export Code (IEC)',
        'RBI Foreign Direct Investment (FDI) clearances & Form FC-GPR filing under 100% Automatic Route',
        'Resident Indian Director provision and annual statutory corporate secretarial filings',
      ],
    },
    {
      id: 'hq',
      icon: MapPin,
      badge: 'Pillar 02 · Physical HQ',
      title: 'Official Physical Corporate Headquarters in India',
      summary:
        'Establish VoiceSpace’s operating facility in Faridabad (Delhi-NCR) as your legitimate registered corporate office in India.',
      highlights: [
        'Official registered office address for government records, MCA filings, and tax registrations',
        'Physical facility at 3373, Sector 56, Faridabad, Haryana, India 121004',
        'Executive boardrooms and meeting spaces available when visiting India for partner or client meetings',
        'Dedicated corporate mailbox, legal notices reception, and expedited courier handling',
        'On-site administrative staff and local representative desks for institutional inquiries',
        'Physical compliance verification support during bank and regulatory on-site audits',
      ],
    },
    {
      id: 'sales',
      icon: ShoppingBag,
      badge: 'Pillar 03 · Commerce & UPI',
      title: 'Product Sales Launch & Native Indian Payment Rails',
      summary:
        'Launch your products on Amazon India, Flipkart, ONDC, and your own D2C storefront with localized UPI payment gateways.',
      highlights: [
        'Expedited seller registration and brand store onboarding on Amazon.in and Flipkart',
        'Open Network for Digital Commerce (ONDC) network integration for national discoverability',
        'Custom Shopify / WooCommerce D2C storefront with Indian domain (.in) and geo-optimized speeds',
        'Native Unified Payments Interface (UPI) integration: PhonePe, Google Pay, Paytm, CRED & BHIM',
        'Domestic Cash on Delivery (COD) processing with automated fraud checks and OTP verification',
        'Domestic warehousing coordination, customs clearance (CHA), and last-mile logistics (Delhivery, BlueDart)',
      ],
    },
    {
      id: 'trust',
      icon: ShieldCheck,
      badge: 'Pillar 04 · Trust & Support',
      title: 'The Indian Consumer Trust Engine',
      summary:
        'Overcome buyer hesitation by providing authentic local Indian customer service, domestic warranty, and local return processing.',
      highlights: [
        'Dedicated domestic Indian toll-free or +91 landline/mobile customer service desk',
        'Official Green-Badge WhatsApp Business API desk for instant Indian buyer support',
        'Native Hindi, English, and regional Indian language support specialists',
        'Domestic Return Merchandise Authorization (RMA) center for product inspections and returns',
        'Local warranty claim management, replacement dispatch, and product repair logistics',
        'Proactive trust badges on product listings: "Official Indian Entity", "Domestic Warranty", "Local Support"',
      ],
    },
  ];

  const roadmapSteps = [
    {
      phase: 'Phase 01',
      days: 'Days 1–7',
      title: 'Entity Structure & Approvals',
      desc: 'Name availability clearance (RUN/SPICe+ Part A), Director KYC, Class 3 DSC tokens, and drafting of MoA & AoA.',
    },
    {
      phase: 'Phase 02',
      days: 'Days 8–16',
      title: 'Incorporation & Banking',
      desc: 'SPICe+ MCA filing, Certificate of Incorporation (CoI) issuance, corporate PAN/TAN, and Indian commercial bank account opening.',
    },
    {
      phase: 'Phase 03',
      days: 'Days 17–24',
      title: 'Tax, IEC & FDI Clearances',
      desc: 'State GST registration, Directorate General of Foreign Trade (DGFT) IEC license, and RBI FIRMS FDI compliance (FC-GPR).',
    },
    {
      phase: 'Phase 04',
      days: 'Days 25–35',
      title: 'HQ Setup, Marketplaces & +91 Desk',
      desc: 'Head office address activation, Amazon.in/Flipkart seller verification, Razorpay/UPI gateway integration, and native support live.',
    },
  ];

  const faqs = [
    {
      question: 'Can an overseas founder or foreign company own 100% of an Indian company?',
      answer:
        'Yes. Under India’s Foreign Direct Investment (FDI) policy, 100% foreign equity ownership is permitted under the Automatic Route for the vast majority of sectors, including IT software, e-commerce marketplace platforms, manufacturing, consulting, consumer goods trading (wholesale/single-brand retail), and customer support services. No prior government approval is required; only standard post-investment reporting to the Reserve Bank of India (RBI) via Form FC-GPR.',
    },
    {
      question: 'How does VoiceSpace act as our official Head Office in India?',
      answer:
        'VoiceSpace provides our state-of-the-art operating facility at 3373, Sector 56, Faridabad, Haryana (Delhi-NCR) as your legally registered office address with the Ministry of Corporate Affairs (MCA), tax departments, and commercial banks. We receive and forward all official legal notices and physical correspondence, provide conference facilities for in-person meetings when you travel to India, and supply resident director support where needed.',
    },
    {
      question: 'How do Indian consumers pay for our products, and why is UPI critical?',
      answer:
        'Over 80% of Indian online retail transactions are conducted through Unified Payments Interface (UPI) apps like PhonePe, Google Pay, and Paytm, or via domestic Cash on Delivery (COD). International credit cards frequently fail in India due to Reserve Bank of India 2-factor authentication mandates. We set up an Indian merchant gateway (Razorpay / Cashfree) connected to your Indian entity bank account, allowing Indian consumers to pay smoothly with zero checkout drop-off.',
    },
    {
      question: 'Why is domestic customer support essential for building trust in India?',
      answer:
        'Indian consumers are cautious about purchasing from unknown foreign websites due to fears of customs delays, counterfeit goods, or inability to return products. Having a domestic +91 phone number, a verified WhatsApp Business desk, native Hindi/English speaking customer agents, and a local Delhi-NCR returns address instantly validates your brand authenticity, multiplying conversion rates and virtually eliminating chargebacks.',
    },
    {
      question: 'What happens after I submit the intake form on this page?',
      answer:
        'All submissions are automatically formatted and transmitted directly to contact@voicespace.in. Our India expansion directorship reviews your product brief, corporate structure, and timeline, and responds within 24 hours with a comprehensive roadmap, transparent fee schedule, and mutual Non-Disclosure Agreement (NDA).',
    },
  ];

  return (
    <div className="space-y-24 py-10 sm:py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-[#0B132B] border border-navy-700/80 p-8 sm:p-14 lg:p-18 text-white shadow-2xl overflow-hidden">
          {/* Subtle Glow Accents */}
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-brand-blue/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-7">
            {/* Country / Target Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-xs font-bold text-amber-300 uppercase tracking-wider">
              <span>🇮🇳 For International Founders, Overseas Brands & Global Enterprises</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              Launch Your Business in India. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-200 to-indigo-300">
                We Become Your Local Head Office & Trust Engine.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              India is the world’s fastest-growing $3.8T consumer market with 1.4B+ citizens. But selling overseas without local entity presence or domestic customer support leads to customs rejections, payment failures, and consumer distrust. VoiceSpace provides complete legal incorporation, gives you an official Delhi-NCR corporate headquarters, launches your products on Amazon & Flipkart, and deploys native +91 and WhatsApp support desks to win Indian buyers.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/15">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <p className="text-2xl sm:text-3xl font-extrabold text-brand-cyan">100% FDI</p>
                <p className="text-xs text-slate-400 mt-1">Automatic Route Approval</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">Delhi-NCR</p>
                <p className="text-xs text-slate-400 mt-1">Physical Corporate HQ Address</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">UPI + COD</p>
                <p className="text-xs text-slate-400 mt-1">Native Indian Payment Rails</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-300">+91 Phone</p>
                <p className="text-xs text-slate-400 mt-1">Native Customer Support Desks</p>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href="#intake-form"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold bg-brand-cyan text-navy-950 hover:bg-cyan-300 transition-all shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
              >
                <span>Submit India Entry Application</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="https://wa.me/919289590900?text=Hi%20VoiceSpace,%20I%20am%20an%20international%20founder/brand%20interested%20in%20launching%20my%20business%20in%20India%20and%20establishing%20a%20local%20head%20office."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Consult on WhatsApp (+91 9289590900)</span>
              </a>
              <a
                href="mailto:contact@voicespace.in?subject=India%20Business%20Entry%20Consultation%20Request"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Email contact@voicespace.in</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Strategic Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue dark:text-brand-cyan uppercase tracking-wider">
            <span>Comprehensive Turnkey Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white">
            Everything You Need to Succeed in India Under One Roof
          </h2>
          <p className="text-slate-body dark:text-slate-300 text-base leading-relaxed">
            We solve the four fatal challenges foreign brands face: regulatory red tape, lack of a physical presence, unfamiliar domestic payment methods, and consumer trust hesitation.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-surface-alt dark:bg-[#0D1527] rounded-2xl border border-slate-line dark:border-slate-800 max-w-3xl mx-auto">
          {pillars.map((p) => {
            const IconComp = p.icon;
            const active = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  active
                    ? 'bg-white dark:bg-slate-800 text-navy-900 dark:text-white shadow-md border border-slate-line/80 dark:border-slate-700'
                    : 'text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white'
                }`}
              >
                <IconComp className="w-4 h-4 text-brand-blue dark:text-brand-cyan" />
                <span>{p.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Showcase */}
        {pillars
          .filter((p) => p.id === activeTab)
          .map((p) => {
            const IconComp = p.icon;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 shadow-xl space-y-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-line/80 dark:border-slate-800 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center shrink-0">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-blue dark:text-brand-cyan">
                        {p.badge}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                  <a
                    href="#intake-form"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue text-white text-xs font-bold hover:bg-blue-600 transition-colors shadow-xs shrink-0"
                  >
                    <span>Request Scoping Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-base text-slate-body dark:text-slate-300 leading-relaxed">
                  {p.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {p.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-surface-alt/60 dark:bg-slate-900/60 border border-slate-line/60 dark:border-slate-800 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-navy-900 dark:text-slate-200 leading-relaxed">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
      </section>

      {/* 30-Day Launch Timeline */}
      <section className="bg-surface-alt dark:bg-[#0D1527] py-20 border-y border-slate-line dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white">
              Accelerated 30-Day Indian Launch Timeline
            </h2>
            <p className="text-slate-body dark:text-slate-300 text-sm">
              From initial name clearance to official Amazon.in listing and active customer service desk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#111C33] border border-slate-line dark:border-slate-800 shadow-xs space-y-3 hover-lift flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue dark:text-brand-cyan">
                      {step.phase}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                      {step.days}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-navy-900 dark:text-white">{step.title}</h3>
                  <p className="text-xs text-slate-body dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-line/50 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Milestone</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: Entering Alone vs. VoiceSpace Head Office Partner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-navy-900 dark:text-white">
            Entering India Alone vs. Partnering with VoiceSpace
          </h2>
          <p className="text-slate-body dark:text-slate-300 text-sm">
            Save months of bureaucratic dead-ends, avoid costly penalties, and establish instant credibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Way */}
          <div className="p-8 rounded-3xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 space-y-4">
            <h3 className="text-lg font-bold text-rose-900 dark:text-rose-300 flex items-center gap-2">
              <span>Entering Without Local Infrastructure</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-rose-900/90 dark:text-rose-200/90">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span>Overseas credit card processing fails due to RBI 2-factor authentication rules.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span>No local entity prevents selling directly on Amazon India or Flipkart.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span>Indian buyers hesitate to buy without a local +91 phone number or WhatsApp desk.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span>Customer returns must be shipped overseas at prohibitive international shipping costs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span>Managing unvetted Indian local agents leads to non-compliance fines and delays.</span>
              </li>
            </ul>
          </div>

          {/* VoiceSpace Way */}
          <div className="p-8 rounded-3xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-300 dark:border-emerald-800/80 space-y-4">
            <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
              <span>The VoiceSpace Registered Head Office Model</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-emerald-900/90 dark:text-emerald-200/90">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>100% legal entity, PAN, TAN, GST, and domestic commercial bank account.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Official registered office address at our physical Faridabad (Delhi-NCR) facility.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Seamless native UPI checkout (PhonePe, GPay, Paytm) and Cash on Delivery.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Dedicated +91 customer desk and verified WhatsApp Business building buyer trust.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Domestic RMA warehouse for product inspections, returns, and replacement warranty.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Physical Operating Facility Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#111C33] border border-slate-line dark:border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue dark:text-brand-cyan uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Official Physical Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white">
              Your Registered Headquarters in Delhi-NCR
            </h2>
            <p className="text-sm sm:text-base text-slate-body dark:text-slate-300 leading-relaxed">
              When your company registers in India with VoiceSpace, your business receives a genuine physical operational address—not a PO Box or disposable virtual mailbox.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-2">
              <p className="font-semibold text-navy-900 dark:text-white">
                📍 {SITE_CONFIG.legalName} Operating Facility
              </p>
              <p>{SITE_CONFIG.address.street}</p>
              <p>
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}, {SITE_CONFIG.address.country} – {SITE_CONFIG.address.pincode}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="tel:+919289590900"
                  className="font-semibold text-brand-blue dark:text-brand-cyan hover:underline inline-flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 9289590900</span>
                </a>
                <a
                  href="mailto:contact@voicespace.in"
                  className="font-semibold text-brand-blue dark:text-brand-cyan hover:underline inline-flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>contact@voicespace.in</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface-alt dark:bg-slate-900 p-6 rounded-2xl border border-slate-line/80 dark:border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-brand-blue/10 text-brand-blue dark:text-brand-cyan">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-navy-900 dark:text-white">
                  Corporate Facility Amenities
                </p>
                <p className="text-xs text-slate-400">Available to international client companies</p>
              </div>
            </div>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Executive conference rooms for in-person meetings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Courier, tax, and legal notice logging with scanned copies</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>High-speed optical fiber and on-site operational support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Strategic proximity to New Delhi & IGI International Airport</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Intake Form Section (ID for Anchor Navigation) */}
      <section id="intake-form" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan text-xs font-bold uppercase tracking-wider">
            <span>Official Application Dossier</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white">
            Apply for India Business Entry & Head Office
          </h2>
          <p className="text-slate-body dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Please submit your company profile and India objectives below. Once submitted, your application data will be automatically compiled and dispatched directly to <strong className="text-brand-blue dark:text-brand-cyan">contact@voicespace.in</strong> for immediate review by our expansion directors.
          </p>
        </div>

        {/* The Specialized Form Component */}
        <InternationalFounderForm />
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-navy-900 dark:text-white">
            Frequently Asked Questions for Global Founders
          </h2>
          <p className="text-slate-body dark:text-slate-400 text-sm">
            Regulatory, operational, and commercial insights for entering the Indian market.
          </p>
        </div>
        <Accordion items={faqs} />
      </section>
    </div>
  );
}
