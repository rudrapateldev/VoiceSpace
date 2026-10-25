import { INDUSTRIES_DATA } from '../lib/constants';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (path: string) => void;
}

export default function IndustriesPage({ onNavigate }: IndustriesPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold text-brand-blue dark:text-brand-cyan uppercase tracking-wider">
          Sector Experience
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 dark:text-white leading-tight">
          Industries We Serve
        </h1>
        <p className="text-lg text-slate-body dark:text-slate-300 leading-relaxed">
          We configure our engineering standards and operations to fit the workflows and compliance expectations of your industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {INDUSTRIES_DATA.map((ind) => (
          <div
            key={ind.id}
            className="p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 space-y-4 shadow-xs flex flex-col justify-between hover-lift transition-colors"
          >
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-navy-900 dark:text-white">{ind.name}</h2>
              <p className="text-xs text-slate-body dark:text-slate-300 leading-relaxed">{ind.fullDesc}</p>

              <div className="pt-2 border-t border-slate-line/50 dark:border-slate-800 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                  Typical Workflows
                </span>
                <ul className="text-xs text-navy-900 dark:text-slate-200 space-y-1">
                  {ind.typicalWorkflows.map((w, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue dark:bg-brand-cyan mt-1.5 shrink-0" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-line/60 dark:border-slate-800">
              <div className="flex items-start gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan shrink-0 mt-0.5" />
                <span>{ind.complianceNotes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-8 rounded-3xl bg-surface-alt dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 text-center space-y-4 transition-colors">
        <h2 className="text-2xl font-bold text-navy-900 dark:text-white">Need an industry-tailored solution?</h2>
        <p className="text-sm text-slate-body dark:text-slate-300 max-w-lg mx-auto">
          Contact our team to review your specific operational guidelines, security constraints, and service level targets.
        </p>
        <button
          onClick={() => onNavigate('/contact')}
          className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold bg-brand-blue text-white hover:bg-blue-600 transition-colors cursor-pointer shadow-xs active:scale-[0.99]"
        >
          Speak With Our Team <ArrowRight className="w-4 h-4 ml-1.5" />
        </button>
      </div>
    </div>
  );
}
