/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import TechIcon from './TechIcon';

interface MarqueeItem {
  name: string;
  iconKey: string;
  tag: string;
}

const PRIMARY_STACK: MarqueeItem[] = [
  { name: 'TypeScript', iconKey: 'typescript', tag: 'Language' },
  { name: 'Python', iconKey: 'python', tag: 'Language & AI' },
  { name: 'Go (Golang)', iconKey: 'golang', tag: 'Cloud Systems' },
  { name: 'Rust', iconKey: 'rust', tag: 'Systems' },
  { name: 'C# / Unity', iconKey: 'csharp', tag: 'Game Dev' },
  { name: 'React', iconKey: 'react', tag: 'Frontend' },
  { name: 'Next.js', iconKey: 'nextjs', tag: 'Full-Stack' },
  { name: 'Flutter', iconKey: 'flutter', tag: 'Mobile' },
  { name: 'Swift', iconKey: 'swift', tag: 'iOS Native' },
  { name: 'Kotlin', iconKey: 'kotlin', tag: 'Android Native' },
  { name: 'PostgreSQL', iconKey: 'postgresql', tag: 'Database' },
  { name: 'AWS Cloud', iconKey: 'aws', tag: 'Infrastructure' },
];

const SECONDARY_STACK: MarqueeItem[] = [
  { name: 'Docker', iconKey: 'docker', tag: 'DevOps' },
  { name: 'Kubernetes', iconKey: 'kubernetes', tag: 'Orchestration' },
  { name: 'PyTorch', iconKey: 'pytorch', tag: 'Deep Learning' },
  { name: 'LangChain & RAG', iconKey: 'langchain', tag: 'AI Agents' },
  { name: 'Playwright', iconKey: 'playwright', tag: 'Automation QA' },
  { name: 'Cypress', iconKey: 'cypress', tag: 'E2E Testing' },
  { name: 'Selenium', iconKey: 'selenium', tag: 'Test Grid' },
  { name: 'Apache JMeter', iconKey: 'jmeter', tag: 'Performance' },
  { name: 'TestRail', iconKey: 'testrail', tag: 'QA Runbooks' },
  { name: 'Jira Software', iconKey: 'jira', tag: 'Agile Delivery' },
  { name: 'Figma', iconKey: 'figma', tag: 'UI/UX Design' },
  { name: 'Lucidchart', iconKey: 'lucidchart', tag: 'Architecture' },
  { name: 'Microsoft Power BI', iconKey: 'powerbi', tag: 'Analytics' },
  { name: 'Mixpanel', iconKey: 'mixpanel', tag: 'Product Metrics' },
];

export default function TechMarquee() {
  return (
    <div className="py-6 overflow-hidden space-y-4 bg-slate-50/70 dark:bg-[#0B1224]/70 border-y border-slate-line/60 dark:border-slate-800/80 transition-colors">
      {/* Row 1: Forward Marquee */}
      <div className="flex animate-marquee gap-4">
        {[...PRIMARY_STACK, ...PRIMARY_STACK].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white dark:bg-[#111C33] border border-slate-line/80 dark:border-slate-700/80 shadow-xs hover:border-brand-blue/50 dark:hover:border-brand-cyan/50 transition-all shrink-0 hover:scale-105"
          >
            <TechIcon name={item.iconKey} className="w-5 h-5 shrink-0" />
            <span className="text-xs font-bold text-navy-900 dark:text-white whitespace-nowrap">{item.name}</span>
            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/90 px-1.5 py-0.5 rounded">
              {item.tag}
            </span>
          </div>
        ))}
      </div>

      {/* Row 2: Reverse Marquee */}
      <div className="flex animate-marquee-reverse gap-4">
        {[...SECONDARY_STACK, ...SECONDARY_STACK].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white dark:bg-[#111C33] border border-slate-line/80 dark:border-slate-700/80 shadow-xs hover:border-brand-blue/50 dark:hover:border-brand-cyan/50 transition-all shrink-0 hover:scale-105"
          >
            <TechIcon name={item.iconKey} className="w-5 h-5 shrink-0" />
            <span className="text-xs font-bold text-navy-900 dark:text-white whitespace-nowrap">{item.name}</span>
            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/90 px-1.5 py-0.5 rounded">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
