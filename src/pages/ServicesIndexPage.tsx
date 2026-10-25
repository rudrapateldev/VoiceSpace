/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData } from '../lib/services-data';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { SERVICES_LIST } from '../lib/constants';
import TechMarquee from '../components/ui/TechMarquee';

interface ServicesIndexPageProps {
  onNavigate: (path: string) => void;
}

export default function ServicesIndexPage({ onNavigate }: ServicesIndexPageProps) {
  const [filter, setFilter] = useState<'all' | 'Technology' | 'Quality' | 'Strategy' | 'Creative' | 'Growth' | 'Operations'>('all');

  const servicesList = Object.values(servicesData);

  const filteredServices = servicesList.filter((s) => {
    if (filter === 'all') return true;
    const meta = SERVICES_LIST.find((m) => m.slug === s.slug);
    return meta?.category === filter;
  });

  return (
    <div className="space-y-16 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl space-y-3"
        >
          <div className="text-xs font-bold text-brand-blue uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Capabilities & Ecosystem</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 leading-tight">
            Comprehensive Technology & Business Services
          </h1>
          <p className="text-lg text-slate-body leading-relaxed">
            Explore our complete suite of {servicesList.length} specialized capabilities across AI & RAG, custom software, Unity game development, automated QA testing, UI/UX design, video production, and managed BPO operations.
          </p>
        </motion.div>
      </div>

      {/* Filter Tabs (Interactive Functional Controls) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-line dark:border-slate-800 pb-4">
          {[
            { id: 'all', label: `All Capabilities (${servicesList.length})` },
            { id: 'Technology', label: 'AI & Engineering' },
            { id: 'Quality', label: 'QA, Automation & Security' },
            { id: 'Strategy', label: 'Product & Agile Strategy' },
            { id: 'Creative', label: 'UI/UX, Graphics & Video' },
            { id: 'Growth', label: 'Marketing & SEO' },
            { id: 'Operations', label: 'BPO & Customer Support' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-navy-900 dark:bg-brand-blue text-white shadow-md -translate-y-0.5'
                  : 'bg-surface-alt dark:bg-slate-800 text-slate-body dark:text-slate-300 hover:text-navy-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid with Motion Transitions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={service.slug}
                className="p-8 rounded-2xl border border-slate-line dark:border-slate-800 bg-white dark:bg-[#0F172A] shadow-xs flex flex-col justify-between hover:border-brand-blue dark:hover:border-blue-500 hover:shadow-lg transition-all hover-lift"
              >
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-navy-900 dark:text-white">{service.title}</h2>
                  <p className="text-sm text-slate-body dark:text-slate-300 leading-relaxed">{service.shortDescription}</p>
                  <div className="pt-2 border-t border-slate-line/50 dark:border-slate-800 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      Key Deliverables
                    </span>
                    <ul className="text-xs text-navy-800 dark:text-slate-200 space-y-1.5">
                      {service.deliverables.slice(0, 3).map((d, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-line dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(`/services/${service.slug}`)}
                    className="text-sm font-semibold text-brand-blue dark:text-brand-cyan hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center cursor-pointer group"
                  >
                    <span>Full Service Blueprint</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Marquee Divider */}
      <section className="space-y-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          Integrated Technologies & Enterprise Ecosystem
        </div>
        <TechMarquee />
      </section>

      {/* Quote Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-surface-alt dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs transition-colors">
          <div>
            <h3 className="text-xl font-bold text-navy-900 dark:text-white">Need a multi-service package?</h3>
            <p className="text-sm text-slate-body dark:text-slate-300">
              We assemble unified cross-functional teams covering both technology builds and operational support.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/get-a-quote')}
            className="px-6 py-3.5 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-blue-600 transition-all cursor-pointer shrink-0 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.99]"
          >
            Request Multi-Service Proposal &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
