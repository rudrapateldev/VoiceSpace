import Logo from '../ui/Logo';
import { SERVICES_LIST, SITE_CONFIG } from '../../lib/constants';
import { Server, ShieldCheck, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenAwsModal?: () => void;
}

export default function Footer({ onNavigate, onOpenAwsModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-slate-body border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" onClick={() => onNavigate('/')} />
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              VoiceSpace equips modern organizations with integrated technology solutions, custom software engineering, digital marketing pipelines, and managed customer support operations worldwide.
            </p>
            <div className="text-xs text-slate-400 pt-2 space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.locationDisplay}</span>
              </div>
            </div>

            {/* AWS Production Specs Trigger */}
            {onOpenAwsModal && (
              <div className="pt-2">
                <button
                  onClick={onOpenAwsModal}
                  className="inline-flex items-center gap-1.5 text-xs text-brand-cyan hover:underline cursor-pointer font-medium py-1"
                >
                  <Server className="w-3.5 h-3.5" />
                  <span>View AWS Production Deployment Specs &rarr;</span>
                </button>
              </div>
            )}
          </div>

          {/* Column 2: Technology Services */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-wider uppercase mb-4">
              Technology
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_LIST.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <button
                    onClick={() => onNavigate(`/services/${s.slug}`)}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Growth & Operations */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-wider uppercase mb-4">
              Growth & BPO
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_LIST.slice(4).map((s) => (
                <li key={s.slug}>
                  <button
                    onClick={() => onNavigate(`/services/${s.slug}`)}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company Links */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/industries')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Industries Served
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/careers')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/blog')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Insights & Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/get-a-quote')}
                  className="text-brand-cyan hover:underline font-semibold cursor-pointer"
                >
                  Get a Custom Quote &rarr;
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Legal & Attribution */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} {SITE_CONFIG.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
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
