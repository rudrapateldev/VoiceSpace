import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface AnnouncementBarProps {
  onNavigate: (path: string) => void;
}

export default function AnnouncementBar({ onNavigate }: AnnouncementBarProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside
      aria-label="Announcement"
      className="bg-navy-900 text-white text-xs sm:text-sm py-2 px-4 border-b border-navy-800 transition-all select-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 text-center truncate">
          <span className="font-semibold text-brand-cyan mr-2">New:</span>
          <span>Scaling your business operations, custom software, or support helpdesk?</span>
          <button
            onClick={() => onNavigate('/get-a-quote')}
            className="inline-flex items-center text-brand-cyan hover:underline font-medium ml-2 cursor-pointer focus:outline-none"
          >
            Request proposal <ArrowRight className="w-3 h-3 ml-1" />
          </button>
        </div>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss banner"
          className="text-slate-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer focus:outline-none"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
