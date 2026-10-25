import Logo from '../ui/Logo';
import TechIcon from '../ui/TechIcon';
import { SERVICES_LIST, SITE_CONFIG } from '../../lib/constants';
import {
  Server,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Lock,
  Award,
  Globe2,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenAwsModal?: () => void;
}

export default function Footer({ onNavigate, onOpenAwsModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-slate-body border-t border-navy-800 font-sans selection:bg-brand-blue selection:text-white">
      {/* Top Pre-Footer Banner: Direct Engagement Prompt */}
      <div className="border-b border-navy-800/80 bg-navy-900/60 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ready to engineer your next platform or scale operations?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Speak with our senior solutions architects and delivery directors for a direct scoping review.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+919289590900"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-brand-cyan" />
              <span>+91 9289590900</span>
            </a>
            <button
              onClick={() => onNavigate('/get-a-quote')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              <span>Request Project Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Operating Facility (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="space-y-3">
              <Logo variant="light" onClick={() => onNavigate('/')} />
              <p className="text-xs font-bold text-slate-300 tracking-wide">
                {SITE_CONFIG.legalName}
              </p>
            </div>

            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              An integrated technology, creative engineering, and business process outsourcing firm. We deliver custom software, AI/RAG architectures, Unity game development, automated QA testing, UI/UX design, and managed operations worldwide.
            </p>

            {/* Direct Contact Matrix */}
            <div className="text-xs text-slate-400 space-y-2.5 pt-1">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <div className="flex flex-wrap items-center gap-2">
                  <a href="tel:+919289590900" className="hover:text-white transition-colors">
                    +91 9289590900
                  </a>
                  <span className="text-slate-600">/</span>
                  <a href="tel:+919452508443" className="hover:text-white transition-colors">
                    +91 9452508443
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  3373, Sector 56, Faridabad, Haryana, India 121004
                </span>
              </div>
            </div>

            {/* AWS Production Specs Trigger */}
            {onOpenAwsModal && (
              <div className="pt-2">
                <button
                  onClick={onOpenAwsModal}
                  className="inline-flex items-center gap-1.5 text-xs text-brand-cyan hover:underline cursor-pointer font-semibold py-1 group"
                >
                  <Server className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span>View AWS Production Deployment Specs &rarr;</span>
                </button>
              </div>
            )}
          </div>

          {/* Column 2: Technology & AI (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">
              Engineering & AI
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/services/ai-llm-rag')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  AI, LLM & RAG Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/software-development')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Software Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/web-development')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Website Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/mobile-app-development')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Mobile App Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/game-development')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Game Dev (Unity & 3D)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/cloud-devops-security')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Cloud & DevOps (AWS/Azure)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: QA, Security & Product Strategy (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">
              QA, Strategy & Media
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/services/qa-software-testing')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Software Testing & QA
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/product-management')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Product Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/project-management')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Agile Delivery (Jira/Asana)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/business-analysis')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Business Analysis & BPMN
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/ui-ux-graphic-design')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  UI/UX & Graphic Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/video-creation-editing')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Video Creation & Motion
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Growth, BPO & Support (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">
              Growth & Operations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/services/digital-marketing')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Digital Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/seo')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Search Optimization (SEO)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/customer-support')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Customer Support Helpdesk
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/call-center')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Call Center Operations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/bpo')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Managed BPO Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/back-office')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Back-Office Administrative
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/india-business-entry')}
                  className="hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1.5 text-brand-cyan font-medium"
                >
                  <span>🇮🇳 India Entry & Head Office</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Company & Direct Actions (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  About VoiceSpace
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/industries')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Industries We Serve
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/careers')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Careers & Open Roles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/blog')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Insights & Engineering Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact Support & Sales
                </button>
              </li>
              <li className="pt-1">
                <button
                  onClick={() => onNavigate('/get-a-quote')}
                  className="text-brand-cyan hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Get Custom Quote</span>
                  <span>&rarr;</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Operational Security & Standards Trust Bar */}
        <div className="mt-14 pt-8 border-t border-navy-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-400 text-[11px]">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-navy-800/50 border border-navy-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>ISO/IEC 27001 & SOC 2 Security Baseline</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-navy-800/50 border border-navy-800">
              <Lock className="w-4 h-4 text-brand-cyan shrink-0" />
              <span>100% IP & Code Ownership Assigned</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-navy-800/50 border border-navy-800">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Strict Mutual NDA & Data Privacy</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-navy-800/50 border border-navy-800">
              <Globe2 className="w-4 h-4 text-brand-blue shrink-0" />
              <span>Faridabad, Haryana (HQ) • Global Hubs</span>
            </div>
          </div>
        </div>

        {/* Technology Ecosystem Badges Ribbon */}
        <div className="mt-8 pt-6 border-t border-navy-800/80 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
            <span className="font-semibold text-slate-200 uppercase tracking-wider text-[10px]">
              Technology & Tooling Ecosystem:
            </span>
            <span className="text-[10px] text-slate-400">
              Native tooling integrations across development, testing & product operations
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { name: 'TypeScript', iconKey: 'typescript' },
              { name: 'Python', iconKey: 'python' },
              { name: 'Go', iconKey: 'golang' },
              { name: 'Rust', iconKey: 'rust' },
              { name: 'C# / Unity', iconKey: 'csharp' },
              { name: 'React', iconKey: 'react' },
              { name: 'AWS Cloud', iconKey: 'aws' },
              { name: 'PostgreSQL', iconKey: 'postgresql' },
              { name: 'Jira Software', iconKey: 'jira' },
              { name: 'Confluence', iconKey: 'confluence' },
              { name: 'Miro', iconKey: 'miro' },
              { name: 'Figma', iconKey: 'figma' },
              { name: 'Lucidchart', iconKey: 'lucidchart' },
              { name: 'Asana', iconKey: 'asana' },
              { name: 'Monday.com', iconKey: 'monday' },
              { name: 'Trello', iconKey: 'trello' },
              { name: 'Power BI', iconKey: 'powerbi' },
              { name: 'Mixpanel', iconKey: 'mixpanel' },
              { name: 'TestRail', iconKey: 'testrail' },
              { name: 'Playwright', iconKey: 'playwright' },
              { name: 'Cypress', iconKey: 'cypress' },
              { name: 'Selenium', iconKey: 'selenium' },
              { name: 'Apache JMeter', iconKey: 'jmeter' },
              { name: 'Zoho Suite', iconKey: 'zoho' },
              { name: 'Excel / Sheets', iconKey: 'excel' },
              { name: 'Docs / Word', iconKey: 'word' },
              { name: 'PowerPoint', iconKey: 'powerpoint' },
              { name: 'Premiere Pro', iconKey: 'premiere' },
            ].map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-navy-800/90 hover:bg-navy-700/80 border border-navy-700/70 text-slate-300 hover:text-white text-[11px] transition-all hover:scale-105 cursor-default shadow-xs"
              >
                <TechIcon name={t.iconKey} className="w-3.5 h-3.5 shrink-0" />
                <span className="font-medium">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Attribution Bar */}
        <div className="mt-8 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} {SITE_CONFIG.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => onNavigate('/privacy-policy')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('/terms-and-conditions')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => onNavigate('/cookie-policy')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
