import { servicesData } from '../lib/services-data';
import Accordion from '../components/ui/Accordion';
import { CheckCircle2, ArrowRight, ArrowLeft, Clock, ShieldCheck, Layers } from 'lucide-react';

interface SingleServicePageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

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

  return (
    <div className="space-y-20 py-12 sm:py-16">
      {/* Service Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-5">
          <button
            onClick={() => onNavigate('/services')}
            className="text-xs font-bold text-brand-blue uppercase tracking-wider hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to all services
          </button>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 leading-tight">
            {service.title}
          </h1>
          <p className="text-lg text-slate-body leading-relaxed">
            {service.shortDescription}
          </p>
          {service.pricingGuidance && (
            <div className="p-3.5 rounded-xl bg-surface-alt border border-slate-line/80 text-xs text-navy-900 font-medium">
              <span className="font-bold text-brand-blue">Standard Pricing Guidance: </span>
              <span>{service.pricingGuidance}</span>
            </div>
          )}
          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('/get-a-quote')}
              className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-brand-blue text-white hover:bg-blue-600 transition-colors cursor-pointer shadow-xs"
            >
              Get a Quote for {service.title}
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-surface-alt text-navy-900 hover:bg-slate-200/70 border border-slate-line transition-colors cursor-pointer"
            >
              Consult an Specialist
            </button>
          </div>
        </div>
      </section>

      {/* Deliverables & Business Benefits */}
      <section className="bg-surface-alt py-16 border-y border-slate-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-navy-900">What We Deliver</h2>
              <div className="space-y-3">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-line flex items-start gap-3 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-navy-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-navy-900">Key Business Benefits</h2>
              <div className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-line flex items-start gap-3 shadow-xs">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
                    <span className="text-sm text-slate-body leading-relaxed">{benefit}</span>
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
          <h2 className="text-3xl font-extrabold text-navy-900">Our Delivery Process</h2>
          <p className="text-slate-body text-sm">Clear milestones and disciplined quality assurance every step of the way.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {service.process.map((step, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-line space-y-3">
              <span className="text-3xl font-extrabold text-slate-line block">{step.step}</span>
              <h3 className="text-base font-bold text-navy-900">{step.title}</h3>
              <p className="text-xs text-slate-body leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-2xl font-extrabold text-navy-900 text-center">{service.title} FAQs</h2>
        <Accordion items={service.faqs} />
      </section>

      {/* Related Services Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-surface-alt border border-slate-line flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-navy-900">Complementary Solutions</h3>
            <p className="text-xs text-slate-body">Combine this service with adjacent VoiceSpace capabilities.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {service.relatedServices.map((r) => (
              <button
                key={r.slug}
                onClick={() => onNavigate(`/services/${r.slug}`)}
                className="px-4 py-2.5 rounded-xl bg-white border border-slate-line text-xs font-semibold text-navy-900 hover:border-brand-blue hover:text-brand-blue transition-colors cursor-pointer"
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
