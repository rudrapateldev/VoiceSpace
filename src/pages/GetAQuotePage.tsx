import { useState } from 'react';
import QuoteForm from '../components/forms/QuoteForm';
import QuoteEstimator from '../components/calculator/QuoteEstimator';
import { Calculator, FileText } from 'lucide-react';

interface GetAQuotePageProps {
  initialService?: string;
}

export default function GetAQuotePage({ initialService }: GetAQuotePageProps) {
  const [activeTab, setActiveTab] = useState<'form' | 'calculator'>('form');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="text-center space-y-3">
        <div className="text-xs font-bold text-brand-blue dark:text-brand-cyan uppercase tracking-wider">
          Proposal Engineering
        </div>
        <h1 className="text-4xl font-extrabold text-navy-900 dark:text-white leading-tight">
          Request a Custom Proposal
        </h1>
        <p className="text-sm text-slate-body dark:text-slate-300 max-w-xl mx-auto">
          Share your timeline, required services, and project scope. Our technical leads will analyze your requirements and assemble a formal estimate.
        </p>

        {/* Tab Switcher */}
        <div className="pt-2 flex justify-center">
          <div className="inline-flex p-1 bg-surface-alt dark:bg-slate-800 border border-slate-line dark:border-slate-700 rounded-xl transition-colors">
            <button
              onClick={() => setActiveTab('form')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'form'
                  ? 'bg-white dark:bg-[#0F172A] text-navy-900 dark:text-white shadow-xs'
                  : 'text-slate-body dark:text-slate-400 hover:text-navy-900 dark:hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Direct Quote Form</span>
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'calculator'
                  ? 'bg-white dark:bg-[#0F172A] text-navy-900 dark:text-white shadow-xs'
                  : 'text-slate-body dark:text-slate-400 hover:text-navy-900 dark:hover:text-white'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Estimator</span>
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'calculator' ? (
        <QuoteEstimator
          onSelectEstimate={(summary) => {
            setActiveTab('form');
          }}
        />
      ) : (
        <QuoteForm initialService={initialService} />
      )}
    </div>
  );
}
