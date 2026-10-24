import { Shield, Target, Users, Zap, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../lib/constants';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      title: 'Integrity',
      desc: 'We deliver clear, honest communication regarding project viability, schedules, and technical trade-offs.',
    },
    {
      title: 'Customer Focus',
      desc: 'Every solution is architected around your business outcomes rather than rigid agency templates.',
    },
    {
      title: 'Innovation',
      desc: 'We leverage modern, verified engineering standards and avoid legacy inefficiencies and technical debt.',
    },
    {
      title: 'Accountability',
      desc: 'Strict milestone governance, explicit SLAs, and transparent delivery metrics backed by QA.',
    },
    {
      title: 'Collaboration',
      desc: 'We function as an integrated extension of your internal teams, not an isolated vendor.',
    },
    {
      title: 'Continuous Improvement',
      desc: 'Iterative optimization based on real performance data and operational audits.',
    },
  ];

  return (
    <div className="space-y-20 py-12 sm:py-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue uppercase tracking-wider">
            <span>About VoiceSpace</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 leading-tight">
            Technology and Business Support Designed Around Your Goals
          </h1>
          <p className="text-lg text-slate-body leading-relaxed">
            VoiceSpace brings together technology, digital growth, customer experience, and operational support to help businesses simplify their workflows and pursue new opportunities.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface-alt py-16 border-y border-slate-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 rounded-2xl bg-white border border-slate-line space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900">Our Mission</h2>
            <p className="text-sm text-slate-body leading-relaxed">
              To empower startups, mid-market businesses, and growing enterprises with dependable digital infrastructure, high-caliber software engineering, and compliant operational workforce solutions.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-slate-line space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900">Our Vision</h2>
            <p className="text-sm text-slate-body leading-relaxed">
              To be a trusted international business partner recognized for technical craftsmanship, transparent operational standards, and shared success.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-navy-900">Our Core Values</h2>
          <p className="text-slate-body text-sm">Principles that guide our engineering decisions and operational workflows.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="p-6 rounded-2xl border border-slate-line bg-white space-y-2">
              <h3 className="text-base font-bold text-navy-900">{v.title}</h3>
              <p className="text-sm text-slate-body leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Notice on Verified Data & Anti-Slop Discipline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-surface-alt border border-slate-line text-sm text-slate-body space-y-3">
          <p className="font-bold text-navy-900">Transparency Commitment:</p>
          <p className="leading-relaxed">
            VoiceSpace does not display unverified client logos, fabricated customer ratings, or exaggerated historical claims. Our engagements are defined by verified statements of work (SOWs), demonstrably clean codebases, and measurable operational SLAs.
          </p>
        </div>
      </section>

      {/* Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Ready to partner with VoiceSpace?</h3>
            <p className="text-sm text-slate-300">Schedule a direct discovery call with our solutions architects.</p>
          </div>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-6 py-3 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-blue-600 transition-colors shrink-0 cursor-pointer shadow-xs"
          >
            Schedule Consultation &rarr;
          </button>
        </div>
      </section>
    </div>
  );
}
