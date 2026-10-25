import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight, Check, Sparkles } from 'lucide-react';

interface QuoteEstimatorProps {
  onSelectEstimate?: (summary: { service: string; budget: string; engagement: string; scope: string }) => void;
}

export default function QuoteEstimator({ onSelectEstimate }: QuoteEstimatorProps) {
  const [serviceType, setServiceType] = useState<
    'ai' | 'software' | 'game' | 'qa' | 'product' | 'web' | 'mobile' | 'marketing' | 'support' | 'bpo' | 'india'
  >('ai');
  const [projectScale, setProjectScale] = useState<'mvp' | 'standard' | 'enterprise'>('standard');
  const [teamSize, setTeamSize] = useState<'solo' | 'squad' | 'pod'>('squad');
  const [coverage, setCoverage] = useState<'standard' | 'extended'>('standard');

  // Dynamic pricing calculation algorithm
  const calculateEstimate = () => {
    let baseRate = 3500;
    let weeks = 6;

    if (serviceType === 'ai') {
      baseRate = 5500;
      weeks = 8;
    } else if (serviceType === 'software') {
      baseRate = 4500;
      weeks = 8;
    } else if (serviceType === 'game') {
      baseRate = 6000;
      weeks = 10;
    } else if (serviceType === 'qa') {
      baseRate = 3200;
      weeks = 4;
    } else if (serviceType === 'product') {
      baseRate = 3800;
      weeks = 6;
    } else if (serviceType === 'web') {
      baseRate = 2800;
      weeks = 4;
    } else if (serviceType === 'mobile') {
      baseRate = 5000;
      weeks = 10;
    } else if (serviceType === 'marketing') {
      baseRate = 2000;
      weeks = 3;
    } else if (serviceType === 'support') {
      baseRate = 1800;
      weeks = 2;
    } else if (serviceType === 'bpo') {
      baseRate = 1600;
      weeks = 2;
    } else if (serviceType === 'india') {
      baseRate = 2400;
      weeks = 3;
    }

    const scaleMultiplier = projectScale === 'mvp' ? 0.75 : projectScale === 'standard' ? 1.0 : 1.85;
    const teamMultiplier = teamSize === 'solo' ? 0.8 : teamSize === 'squad' ? 1.0 : 2.1;
    const coverageMultiplier = coverage === 'extended' ? 1.4 : 1.0;

    const estimatedLow = Math.round((baseRate * scaleMultiplier * teamMultiplier * coverageMultiplier) / 100) * 100;
    const estimatedHigh = Math.round((estimatedLow * 1.35) / 100) * 100;
    const estimatedWeeks = Math.max(2, Math.round(weeks * scaleMultiplier));

    return {
      range: `$${estimatedLow.toLocaleString()} – $${estimatedHigh.toLocaleString()}`,
      duration: `${estimatedWeeks} – ${estimatedWeeks + 3} Weeks`,
      model: serviceType === 'support' || serviceType === 'bpo' || serviceType === 'india' ? 'Monthly Managed Head Office & Compliance SLA' : 'Phased Sprint Milestones',
    };
  };

  const estimate = calculateEstimate();

  const handleApplyToQuote = () => {
    if (onSelectEstimate) {
      const serviceNameMap: Record<string, string> = {
        ai: 'AI, LLM & RAG Solutions',
        software: 'Software Development',
        game: 'Game Development (Unity & 3D)',
        qa: 'Software Testing & QA (Automation, Security & Performance)',
        product: 'Product Management & UX Strategy',
        web: 'Website Development',
        mobile: 'Mobile App Development',
        marketing: 'Digital Marketing',
        support: 'Customer Support Services',
        bpo: 'Business Process Outsourcing (BPO)',
        india: 'India Business Entry & Local Head Office',
      };

      onSelectEstimate({
        service: serviceNameMap[serviceType] || 'Software Development',
        budget: estimate.range,
        engagement: estimate.model,
        scope: `Configured via interactive estimator: ${projectScale.toUpperCase()} scale, ${teamSize} staffing, ${coverage} coverage hours.`,
      });
    }
  };

  return (
    <div className="bg-white dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-line dark:border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-brand-blue dark:text-brand-cyan text-xs font-bold uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>Interactive Estimator</span>
          </div>
          <h3 className="text-2xl font-extrabold text-navy-900 dark:text-white">
            Project Scope & Budget Calculator
          </h3>
          <p className="text-xs text-slate-body dark:text-slate-400">
            Configure your technical needs to generate an instant ballpark scope & delivery timeline.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Service Selector */}
          <div>
            <label className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2.5">
              1. Select Domain
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {[
                { id: 'ai', label: 'AI & RAG' },
                { id: 'software', label: 'Software' },
                { id: 'game', label: 'Unity 3D' },
                { id: 'qa', label: 'QA / Testing' },
                { id: 'product', label: 'Product & Agile' },
                { id: 'web', label: 'Web Platform' },
                { id: 'mobile', label: 'Mobile App' },
                { id: 'marketing', label: 'Growth / SEO' },
                { id: 'support', label: 'Support Desk' },
                { id: 'bpo', label: 'BPO Ops' },
                { id: 'india', label: '🇮🇳 India Entry & HQ' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setServiceType(item.id as any)}
                  className={`py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-center ${
                    serviceType === item.id
                      ? 'border-brand-blue bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-blue-400 dark:border-blue-500 font-bold shadow-xs'
                      : 'border-slate-line dark:border-slate-800 text-navy-800 dark:text-slate-300 hover:bg-surface-alt dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scale Selector */}
          <div>
            <label className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2.5">
              2. Scope Complexity
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'mvp', label: 'MVP / Pilot', desc: 'Core features' },
                { id: 'standard', label: 'Standard Build', desc: 'Production app' },
                { id: 'enterprise', label: 'Enterprise Tier', desc: 'Custom security' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setProjectScale(item.id as any)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    projectScale === item.id
                      ? 'border-brand-blue bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-blue-400 dark:border-blue-500 shadow-xs'
                      : 'border-slate-line dark:border-slate-800 text-navy-800 dark:text-slate-300 hover:bg-surface-alt dark:hover:bg-slate-800/60'
                  }`}
                >
                  <p className="text-xs font-bold">{item.label}</p>
                  <p className="text-[10px] text-slate-body dark:text-slate-400">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Staffing & Coverage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2">
                3. Team Allocation
              </label>
              <select
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-line dark:border-slate-700 bg-surface-alt/50 dark:bg-slate-800 text-xs font-semibold text-navy-900 dark:text-slate-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="solo" className="dark:bg-slate-800 dark:text-white">1 Dedicated Specialist</option>
                <option value="squad" className="dark:bg-slate-800 dark:text-white">Squad (2–3 Specialists + Lead)</option>
                <option value="pod" className="dark:bg-slate-800 dark:text-white">Pod (4+ Full Cross-Functional Team)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-900 dark:text-slate-200 uppercase tracking-wider mb-2">
                4. Operational Coverage
              </label>
              <select
                value={coverage}
                onChange={(e) => setCoverage(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-line dark:border-slate-700 bg-surface-alt/50 dark:bg-slate-800 text-xs font-semibold text-navy-900 dark:text-slate-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="standard" className="dark:bg-slate-800 dark:text-white">Business Hours (8/5)</option>
                <option value="extended" className="dark:bg-slate-800 dark:text-white">Continuous (24/7/365)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-5 bg-navy-900 dark:bg-[#070D1E] text-white border border-transparent dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-cyan">
              Estimated Bracket
            </span>
            <motion.div
              key={estimate.range}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-3xl font-extrabold tracking-tight font-mono text-white"
            >
              {estimate.range}
            </motion.div>
            <p className="text-xs text-slate-400">
              {estimate.model}
            </p>
          </div>

          <div className="space-y-2.5 border-t border-navy-800 dark:border-slate-800 pt-4 text-xs">
            <div className="flex items-center justify-between text-slate-300">
              <span>Target Delivery Ramp:</span>
              <span className="font-semibold text-white">{estimate.duration}</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span>IP Ownership:</span>
              <span className="font-semibold text-emerald-400">100% Client Owned</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span>Code Auditing:</span>
              <span className="font-semibold text-brand-cyan">Included</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={handleApplyToQuote}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-brand-blue hover:bg-blue-600 text-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.99]"
            >
              <span>Apply Configuration to Quote Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
