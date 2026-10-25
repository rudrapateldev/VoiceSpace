import ContactForm from '../components/forms/ContactForm';
import { Mail, Phone, MapPin, Clock, ShieldCheck, MessageSquare, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../lib/constants';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold text-brand-blue dark:text-brand-cyan uppercase tracking-wider">
          Direct Communications
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 dark:text-white leading-tight">
          Contact Us
        </h1>
        <p className="text-lg text-slate-body dark:text-slate-300 leading-relaxed">
          Have an inquiry, project brief, or partnership proposal? Send us a message and our technical directors will get in touch with you promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-surface-alt dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 space-y-6 shadow-xs transition-colors">
            <h2 className="text-xl font-bold text-navy-900 dark:text-white">Direct Inquiries</h2>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-navy-900 dark:text-white text-xs uppercase tracking-wider">
                    General Inquiries
                  </p>
                  <p className="text-slate-body dark:text-slate-300 text-sm mt-0.5">{SITE_CONFIG.email}</p>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500">Filtered for immediate review</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-navy-900 dark:text-white text-xs uppercase tracking-wider">
                    Phone Inquiries
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-slate-body dark:text-slate-300 text-sm mt-0.5">
                    <a href="tel:+919289590900" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors font-medium">
                      +91 9289590900
                    </a>
                    <span className="hidden sm:inline text-slate-300 dark:text-slate-600">/</span>
                    <a href="tel:+919452508443" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors font-medium">
                      +91 9452508443
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">Available Mon–Sat 9am–7pm IST (24/7 Managed BPO)</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-navy-900 dark:text-white text-xs uppercase tracking-wider">
                    Operating Facilities
                  </p>
                  <p className="text-slate-body dark:text-slate-300 text-sm mt-0.5">{SITE_CONFIG.locationDisplay}</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3373,+Sector+56,+Faridabad,+Haryana,+India+121004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-brand-blue dark:text-brand-cyan font-semibold hover:underline mt-1.5"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp Connect Card */}
          <div className="p-6 rounded-3xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/80 text-xs text-emerald-950 dark:text-emerald-200 space-y-3 transition-colors">
            <div className="flex items-center gap-2.5 font-bold text-emerald-900 dark:text-emerald-300 text-sm">
              <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Instant WhatsApp Scope Review</span>
            </div>
            <p className="text-emerald-800 dark:text-emerald-300/90 leading-relaxed">
              Prefer messaging directly? Connect with our technical directors on WhatsApp for immediate scoping or consultation.
            </p>
            <a
              href="https://wa.me/919289590900?text=Hello%20VoiceSpace%20India%20team%2C%20I%20would%20like%20to%20discuss%20a%20new%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer active:scale-[0.99]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Chat on WhatsApp (+91 9289590900)
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 text-xs text-slate-body dark:text-slate-300 space-y-2 transition-colors">
            <div className="flex items-center gap-2 font-bold text-navy-900 dark:text-white">
              <Clock className="w-4 h-4 text-brand-blue dark:text-brand-cyan" />
              <span>Response SLA Commitment</span>
            </div>
            <p>
              We acknowledge and respond to all qualified business inquiries within 24 business hours with an initial scope review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
