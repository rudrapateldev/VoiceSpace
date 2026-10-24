import { ArrowRight, CheckCircle2, Heart, Code2, Users2, Shield } from 'lucide-react';

interface CareersPageProps {
  onNavigate: (path: string) => void;
}

export default function CareersPage({ onNavigate }: CareersPageProps) {
  const perks = [
    { title: 'Craft & Clean Code', desc: 'Work on modern React/Next.js, TypeScript, Python, and AWS cloud systems without legacy cruft.' },
    { title: 'Asynchronous Trust', desc: 'Disciplined documentation, clear Jira/Linear milestones, and minimal meetings.' },
    { title: 'Continuous Growth', desc: 'Dedicated training budget for technical certifications, cloud competencies, and conferences.' },
    { title: 'Global Exposure', desc: 'Collaborate with international client teams across North America, Europe, and Asia.' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-4">
        <div className="text-xs font-bold text-brand-blue uppercase tracking-wider">
          Join VoiceSpace
        </div>
        <h1 className="text-4xl font-extrabold text-navy-900 leading-tight">
          Work With Us
        </h1>
        <p className="text-base text-slate-body leading-relaxed">
          We value clean code, clear communication, dependable work ethic, and personal growth. Our teams build modern software and support international organizations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {perks.map((p, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-line space-y-2 shadow-xs">
            <h3 className="font-bold text-navy-900 text-sm">{p.title}</h3>
            <p className="text-xs text-slate-body leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="p-8 rounded-3xl bg-surface-alt border border-slate-line space-y-4">
        <h2 className="text-xl font-bold text-navy-900">Current Job Openings</h2>
        <p className="text-sm text-slate-body leading-relaxed">
          There are currently no active public vacancies posted. However, we regularly review expressions of interest from senior full-stack software engineers, support specialists, and performance marketers.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center text-sm font-semibold text-brand-blue hover:underline cursor-pointer"
          >
            Submit an expression of interest &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
