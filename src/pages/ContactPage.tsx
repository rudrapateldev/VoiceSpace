import ContactForm from '../components/forms/ContactForm';
import { Mail, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../lib/constants';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold text-brand-blue uppercase tracking-wider">
          Direct Communications
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 leading-tight">
          Contact Us
        </h1>
        <p className="text-lg text-slate-body leading-relaxed">
          Have an inquiry, project brief, or partnership proposal? Send us a message and our technical directors will get in touch with you promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-surface-alt border border-slate-line space-y-6 shadow-xs">
            <h2 className="text-xl font-bold text-navy-900">Direct Inquiries</h2>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-brand-blue/10 text-brand-blue shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-navy-900 text-xs uppercase tracking-wider">
                    General Inquiries
                  </p>
                  <p className="text-slate-body text-sm mt-0.5">{SITE_CONFIG.email}</p>
                  <p className="text-[11px] text-slate-400">Filtered for immediate review</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-brand-blue/10 text-brand-blue shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-navy-900 text-xs uppercase tracking-wider">
                    Phone Inquiries
                  </p>
                  <p className="text-slate-body text-sm mt-0.5">{SITE_CONFIG.phoneDisplay}</p>
                  <p className="text-[11px] text-slate-400">Available Mon–Fri 9am–7pm IST</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-brand-blue/10 text-brand-blue shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-navy-900 text-xs uppercase tracking-wider">
                    Operating Facilities
                  </p>
                  <p className="text-slate-body text-sm mt-0.5">{SITE_CONFIG.locationDisplay}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-line text-xs text-slate-body space-y-2">
            <div className="flex items-center gap-2 font-bold text-navy-900">
              <Clock className="w-4 h-4 text-brand-blue" />
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
