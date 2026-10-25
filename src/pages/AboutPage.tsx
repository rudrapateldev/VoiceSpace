/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Shield, Target, Users, Zap, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../lib/constants';
import TechMarquee from '../components/ui/TechMarquee';

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
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue dark:text-brand-cyan uppercase tracking-wider">
            <span>About VoiceSpace</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 dark:text-white leading-tight">
            Technology and Business Support Designed Around Your Goals
          </h1>
          <p className="text-lg text-slate-body dark:text-slate-300 leading-relaxed">
            VoiceSpace brings together technology, digital growth, customer experience, and operational support to help businesses simplify their workflows and pursue new opportunities.
          </p>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="bg-surface-alt dark:bg-[#0B1224] py-16 border-y border-slate-line dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 space-y-4 shadow-xs hover-lift transition-colors">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white">Our Mission</h2>
            <p className="text-sm text-slate-body dark:text-slate-300 leading-relaxed">
              To empower startups, mid-market businesses, and growing enterprises with dependable digital infrastructure, high-caliber software engineering, and compliant operational workforce solutions.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 space-y-4 shadow-xs hover-lift transition-colors">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white">Our Vision</h2>
            <p className="text-sm text-slate-body dark:text-slate-300 leading-relaxed">
              To be a trusted international business partner recognized for technical craftsmanship, transparent operational standards, and shared success.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Marquee Integration */}
      <section className="space-y-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          Enterprise Technology Foundation
        </div>
        <TechMarquee />
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-navy-900 dark:text-white">Our Core Values</h2>
          <p className="text-slate-body dark:text-slate-300 text-sm">Principles that guide our engineering decisions and operational workflows.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              className="p-6 rounded-2xl border border-slate-line dark:border-slate-800 bg-white dark:bg-[#0F172A] space-y-2 shadow-xs hover:border-brand-blue/50 dark:hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-base font-bold text-navy-900 dark:text-white">{v.title}</h3>
              <p className="text-sm text-slate-body dark:text-slate-300 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Notice on Verified Data & Anti-Slop Discipline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-surface-alt dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 text-sm text-slate-body dark:text-slate-300 space-y-3 shadow-xs">
          <p className="font-bold text-navy-900 dark:text-white">Transparency Commitment:</p>
          <p className="leading-relaxed">
            VoiceSpace does not display unverified client logos, fabricated customer ratings, or exaggerated historical claims. Our engagements are defined by verified statements of work (SOWs), demonstrably clean codebases, and measurable operational SLAs.
          </p>
        </div>
      </section>

      {/* Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 dark:bg-[#070D1E] rounded-3xl p-8 sm:p-12 text-white border border-transparent dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold text-white">Ready to partner with VoiceSpace?</h3>
            <p className="text-sm text-slate-300">Schedule a direct discovery call with our solutions architects.</p>
          </div>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-6 py-3.5 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-blue-600 transition-all shrink-0 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.99]"
          >
            Schedule Consultation &rarr;
          </button>
        </div>
      </section>
    </div>
  );
}
