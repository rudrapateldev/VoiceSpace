/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { servicesData } from '../lib/services-data';
import Accordion from '../components/ui/Accordion';
import TechIcon from '../components/ui/TechIcon';
import { CheckCircle2, ArrowRight, ArrowLeft, Clock, ShieldCheck, Layers, Terminal } from 'lucide-react';

interface SingleServicePageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

const SERVICE_TECH_STACK: Record<string, { name: string; iconKey: string }[]> = {
  'ai-llm-rag': [
    { name: 'Python', iconKey: 'python' },
    { name: 'PyTorch', iconKey: 'pytorch' },
    { name: 'LangChain', iconKey: 'langchain' },
    { name: 'PostgreSQL / pgvector', iconKey: 'postgresql' },
    { name: 'AWS Cloud', iconKey: 'aws' },
    { name: 'TypeScript', iconKey: 'typescript' },
  ],
  'software-development': [
    { name: 'TypeScript', iconKey: 'typescript' },
    { name: 'Go (Golang)', iconKey: 'golang' },
    { name: 'Python', iconKey: 'python' },
    { name: 'Next.js', iconKey: 'nextjs' },
    { name: 'PostgreSQL', iconKey: 'postgresql' },
    { name: 'Docker', iconKey: 'docker' },
    { name: 'AWS Cloud', iconKey: 'aws' },
  ],
  'game-development': [
    { name: 'C# / .NET', iconKey: 'csharp' },
    { name: 'Unity 3D / 2D', iconKey: 'unity' },
    { name: 'TypeScript (WebGL)', iconKey: 'typescript' },
    { name: 'PostgreSQL', iconKey: 'postgresql' },
    { name: 'Docker (Multiplayer)', iconKey: 'docker' },
  ],
  'qa-software-testing': [
    { name: 'Playwright', iconKey: 'playwright' },
    { name: 'Cypress E2E', iconKey: 'cypress' },
    { name: 'Selenium Grid', iconKey: 'selenium' },
    { name: 'Apache JMeter', iconKey: 'jmeter' },
    { name: 'TestRail', iconKey: 'testrail' },
    { name: 'TypeScript', iconKey: 'typescript' },
    { name: 'Python', iconKey: 'python' },
  ],
  'product-management': [
    { name: 'Jira Software', iconKey: 'jira' },
    { name: 'Confluence', iconKey: 'confluence' },
    { name: 'Miro', iconKey: 'miro' },
    { name: 'Mixpanel', iconKey: 'mixpanel' },
    { name: 'Figma', iconKey: 'figma' },
  ],
  'project-management': [
    { name: 'Jira Software', iconKey: 'jira' },
    { name: 'Confluence', iconKey: 'confluence' },
    { name: 'Asana', iconKey: 'asana' },
    { name: 'Monday.com', iconKey: 'monday' },
    { name: 'Trello', iconKey: 'trello' },
    { name: 'Miro', iconKey: 'miro' },
  ],
  'business-analysis': [
    { name: 'Lucidchart', iconKey: 'lucidchart' },
    { name: 'Miro', iconKey: 'miro' },
    { name: 'Microsoft Power BI', iconKey: 'powerbi' },
    { name: 'Zoho Suite', iconKey: 'zoho' },
    { name: 'Excel / Sheets', iconKey: 'excel' },
    { name: 'Docs / Word', iconKey: 'word' },
  ],
  'ui-ux-graphic-design': [
    { name: 'Figma', iconKey: 'figma' },
    { name: 'Lucidchart', iconKey: 'lucidchart' },
    { name: 'Adobe Premiere / Creative', iconKey: 'premiere' },
    { name: 'PowerPoint / Slides', iconKey: 'powerpoint' },
  ],
  'video-creation-editing': [
    { name: 'Premiere Pro', iconKey: 'premiere' },
    { name: 'After Effects', iconKey: 'premiere' },
    { name: 'Figma', iconKey: 'figma' },
    { name: 'PowerPoint', iconKey: 'powerpoint' },
  ],
  'cloud-devops-security': [
    { name: 'AWS Cloud', iconKey: 'aws' },
    { name: 'Docker', iconKey: 'docker' },
    { name: 'Kubernetes', iconKey: 'kubernetes' },
    { name: 'PostgreSQL', iconKey: 'postgresql' },
    { name: 'Redis', iconKey: 'redis' },
    { name: 'Go (Golang)', iconKey: 'golang' },
  ],
  'web-development': [
    { name: 'React', iconKey: 'react' },
    { name: 'Next.js', iconKey: 'nextjs' },
    { name: 'TypeScript', iconKey: 'typescript' },
    { name: 'Node.js', iconKey: 'nodejs' },
    { name: 'PostgreSQL', iconKey: 'postgresql' },
    { name: 'AWS Cloud', iconKey: 'aws' },
  ],
  'mobile-app-development': [
    { name: 'Flutter', iconKey: 'flutter' },
    { name: 'Dart', iconKey: 'dart' },
    { name: 'Swift (iOS)', iconKey: 'swift' },
    { name: 'Kotlin (Android)', iconKey: 'kotlin' },
    { name: 'React Native', iconKey: 'react' },
  ],
  'digital-marketing': [
    { name: 'Mixpanel', iconKey: 'mixpanel' },
    { name: 'Power BI', iconKey: 'powerbi' },
    { name: 'Figma', iconKey: 'figma' },
    { name: 'Excel', iconKey: 'excel' },
  ],
  'seo': [
    { name: 'Next.js SSR', iconKey: 'nextjs' },
    { name: 'Mixpanel', iconKey: 'mixpanel' },
    { name: 'Power BI', iconKey: 'powerbi' },
    { name: 'Excel / Sheets', iconKey: 'excel' },
  ],
  'customer-support': [
    { name: 'Zoho Desk', iconKey: 'zoho' },
    { name: 'Jira Service Management', iconKey: 'jira' },
    { name: 'Excel / Sheets', iconKey: 'excel' },
    { name: 'Docs / Word', iconKey: 'word' },
  ],
  'bpo': [
    { name: 'Zoho Suite', iconKey: 'zoho' },
    { name: 'Excel / Sheets', iconKey: 'excel' },
    { name: 'Docs / Word', iconKey: 'word' },
    { name: 'Power BI', iconKey: 'powerbi' },
  ],
  'india-business-entry': [
    { name: 'MCA & ROC Filing', iconKey: 'word' },
    { name: 'GST & IEC Portals', iconKey: 'excel' },
    { name: 'Zoho CRM & Desk', iconKey: 'zoho' },
    { name: 'Jira Software', iconKey: 'jira' },
    { name: 'AWS Cloud', iconKey: 'aws' },
    { name: 'Razorpay / UPI', iconKey: 'nextjs' },
  ],
};

export default function SingleServicePage({ slug, onNavigate }: SingleServicePageProps) {
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="text-3xl font-bold text-navy-900">Service Not Found</h1>
        <p className="text-slate-body">The requested service could not be located in our directory.</p>
        <button
          onClick={() => onNavigate('/services')}
          className="px-6 py-3 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
        >
          &larr; Return to All Services
        </button>
      </div>
    );
  }

  const associatedStack = SERVICE_TECH_STACK[slug] || [
    { name: 'AWS Cloud', iconKey: 'aws' },
    { name: 'TypeScript', iconKey: 'typescript' },
    { name: 'Jira Software', iconKey: 'jira' },
  ];

  return (
    <div className="space-y-20 py-12 sm:py-16">
      {/* Service Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl space-y-6">
          <button
            onClick={() => onNavigate('/services')}
            className="text-xs font-bold text-brand-blue dark:text-brand-cyan uppercase tracking-wider hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to all services
          </button>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 dark:text-white leading-tight">
            {service.title}
          </h1>
          <p className="text-lg text-slate-body dark:text-slate-300 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Core Tech Stack & Programming Languages for this Service */}
          <div className="p-5 rounded-2xl bg-surface-alt dark:bg-[#0F172A] border border-slate-line/80 dark:border-slate-800 space-y-3 transition-colors">
            <div className="flex items-center gap-2 text-xs font-bold text-navy-900 dark:text-white uppercase tracking-wider">
              <Terminal className="w-4 h-4 text-brand-blue dark:text-brand-cyan" />
              <span>Production Toolchain & Programming Languages</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {associatedStack.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-line dark:border-slate-700 text-xs font-semibold text-navy-900 dark:text-slate-200 shadow-xs hover:border-brand-blue dark:hover:border-blue-400 hover:scale-105 transition-all"
                >
                  <TechIcon name={tech.iconKey} className="w-4 h-4 shrink-0 rounded" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {service.pricingGuidance && (
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 text-xs text-navy-900 dark:text-slate-200 font-medium">
              <span className="font-bold text-brand-blue dark:text-brand-cyan">Standard Pricing Guidance: </span>
              <span>{service.pricingGuidance}</span>
            </div>
          )}

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('/get-a-quote')}
              className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-brand-blue text-white hover:bg-blue-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer active:scale-[0.99]"
            >
              Get a Quote for {service.title}
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-surface-alt dark:bg-slate-800 text-navy-900 dark:text-white hover:bg-slate-200/70 dark:hover:bg-slate-700 border border-slate-line dark:border-slate-700 transition-all hover:-translate-y-0.5 cursor-pointer active:scale-[0.99]"
            >
              Consult a Specialist
            </button>
          </div>
        </div>
      </motion.section>

      {/* Deliverables & Business Benefits */}
      <section className="bg-surface-alt dark:bg-[#0B1224] py-16 border-y border-slate-line dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white">What We Deliver</h2>
              <div className="space-y-3">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 flex items-start gap-3 shadow-xs hover-lift transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue dark:text-brand-cyan shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-navy-900 dark:text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white">Key Business Benefits</h2>
              <div className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 flex items-start gap-3 shadow-xs hover-lift transition-colors">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
                    <span className="text-sm text-slate-body dark:text-slate-300 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-3xl font-extrabold text-navy-900 dark:text-white">Our Delivery Process</h2>
          <p className="text-slate-body dark:text-slate-300 text-sm">Clear milestones and disciplined quality assurance every step of the way.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {service.process.map((step, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 space-y-3 hover-lift transition-colors">
              <span className="text-3xl font-extrabold text-slate-line dark:text-slate-700 block">{step.step}</span>
              <h3 className="text-base font-bold text-navy-900 dark:text-white">{step.title}</h3>
              <p className="text-xs text-slate-body dark:text-slate-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-2xl font-extrabold text-navy-900 dark:text-white text-center">{service.title} FAQs</h2>
        <Accordion items={service.faqs} />
      </section>

      {/* Related Services Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-surface-alt dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors">
          <div>
            <h3 className="text-lg font-bold text-navy-900 dark:text-white">Complementary Solutions</h3>
            <p className="text-xs text-slate-body dark:text-slate-400">Combine this service with adjacent VoiceSpace capabilities.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {service.relatedServices.map((r) => (
              <button
                key={r.slug}
                onClick={() => onNavigate(`/services/${r.slug}`)}
                className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-line dark:border-slate-700 text-xs font-semibold text-navy-900 dark:text-slate-200 hover:border-brand-blue hover:text-brand-blue dark:hover:text-blue-400 transition-colors cursor-pointer shadow-xs active:scale-[0.98]"
              >
                {r.title} &rarr;
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
