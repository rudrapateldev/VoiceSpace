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
} from 'lucide-react';
import Accordion from '../components/ui/Accordion';
import QuoteEstimator from '../components/calculator/QuoteEstimator';
import { SERVICES_LIST } from '../lib/constants';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onApplyEstimate?: (summary: { service: string; budget: string; engagement: string; scope: string }) => void;
}

export default function HomePage({ onNavigate, onApplyEstimate }: HomePageProps) {
  const coreServices = [
    {
      icon: Code,
      title: 'Software Development',
      desc: 'Custom web platforms, microservices, business automation systems, and REST/GraphQL API integrations.',
      href: '/services/software-development',
      cta: 'Explore Software Build',
    },
    {
      icon: Globe,
      title: 'Web & Mobile Engineering',
      desc: 'High-conversion corporate websites, e-commerce solutions, and cross-platform iOS and Android applications.',
      href: '/services/web-development',
      cta: 'Explore Digital Platforms',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing & SEO',
      desc: 'Technical search optimization, paid media campaigns, content strategy, and conversion rate optimization.',
      href: '/services/digital-marketing',
      cta: 'Explore Growth Systems',
    },
    {
      icon: Headphones,
      title: 'Customer Support Services',
      desc: 'Multichannel email, live chat, ticketing management, and technical helpdesk operations tailored to your SLAs.',
      href: '/services/customer-support',
      cta: 'Explore Helpdesk Operations',
    },
    {
      icon: PhoneCall,
      title: 'Call Center Operations',
      desc: 'Structured inbound calling, appointment setting, and quality monitoring in strict compliance with telecom laws.',
      href: '/services/call-center',
      cta: 'Explore Telephony Support',
    },
    {
      icon: Briefcase,
      title: 'BPO & Back-Office Support',
      desc: 'Accurate data processing, spreadsheet normalization, CRM maintenance, and dedicated administrative support.',
      href: '/services/bpo',
      cta: 'Explore Outsourced Ops',
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
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue uppercase tracking-wider">
              <span>Technology & Business Support Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-900 leading-[1.12]">
              Your Vision. <br />
              Our Technology. <br />
              <span className="text-brand-blue">Shared Success.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-body leading-relaxed max-w-2xl">
              VoiceSpace helps businesses build powerful digital products, accelerate growth, deliver exceptional customer experiences, and streamline operations through technology, digital marketing, customer support, and business process outsourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold bg-brand-blue text-white hover:bg-blue-600 transition-colors shadow-xs cursor-pointer"
              >
                Get a Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={() => onNavigate('/services')}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold bg-surface-alt text-navy-900 hover:bg-slate-200/70 border border-slate-line transition-colors cursor-pointer"
              >
                Explore All Services
              </button>
            </div>
          </div>

          {/* Hero Visual Composition: Modern Integrated System Blueprint */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 rounded-3xl p-8 text-white shadow-xl border border-navy-800 overflow-hidden">
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
                  <div className="p-4 rounded-xl bg-navy-800/90 border border-slate-700/60 flex items-center gap-4">
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

                  <div className="p-4 rounded-xl bg-navy-800/90 border border-slate-700/60 flex items-center gap-4">
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

                  <div className="p-4 rounded-xl bg-navy-800/90 border border-slate-700/60 flex items-center gap-4">
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
                  <span className="text-brand-cyan font-mono">Status: Ready to Scale</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="bg-surface-alt py-20 border-y border-slate-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
              Complete Business Solutions Under One Roof
            </h2>
            <p className="text-slate-body text-base">
              From building your digital presence to managing customer interactions and business operations, VoiceSpace provides services designed to help businesses operate more efficiently and grow confidently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((svc, i) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 border border-slate-line shadow-xs hover:border-brand-blue hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900">{svc.title}</h3>
                    <p className="text-sm text-slate-body leading-relaxed">{svc.desc}</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-line/60">
                    <button
                      onClick={() => onNavigate(svc.href)}
                      className="text-sm font-semibold text-brand-blue hover:text-blue-700 inline-flex items-center cursor-pointer group"
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-line text-sm font-semibold text-navy-900 hover:border-brand-blue transition-colors cursor-pointer shadow-xs"
            >
              <span>View All 11 Specialized Services</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
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
          <h2 className="text-3xl font-extrabold text-navy-900">
            A Smarter Way to Build and Scale Your Business
          </h2>
          <p className="text-slate-body text-base">
            We focus on technical rigor, pragmatic execution, and transparent communication rather than empty promises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((vp, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-slate-line bg-white space-y-2.5">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue shrink-0" />
                <h3 className="text-base font-bold text-navy-900">{vp.title}</h3>
              </div>
              <p className="text-sm text-slate-body leading-relaxed pl-8">{vp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-surface-alt py-20 border-y border-slate-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-navy-900">Industries We Can Serve</h2>
            <p className="text-slate-body text-sm">
              We design specialized delivery workflows adapted to industry-specific operating requirements and compliance standards.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate('/industries')}
                className="p-5 rounded-2xl bg-white border border-slate-line text-center font-semibold text-sm text-navy-900 shadow-xs flex items-center justify-center min-h-[80px] hover:border-brand-blue hover:text-brand-blue transition-colors cursor-pointer"
              >
                {ind}
              </div>
            ))}
          </div>

          <p className="text-xs text-center text-slate-body max-w-xl mx-auto">
            * For regulated domains (such as healthcare and finance), any specialized operations are subject to formal compliance, data privacy, and mutual contractual verification.
          </p>
        </div>
      </section>

      {/* How We Work: 4-Step Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-navy-900">How We Work</h2>
          <p className="text-slate-body text-sm">A structured four-step methodology to de-risk projects and maintain accountability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((ps, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-line space-y-3">
              <span className="text-4xl font-extrabold text-slate-line block">{ps.step}</span>
              <h3 className="text-base font-bold text-navy-900">{ps.title}</h3>
              <p className="text-xs text-slate-body leading-relaxed">{ps.desc}</p>
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
              'PostgreSQL & Redis',
              'AWS Amplify & Route 53',
              'Amazon SES & RDS',
              'REST & GraphQL APIs',
              'Docker Containers',
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
          <h2 className="text-3xl font-extrabold text-navy-900">Engagement Models</h2>
          <p className="text-slate-body text-sm">Select the working arrangement that matches your operational scope.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-slate-line bg-white space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-navy-900">Project-Based</h3>
              <p className="text-sm text-slate-body leading-relaxed">
                Ideal for well-defined web development, software builds, or initial system audits with fixed deliverables and timelines.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/get-a-quote')}
              className="text-sm font-semibold text-brand-blue hover:underline pt-4 block text-left cursor-pointer"
            >
              Request project proposal &rarr;
            </button>
          </div>

          <div className="p-8 rounded-2xl border-2 border-brand-blue bg-white space-y-4 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <span className="text-xs uppercase font-bold tracking-wider text-brand-blue">Recommended</span>
              <h3 className="text-xl font-bold text-navy-900">Dedicated Team</h3>
              <p className="text-sm text-slate-body leading-relaxed">
                Add dedicated software developers, support agents, or marketing specialists fully integrated into your workflows.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/get-a-quote')}
              className="text-sm font-semibold text-brand-blue hover:underline pt-4 block text-left cursor-pointer"
            >
              Discuss team staffing &rarr;
            </button>
          </div>

          <div className="p-8 rounded-2xl border border-slate-line bg-white space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-navy-900">Managed Services</h3>
              <p className="text-sm text-slate-body leading-relaxed">
                Comprehensive ongoing management covering continuous maintenance, back-office SLA handling, and multichannel support.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/get-a-quote')}
              className="text-sm font-semibold text-brand-blue hover:underline pt-4 block text-left cursor-pointer"
            >
              Explore SLA packages &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-10 sm:p-16 text-white text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold max-w-2xl mx-auto">
            Let's Build Something Great Together
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-base">
            Tell us about your goals, and let's explore how VoiceSpace can help your business move forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-7 py-3.5 rounded-xl text-sm font-semibold bg-brand-blue text-white hover:bg-blue-600 transition-colors cursor-pointer shadow-xs"
            >
              Request a Free Consultation
            </button>
            <button
              onClick={() => onNavigate('/get-a-quote')}
              className="px-7 py-3.5 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer"
            >
              Get a Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-navy-900">Frequently Asked Questions</h2>
          <p className="text-slate-body text-sm">Clear, direct answers regarding our operations and policies.</p>
        </div>
        <Accordion items={faqs} />
      </section>
    </div>
  );
}
