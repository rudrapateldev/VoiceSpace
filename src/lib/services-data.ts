import { ServiceItem } from '../types';

export const servicesData: Record<string, ServiceItem> = {
  'software-development': {
    slug: 'software-development',
    title: 'Software Development',
    shortDescription:
      'Custom software architectures, enterprise platforms, and cloud systems designed for performance, security, and scalability.',
    metaTitle: 'Custom Software Development Services | VoiceSpace',
    metaDescription:
      'Scalable custom software development, cloud systems, and modern API integrations engineered to streamline operations and power your enterprise.',
    deliverables: [
      'Custom Web & Cloud Architectures (Next.js, Node.js, Python)',
      'API Engineering & Third-Party System Integrations',
      'Workflow Automation & Internal Operational Tooling',
      'Legacy Software Modernization & Cloud Migrations',
      'Quality Assurance & Automated Regression Testing',
      'Continuous Security Auditing & Guaranteed SLA Maintenance',
    ],
    benefits: [
      'Engineered specifically to match your operational workflows',
      'Eliminate high recurring SaaS per-seat fees with tailored owned solutions',
      'Modern, maintainable microservice and modular architectures',
      'Rigorous code standards with automated CI/CD pipelines',
    ],
    process: [
      {
        step: '01',
        title: 'Architecture Discovery',
        description: 'Analyze business workflows, data schemas, compliance bounds, and target performance metrics.',
      },
      {
        step: '02',
        title: 'Iterative Sprint Build',
        description: 'Engineered in bi-weekly milestones with continuous integration and real-time staging reviews.',
      },
      {
        step: '03',
        title: 'Rigorous Verification',
        description: 'Unit testing, regression cycles, penetration checks, and end-to-end integration audits.',
      },
      {
        step: '04',
        title: 'Deployment & SLA Support',
        description: 'Managed cloud rollout with performance monitoring, backups, and guaranteed uptime protocols.',
      },
    ],
    faqs: [
      {
        question: 'What tech stacks do you prioritize?',
        answer: 'We primarily build with TypeScript, React, Next.js, Node.js, Python, PostgreSQL, and AWS cloud-native primitives.',
      },
      {
        question: 'Who owns the intellectual property and code?',
        answer: 'You own 100% of the code, intellectual property, documentation, and repositories upon completion.',
      },
      {
        question: 'Can you work with our existing technical team?',
        answer: 'Yes. We frequently integrate as an augmentation unit, participating in your existing sprint standups and Git pull request reviews.',
      },
    ],
    industries: ['Technology & SaaS', 'Fintech', 'Healthcare Administration', 'Logistics'],
    relatedServices: [
      { title: 'Website Development', slug: 'web-development' },
      { title: 'Mobile App Development', slug: 'mobile-app-development' },
    ],
    pricingGuidance: 'Fixed-price sprints or dedicated engineering seats from $3,500/month.',
  },
  'web-development': {
    slug: 'web-development',
    title: 'Website Development',
    shortDescription:
      'High-performance corporate websites, web applications, and e-commerce platforms focused on speed, UX, and conversion.',
    metaTitle: 'Web Development Services | Corporate & Web Apps | VoiceSpace',
    metaDescription:
      'Modern, responsive, SEO-ready corporate web development built on Next.js, React, and headless content architectures.',
    deliverables: [
      'High-Performance Corporate Websites with Sub-Second Loading',
      'Headless CMS & Dynamic Content Publishing Portals',
      'Custom E-Commerce & Secure Checkout Platforms',
      'Mobile-First Responsive Layouts Tested Down to 360px',
      'Core Web Vitals Optimization (95+ Lighthouse Scores)',
      'Advanced Analytics & Conversion Tracking Instrumentation',
    ],
    benefits: [
      'Sub-second load times optimizing search engine rank and user engagement',
      'Modular component architectures that make marketing edits painless',
      'Strict adherence to WCAG AA accessibility compliance',
      'SEO-friendly semantic HTML with pre-configured structured schemas',
    ],
    process: [
      {
        step: '01',
        title: 'UX & Information Design',
        description: 'Wireframing navigation paths, content hierarchies, and user conversion loops.',
      },
      {
        step: '02',
        title: 'Frontend & CMS Build',
        description: 'Building semantic, high-speed components powered by scalable CMS options.',
      },
      {
        step: '03',
        title: 'Speed & SEO Audit',
        description: 'Optimizing media, scripts, schemas, and metadata across all viewport dimensions.',
      },
      {
        step: '04',
        title: 'Launch & Domain Mapping',
        description: 'Secure production switchover with SSL verification, CDN routing, and monitoring.',
      },
    ],
    faqs: [
      {
        question: 'Will our team be able to update content independently?',
        answer: 'Yes. We deliver intuitive content management workflows allowing non-technical teammates to update text, media, and articles effortlessly.',
      },
      {
        question: 'Do you handle domain configuration and hosting?',
        answer: 'Yes. We provide complete setup on AWS Amplify, Cloudflare, or your preferred hosting environment with automated SSL.',
      },
    ],
    industries: ['Professional Services', 'E-commerce & Retail', 'Education & E-learning'],
    relatedServices: [
      { title: 'Software Development', slug: 'software-development' },
      { title: 'Search Engine Optimization', slug: 'seo' },
    ],
    pricingGuidance: 'Custom web projects scoped from $2,500 based on page complexity and CMS requirements.',
  },
  'mobile-app-development': {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDescription:
      'Cross-platform and native mobile apps that deliver fluid user experiences across iOS and Android ecosystems.',
    metaTitle: 'Mobile App Development | iOS & Android Solutions | VoiceSpace',
    metaDescription:
      'Scalable iOS and Android mobile applications built using React Native and Flutter with secure offline-first architectures.',
    deliverables: [
      'iOS & Android Cross-Platform Codebases (React Native / Flutter)',
      'Native Performance Benchmarks & 60fps Micro-Animations',
      'Secure API Integrations & Push Notification Workflows',
      'Offline Sync & SQLite/Local Database Storage Systems',
      'Biometric Authentication & Native Hardware Integrations',
      'End-to-End App Store & Google Play Store Submission Management',
    ],
    benefits: [
      'Single shared codebase reduces ongoing maintenance overhead by ~40%',
      'Native-grade performance benchmarks and intuitive touch gestures',
      'Automated TestFlight and Internal Testing distribution cycles',
      'Comprehensive error reporting and crash analytics integration',
    ],
    process: [
      {
        step: '01',
        title: 'Product Scoping',
        description: 'Define core user flows, mobile-specific features, and device permissions.',
      },
      {
        step: '02',
        title: 'Interactive Prototype',
        description: 'High-fidelity mobile wireframes and touch-interaction prototypes.',
      },
      {
        step: '03',
        title: 'Engineering & Testing',
        description: 'Test builds deployed over TestFlight and Firebase App Distribution.',
      },
      {
        step: '04',
        title: 'Store Release',
        description: 'Complete submission management for Apple App Store and Google Play Store.',
      },
    ],
    faqs: [
      {
        question: 'Do you build native or cross-platform?',
        answer: 'We evaluate your performance targets and budget. Cross-platform (React Native) is standard for most apps, while pure native is selected for specialized hardware needs.',
      },
      {
        question: 'How do you handle App Store approvals?',
        answer: 'We handle the complete submission workflow, privacy manifest disclosures, metadata guidelines, and review communications until approval.',
      },
    ],
    industries: ['Consumer Technology', 'Fintech', 'Health & Wellness', 'Logistics'],
    relatedServices: [
      { title: 'Software Development', slug: 'software-development' },
      { title: 'Website Development', slug: 'web-development' },
    ],
    pricingGuidance: 'Full mobile app builds from $4,800 with phased milestone releases.',
  },
  'digital-marketing': {
    slug: 'digital-marketing',
    title: 'Digital Marketing Services',
    shortDescription:
      'Multi-channel digital marketing solutions focused on sustainable visibility, audience acquisition, and high ROI.',
    metaTitle: 'Digital Marketing Services | Growth & Acquisition | VoiceSpace',
    metaDescription:
      'Comprehensive digital marketing strategies, combining organic search, targeted advertising, and conversion rate optimization.',
    deliverables: [
      'Holistic Multi-Channel Digital Growth Architecture',
      'Search & Paid Social Campaign Management',
      'Full-Funnel Lead Nurturing & Email Automation',
      'Conversion Rate Optimization (CRO) & A/B Testing Sprints',
      'Server-Side Conversion API Setup & Attribution Modeling',
      'Transparent Monthly Analytics Dashboards & CAC Reporting',
    ],
    benefits: [
      'Measurable return on investment with clear attribution tracking',
      'Integrated campaigns avoiding siloed marketing efforts',
      'Iterative creative testing to drive down Customer Acquisition Cost (CAC)',
      'Clear separation of agency management fees and ad spend budgets',
    ],
    process: [
      {
        step: '01',
        title: 'Audience & Channel Audit',
        description: 'Identify buyer journeys, current traffic inefficiencies, and channel opportunities.',
      },
      {
        step: '02',
        title: 'Campaign Setup',
        description: 'Build tracking tags, custom landing pages, and target segmented audiences.',
      },
      {
        step: '03',
        title: 'Optimization Sprints',
        description: 'Weekly split testing on messaging, creatives, and budget allocations.',
      },
      {
        step: '04',
        title: 'Transparent Reporting',
        description: 'Real-time dashboards highlighting conversions, CAC, and pipeline growth.',
      },
    ],
    faqs: [
      {
        question: 'Do you guarantee immediate top rankings or sales?',
        answer: 'No reputable partner can guarantee specific algorithmic positions or instant conversions. We focus on proven, data-backed optimization and rigorous testing.',
      },
      {
        question: 'Who owns the advertising accounts?',
        answer: 'You own 100% of your Google Ads, Meta Business Manager, and LinkedIn Campaign Manager accounts. All spend is billed directly by the networks to your cards.',
      },
    ],
    industries: ['B2B Technology', 'E-commerce', 'Professional Services'],
    relatedServices: [
      { title: 'Search Engine Optimization', slug: 'seo' },
      { title: 'Performance Marketing', slug: 'performance-marketing' },
    ],
    pricingGuidance: 'Monthly growth retainers starting at $1,800/month.',
  },
  'seo': {
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    shortDescription:
      'Technical SEO, high-intent keyword strategies, and content architectures designed to capture organic market share.',
    metaTitle: 'Technical & Organic SEO Services | VoiceSpace',
    metaDescription:
      'Sustainable organic growth via technical search optimization, semantic structure, high-intent keywords, and performance audits.',
    deliverables: [
      'Technical SEO Audits & Crawl Resolution',
      'Search Intent Analysis & High-Intent Keyword Mapping',
      'On-Page Semantic HTML Architecture & Heading Optimization',
      'Structured Data & Schema.org JSON-LD Implementation',
      'Site Speed & Core Web Vitals Remediation',
      'Competitive Gap Analysis & Authority Building Workflows',
    ],
    benefits: [
      'Long-term organic lead flow that compounds over time without per-click fees',
      'Technical cleanup improves user retention, crawl efficiency, and indexation',
      'High-intent positioning capturing ready-to-buy search traffic',
      'Eliminates algorithm risk by adhering strictly to search quality guidelines',
    ],
    process: [
      {
        step: '01',
        title: 'Baseline Audit',
        description: 'Identify crawl barriers, indexation bugs, toxic redirects, and speed drops.',
      },
      {
        step: '02',
        title: 'Keyword Mapping',
        description: 'Map high-intent search queries to specific URLs and landing experiences.',
      },
      {
        step: '03',
        title: 'On-Page & Schema Rollout',
        description: 'Implement JSON-LD schemas, meta hierarchies, and content upgrades.',
      },
      {
        step: '04',
        title: 'Monitoring & Tuning',
        description: 'Track rankings and CTR via Search Console to adjust content updates.',
      },
    ],
    faqs: [
      {
        question: 'How long does SEO take to produce measurable impact?',
        answer: 'Organic search is a compounding strategy. Most websites see meaningful movement within 3 to 6 months of steady technical and content execution.',
      },
      {
        question: 'Do you engage in link buying schemes?',
        answer: 'No. We focus exclusively on white-hat technical foundations, exceptional content relevance, and organic digital PR.',
      },
    ],
    industries: ['SaaS', 'E-commerce', 'Local & National Services'],
    relatedServices: [
      { title: 'Digital Marketing', slug: 'digital-marketing' },
      { title: 'Website Development', slug: 'web-development' },
    ],
    pricingGuidance: 'Quarterly optimization retainers from $1,200/month.',
  },
  'performance-marketing': {
    slug: 'performance-marketing',
    title: 'Performance Marketing',
    shortDescription:
      'High-intent paid search, display, and social ad campaigns optimized against tangible pipeline metrics and CPA.',
    metaTitle: 'Performance Marketing & Paid Acquisition | VoiceSpace',
    metaDescription:
      'Data-driven paid media execution across Google Ads, Meta, and LinkedIn with strict cost controls and full funnel tracking.',
    deliverables: [
      'Google Search, Shopping & Performance Max Campaigns',
      'Paid Social Ad Systems (LinkedIn Ads & Meta Ads)',
      'High-Converting Dedicated Landing Pages',
      'Server-Side Conversion API Setup (CAPI / Enhanced Conversions)',
      'Audience Retargeting & Lookalike Clustering',
      'Budget Pacing & Bid Optimization Models',
    ],
    benefits: [
      'Immediate traffic injection targeted directly at your target buyer profile',
      'Management fees clearly separated from direct ad network expenditures',
      'Continuous landing page split testing maximizing click-to-lead rates',
      'Granular CAC and LTV tracking against CRM revenue',
    ],
    process: [
      {
        step: '01',
        title: 'Tracking Infrastructure',
        description: 'Install server-side CAPI and conversion pixels to prevent signal loss.',
      },
      {
        step: '02',
        title: 'Creative & Copy Drafting',
        description: 'Produce benefit-first copy variants and clean ad creatives.',
      },
      {
        step: '03',
        title: 'Pacing & Testing',
        description: 'Deploy campaigns with controlled budgets to find lowest CPA baselines.',
      },
      {
        step: '04',
        title: 'Scale & Retarget',
        description: 'Funnel qualified prospects into targeted remarketing sequences.',
      },
    ],
    faqs: [
      {
        question: 'Are ad spends included in VoiceSpace management retainers?',
        answer: 'No. You pay ad networks directly through your own billing accounts. Our fee is strictly for campaign architecture, management, and continuous optimization.',
      },
      {
        question: 'What ad platforms do you specialize in?',
        answer: 'We focus on Google Ads (Search & Performance Max), Meta (Facebook/Instagram), and LinkedIn Ads for B2B enterprises.',
      },
    ],
    industries: ['Direct-to-Consumer', 'Enterprise Software', 'Real Estate'],
    relatedServices: [
      { title: 'Digital Marketing', slug: 'digital-marketing' },
      { title: 'Search Engine Optimization', slug: 'seo' },
    ],
    pricingGuidance: 'Tiered management retainers based on monthly ad budget.',
  },
  'social-media-marketing': {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDescription:
      'Strategic multi-platform brand positioning, thought leadership production, and community engagement workflows.',
    metaTitle: 'Social Media Marketing & Brand Management | VoiceSpace',
    metaDescription:
      'Strategic social media management across B2B and B2C channels, including calendar planning, creative design, and community nurturing.',
    deliverables: [
      'Monthly Editorial Content Schedules & Calendars',
      'Branded Graphics, Infographics & Short-Form Video Assets',
      'Executive Ghostwriting & LinkedIn Thought Leadership',
      'Proactive Community Response & Comment Moderation',
      'Hashtag & Topic Trend Monitoring',
      'Monthly Engagement & Follower Acquisition Analytics',
    ],
    benefits: [
      'Consistent brand authority across target business networks',
      'Frees internal teams from day-to-day posting overhead',
      'Drives organic touchpoints that support sales outreach and talent hiring',
      'Maintains consistent corporate voice across all public touchpoints',
    ],
    process: [
      {
        step: '01',
        title: 'Tone & Persona Discovery',
        description: 'Define the brand voice, aesthetic guardrails, and audience expectations.',
      },
      {
        step: '02',
        title: 'Calendar Assembly',
        description: 'Produce monthly batches of graphics, videos, and copy for approval.',
      },
      {
        step: '03',
        title: 'Publishing & Engagement',
        description: 'Schedule distribution across peak engagement hours and field questions.',
      },
      {
        step: '04',
        title: 'Monthly Review',
        description: 'Analyze reach, shares, and conversion metrics to refine editorial focus.',
      },
    ],
    faqs: [
      {
        question: 'Do we get to approve posts before they go live?',
        answer: 'Yes. Every post is scheduled into a preview calendar requiring your explicit sign-off prior to publication.',
      },
      {
        question: 'Can you handle executive LinkedIn profiles?',
        answer: 'Yes. We frequently manage founder and executive LinkedIn profiles to build domain authority in their industries.',
      },
    ],
    industries: ['Consumer Brands', 'SaaS', 'Education'],
    relatedServices: [{ title: 'Digital Marketing', slug: 'digital-marketing' }],
    pricingGuidance: 'Content creation packages starting at $1,200/month.',
  },
  'customer-support': {
    slug: 'customer-support',
    title: 'Customer Support Services',
    shortDescription:
      'Multichannel customer support operations including helpdesk, email, and live chat with tailored SLAs.',
    metaTitle: 'Customer Support Services & Helpdesk Operations | VoiceSpace',
    metaDescription:
      'Scalable customer support teams for email, live chat, and helpdesk operations. Customized SLAs, ticketing workflows, and reporting.',
    deliverables: [
      'Omnichannel Inbound Support (Email, Live Chat, Ticketing)',
      'Tier 1 & Tier 2 Technical Helpdesk Operations',
      'Zendesk, Freshdesk, Gorgias, & Intercom Workflows',
      'Internal Knowledge-Base & Macro Architecture',
      'SLA-Governed First-Response Time (FRT) & Resolution Metrics',
      'Weekly CSAT & Ticket Sentiment Analysis Reports',
    ],
    benefits: [
      'Scale support capacity during seasonal peaks without hiring delays',
      'Standardized reply rubrics that maintain brand standards',
      'Actionable feedback loops alerting product teams to customer pain points',
      'Continuous quality monitoring and dedicated team lead supervision',
    ],
    process: [
      {
        step: '01',
        title: 'Knowledge Transfer',
        description: 'Audit FAQs, internal SOPs, and define resolution escalation trees.',
      },
      {
        step: '02',
        title: 'Agent Onboarding',
        description: 'Train dedicated personnel on your product nuance and brand voice.',
      },
      {
        step: '03',
        title: 'Shadowing & Go-Live',
        description: 'Controlled shadow period verifying responses prior to full autonomy.',
      },
      {
        step: '04',
        title: 'Weekly QA Reviews',
        description: 'Continuous ticket audits, sentiment scoring, and SLA tracking.',
      },
    ],
    faqs: [
      {
        question: 'What hours can your teams support?',
        answer: 'We offer flexible operating arrangements ranging from standard business hours to 24/7/365 coverage based on agreed contracts.',
      },
      {
        question: 'How do you train agents on complex software?',
        answer: 'We develop structured knowledge bases, interactive training simulations, and a 2-week shadowing phase before agents handle live tickets autonomously.',
      },
    ],
    industries: ['E-Commerce', 'Fintech', 'Consumer Apps', 'Subscription Services'],
    relatedServices: [
      { title: 'Call Center Operations', slug: 'call-center' },
      { title: 'Business Process Outsourcing (BPO)', slug: 'bpo' },
    ],
    pricingGuidance: 'Dedicated support reps from $1,600/month per full-time seat.',
  },
  'call-center': {
    slug: 'call-center',
    title: 'Call Center Operations',
    shortDescription:
      'Inbound and compliant outbound calling services focused on phone support, inquiry qualification, and appointment booking.',
    metaTitle: 'Professional Call Center Services | VoiceSpace',
    metaDescription:
      'Compliant inbound call support, customer verification, appointment setting, and quality monitoring. Built with strict adherence to telecom regulations.',
    deliverables: [
      'Inbound Phone Support & Order Taking',
      'Calendar Sync & Appointment Scheduling Workflows',
      'Inbound Lead Qualification & CRM Routing',
      'Call Recording & Comprehensive QA Scoring',
      'Cloud PBX Telephony Integration (Twilio, Talkdesk, Aircall)',
      'Strict Telecom & DNC Compliance Safeguards',
    ],
    benefits: [
      'Never miss critical inbound customer or sales calls',
      'Strict telephony and privacy adherence: no unsolicited mass robocalls',
      'Recorded lines with continuous quality assurance feedback',
      'Clear call outcome reporting with CRM synchronization',
    ],
    process: [
      {
        step: '01',
        title: 'Call Flow Design',
        description: 'Map interactive call paths, objection handling, and routing rules.',
      },
      {
        step: '02',
        title: 'Telephony Integration',
        description: 'Connect cloud PBX lines, CRM popups, and secure recording systems.',
      },
      {
        step: '03',
        title: 'Agent Readiness Check',
        description: 'Mock call rehearsals verifying vocal clarity and procedural accuracy.',
      },
      {
        step: '04',
        title: 'Operational Reporting',
        description: 'Daily metrics detailing answer speeds, talk durations, and resolutions.',
      },
    ],
    faqs: [
      {
        question: 'Do you engage in cold calling or telemarketing?',
        answer: 'We do not run spam or unsolicited automated robocall campaigns. All outbound workflows require verifiable prior business relationships or opt-in consent in strict adherence with telecommunication laws.',
      },
      {
        question: 'Can your team use our existing phone numbers?',
        answer: 'Yes. We can port or forward existing telephony numbers into our cloud PBX routing platform seamlessly.',
      },
    ],
    industries: ['Healthcare Schedulers', 'Financial Services', 'Real Estate', 'Logistics'],
    relatedServices: [
      { title: 'Customer Support Services', slug: 'customer-support' },
      { title: 'Back-Office Support', slug: 'back-office' },
    ],
    pricingGuidance: 'Structured seat pricing or per-minute blended tiers available.',
  },
  'bpo': {
    slug: 'bpo',
    title: 'Business Process Outsourcing (BPO)',
    shortDescription:
      'Operational process outsourcing that simplifies transaction handling, order workflows, and administrative logistics.',
    metaTitle: 'Business Process Outsourcing (BPO) Solutions | VoiceSpace',
    metaDescription:
      'Secure, cost-efficient business process outsourcing. Streamline repetitive operations, transactional pipelines, and CRM hygiene.',
    deliverables: [
      'End-to-End Operational Pipeline Management',
      'E-Commerce Order Processing & Discrepancy Reconciliation',
      'Digital Content Moderation & Marketplace Catalog Curation',
      'CRM Data Hygiene, Normalization & Enrichment',
      'Confidential Document Verification Workflows',
      'Weekly Operational Throughput Audits & Error Rate Tracking',
    ],
    benefits: [
      'Lower operational overhead while increasing daily transactional throughput',
      'Rigorous data privacy controls and role-based access protocols',
      'Freed internal staff can focus on core innovation and revenue generation',
      'Predictable monthly operating costs with transparent SLAs',
    ],
    process: [
      {
        step: '01',
        title: 'SOP Documentation',
        description: 'Record existing operational workflows down to individual mouse clicks.',
      },
      {
        step: '02',
        title: 'Access & Security Setup',
        description: 'Establish least-privilege credential access and encrypted work environments.',
      },
      {
        step: '03',
        title: 'Pilot Rollout',
        description: 'Execute alongside internal teams until target throughput and accuracy match.',
      },
      {
        step: '04',
        title: 'Full SLA Handover',
        description: 'Assume agreed operational volume with scheduled KPI reviews.',
      },
    ],
    faqs: [
      {
        question: 'How is confidential data protected?',
        answer: 'We operate under strict Non-Disclosure Agreements (NDAs), least-privilege role-based access, and isolated virtual workstation environments.',
      },
      {
        question: 'What error rates do you guarantee?',
        answer: 'Our standard BPO contracts commit to a 99.2%+ accuracy threshold backed by secondary audit sampling.',
      },
    ],
    industries: ['E-Commerce Logistics', 'Insurance & Claims', 'Fintech Backing', 'Real Estate'],
    relatedServices: [
      { title: 'Back-Office Support', slug: 'back-office' },
      { title: 'Customer Support Services', slug: 'customer-support' },
    ],
    pricingGuidance: 'Scalable operational teams from $1,400/month per dedicated specialist.',
  },
  'back-office': {
    slug: 'back-office',
    title: 'Back-Office Support',
    shortDescription:
      'Dedicated data processing, spreadsheet normalization, catalog entries, and administrative assistance.',
    metaTitle: 'Back-Office Support & Data Management | VoiceSpace',
    metaDescription:
      'Dependable back-office operations including spreadsheet administration, data entry, record reconciliation, and document archiving.',
    deliverables: [
      'Accurate Data Entry, Normalization & Validation',
      'Complex Spreadsheet Cleaning, Formula Normalization & Reports',
      'Digital Document Categorization, OCR Review & Archival',
      'E-Commerce Product Catalog Updates & Image Formatting',
      'Vendor Billing, PO & Invoice Record Reconciliation',
      'Standardized Daily Summary Completion Logs',
    ],
    benefits: [
      'Ensure databases and CRMs remain accurate, verified, and clutter-free',
      'Reduce administrative logjams without adding local payroll headcount',
      'Configurable staffing schedules tailored to your time zones',
      'Zero onboarding friction using your existing cloud software tools',
    ],
    process: [
      {
        step: '01',
        title: 'Task Definition',
        description: 'Document data templates, validation rules, and error thresholds.',
      },
      {
        step: '02',
        title: 'Trial Batch',
        description: 'Process initial test sets to verify formatting and speed accuracy.',
      },
      {
        step: '03',
        title: 'Production Workflow',
        description: 'Standard daily or weekly batch processing with audit sampling.',
      },
      {
        step: '04',
        title: 'Summary Audits',
        description: 'Delivered batch completion logs highlighting edge cases.',
      },
    ],
    faqs: [
      {
        question: 'What software systems can your back-office team utilize?',
        answer: 'Our teams work inside your cloud toolset—including Google Workspace, Microsoft Excel, Salesforce, HubSpot, Shopify, or custom internal backends.',
      },
      {
        question: 'Can you handle urgent batch processing spikes?',
        answer: 'Yes. With prior notice, we can surge staffing capacity to process high-volume archival or migration batches.',
      },
    ],
    industries: ['Accounting & Legal Support', 'Supply Chain', 'Online Retailers'],
    relatedServices: [
      { title: 'Business Process Outsourcing (BPO)', slug: 'bpo' },
      { title: 'Customer Support Services', slug: 'customer-support' },
    ],
    pricingGuidance: 'Hourly bundles or dedicated full-time administrative staff available.',
  },
};
