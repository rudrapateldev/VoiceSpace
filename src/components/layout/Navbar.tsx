/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  MessageSquare,
  Bot,
  Code,
  ShieldCheck,
  Palette,
  Workflow,
  Headphones,
  Sparkles,
  Gamepad2,
  Server,
} from 'lucide-react';
import Logo from '../ui/Logo';
import TechIcon from '../ui/TechIcon';
import ThemeToggle from '../ui/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';
import { SERVICES_LIST } from '../../lib/constants';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const { theme } = useTheme();
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

  // Categorized services for non-scrollable mega-menu columns
  const engineeringServices = SERVICES_LIST.filter((s) => s.category === 'Technology');
  const qualityServices = SERVICES_LIST.filter((s) => s.category === 'Quality');
  const strategyCreativeServices = SERVICES_LIST.filter(
    (s) => s.category === 'Strategy' || s.category === 'Creative'
  );
  const operationsGrowthServices = SERVICES_LIST.filter(
    (s) => s.category === 'Growth' || s.category === 'Operations'
  );

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#0A0F1D]/95 backdrop-blur-md border-b border-slate-line dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single element) */}
          <Logo variant={theme === 'dark' ? 'light' : 'dark'} onClick={() => handleNavClick('/')} />

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium" aria-label="Main Navigation">
            <button
              onClick={() => handleNavClick('/')}
              className={`whitespace-nowrap cursor-pointer transition-colors ${
                currentPath === '/'
                  ? 'text-brand-blue dark:text-brand-cyan font-semibold'
                  : 'text-navy-900 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-cyan'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('/about')}
              className={`whitespace-nowrap cursor-pointer transition-colors ${
                currentPath === '/about'
                  ? 'text-brand-blue dark:text-brand-cyan font-semibold'
                  : 'text-navy-900 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-cyan'
              }`}
            >
              About
            </button>

            {/* Non-Scrollable Mega-Menu Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                aria-expanded={servicesDropdown}
                className={`flex items-center gap-1.5 whitespace-nowrap cursor-pointer transition-colors py-2 ${
                  isServicesActive
                    ? 'text-brand-blue dark:text-brand-cyan font-semibold'
                    : 'text-navy-900 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-cyan'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdown ? 'rotate-180 text-brand-blue dark:text-brand-cyan' : ''
                  }`}
                />
              </button>

              {/* Mega-Menu Container: Multi-Column, Zero-Scroll */}
              {servicesDropdown && (
                <div className="absolute top-full -left-56 xl:-left-64 w-[860px] xl:w-[940px] bg-white dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 shadow-2xl rounded-3xl p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {/* Top Bar inside Dropdown */}
                  <div className="flex items-center justify-between border-b border-slate-line/60 dark:border-slate-800 pb-3 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-blue dark:bg-brand-cyan"></span>
                      <span className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white">
                        VoiceSpace Service Matrix (Full Capabilities)
                      </span>
                    </div>
                    <button
                      onClick={() => handleNavClick('/services')}
                      className="text-xs font-bold text-brand-blue dark:text-brand-cyan hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>View All {SERVICES_LIST.length} Services Directory</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* 4 Multi-Column Grid (Completely Non-Scrollable) */}
                  <div className="grid grid-cols-4 gap-6">
                    {/* Column 1: AI & Engineering */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-navy-900 dark:text-white pb-1 border-b border-slate-line/50 dark:border-slate-800">
                        <div className="p-1 rounded-md bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-brand-cyan">
                          <Bot className="w-3.5 h-3.5" />
                        </div>
                        <span>AI & Cloud</span>
                      </div>
                      <div className="space-y-1">
                        {engineeringServices.map((s) => (
                          <button
                            key={s.slug}
                            onClick={() => handleNavClick(`/services/${s.slug}`)}
                            className={`w-full text-left px-2.5 py-1.5 text-xs rounded-xl transition-colors cursor-pointer group flex flex-col ${
                              currentPath === `/services/${s.slug}`
                                ? 'bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-brand-cyan font-semibold'
                                : 'text-slate-700 dark:text-slate-300 hover:bg-surface-alt dark:hover:bg-slate-800 hover:text-brand-blue dark:hover:text-brand-cyan'
                            }`}
                          >
                            <span className="font-semibold group-hover:translate-x-0.5 transition-transform">
                              {s.title}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Software Testing & QA Suite */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-navy-900 dark:text-white pb-1 border-b border-slate-line/50 dark:border-slate-800">
                        <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                          <ShieldCheck className="w-3.5 h-3.5" />
                        </div>
                        <span>QA & Testing</span>
                      </div>
                      <div className="space-y-1">
                        {qualityServices.map((s) => (
                          <button
                            key={s.slug}
                            onClick={() => handleNavClick(`/services/${s.slug}`)}
                            className={`w-full text-left px-2.5 py-1.5 text-xs rounded-xl transition-colors cursor-pointer group flex flex-col ${
                              currentPath === `/services/${s.slug}`
                                ? 'bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 font-semibold'
                                : 'text-slate-700 dark:text-slate-300 hover:bg-surface-alt dark:hover:bg-slate-800 hover:text-emerald-700 dark:hover:text-emerald-300'
                            }`}
                          >
                            <span className="font-semibold group-hover:translate-x-0.5 transition-transform">
                              {s.title}
                            </span>
                          </button>
                        ))}
                        <div className="p-2 rounded-xl bg-surface-alt/70 dark:bg-slate-800/80 border border-slate-line/60 dark:border-slate-700 text-[10px] text-slate-500 dark:text-slate-400 space-y-1 mt-2">
                          <p className="font-bold text-navy-900 dark:text-slate-200">Supported Tooling:</p>
                          <p className="leading-tight">
                            Playwright • Cypress • Selenium • JMeter • k6 • TestRail
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Column 3: Product, Design & Media */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-navy-900 dark:text-white pb-1 border-b border-slate-line/50 dark:border-slate-800">
                        <div className="p-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                          <Palette className="w-3.5 h-3.5" />
                        </div>
                        <span>Product & Media</span>
                      </div>
                      <div className="space-y-1">
                        {strategyCreativeServices.map((s) => (
                          <button
                            key={s.slug}
                            onClick={() => handleNavClick(`/services/${s.slug}`)}
                            className={`w-full text-left px-2.5 py-1.5 text-xs rounded-xl transition-colors cursor-pointer group flex flex-col ${
                              currentPath === `/services/${s.slug}`
                                ? 'bg-indigo-500/10 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 font-semibold'
                                : 'text-slate-700 dark:text-slate-300 hover:bg-surface-alt dark:hover:bg-slate-800 hover:text-indigo-700 dark:hover:text-indigo-300'
                            }`}
                          >
                            <span className="font-semibold group-hover:translate-x-0.5 transition-transform">
                              {s.title}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Column 4: Growth & Managed BPO */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-navy-900 dark:text-white pb-1 border-b border-slate-line/50 dark:border-slate-800">
                        <div className="p-1 rounded-md bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
                          <Headphones className="w-3.5 h-3.5" />
                        </div>
                        <span>Growth & BPO</span>
                      </div>
                      <div className="space-y-1">
                        {operationsGrowthServices.map((s) => (
                          <button
                            key={s.slug}
                            onClick={() => handleNavClick(`/services/${s.slug}`)}
                            className={`w-full text-left px-2.5 py-1.5 text-xs rounded-xl transition-colors cursor-pointer group flex flex-col ${
                              currentPath === `/services/${s.slug}`
                                ? 'bg-amber-500/10 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300 font-semibold'
                                : 'text-slate-700 dark:text-slate-300 hover:bg-surface-alt dark:hover:bg-slate-800 hover:text-amber-700 dark:hover:text-amber-300'
                            }`}
                          >
                            <span className="font-semibold group-hover:translate-x-0.5 transition-transform flex items-center justify-between gap-1">
                              <span>{s.title}</span>
                              {s.slug === 'india-business-entry' && (
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 shrink-0">
                                  🇮🇳 HQ
                                </span>
                              )}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mega-Menu Bottom Action Bar */}
                  <div className="mt-5 pt-3.5 border-t border-slate-line/80 dark:border-slate-800 flex items-center justify-between bg-surface-alt/80 dark:bg-slate-900/80 -mx-6 -mb-6 px-6 py-3 rounded-b-3xl text-xs">
                    <div className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1.5 shrink-0">
                        <TechIcon name="jira" className="w-3.5 h-3.5 rounded" />
                        <TechIcon name="figma" className="w-3.5 h-3.5 rounded" />
                        <TechIcon name="cypress" className="w-3.5 h-3.5 rounded" />
                        <TechIcon name="testrail" className="w-3.5 h-3.5 rounded" />
                        <TechIcon name="unity" className="w-3.5 h-3.5 rounded" />
                        <TechIcon name="powerbi" className="w-3.5 h-3.5 rounded" />
                      </div>
                      <span className="hidden sm:inline text-[11px]">
                        Production Stacks: Jira • Figma • Cypress • TestRail • Unity • Power BI • AWS
                      </span>
                    </div>
                    <button
                      onClick={() => handleNavClick('/get-a-quote')}
                      className="font-bold text-brand-blue dark:text-brand-cyan hover:underline inline-flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      <span>Custom Scope & Quote &rarr;</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('/industries')}
              className={`whitespace-nowrap cursor-pointer transition-colors ${
                currentPath === '/industries'
                  ? 'text-brand-blue dark:text-brand-cyan font-semibold'
                  : 'text-navy-900 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-cyan'
              }`}
            >
              Industries
            </button>

            <button
              onClick={() => handleNavClick('/careers')}
              className={`whitespace-nowrap cursor-pointer transition-colors ${
                currentPath === '/careers'
                  ? 'text-brand-blue dark:text-brand-cyan font-semibold'
                  : 'text-navy-900 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-cyan'
              }`}
            >
              Careers
            </button>

            <button
              onClick={() => handleNavClick('/blog')}
              className={`whitespace-nowrap cursor-pointer transition-colors ${
                currentPath.startsWith('/blog')
                  ? 'text-brand-blue dark:text-brand-cyan font-semibold'
                  : 'text-navy-900 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-cyan'
              }`}
            >
              Insights
            </button>

            <button
              onClick={() => handleNavClick('/contact')}
              className={`whitespace-nowrap cursor-pointer transition-colors ${
                currentPath === '/contact'
                  ? 'text-brand-blue dark:text-brand-cyan font-semibold'
                  : 'text-navy-900 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-cyan'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Direct Phone, Theme Toggle & Primary CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="tel:+919289590900"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-navy-800 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-cyan py-2 px-3 rounded-xl hover:bg-surface-alt dark:hover:bg-slate-800 transition-colors"
              title="Call VoiceSpace India"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan" />
              <span>+91 9289590900</span>
            </a>

            {/* Theme Toggle Button (Light / Dark) */}
            <ThemeToggle />

            <button
              onClick={() => handleNavClick('/get-a-quote')}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-blue text-white hover:bg-blue-600 transition-colors shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-navy-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0F172A] border-b border-slate-line dark:border-slate-800 px-5 pt-4 pb-6 max-h-[82vh] overflow-y-auto shadow-xl transition-colors">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('/')}
              className="w-full text-left py-2.5 text-base font-semibold text-navy-900 dark:text-white border-b border-slate-line/50 dark:border-slate-800"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('/about')}
              className="w-full text-left py-2.5 text-base font-semibold text-navy-900 dark:text-white border-b border-slate-line/50 dark:border-slate-800"
            >
              About VoiceSpace
            </button>
            <div className="py-2.5 border-b border-slate-line/50 dark:border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-body dark:text-slate-400">
                  All Capabilities ({SERVICES_LIST.length})
                </span>
                <button
                  onClick={() => handleNavClick('/services')}
                  className="text-xs font-semibold text-brand-blue dark:text-brand-cyan"
                >
                  View Directory &rarr;
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pl-2 border-l-2 border-brand-blue/30">
                {SERVICES_LIST.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => handleNavClick(`/services/${s.slug}`)}
                    className={`block w-full text-left py-1 text-xs truncate ${
                      s.slug === 'india-business-entry'
                        ? 'font-bold text-amber-700 dark:text-amber-400'
                        : 'text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-cyan'
                    }`}
                  >
                    {s.slug === 'india-business-entry' ? `🇮🇳 ${s.title}` : s.title}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => handleNavClick('/industries')}
              className="w-full text-left py-2.5 text-base font-semibold text-navy-900 dark:text-white border-b border-slate-line/50 dark:border-slate-800"
            >
              Industries Served
            </button>
            <button
              onClick={() => handleNavClick('/careers')}
              className="w-full text-left py-2.5 text-base font-semibold text-navy-900 dark:text-white border-b border-slate-line/50 dark:border-slate-800"
            >
              Careers
            </button>
            <button
              onClick={() => handleNavClick('/blog')}
              className="w-full text-left py-2.5 text-base font-semibold text-navy-900 dark:text-white border-b border-slate-line/50 dark:border-slate-800"
            >
              Insights & Articles
            </button>
            <button
              onClick={() => handleNavClick('/contact')}
              className="w-full text-left py-2.5 text-base font-semibold text-navy-900 dark:text-white border-b border-slate-line/50 dark:border-slate-800"
            >
              Contact Us
            </button>
          </div>
          <div className="mt-5 pt-4 space-y-2.5">
            <button
              onClick={() => handleNavClick('/get-a-quote')}
              className="w-full flex items-center justify-center py-3.5 rounded-xl text-sm font-semibold bg-brand-blue text-white cursor-pointer shadow-xs hover:bg-blue-600 transition-colors"
            >
              Request a Custom Quote <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="tel:+919289590900"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold bg-surface-alt dark:bg-slate-800 text-navy-900 dark:text-white border border-slate-line dark:border-slate-700 hover:border-brand-blue transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan" />
                Call Desk
              </a>
              <a
                href="https://wa.me/919289590900"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                WhatsApp
              </a>
            </div>
            <div className="pt-2">
              <ThemeToggle showLabel className="w-full py-2.5 justify-center" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
