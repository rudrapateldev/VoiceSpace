import { useState } from 'react';
import { MessageSquare, X, Send, PhoneCall } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/constants';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const primaryPhone = '919289590900';
  const secondaryPhone = '919452508443';

  const defaultMessage = encodeURIComponent(
    'Hello VoiceSpace India team, I would like to inquire about your software, marketing, or BPO services.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Expanded Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-92 bg-white rounded-3xl shadow-2xl border border-slate-line overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-navy-900 to-[#1E3A8A] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-bold shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">VoiceSpace Connect</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[11px] text-slate-300">Quick Response Active</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-surface-alt/60 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-2xl shadow-xs border border-slate-line/60 text-slate-body leading-relaxed">
              👋 Welcome to <strong className="text-navy-900">VoiceSpace India Private Limited</strong>! How can we assist with your project today?
            </div>

            <div className="space-y-2 pt-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Direct WhatsApp Desks:
              </p>

              <a
                href={`https://wa.me/${primaryPhone}?text=${defaultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-xs transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <div className="text-left">
                    <p className="text-xs font-bold leading-tight">Business & Tech Inquiries</p>
                    <p className="text-[10px] text-emerald-100">+91 9289590900</p>
                  </div>
                </div>
                <Send className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={`https://wa.me/${secondaryPhone}?text=${defaultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-line text-navy-900 font-semibold shadow-xs transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-brand-blue shrink-0" />
                  <div className="text-left">
                    <p className="text-xs font-bold leading-tight">Support & Escalations</p>
                    <p className="text-[10px] text-slate-400">+91 9452508443</p>
                  </div>
                </div>
                <Send className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <p className="text-[10px] text-center text-slate-400 pt-1">
              Faridabad, Haryana (HQ) • Mon–Sat 9am–7pm IST
            </p>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/40 group active:scale-95"
        aria-label="Open quick WhatsApp communication"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping"></span>
        </div>
        <span className="text-xs font-bold hidden sm:inline-block tracking-wide">
          Quick Inquiry
        </span>
      </button>
    </div>
  );
}
