import { ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export default function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="text-center space-y-6 max-w-md">
        <span className="text-6xl font-extrabold text-brand-blue dark:text-brand-cyan font-mono">404</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 dark:text-white">Resource Not Found</h1>
        <p className="text-sm text-slate-body dark:text-slate-300 leading-relaxed">
          The page or service resource you requested could not be found or has been restructured.
        </p>
        <div>
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold bg-brand-blue text-white hover:bg-blue-600 transition-colors cursor-pointer shadow-xs active:scale-[0.99]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Return to VoiceSpace Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
