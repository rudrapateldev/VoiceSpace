import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number | null;
}

export default function Accordion({ items, defaultOpenIndex = null }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="divide-y divide-slate-line border border-slate-line rounded-2xl bg-white shadow-xs overflow-hidden">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="transition-colors hover:bg-surface-alt/40">
            <button
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between text-left px-6 py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              <span className="font-semibold text-navy-900 pr-4 text-base">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-body shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-brand-blue' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-slate-body text-sm leading-relaxed border-t border-slate-line/40 pt-3">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
