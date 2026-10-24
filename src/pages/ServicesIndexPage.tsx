import { useState } from 'react';
import { servicesData } from '../lib/services-data';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { SERVICES_LIST } from '../lib/constants';

interface ServicesIndexPageProps {
  onNavigate: (path: string) => void;
}

export default function ServicesIndexPage({ onNavigate }: ServicesIndexPageProps) {
  const [filter, setFilter] = useState<'all' | 'Technology' | 'Growth' | 'Operations'>('all');

  const servicesList = Object.values(servicesData);

  const filteredServices = servicesList.filter((s) => {
    if (filter === 'all') return true;
    const meta = SERVICES_LIST.find((m) => m.slug === s.slug);
    return meta?.category === filter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold text-brand-blue uppercase tracking-wider">
          Our Capabilities
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 leading-tight">
          Comprehensive Business Services
        </h1>
        <p className="text-lg text-slate-body leading-relaxed">
          Explore our complete suite of 11 specialized solutions across cloud software engineering, digital performance marketing, and managed business process outsourcing.
        </p>
      </div>

      {/* Filter Tabs (Interactive Functional Controls) */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-line pb-4">
        {[
          { id: 'all', label: 'All Services (11)' },
          { id: 'Technology', label: 'Software & Technology' },
          { id: 'Growth', label: 'Marketing & SEO' },
          { id: 'Operations', label: 'BPO & Customer Support' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === tab.id
                ? 'bg-navy-900 text-white shadow-xs'
                : 'bg-surface-alt text-slate-body hover:text-navy-900 hover:bg-slate-200/60'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <div
            key={service.slug}
            className="p-8 rounded-2xl border border-slate-line bg-white shadow-xs flex flex-col justify-between hover:border-brand-blue transition-all"
          >
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-navy-900">{service.title}</h2>
              <p className="text-sm text-slate-body leading-relaxed">{service.shortDescription}</p>
              <div className="pt-2 border-t border-slate-line/50 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Key Deliverables
                </span>
                <ul className="text-xs text-navy-800 space-y-1.5">
                  {service.deliverables.slice(0, 3).map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-line flex items-center justify-between">
              <button
                onClick={() => onNavigate(`/services/${service.slug}`)}
                className="text-sm font-semibold text-brand-blue hover:text-blue-700 inline-flex items-center cursor-pointer group"
              >
                <span>Full Service Blueprint</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Banner */}
      <div className="p-8 rounded-3xl bg-surface-alt border border-slate-line flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-navy-900">Need a multi-service package?</h3>
          <p className="text-sm text-slate-body">
            We assemble unified cross-functional teams covering both technology builds and operational support.
          </p>
        </div>
        <button
          onClick={() => onNavigate('/get-a-quote')}
          className="px-6 py-3 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-blue-600 transition-colors cursor-pointer shrink-0 shadow-xs"
        >
          Request Multi-Service Proposal &rarr;
        </button>
      </div>
    </div>
  );
}
