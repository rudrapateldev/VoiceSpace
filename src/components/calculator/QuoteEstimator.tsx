import { useState } from 'react';
import { Calculator, ArrowRight, Check, Sparkles } from 'lucide-react';

interface QuoteEstimatorProps {
  onSelectEstimate?: (summary: { service: string; budget: string; engagement: string; scope: string }) => void;
}

export default function QuoteEstimator({ onSelectEstimate }: QuoteEstimatorProps) {
  const [serviceType, setServiceType] = useState<'software' | 'web' | 'mobile' | 'marketing' | 'support' | 'bpo'>('software');
  const [projectScale, setProjectScale] = useState<'mvp' | 'standard' | 'enterprise'>('standard');
  const [teamSize, setTeamSize] = useState<'solo' | 'squad' | 'pod'>('squad');
  const [coverage, setCoverage] = useState<'standard' | 'extended'>('standard');

  // Dynamic pricing calculation algorithm
  const calculateEstimate = () => {
    let baseRate = 3500;
    let weeks = 6;
    let deliverablesCount = 4;

    if (serviceType === 'software') {
      baseRate = 4500;
      weeks = 8;
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
      model: serviceType === 'support' || serviceType === 'bpo' ? 'Monthly Managed SLA' : 'Phased Sprint Milestones',
    };
  };

  const estimate = calculateEstimate();

  const handleApplyToQuote = () => {
    if (onSelectEstimate) {
      onSelectEstimate({
        service:
          serviceType === 'software'
            ? 'Software Development'
            : serviceType === 'web'
            ? 'Website Development'
            : serviceType === 'mobile'
            ? 'Mobile App Development'
            : serviceType === 'marketing'
            ? 'Digital Marketing'
            : serviceType === 'support'
            ? 'Customer Support Services'
            : 'Business Process Outsourcing (BPO)',
        budget: estimate.range,
        engagement: estimate.model,
        scope: `Configured via interactive estimator: ${projectScale.toUpperCase()} scale, ${teamSize} staffing, ${coverage} coverage hours.`,
      });
    }
  };

  return (
    <div className="bg-white border border-slate-line rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-line pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-brand-blue text-xs font-bold uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>Interactive Estimator</span>
          </div>
          <h3 className="text-2xl font-extrabold text-navy-900">
            Project Scope & Budget Calculator
          </h3>
          <p className="text-xs text-slate-body">
            Configure your technical needs to generate an instant ballpark scope & delivery timeline.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Service Selector */}
          <div>
            <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2.5">
              1. Select Domain
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'software', label: 'Software Build' },
                { id: 'web', label: 'Web Platform' },
                { id: 'mobile', label: 'Mobile App' },
                { id: 'marketing', label: 'Growth / SEO' },
                { id: 'support', label: 'Support Helpdesk' },
                { id: 'bpo', label: 'BPO Operations' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setServiceType(item.id as any)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-center ${
                    serviceType === item.id
                      ? 'border-brand-blue bg-brand-blue/5 text-brand-blue font-bold shadow-xs'
                      : 'border-slate-line text-navy-800 hover:bg-surface-alt'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scale Selector */}
          <div>
            <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2.5">
              2. Scope Complexity
            </label>
            <div className="grid grid-cols-3 gap-2">
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
                      ? 'border-brand-blue bg-brand-blue/5 text-brand-blue shadow-xs'
                      : 'border-slate-line text-navy-800 hover:bg-surface-alt'
                  }`}
                >
                  <p className="text-xs font-bold">{item.label}</p>
                  <p className="text-[10px] text-slate-body">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Staffing & Coverage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                3. Team Allocation
              </label>
              <select
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-line bg-surface-alt/50 text-xs font-semibold text-navy-900 cursor-pointer"
              >
                <option value="solo">1 Dedicated Specialist</option>
                <option value="squad">Squad (2–3 Specialists + Lead)</option>
                <option value="pod">Pod (4+ Full Cross-Functional Team)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                4. Operational Coverage
              </label>
              <select
                value={coverage}
                onChange={(e) => setCoverage(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-line bg-surface-alt/50 text-xs font-semibold text-navy-900 cursor-pointer"
              >
                <option value="standard">Business Hours (8/5)</option>
                <option value="extended">Continuous (24/7/365)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-5 bg-navy-900 text-white rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-cyan">
              Estimated Bracket
            </span>
            <div className="text-3xl font-extrabold tracking-tight font-mono text-white">
              {estimate.range}
            </div>
            <p className="text-xs text-slate-400">
              {estimate.model}
            </p>
          </div>

          <div className="space-y-2.5 border-t border-navy-800 pt-4 text-xs">
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
              className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-brand-blue text-white hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
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
