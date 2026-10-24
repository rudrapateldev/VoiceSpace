import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import Logo from '../ui/Logo';
import { SERVICES_LIST } from '../../lib/constants';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
    setServicesDropdown(false);
  };

  const isServicesActive = currentPath.startsWith('/services');

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single element) */}
          <Logo variant="dark" onClick={() => handleNavClick('/')} />

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium" aria-label="Main Navigation">
            <button
              onClick={() => handleNavClick('/')}
              className={`whitespace-nowrap cursor-pointer transition-colors ${
                currentPath === '/' ? 'text-brand-blue font-semibold' : 'text-navy-900 hover:text-brand-blue'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('/about')}
              className={`whitespace-nowrap cursor-pointer transition-colors ${
                currentPath === '/about' ? 'text-brand-blue font-semibold' : 'text-navy-900 hover:text-brand-blue'
              }`}
            >
              About
            </button>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                aria-expanded={servicesDropdown}
                className={`flex items-center gap-1 whitespace-nowrap cursor-pointer transition-colors py-2 ${
                  isServicesActive ? 'text-brand-blue font-semibold' : 'text-navy-900 hover:text-brand-blue'
                }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${servicesDropdown ? 'rotate-180' : ''}`}
                />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full -left-20 w-84 bg-white border border-slate-line shadow-xl rounded-2xl p-2 z-50">
                  <div className="px-3 py-2 border-b border-slate-line/50 flex items-center justify-between mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-body">
                      Our Solutions
                    </span>
                    <button
                      onClick={() => handleNavClick('/services')}
                      className="text-xs font-semibold text-brand-blue hover:underline cursor-pointer"
                    >
                      All Services &rarr;
                    </button>
                  </div>
                  <div className="max-h-80 overflow-y-auto space-y-0.5">
                    {SERVICES_LIST.map((s) => (
                      <button
                        key={s.slug}
                        onClick={() => handleNavClick(`/services/${s.slug}`)}
                        className={`w-full text-left px-3 py-2 text-xs rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                          currentPath === `/services/${s.slug}`
                            ? 'bg-brand-blue/10 text-brand-blue font-semibold'
                            : 'text-navy-800 hover:bg-surface-alt hover:text-brand-blue'
                        }`}
                      >
                        <span>{s.title}</span>
                        <span className="text-[10px] text-slate-400 font-normal">{s.category}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('/industries')}
              className={`whitespace-nowrap cursor-pointer transition-colors ${
                currentPath === '/industries' ? 'text-brand-blue font-semibold' : 'text-navy-900 hover:text-brand-blue'
              }`}
            >
              Industries
            </button>

            <button
              onClick={() => handleNavClick('/careers')}
              className={`whitespace-nowrap cursor-pointer transition-colors ${
                currentPath === '/careers' ? 'text-brand-blue font-semibold' : 'text-navy-900 hover:text-brand-blue'
              }`}
            >
              Careers
            </button>

            <button
              onClick={() => handleNavClick('/blog')}
              className={`whitespace-nowrap cursor-pointer transition-colors ${
                currentPath.startsWith('/blog') ? 'text-brand-blue font-semibold' : 'text-navy-900 hover:text-brand-blue'
              }`}
            >
              Insights
            </button>

            <button
              onClick={() => handleNavClick('/contact')}
              className={`whitespace-nowrap cursor-pointer transition-colors ${
                currentPath === '/contact' ? 'text-brand-blue font-semibold' : 'text-navy-900 hover:text-brand-blue'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('/get-a-quote')}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-blue text-white hover:bg-blue-600 transition-colors shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-navy-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-line px-5 pt-4 pb-6 max-h-[82vh] overflow-y-auto shadow-xl">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('/')}
              className="w-full text-left py-2.5 text-base font-semibold text-navy-900 border-b border-slate-line/50"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('/about')}
              className="w-full text-left py-2.5 text-base font-semibold text-navy-900 border-b border-slate-line/50"
            >
              About VoiceSpace
            </button>
            <div className="py-2.5 border-b border-slate-line/50">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-body">Services</span>
                <button
                  onClick={() => handleNavClick('/services')}
                  className="text-xs font-semibold text-brand-blue"
                >
                  All Services &rarr;
                </button>
              </div>
              <div className="pl-3 space-y-1.5 border-l-2 border-brand-blue/30">
                {SERVICES_LIST.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => handleNavClick(`/services/${s.slug}`)}
                    className="block w-full text-left py-1 text-sm text-slate-body hover:text-brand-blue"
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => handleNavClick('/industries')}
              className="w-full text-left py-2.5 text-base font-semibold text-navy-900 border-b border-slate-line/50"
            >
              Industries Served
            </button>
            <button
              onClick={() => handleNavClick('/careers')}
              className="w-full text-left py-2.5 text-base font-semibold text-navy-900 border-b border-slate-line/50"
            >
              Careers
            </button>
            <button
              onClick={() => handleNavClick('/blog')}
              className="w-full text-left py-2.5 text-base font-semibold text-navy-900 border-b border-slate-line/50"
            >
              Insights & Articles
            </button>
            <button
              onClick={() => handleNavClick('/contact')}
              className="w-full text-left py-2.5 text-base font-semibold text-navy-900 border-b border-slate-line/50"
            >
              Contact Us
            </button>
          </div>
          <div className="mt-5 pt-4">
            <button
              onClick={() => handleNavClick('/get-a-quote')}
              className="w-full flex items-center justify-center py-3.5 rounded-xl text-sm font-semibold bg-brand-blue text-white cursor-pointer shadow-xs"
            >
              Request a Custom Quote <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
