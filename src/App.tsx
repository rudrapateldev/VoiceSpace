/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AwsDeploymentModal from './components/deployment/AwsDeploymentModal';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import { ThemeProvider } from './context/ThemeContext';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesIndexPage from './pages/ServicesIndexPage';
import SingleServicePage from './pages/SingleServicePage';
import IndustriesPage from './pages/IndustriesPage';
import CareersPage from './pages/CareersPage';
import BlogIndexPage from './pages/BlogIndexPage';
import SingleBlogPostPage from './pages/SingleBlogPostPage';
import ContactPage from './pages/ContactPage';
import GetAQuotePage from './pages/GetAQuotePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import NotFoundPage from './pages/NotFoundPage';

import { servicesData } from './lib/services-data';
import { BLOG_POSTS, SITE_CONFIG } from './lib/constants';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path && path !== '' ? path : '/';
    }
    return '/';
  });

  const [awsModalOpen, setAwsModalOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string | undefined>(undefined);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title and scroll top on route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let title = `${SITE_CONFIG.name} – Technology, Digital Marketing & BPO Solutions`;

    if (currentPath === '/about') {
      title = `About ${SITE_CONFIG.name} – Technology & Business Services`;
    } else if (currentPath === '/services') {
      title = `Our Services – Technology, Marketing & Operations | ${SITE_CONFIG.name}`;
    } else if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      const svc = servicesData[slug];
      if (svc) title = svc.metaTitle;
    } else if (currentPath === '/industries') {
      title = `Industries We Serve | ${SITE_CONFIG.name}`;
    } else if (currentPath === '/careers') {
      title = `Careers at ${SITE_CONFIG.name} | Join Our Team`;
    } else if (currentPath === '/blog') {
      title = `Insights & Articles | ${SITE_CONFIG.name}`;
    } else if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      const post = BLOG_POSTS.find((p) => p.slug === slug);
      if (post) title = `${post.title} | ${SITE_CONFIG.name} Insights`;
    } else if (currentPath === '/contact') {
      title = `Contact ${SITE_CONFIG.name} | Get in Touch`;
    } else if (currentPath === '/get-a-quote') {
      title = `Request a Quote & Project Proposal | ${SITE_CONFIG.name}`;
    } else if (currentPath === '/privacy-policy') {
      title = `Privacy Policy | ${SITE_CONFIG.name}`;
    } else if (currentPath === '/terms-and-conditions') {
      title = `Terms & Conditions | ${SITE_CONFIG.name}`;
    } else if (currentPath === '/cookie-policy') {
      title = `Cookie Policy | ${SITE_CONFIG.name}`;
    }

    document.title = title;
  }, [currentPath]);

  const navigateTo = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
  };

  // Route Resolver
  const renderRoute = () => {
    if (currentPath === '/') {
      return (
        <HomePage
          onNavigate={navigateTo}
          onApplyEstimate={(summary) => {
            setSelectedQuoteService(summary.service);
          }}
        />
      );
    }
    if (currentPath === '/about') {
      return <AboutPage onNavigate={navigateTo} />;
    }
    if (currentPath === '/services') {
      return <ServicesIndexPage onNavigate={navigateTo} />;
    }
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      return <SingleServicePage slug={slug} onNavigate={navigateTo} />;
    }
    if (currentPath === '/industries') {
      return <IndustriesPage onNavigate={navigateTo} />;
    }
    if (currentPath === '/careers') {
      return <CareersPage onNavigate={navigateTo} />;
    }
    if (currentPath === '/blog') {
      return <BlogIndexPage onNavigate={navigateTo} />;
    }
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      return <SingleBlogPostPage slug={slug} onNavigate={navigateTo} />;
    }
    if (currentPath === '/contact') {
      return <ContactPage onNavigate={navigateTo} />;
    }
    if (currentPath === '/get-a-quote') {
      return <GetAQuotePage initialService={selectedQuoteService} />;
    }
    if (currentPath === '/privacy-policy') {
      return <PrivacyPolicyPage />;
    }
    if (currentPath === '/terms-and-conditions') {
      return <TermsPage />;
    }
    if (currentPath === '/cookie-policy') {
      return <CookiePolicyPage />;
    }
    return <NotFoundPage onNavigate={navigateTo} />;
  };

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0A0F1D] text-navy-800 dark:text-slate-100 antialiased selection:bg-brand-blue selection:text-white transition-colors duration-200">
        <AnnouncementBar onNavigate={navigateTo} />
        <Navbar currentPath={currentPath} onNavigate={navigateTo} />
        <main className="grow">{renderRoute()}</main>
        <Footer onNavigate={navigateTo} onOpenAwsModal={() => setAwsModalOpen(true)} />
        <AwsDeploymentModal isOpen={awsModalOpen} onClose={() => setAwsModalOpen(false)} />
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
}
