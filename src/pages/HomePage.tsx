import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Globe,
  TrendingUp,
  Headphones,
  PhoneCall,
  Briefcase,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Server,
  Layers,
  Sparkles,
  ChevronRight,
  Clock,
  Award,
  Bot,
  Gamepad2,
  BarChart3,
  Workflow,
  Cpu,
  Terminal,
  Building2,
  ShoppingBag,
  MapPin,
} from 'lucide-react';
import Accordion from '../components/ui/Accordion';
import QuoteEstimator from '../components/calculator/QuoteEstimator';
import TechIcon from '../components/ui/TechIcon';
import TechMarquee from '../components/ui/TechMarquee';
import { SERVICES_LIST, TOOL_ECOSYSTEM, PROGRAMMING_LANGUAGES_DATA } from '../lib/constants';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onApplyEstimate?: (summary: { service: string; budget: string; engagement: string; scope: string }) => void;
}

export default function HomePage({ onNavigate, onApplyEstimate }: HomePageProps) {
  const [activeLangCategory, setActiveLangCategory] = useState<string>('all');
  const coreServices = [
    {
      icon: Bot,
      title: 'AI, LLM & RAG Solutions',
      desc: 'Retrieval-Augmented Generation (RAG), vector database search, custom LLM fine-tuning, and autonomous tool-calling agents.',
      href: '/services/ai-llm-rag',
      cta: 'Explore AI & RAG Workflows',
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      desc: 'Full-stack cloud architectures, microservices, secure REST/GraphQL APIs, and enterprise operational automation.',
      href: '/services/software-development',
      cta: 'Explore Software Build',
    },
    {
      icon: Gamepad2,
      title: 'Game Development (Unity & 3D)',
      desc: 'Cross-platform 2D/3D games in Unity C#, physics mechanics, mobile 60 FPS performance optimization, and multiplayer backends.',
      href: '/services/game-development',
      cta: 'Explore Unity Game Dev',
    },
    {
      icon: ShieldCheck,
      title: 'Software Testing & QA',
      desc: 'Automated regression with Playwright & Selenium, high-concurrency JMeter load testing, OWASP security scans, and multi-device manual QA.',
      href: '/services/qa-software-testing',
      cta: 'Explore QA & Automation',
    },
    {
      icon: Workflow,
      title: 'Product & Project Management',
      desc: 'Agile delivery leadership, Scrum/Kanban frameworks in Jira, Asana, Monday.com, living PRDs, and Miro user story mapping.',
      href: '/services/project-management',
      cta: 'Explore Agile Delivery',
    },
    {
      icon: BarChart3,
      title: 'Business Analysis & Process Mapping',
      desc: 'BPMN 2.0 operational flowcharts, developer-ready BRD specifications, Gherkin acceptance criteria, and Power BI dashboards.',
      href: '/services/business-analysis',
      cta: 'Explore Business Analysis',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing & SEO',
      desc: 'Technical search optimization, paid media campaigns, content engines, and funnel conversion telemetry via Mixpanel.',
      href: '/services/digital-marketing',
      cta: 'Explore Growth Systems',
    },
    {
      icon: Headphones,
      title: 'Customer Support & BPO Ops',
      desc: 'Multichannel email, live chat, ticketing helpdesk, compliant call center workflows, and back-office data operations.',
      href: '/services/customer-support',
      cta: 'Explore Managed Ops',
    },
    {
      icon: Globe,
      title: 'India Business Entry & Head Office',
      desc: 'Complete company incorporation, physical Delhi-NCR corporate headquarters, product sales launch on Amazon & Flipkart, and consumer trust-building operations.',
      href: '/services/india-business-entry',
      cta: 'Explore India Entry & HQ',
    },
  ];

  const valueProps = [
    {
      title: 'Integrated Capabilities',
      desc: 'Bridge the gap between software engineering, marketing engines, and customer operations without juggling multiple disconnected agencies.',
    },
    {
      title: 'Flexible Engagement Models',
      desc: 'Engage on structured fixed-price project milestones, dedicated monthly team augmentation, or long-term managed services.',
    },
    {
      title: 'Business-Focused Engineering',
      desc: 'We prioritize code cleanliness, maintainability, and measurable return on investment over passing tech fads.',
    },
    {
      title: 'Clear, Transparent Updates',
      desc: 'Direct communication with assigned technical leads, weekly sprint reviews, and shared staging environments.',
    },
    {
      title: 'Elastic Scalability',
      desc: 'Effortlessly scale operational seats or engineering velocity to match seasonal spikes or business expansion.',
    },
    {
      title: 'Security & SLA Governance',
      desc: 'Strict non-disclosure enforcement, least-privilege credential access, and clear service-level agreements.',
    },
  ];

  const industries = [
    'Technology & SaaS',
    'E-Commerce & Retail',
    'Healthcare Administration',
    'Education & E-Learning',
    'Financial Services Support',
    'Real Estate & Property',
    'Professional Services',
    'Travel & Hospitality',
    'Startups & Growing SMBs',
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discover & Scope',
      desc: 'Understand business goals, compliance bounds, existing bottlenecks, and project technical boundaries.',
    },
    {
      step: '02',
      title: 'Architecture & Plan',
      desc: 'Formulate system architecture, resource allocations, milestone schedules, and quantifiable SLA metrics.',
    },
    {
      step: '03',
      title: 'Execute & Deploy',
      desc: 'Build and deploy services with continuous integration, active updates, and full transparency.',
    },
    {
      step: '04',
      title: 'Audit & Optimize',
      desc: 'Regularly audit performance data, capture feedback, and implement systematic operational improvements.',
    },
  ];

  const faqs = [
    {
      question: 'What services does VoiceSpace offer?',
      answer:
        'VoiceSpace provides custom software development, corporate web and mobile engineering, digital marketing and SEO, customer support helpdesks, tele-support call center operations, and business process outsourcing (BPO).',
    },
    {
      question: 'Can I hire VoiceSpace for a single, isolated project?',
      answer:
        'Yes. We offer defined project-based contracts with fixed milestones and scopes alongside dedicated team augmentation and ongoing managed service agreements.',
    },
    {
      question: 'Do you work with international clients?',
      answer:
        'Yes. VoiceSpace works with startups, agencies, and enterprises across India, North America, the United Kingdom, Europe, Canada, and Australia with tailored time-zone coverage.',
    },
    {
      question: 'Can I outsource both customer support and back-office operations?',
      answer:
        'Yes. We frequently set up combined operational teams covering both omnichannel customer helpdesk support and administrative/data processing back-office tasks under a unified SLA.',
    },
    {
      question: 'How do I request a quote or project consultation?',
      answer:
        'You can submit your initial requirements through our Get a Quote page or Contact page. Our technical leads review the details and respond with a structured consultation proposal.',
    },
    {
      question: 'How is pricing determined?',
      answer:
        'Pricing is scoped according to your engagement model, technical complexity, required team seniority, hours of coverage (e.g., 8/5 vs 24/7), and anticipated operational volume.',
    },
  ];

  return (
    <div className="space-y-24 py-10 sm:py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue dark:text-brand-cyan uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-brand-blue dark:bg-brand-cyan animate-ping" />
                <span>Technology & Business Support Services</span>
              </div>
              <button
                onClick={() => onNavigate('/services/india-business-entry')}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200/80 dark:border-amber-800 text-[11px] font-bold text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/60 transition-colors cursor-pointer group"
              >
                <span>🇮🇳 Expand to India: Entity Setup & Local Head Office</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-900 dark:text-white leading-[1.12]">
              Your Vision. <br />
              Our Technology. <br />
              <span className="text-brand-blue dark:text-brand-cyan">Shared Success.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-body dark:text-slate-300 leading-relaxed max-w-2xl">
              VoiceSpace helps businesses build powerful digital products, accelerate growth, deliver exceptional customer experiences, and streamline operations through technology, digital marketing, customer support, and business process outsourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold bg-brand-blue text-white hover:bg-blue-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                Get a Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={() => onNavigate('/services')}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold bg-surface-alt dark:bg-slate-800 text-navy-900 dark:text-white hover:bg-slate-200/70 dark:hover:bg-slate-700 border border-slate-line dark:border-slate-700 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Explore All Services
              </button>
            </div>
          </motion.div>

          {/* Hero Visual Composition: Modern Integrated System Blueprint */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 rounded-3xl p-8 text-white shadow-xl border border-navy-800 overflow-hidden hover-lift">
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between border-b border-navy-800 pb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono">voicespace.in/core</span>
                </div>

                <div className="space-y-3.5">
                  <div className="p-4 rounded-xl bg-navy-800/90 border border-slate-700/60 flex items-center gap-4 hover:border-brand-cyan/50 transition-colors">
                    <div className="p-2.5 rounded-lg bg-brand-blue/20 text-brand-cyan shrink-0">
                      <Code className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">
                        Software & Web Engineering
                      </p>
                      <p className="text-sm font-semibold text-white">Full-Stack Cloud & Scalable APIs</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-navy-800/90 border border-slate-700/60 flex items-center gap-4 hover:border-emerald-400/50 transition-colors">
                    <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">
                        Acquisition & Performance
                      </p>
                      <p className="text-sm font-semibold text-white">Technical SEO & Paid Channels</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-navy-800/90 border border-slate-700/60 flex items-center gap-4 hover:border-brand-cyan/50 transition-colors">
                    <div className="p-2.5 rounded-lg bg-brand-cyan/20 text-brand-cyan shrink-0">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">
                        Operational Excellence
                      </p>
                      <p className="text-sm font-semibold text-white">Multichannel Helpdesk & BPO</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-navy-800">
                  <span>Architecture: AWS & Cloud Native</span>
                  <span className="text-brand-cyan font-mono animate-pulse">Status: Ready to Scale</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real-Time Tech Marquee Ribbon */}
      <section className="space-y-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-slate-400 font-medium">
          <span className="uppercase tracking-wider font-bold text-navy-900 dark:text-slate-200">Enterprise Stack & Framework Ecosystem</span>
          <span className="hidden sm:inline">TypeScript · Python · Go · Rust · C# · React · AWS · Playwright · Cypress</span>
        </div>
        <TechMarquee />
      </section>

      {/* Core Services Overview */}
      <section className="bg-surface-alt dark:bg-[#0D1527] py-20 border-y border-slate-line dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white">
              Complete Business Solutions Under One Roof
            </h2>
            <p className="text-slate-body dark:text-slate-300 text-base">
              From building your digital presence to managing customer interactions and business operations, VoiceSpace provides services designed to help businesses operate more efficiently and grow confidently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((svc, i) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={i}
                  className="bg-white dark:bg-[#111C33] rounded-2xl p-8 border border-slate-line dark:border-slate-800 shadow-xs hover:border-brand-blue dark:hover:border-brand-cyan hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 dark:text-white">{svc.title}</h3>
                    <p className="text-sm text-slate-body dark:text-slate-400 leading-relaxed">{svc.desc}</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-line/60 dark:border-slate-800">
                    <button
                      onClick={() => onNavigate(svc.href)}
                      className="text-sm font-semibold text-brand-blue dark:text-brand-cyan hover:underline inline-flex items-center cursor-pointer group"
                    >
                      <span>{svc.cta}</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('/services')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-line dark:border-slate-700 text-sm font-semibold text-navy-900 dark:text-white hover:border-brand-blue transition-colors cursor-pointer shadow-xs"
            >
              <span>Explore All {SERVICES_LIST.length} Specialized Capabilities</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Global to India Business Gateway & Head Office Feature Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-[#0B132B] border border-navy-700/80 p-8 sm:p-12 lg:p-16 text-white shadow-2xl overflow-hidden">
          {/* Subtle Background Glow Elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-12">
            {/* Header / Value Proposition */}
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs font-bold text-brand-cyan uppercase tracking-wider">
                <span>🇮🇳 For International Founders, Overseas Brands & Global Enterprises</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Want to Start Your Business or Sell Products in India? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-200 to-indigo-300">
                  We Become Your Official Head Office & Domestic Trust Engine.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Entering India’s rapidly growing $3.8T consumer economy requires deep local presence and regulatory compliance. VoiceSpace manages complete Indian entity incorporation, provides our physical corporate facility in Delhi-NCR as your official registered headquarters, lists your products on Amazon India & Flipkart, and deploys localized customer support to bridge trust with Indian consumers.
              </p>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pillar 1 */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan/50 transition-all space-y-3.5 backdrop-blur-xs">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/20 text-brand-cyan flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan">01. Entity Formation</span>
                  <h3 className="text-base font-bold text-white">100% Legal Incorporation & Regulatory Clearances</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Wholly-Owned Subsidiary (WOS), Private Limited, MCA, ROC, DIN, DSC, PAN, TAN, GST, Import-Export Code (IEC), and RBI/FEMA FDI clearances with local resident director assistance.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-blue/50 transition-all space-y-3.5 backdrop-blur-xs">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/30 text-blue-300 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300">02. Physical HQ</span>
                  <h3 className="text-base font-bold text-white">Official Indian Corporate Headquarters</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  VoiceSpace acts as your official registered corporate address at our Faridabad (Delhi-NCR) facility with executive conference rooms, legal notice handling, and official physical presence.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/50 transition-all space-y-3.5 backdrop-blur-xs">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">03. Marketplace Sales</span>
                  <h3 className="text-base font-bold text-white">Sell on Amazon, Flipkart, ONDC & UPI</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fast-track seller onboarding, GST-compliant invoicing, cataloging, domestic warehousing, native UPI payments (PhonePe, Google Pay, Paytm, Razorpay), and Cash on Delivery (COD).
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all space-y-3.5 backdrop-blur-xs">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">04. Consumer Trust</span>
                  <h3 className="text-base font-bold text-white">Build Deep Trust with Indian People</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Turn buyer hesitation into confidence with dedicated domestic +91 phone numbers, verified WhatsApp Business desks, native Hindi/English support, domestic returns, and local warranty fulfillment.
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">100%</p>
                <p className="text-xs text-slate-400">FDI Automatic Route Compliant</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold text-brand-cyan">Delhi-NCR</p>
                <p className="text-xs text-slate-400">Physical Registered Office & Meeting Rooms</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">UPI + COD</p>
                <p className="text-xs text-slate-400">Native Indian Consumer Payment Rails</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-300">+91 & WhatsApp</p>
                <p className="text-xs text-slate-400">Domestic Trust & Support Desks</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('/services/india-business-entry')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold bg-brand-cyan text-navy-950 hover:bg-cyan-300 transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Explore India Entry Blueprint</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={() => onNavigate('/get-a-quote')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
              >
                Calculate India Setup Scope
              </button>
              <a
                href="https://wa.me/919289590900?text=Hi%20VoiceSpace,%20I%20am%20an%20overseas%20founder/brand%20interested%20in%20launching%20my%20business%20in%20India%20and%20establishing%20a%20local%20head%20office."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xs cursor-pointer"
              >
                <span>Consult on WhatsApp (+91 9289590900)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Languages & Core Engineering Stacks Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-line dark:border-slate-800 pb-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue dark:text-brand-cyan uppercase tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>Programming Languages & Engineering Foundations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white">
              Modern Polyglot Engineering
            </h2>
            <p className="text-sm sm:text-base text-slate-body dark:text-slate-300">
              We select languages and architectures tailored to your exact scalability, concurrency, and platform performance requirements—from microsecond Go daemons to type-safe TypeScript backends and native Swift mobile clients.
            </p>
          </div>

          {/* Interactive Category Segmented Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-surface-alt dark:bg-slate-900 rounded-2xl border border-slate-line/80 dark:border-slate-800 self-start md:self-auto">
            {[
              { id: 'all', label: 'All Stacks' },
              { id: 'Languages', label: 'Languages' },
              { id: 'Frontend & Mobile', label: 'Frontend / Mobile' },
              { id: 'Backend & Cloud', label: 'Backend / Cloud' },
              { id: 'AI & Data', label: 'AI / Data' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveLangCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  activeLangCategory === tab.id
                    ? 'bg-white dark:bg-slate-800 text-navy-900 dark:text-white shadow-xs border border-slate-line/60 dark:border-slate-700 font-bold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programming Languages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMMING_LANGUAGES_DATA.filter((item) => {
            if (activeLangCategory === 'all') return true;
            if (activeLangCategory === 'Languages') return item.category === 'Languages';
            if (activeLangCategory === 'Frontend & Mobile')
              return ['typescript', 'javascript', 'kotlin', 'swift', 'dart'].includes(item.slug);
            if (activeLangCategory === 'Backend & Cloud')
              return ['golang', 'rust', 'csharp', 'java', 'sql', 'typescript'].includes(item.slug);
            if (activeLangCategory === 'AI & Data')
              return ['python', 'sql', 'typescript'].includes(item.slug);
            return true;
          }).map((lang) => (
            <motion.div
              key={lang.slug}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-white dark:bg-[#111C33] border border-slate-line dark:border-slate-800 shadow-xs hover:border-brand-blue/60 dark:hover:border-brand-cyan/60 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform">
                      <TechIcon name={lang.iconKey} className="w-8 h-8 rounded-lg" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                        {lang.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">{lang.paradigm}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200/60 dark:border-emerald-800/60">
                    Production
                  </span>
                </div>

                <p className="text-xs text-slate-body dark:text-slate-400 leading-relaxed">
                  {lang.description}
                </p>

                {/* Inline Use Cases Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {lang.useCases.map((uc, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 px-2 py-0.5 rounded-md"
                    >
                      {uc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-line/50 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Enterprise Verified</span>
                <span className="text-brand-blue dark:text-brand-cyan font-semibold group-hover:underline inline-flex items-center gap-1 cursor-pointer" onClick={() => onNavigate('/get-a-quote')}>
                  Scope Stack &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enterprise Toolchain, Platforms & QA Testing Ecosystem */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-line dark:border-slate-800 pb-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue dark:text-brand-cyan uppercase tracking-wider">
              <Workflow className="w-4 h-4" />
              <span>Industry-Standard Toolchain</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white">
              Enterprise Platforms & Testing Ecosystem
            </h2>
            <p className="text-sm sm:text-base text-slate-body dark:text-slate-300">
              We eliminate technical silos by operating natively inside your preferred stack—from Atlassian agile boards to Power BI dashboards, Unity game engines, and automated testing suites.
            </p>
          </div>
          <div className="shrink-0">
            <button
              onClick={() => onNavigate('/get-a-quote')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 dark:bg-brand-blue dark:hover:bg-blue-600 text-white text-xs font-bold transition-all hover:-translate-y-0.5 cursor-pointer shadow-md"
            >
              <span>Build with Our Stack</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {TOOL_ECOSYSTEM.map((tool, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              className="p-5 rounded-2xl bg-white dark:bg-[#111C33] border border-slate-line dark:border-slate-800 hover:border-brand-blue/60 dark:hover:border-brand-cyan/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue dark:text-brand-cyan bg-brand-blue/10 dark:bg-brand-blue/20 px-2 py-0.5 rounded-md">
                    {tool.category}
                  </span>
                  <span className="text-[10px] font-medium text-slate-400 font-mono">
                    {tool.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform shrink-0">
                    <TechIcon name={tool.iconKey} className="w-7 h-7 rounded-lg" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                      {tool.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-body dark:text-slate-400 leading-relaxed">
                  {tool.description}
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-line/50 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Production Ready</span>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Scope & Budget Estimator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteEstimator
          onSelectEstimate={(summary) => {
            if (onApplyEstimate) {
              onApplyEstimate(summary);
            }
            onNavigate('/get-a-quote');
          }}
        />
      </section>

      {/* Why Choose VoiceSpace */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-extrabold text-navy-900 dark:text-white">
            A Smarter Way to Build and Scale Your Business
          </h2>
          <p className="text-slate-body dark:text-slate-300 text-base">
            We focus on technical rigor, pragmatic execution, and transparent communication rather than empty promises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((vp, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-slate-line dark:border-slate-800 bg-white dark:bg-[#111C33] space-y-2.5 hover-lift">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue dark:text-brand-cyan shrink-0" />
                <h3 className="text-base font-bold text-navy-900 dark:text-white">{vp.title}</h3>
              </div>
              <p className="text-sm text-slate-body dark:text-slate-400 leading-relaxed pl-8">{vp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-surface-alt dark:bg-[#0D1527] py-20 border-y border-slate-line dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-navy-900 dark:text-white">Industries We Can Serve</h2>
            <p className="text-slate-body dark:text-slate-300 text-sm">
              We design specialized delivery workflows adapted to industry-specific operating requirements and compliance standards.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate('/industries')}
                className="p-5 rounded-2xl bg-white dark:bg-[#111C33] border border-slate-line dark:border-slate-800 text-center font-semibold text-sm text-navy-900 dark:text-white shadow-xs flex items-center justify-center min-h-[80px] hover:border-brand-blue dark:hover:border-brand-cyan hover:text-brand-blue dark:hover:text-brand-cyan transition-colors cursor-pointer"
              >
                {ind}
              </div>
            ))}
          </div>

          <p className="text-xs text-center text-slate-body dark:text-slate-400 max-w-xl mx-auto">
            * For regulated domains (such as healthcare and finance), any specialized operations are subject to formal compliance, data privacy, and mutual contractual verification.
          </p>
        </div>
      </section>

      {/* How We Work: 4-Step Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-navy-900 dark:text-white">How We Work</h2>
          <p className="text-slate-body dark:text-slate-300 text-sm">A structured four-step methodology to de-risk projects and maintain accountability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((ps, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#111C33] border border-slate-line dark:border-slate-800 space-y-3 hover-lift">
              <span className="text-4xl font-extrabold text-slate-line dark:text-slate-700 block">{ps.step}</span>
              <h3 className="text-base font-bold text-navy-900 dark:text-white">{ps.title}</h3>
              <p className="text-xs text-slate-body dark:text-slate-400 leading-relaxed">{ps.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Ecosystem */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-white">Technology Ecosystem</h2>
            <p className="text-slate-400 text-sm">
              We leverage reliable modern technologies, scalable cloud infrastructure, and established protocols.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-4xl mx-auto">
            {[
              'React & Next.js',
              'TypeScript',
              'Node.js & Python',
              'Playwright & Cypress',
              'PostgreSQL & Redis',
              'AWS Amplify & Route 53',
              'Amazon SES & RDS',
              'REST & GraphQL APIs',
              'Docker & Kubernetes',
              'Tailwind CSS',
              'Zendesk, Freshdesk & Intercom',
            ].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2.5 rounded-xl bg-navy-800 border border-slate-700 text-slate-200 text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-navy-900 dark:text-white">Engagement Models</h2>
          <p className="text-slate-body dark:text-slate-300 text-sm">Select the working arrangement that matches your operational scope.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-slate-line dark:border-slate-800 bg-white dark:bg-[#111C33] space-y-4 flex flex-col justify-between hover-lift">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-navy-900 dark:text-white">Project-Based</h3>
              <p className="text-sm text-slate-body dark:text-slate-400 leading-relaxed">
                Ideal for well-defined web development, software builds, or initial system audits with fixed deliverables and timelines.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/get-a-quote')}
              className="text-sm font-semibold text-brand-blue dark:text-brand-cyan hover:underline pt-4 block text-left cursor-pointer"
            >
              Request project proposal &rarr;
            </button>
          </div>

          <div className="p-8 rounded-2xl border-2 border-brand-blue bg-white dark:bg-[#111C33] space-y-4 flex flex-col justify-between shadow-xs hover-lift">
            <div className="space-y-3">
              <span className="text-xs uppercase font-bold tracking-wider text-brand-blue dark:text-brand-cyan">Recommended</span>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white">Dedicated Team</h3>
              <p className="text-sm text-slate-body dark:text-slate-400 leading-relaxed">
                Add dedicated software developers, support agents, or marketing specialists fully integrated into your workflows.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/get-a-quote')}
              className="text-sm font-semibold text-brand-blue dark:text-brand-cyan hover:underline pt-4 block text-left cursor-pointer"
            >
              Discuss team staffing &rarr;
            </button>
          </div>

          <div className="p-8 rounded-2xl border border-slate-line dark:border-slate-800 bg-white dark:bg-[#111C33] space-y-4 flex flex-col justify-between hover-lift">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-navy-900 dark:text-white">Managed Services</h3>
              <p className="text-sm text-slate-body dark:text-slate-400 leading-relaxed">
                Comprehensive ongoing management covering continuous maintenance, back-office SLA handling, and multichannel support.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/get-a-quote')}
              className="text-sm font-semibold text-brand-blue dark:text-brand-cyan hover:underline pt-4 block text-left cursor-pointer"
            >
              Explore SLA packages &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-10 sm:p-16 text-white text-center space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold max-w-2xl mx-auto">
            Let's Build Something Great Together
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-base">
            Tell us about your goals, and let's explore how VoiceSpace can help your business move forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-7 py-3.5 rounded-xl text-sm font-semibold bg-brand-blue text-white hover:bg-blue-600 transition-all cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Request a Free Consultation
            </button>
            <button
              onClick={() => onNavigate('/get-a-quote')}
              className="px-7 py-3.5 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Get a Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-navy-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="text-slate-body dark:text-slate-400 text-sm">Clear, direct answers regarding our operations and policies.</p>
        </div>
        <Accordion items={faqs} />
      </section>
    </div>
  );
}
