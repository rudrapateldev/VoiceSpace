/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
    <div className="divide-y divide-slate-line dark:divide-slate-800 border border-slate-line dark:border-slate-800 rounded-2xl bg-white dark:bg-[#111C33] shadow-xs overflow-hidden transition-colors">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="transition-colors hover:bg-surface-alt/40 dark:hover:bg-slate-800/40">
            <button
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between text-left px-6 py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue cursor-pointer"
            >
              <span className="font-semibold text-navy-900 dark:text-white pr-4 text-base">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-body dark:text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-brand-blue dark:text-brand-cyan' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-slate-body dark:text-slate-300 text-sm leading-relaxed border-t border-slate-line/40 dark:border-slate-800/60 pt-3">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
