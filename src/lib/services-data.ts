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
  'ai-llm-rag': {
    slug: 'ai-llm-rag',
    title: 'AI, LLM & RAG Solutions',
    shortDescription:
      'Production-grade Retrieval-Augmented Generation (RAG), autonomous agents, custom fine-tuning, and enterprise AI workflows.',
    metaTitle: 'AI, LLM & RAG Development Services | VoiceSpace India',
    metaDescription:
      'Engineer private, high-accuracy AI applications with RAG architectures, LangChain, vector databases (Pinecone, Chroma, pgvector), and custom LLM agent workflows.',
    deliverables: [
      'Retrieval-Augmented Generation (RAG) Architecture & Multi-Source Indexing',
      'Vector Database Integration (Pinecone, ChromaDB, pgvector, Weaviate)',
      'Autonomous Task-Executing AI Agents with External Tool & API Calling',
      'Custom LLM Fine-Tuning & Parameter-Efficient Domain Adapters (LoRA)',
      'Enterprise Knowledge Base Search Bots & Conversational Assistants',
      'AI Evaluation Frameworks, Prompt Injection Hardening & Hallucination Guardrails',
    ],
    benefits: [
      'Grounded domain answers with zero hallucinations using your proprietary knowledge base',
      'Complete intellectual property privacy with optional on-premise or private VPC model hosting',
      'Reduce customer service resolution times by up to 75% with intelligent automated triage',
      'Seamless integration into existing Slack, web portals, CRMs, and internal databases',
    ],
    process: [
      {
        step: '01',
        title: 'Data & Knowledge Audit',
        description: 'Analyze documents, databases, unstructured files, and define chunking schemas and embeddings.',
      },
      {
        step: '02',
        title: 'RAG Pipeline & Vector Indexing',
        description: 'Construct vector storage pipelines with semantic hybrid search, rerankers, and retrieval benchmarks.',
      },
      {
        step: '03',
        title: 'Agent Tooling & Guardrails',
        description: 'Implement system prompts, tool-calling handlers, rate limits, PII sanitization, and output guardrails.',
      },
      {
        step: '04',
        title: 'Deployment & Continuous Evaluation',
        description: 'Deploy containerized inference endpoints with latency tracing, caching, and automated accuracy metrics.',
      },
    ],
    faqs: [
      {
        question: 'Which foundation models do you support?',
        answer: 'We build with OpenAI (GPT-4o), Anthropic Claude 3.5, Google Gemini 1.5/2.0, as well as open-source weights (Llama 3, Mistral, DeepSeek) deployed on private GPUs.',
      },
      {
        question: 'How do you prevent data leaks and hallucinations?',
        answer: 'We employ multi-stage RAG with contextual rerankers, semantic distance thresholds, strict refusal prompting, and zero-retention enterprise API keys.',
      },
      {
        question: 'Can the AI connect to our internal databases and Jira/Confluence?',
        answer: 'Yes. We build bi-directional agents capable of querying SQL databases, fetching live tickets from Jira, reading Confluence pages, or creating tasks in Asana.',
      },
    ],
    industries: ['Technology & SaaS', 'Financial Services', 'Healthcare Admin', 'E-Commerce', 'Professional Services'],
    relatedServices: [
      { title: 'Software Development', slug: 'software-development' },
      { title: 'Business Analysis & Process Mapping', slug: 'business-analysis' },
      { title: 'Software Testing & QA', slug: 'qa-software-testing' },
    ],
    pricingGuidance: 'Fixed sprint phases for initial RAG pipelines or dedicated monthly AI engineering pods.',
  },
  'game-development': {
    slug: 'game-development',
    title: 'Game Development (Unity & 3D)',
    shortDescription:
      'End-to-end 2D and 3D game engineering using Unity, cross-platform physics, multiplayer networking, and mobile performance optimization.',
    metaTitle: 'Unity Game Development & Real-Time 3D Services | VoiceSpace India',
    metaDescription:
      'Expert Unity game development, gameplay programming, 2D/3D mobile games, WebGL spatial apps, multiplayer backend, and live operations.',
    deliverables: [
      'Cross-Platform Unity 2D & 3D Game Programming (iOS, Android, PC, WebGL)',
      'Gameplay Physics, Controller Tuning & Custom Mechanics (C#)',
      'Multiplayer Backend Architecture & State Synchronization (Photon, Mirror, WebSockets)',
      'Mobile Performance Profiling (Draw-call batching, texture compression, 60 FPS target)',
      'Shader Graph, Particle Effects (VFX) & Dynamic Lighting Optimization',
      'In-App Purchases (IAP), Ad Mediation (Unity Ads, AdMob), and LiveOps Analytics',
    ],
    benefits: [
      'Battle-tested C# architectural patterns with clean separation of logic and presentation',
      'Optimized memory footprints ensuring crash-free performance across diverse mobile handsets',
      'Complete production pipelines from initial prototype to Apple App Store & Google Play approval',
      '100% intellectual property, Unity project files, and raw asset repository handover',
    ],
    process: [
      {
        step: '01',
        title: 'GDD & Core Loop Prototyping',
        description: 'Validate game design mechanics, controls, art bible, and target device specifications in a rapid playable greybox.',
      },
      {
        step: '02',
        title: 'Vertical Slice Build',
        description: 'Complete one fully polished level/mode with finalized art, audio, UI, and performance profiling.',
      },
      {
        step: '03',
        title: 'Full Production & Systems',
        description: 'Build out full level progressions, progression trees, monetization hooks, and audio integrations.',
      },
      {
        step: '04',
        title: 'Release QA & Store Launch',
        description: 'Rigorous device regression matrix, store compliance audits, build signing, and post-launch telemetry.',
      },
    ],
    faqs: [
      {
        question: 'Do you work in 2D, 3D, or both?',
        answer: 'We engineer both high-speed 2D arcade/casual mobile titles and rich 3D isometric, top-down, and first-person experiences.',
      },
      {
        question: 'Can you port an existing game to WebGL or mobile?',
        answer: 'Yes. We specialize in cross-platform porting, re-engineering input systems for touch screens, and optimizing shaders for browser WebGL memory caps.',
      },
      {
        question: 'Do you assist with store compliance and publishing?',
        answer: 'Yes, our engineers handle provisioning profiles, bundle IDs, Google Play App Bundles (AAB), privacy policies, and in-app purchase validation.',
      },
    ],
    industries: ['Mobile Gaming', 'Interactive E-Learning', 'E-Commerce 3D Product Demos', 'Digital Entertainment'],
    relatedServices: [
      { title: 'Mobile App Development', slug: 'mobile-app-development' },
      { title: 'Software Testing & QA', slug: 'qa-software-testing' },
      { title: 'Product Management & UX Strategy', slug: 'product-management' },
    ],
    pricingGuidance: 'Milestone-based vertical slice contracts or dedicated Unity developer retainers.',
  },
  'qa-software-testing': {
    slug: 'qa-software-testing',
    title: 'Software Testing & QA (Automation, Security & Performance)',
    shortDescription:
      'Comprehensive QA services spanning automated regression, concurrent load testing, OWASP security assessments, and multi-device manual testing.',
    metaTitle: 'Software Testing & QA Services (Automation, Security & Performance) | VoiceSpace India',
    metaDescription:
      'Enterprise software testing, Playwright & Cypress E2E automation, Selenium, JMeter performance testing, OWASP security audits, and multi-device manual QA.',
    deliverables: [
      'Automated UI & End-to-End Regression Suites (Playwright, Cypress, Selenium)',
      'API Automation & Integration Testing Frameworks (Postman, REST-Assured, Newman)',
      'Performance, Concurrency & High-Load Stress Testing (JMeter, k6, Locust)',
      'Security Audits & Vulnerability Assessments (OWASP Top 10, ZAP, Dependency Scans)',
      'Exploratory, Functional & Usability Manual Passes Across 50+ Real Device Matrix',
      'Continuous Integration Testing Gates (GitHub Actions, GitLab CI, Jenkins)',
    ],
    benefits: [
      'Eliminate critical release bugs before they impact high-value production end users',
      'Slash regression testing cycle time from days to minutes with self-healing automated suites',
      'Identify and remediate security vulnerabilities before malicious exploitation',
      'Actionable defect reports with reproduction steps, network traces, and video logs',
    ],
    process: [
      {
        step: '01',
        title: 'Test Strategy & Coverage Matrix',
        description: 'Map user journeys, edge cases, system thresholds, browser targets, and regulatory standards.',
      },
      {
        step: '02',
        title: 'Automation Framework Architecture',
        description: 'Engineer maintainable Page Object Model (POM) automation pipelines with parallel cloud execution.',
      },
      {
        step: '03',
        title: 'Security & Performance Benchmarking',
        description: 'Run load simulation spikes, latency profiling, authentication audits, and injection test vectors.',
      },
      {
        step: '04',
        title: 'CI/CD Pipeline Gatekeeping',
        description: 'Embed automated test suites into pull request checks with instant Slack and Jira failure reporting.',
      },
    ],
    faqs: [
      {
        question: 'Which test automation frameworks do you recommend?',
        answer: 'We primarily engineer automation using Playwright (TypeScript/Python) and Cypress for web apps, Appium for native mobile, and Postman/k6 for backend APIs.',
      },
      {
        question: 'Can you augment our existing engineering sprints?',
        answer: 'Yes. Our QA engineers embed directly into your Jira/Slack/GitHub cadence, writing test specs alongside developers during active sprint cycles.',
      },
      {
        question: 'What performance testing metrics do you report?',
        answer: 'We measure throughput (RPS), percentile response times (p95, p99), error rates, database connection saturation, and memory leak thresholds under concurrency.',
      },
    ],
    industries: ['Technology & SaaS', 'Financial Services', 'E-Commerce & Retail', 'Healthcare Admin', 'Gaming'],
    relatedServices: [
      { title: 'Software Development', slug: 'software-development' },
      { title: 'AI, LLM & RAG Solutions', slug: 'ai-llm-rag' },
      { title: 'Project Management & Agile Delivery', slug: 'project-management' },
    ],
    pricingGuidance: 'Dedicated monthly QA engineers (Automation, Manual, or Security) or scoped fixed-price test suites.',
  },
  'product-management': {
    slug: 'product-management',
    title: 'Product Management & UX Strategy',
    shortDescription:
      'Strategic product discovery, customer research, feature prioritization, roadmapping, and metrics-driven growth using Mixpanel and Miro.',
    metaTitle: 'Product Management & UX Strategy Consulting | VoiceSpace India',
    metaDescription:
      'Transform ideas into validated digital products. Product discovery, RICE prioritization, PRDs, Miro user mapping, and Mixpanel analytics.',
    deliverables: [
      'Product Discovery, Competitive Benchmarking & Market Gap Analysis',
      'Living Product Requirements Documents (PRDs) & Acceptance Criteria',
      'User Story Mapping & Interactive Customer Journey Blueprinting (Miro)',
      'Feature Prioritization Frameworks (RICE, MoSCoW, Kano Models)',
      'Quantitative Product Telemetry & Funnel Tracking Taxonomy (Mixpanel, GA4)',
      'Go-To-Market (GTM) Strategy, User Onboarding Flows & Continuous Discovery Loops',
    ],
    benefits: [
      'Prevent costly engineering rework by validating customer problems before writing code',
      'Laser focus engineering capacity on features that directly move revenue and retention KPIs',
      'Create transparent, visual stakeholder consensus across founders, engineering, and sales',
      'Data-driven decision making powered by rigorous cohort retention and conversion funnels',
    ],
    process: [
      {
        step: '01',
        title: 'Discovery & User Research',
        description: 'Conduct qualitative stakeholder interviews, user session audits, and competitor capability mapping.',
      },
      {
        step: '02',
        title: 'Story Mapping & Prioritization',
        description: 'Facilitate Miro visual story mapping to define the true minimum lovable product (MLP) scope.',
      },
      {
        step: '03',
        title: 'PRD & Backlog Architecture',
        description: 'Author rigorous technical specifications, wireframe flows, edge-case definitions, and acceptance criteria.',
      },
      {
        step: '04',
        title: 'Launch Telemetry & Iteration',
        description: 'Instrument event analytics in Mixpanel/GA4 to measure post-launch adoption and drive sprint iteration.',
      },
    ],
    faqs: [
      {
        question: 'How do you collaborate with our technical founders or internal engineers?',
        answer: 'Our product managers bridge vision and execution—handling requirements grooming, user testing, and sprint priority trade-offs in Jira and Confluence.',
      },
      {
        question: 'Which product tools do your PMs work with?',
        answer: 'We are fluent in Miro, Jira, Confluence, Asana, Monday.com, Figma, Mixpanel, and Google Analytics.',
      },
      {
        question: 'Can you help us build a Go-To-Market (GTM) plan for an upcoming release?',
        answer: 'Yes. We craft onboarding walkthroughs, feature release notes, pricing tier experiments, and marketing alignment briefs.',
      },
    ],
    industries: ['Early-Stage Startups', 'Growth-Stage SaaS', 'E-Commerce Brands', 'Enterprise Platforms'],
    relatedServices: [
      { title: 'Project Management & Agile Delivery', slug: 'project-management' },
      { title: 'Business Analysis & Process Mapping', slug: 'business-analysis' },
      { title: 'Software Development', slug: 'software-development' },
    ],
    pricingGuidance: 'Fractional Head of Product retainers or fixed discovery and roadmapping sprints.',
  },
  'project-management': {
    slug: 'project-management',
    title: 'Project Management & Agile Delivery',
    shortDescription:
      'Rigorous Agile execution, sprint planning, and cross-functional delivery leadership powered by Jira, Confluence, Asana, and Monday.com.',
    metaTitle: 'Agile Project Management & Delivery Services | VoiceSpace India',
    metaDescription:
      'Deliver complex software and transformation initiatives on time and within budget. Certified Scrum Masters and Agile delivery leads using Jira, Confluence, Asana, and Monday.com.',
    deliverables: [
      'Agile Scrum & Kanban Board Architecture (Jira Software, Asana, Monday.com)',
      'Sprint Ceremonies: Backlog Grooming, Sprint Planning, Standups & Retrospectives',
      'Velocity Forecasting, Sprint Burn-Down & Milestone Completion Dashboards',
      'Cross-Team Dependency Management, Risk Registers & Mitigation Escalation',
      'Confluence Knowledge Hub Architecture & Architectural Decision Records (ADRs)',
      'Executive Status Reporting & Budget Burn Telemetry for Stakeholders',
    ],
    benefits: [
      'Eliminate chaotic sprint churn and missed deadlines with predictable delivery cadences',
      'Clear transparent transparency on who is working on what, blockages, and remaining effort',
      'Maintain continuous team momentum and shield engineers from unstructured context-switching',
      'Proven frameworks implemented in Jira and Asana tailored specifically to your team size',
    ],
    process: [
      {
        step: '01',
        title: 'Workflow & Tool Assessment',
        description: 'Audit existing boards, release cadences, ticketing hygiene, and team velocity metrics.',
      },
      {
        step: '02',
        title: 'Cadence & Board Configuration',
        description: 'Configure standardized Jira/Asana workflows, issue types, WIP limits, and custom automation rules.',
      },
      {
        step: '03',
        title: 'Active Sprint Leadership',
        description: 'Lead daily unblocking standups, grooming sessions, story sizing, and sprint goal commitments.',
      },
      {
        step: '04',
        title: 'Review & Continuous Optimization',
        description: 'Deliver bi-weekly executive progress summaries, retrospective action items, and velocity improvements.',
      },
    ],
    faqs: [
      {
        question: 'Which project management tools can you configure and manage?',
        answer: 'We manage full setups in Jira Software, Confluence, Asana, Monday.com, ClickUp, Trello, and Notion.',
      },
      {
        question: 'Do you provide certified Scrum Masters or Agile Delivery Leads?',
        answer: 'Yes. Our project leads are seasoned practitioners with deep experience orchestrating engineering and operational teams.',
      },
      {
        question: 'Can you rescue a project that is currently behind schedule?',
        answer: 'Yes. We conduct rapid critical-path triage, eliminate scope creep, realign sprint priorities, and restore delivery predictability.',
      },
    ],
    industries: ['Enterprise IT', 'Custom Software Development', 'Digital Agencies', 'Cross-Border Teams'],
    relatedServices: [
      { title: 'Product Management & UX Strategy', slug: 'product-management' },
      { title: 'Business Analysis & Process Mapping', slug: 'business-analysis' },
      { title: 'Software Testing & QA', slug: 'qa-software-testing' },
    ],
    pricingGuidance: 'Dedicated monthly delivery manager retainers or fractional project leadership pods.',
  },
  'business-analysis': {
    slug: 'business-analysis',
    title: 'Business Analysis & Process Mapping',
    shortDescription:
      'Translating complex business operations into precise technical specifications, BPMN 2.0 process flows, and Power BI dashboards.',
    metaTitle: 'Business Analysis & Process Engineering Services | VoiceSpace India',
    metaDescription:
      'Bridge the gap between business stakeholders and technical developers. Detailed BRDs, user stories with acceptance criteria, BPMN 2.0 flows, and Power BI analytics.',
    deliverables: [
      'Business Requirements Documents (BRD) & Functional Requirement Specs (FRS)',
      'BPMN 2.0 Process Workflow Maps & Operational Swimlane Diagrams (Miro, Visio)',
      'User Stories with Detailed Gherkin (Given-When-Then) Acceptance Criteria',
      'System Integration Flowcharts, Data Entity Schemas & API Data Dictionaries',
      'Gap Analysis, Operational Bottleneck Identification & Automation Feasibility Studies',
      'Microsoft Power BI & Zoho Analytics KPI Dashboard Architecture',
    ],
    benefits: [
      'Eliminate developer guesswork with unambiguous, developer-ready functional specs',
      'Identify hidden operational redundancies and manual bottlenecks before automating',
      'Ensure 100% traceability from top-level business ROI down to individual pull requests',
      'Visual process diagrams that any non-technical executive or team manager can validate',
    ],
    process: [
      {
        step: '01',
        title: 'Stakeholder Elicitation',
        description: 'Conduct structured interviews with executives, department heads, and end users to map realities.',
      },
      {
        step: '02',
        title: 'As-Is vs. To-Be Modeling',
        description: 'Map current bottlenecks and architect target optimized workflows in Miro using BPMN standards.',
      },
      {
        step: '03',
        title: 'Specification Authoring',
        description: 'Document functional specs, edge-case tables, data schemas, validation rules, and acceptance tests.',
      },
      {
        step: '04',
        title: 'Developer Handover & UAT',
        description: 'Facilitate engineering kickoff, assist throughout sprint build, and orchestrate user acceptance testing.',
      },
    ],
    faqs: [
      {
        question: 'What is the format of your deliverables?',
        answer: 'We provide structured Confluence spaces, exported interactive PDFs, Miro interactive boards, and Jira ticket backlogs.',
      },
      {
        question: 'Can you help bridge the gap between our business leaders and external dev teams?',
        answer: 'Yes. Our business analysts act as the technical translator, ensuring business requirements are faithfully implemented in code.',
      },
      {
        question: 'Do you also build reporting and analytics dashboards?',
        answer: 'Yes. We architect Microsoft Power BI, Zoho Analytics, and Mixpanel dashboards to visualize the key metrics defined in the analysis.',
      },
    ],
    industries: ['Logistics & Supply Chain', 'Healthcare Administration', 'Finance & Banking Support', 'Retail & E-Commerce'],
    relatedServices: [
      { title: 'Product Management & UX Strategy', slug: 'product-management' },
      { title: 'Project Management & Agile Delivery', slug: 'project-management' },
      { title: 'Software Development', slug: 'software-development' },
    ],
    pricingGuidance: 'Fixed scoping projects or embedded business analyst staff augmentation.',
  },
  'ui-ux-graphic-design': {
    slug: 'ui-ux-graphic-design',
    title: 'UI/UX & Graphic Design',
    shortDescription:
      'High-conversion UI/UX design systems in Figma, interactive prototypes, user journey wireframes, and complete brand graphic assets.',
    metaTitle: 'UI/UX & Graphic Design Services | Figma & Branding | VoiceSpace India',
    metaDescription:
      'Transform complex software into intuitive experiences. Figma UI/UX design, mobile & web design systems, interactive clickable prototypes, and corporate graphic branding.',
    deliverables: [
      'Interactive Figma Prototypes & User Flow Wireframes',
      'Scalable Design Systems & Atomic Component Token Libraries',
      'High-Fidelity Mobile App (iOS/Android) & Web Platform Interfaces',
      'Brand Visual Identity: Logos, Typography Rules & Color Palettes',
      'Marketing Graphics, Social Media Creative Packs & Display Ad Assets',
      'Usability Audits, WCAG 2.1 AA Accessibility Testing & Developer Handoff',
    ],
    benefits: [
      'Accelerate development velocity with clean Figma tokens and auto-layout auto-handoffs',
      'Dramatically improve user activation and retention by eliminating UX friction points',
      'Consistent, cohesive visual branding across marketing landing pages and core products',
      '100% full Figma project file, vector SVG, and asset export ownership',
    ],
    process: [
      {
        step: '01',
        title: 'User Research & Wireframing',
        description: 'Map information architecture, user mental models, and low-fidelity structural wireframes in Miro and Figma.',
      },
      {
        step: '02',
        title: 'Design System & UI Styling',
        description: 'Establish design tokens, typography scale, accessible contrast ratios, and component states.',
      },
      {
        step: '03',
        title: 'High-Fidelity Prototyping',
        description: 'Build micro-interactions, responsive screens, and testable clickable prototype walkthroughs.',
      },
      {
        step: '04',
        title: 'Developer Handoff & QA Audit',
        description: 'Deliver inspectable specs, asset exports, Tailwind/CSS variables, and conduct design QA reviews.',
      },
    ],
    faqs: [
      {
        question: 'Do you design in Figma?',
        answer: 'Yes, we use Figma as our primary design platform with auto-layout, components, variants, and variables for seamless engineering handoff.',
      },
      {
        question: 'Can you redesign an existing software product without rebuilding everything from scratch?',
        answer: 'Yes. We conduct UX gap audits, refine confusing workflows, and provide incremental component redesigns that your dev team can roll out smoothly.',
      },
      {
        question: 'Do you create commercial vector graphics and marketing collateral?',
        answer: 'Yes. Our graphic design team crafts vector illustrations, product pitch deck slides, promotional banners, and social media creative assets.',
      },
    ],
    industries: ['SaaS & Web Apps', 'E-Commerce Storefronts', 'Mobile Apps', 'Corporate Portals'],
    relatedServices: [
      { title: 'Video Creation & Motion Graphics', slug: 'video-creation-editing' },
      { title: 'Product Management & UX Strategy', slug: 'product-management' },
      { title: 'Website Development', slug: 'web-development' },
    ],
    pricingGuidance: 'Project milestone design sprints or dedicated monthly UI/UX design retainers.',
  },
  'video-creation-editing': {
    slug: 'video-creation-editing',
    title: 'Video Creation & Motion Graphics',
    shortDescription:
      'Professional software product walkthroughs, 2D/3D motion graphics, corporate explainer videos, and social video editing.',
    metaTitle: 'Corporate Video Creation & Editing Services | VoiceSpace India',
    metaDescription:
      'Captivate audiences with high-definition product walkthroughs, corporate explainers, motion graphics, and social video editing using Premiere Pro and After Effects.',
    deliverables: [
      'High-Definition SaaS Product Walkthrough & Feature Demo Videos',
      '2D & 3D Motion Graphics, Animated Title Sequences & Logo Reveals',
      'Corporate Explainer Videos with Scriptwriting & Professional Voiceover',
      'Short-Form Video Production (YouTube Shorts, LinkedIn Clips, Reels)',
      'Video Color Grading, Audio Mastering, Noise Removal & Sound Design',
      'Multi-Format Exports Optimized for Web, Social, YouTube, and Ad Campaigns',
    ],
    benefits: [
      'Increase SaaS conversion rates by up to 80% with clear, concise 60-second product demo videos',
      'Professional Adobe Premiere Pro and After Effects workflows delivering broadcast-quality polish',
      'Full scriptwriting, storyboard generation, visual editing, and royalty-free audio licensing',
      'Rapid turnaround times with structured revision rounds and master project file handovers',
    ],
    process: [
      {
        step: '01',
        title: 'Scriptwriting & Storyboard',
        description: 'Craft high-converting narrative hooks, key value proposition beats, and visual scene boards.',
      },
      {
        step: '02',
        title: 'Screen Recording & Asset Creation',
        description: 'Capture crisp 4K product screens, design custom motion graphics, and record studio-grade voiceovers.',
      },
      {
        step: '03',
        title: 'Editing & Motion Design',
        description: 'Assemble visual cuts, smooth zoom transitions, animated callouts, and rhythmic sound design.',
      },
      {
        step: '04',
        title: 'Review & Multi-Channel Render',
        description: 'Collect timestamped feedback, execute polish passes, and render multi-resolution optimized video masters.',
      },
    ],
    faqs: [
      {
        question: 'What video editing software do you use?',
        answer: 'Our video creators work primarily in Adobe Premiere Pro, After Effects, DaVinci Resolve, and Blender for 3D motion assets.',
      },
      {
        question: 'Can you provide professional voiceover and sound effects?',
        answer: 'Yes. We provide native multilingual voiceovers (US/UK/International accents), licensing, custom sound effects, and mixed audio stems.',
      },
      {
        question: 'How long does a typical product explainer video take?',
        answer: 'Standard 60–90 second explainer or demo videos typically take 5–8 business days from initial storyboard approval to finalized master delivery.',
      },
    ],
    industries: ['Tech & SaaS Marketing', 'Mobile Apps', 'E-Commerce Brands', 'Corporate Communications'],
    relatedServices: [
      { title: 'UI/UX & Graphic Design', slug: 'ui-ux-graphic-design' },
      { title: 'Digital Marketing', slug: 'digital-marketing' },
      { title: 'Game Development (Unity & 3D)', slug: 'game-development' },
    ],
    pricingGuidance: 'Per-video packages or monthly recurring video editing subscriptions.',
  },
  'cloud-devops-security': {
    slug: 'cloud-devops-security',
    title: 'Cloud Infrastructure & DevOps',
    shortDescription:
      'Robust cloud architecture on AWS & Azure, automated CI/CD pipelines, Docker containerization, Kubernetes, and cyber security hardening.',
    metaTitle: 'Cloud Architecture, DevOps & Cyber Security Services | VoiceSpace India',
    metaDescription:
      'Scale your infrastructure with confidence. AWS/Azure cloud architecture, Terraform IaC, Docker/Kubernetes container orchestration, CI/CD automation, and SOC2/ISO compliance.',
    deliverables: [
      'Cloud Architecture Design & Migration (AWS, Google Cloud, Azure)',
      'Infrastructure as Code (IaC) using Terraform, CloudFormation & Ansible',
      'Automated CI/CD Delivery Pipelines (GitHub Actions, GitLab CI, Jenkins)',
      'Container Orchestration (Docker, Kubernetes / EKS / GKE, ECS)',
      '24/7 Monitoring, Telemetry & Logging (CloudWatch, Datadog, Grafana, Prometheus)',
      'Cloud Security Hardening, Zero-Trust IAM, KMS Encryption & Disaster Recovery',
    ],
    benefits: [
      'Eliminate manual deployment errors with automated, immutable CI/CD deployment pipelines',
      'Optimize cloud hosting costs by up to 40% with right-sizing, spot fleets, and auto-scaling',
      'Achieve high-availability 99.99% uptime with multi-AZ failovers and automated backups',
      'Meet rigorous SOC2, HIPAA, and ISO/IEC 27001 data compliance benchmarks',
    ],
    process: [
      {
        step: '01',
        title: 'Infrastructure & Security Audit',
        description: 'Examine current network topologies, cloud expenditures, security vulnerabilities, and deployment bottlenecks.',
      },
      {
        step: '02',
        title: 'Architecture Blueprint & IaC',
        description: 'Architect scalable VPCs, IAM policies, and provision infrastructure automatically via Terraform.',
      },
      {
        step: '03',
        title: 'CI/CD & Containerization',
        description: 'Containerize microservices with Docker, configure zero-downtime rolling deploys, and automated test checks.',
      },
      {
        step: '04',
        title: 'Observability & SLA Support',
        description: 'Deploy real-time alerting, centralized log streaming, disaster recovery failover drills, and runbooks.',
      },
    ],
    faqs: [
      {
        question: 'Which cloud providers do you support?',
        answer: 'We specialize in AWS (Amplify, ECS, EKS, RDS, S3, CloudFront), Google Cloud Platform (Cloud Run, GKE), and Microsoft Azure.',
      },
      {
        question: 'Can you help us reduce our monthly AWS bill?',
        answer: 'Yes. Our FinOps audits typically identify 25%–40% in immediate savings through reserved instances, zombie volume cleanup, and caching optimization.',
      },
      {
        question: 'How do you handle zero-downtime releases?',
        answer: 'We implement blue/green deployments, canary releases, and health-check gatekeeping to guarantee zero client-facing downtime.',
      },
    ],
    industries: ['SaaS Platforms', 'Fintech & Banking', 'High-Traffic E-Commerce', 'Healthcare Technology'],
    relatedServices: [
      { title: 'Software Development', slug: 'software-development' },
      { title: 'Software Testing & QA', slug: 'qa-software-testing' },
      { title: 'AI, LLM & RAG Solutions', slug: 'ai-llm-rag' },
    ],
    pricingGuidance: 'Monthly managed cloud retainers or fixed-scope infrastructure migration contracts.',
  },
  'india-business-entry': {
    slug: 'india-business-entry',
    title: 'India Business Entry & Local Head Office',
    shortDescription:
      'End-to-end company establishment, corporate representation, local head office hosting, product sales launch, and consumer trust building in India for international founders and foreign brands.',
    metaTitle: 'India Business Entry & Local Head Office Representation | VoiceSpace India',
    metaDescription:
      'Establish your business in India with VoiceSpace. Complete company incorporation, MCA/GST/FEMA compliances, physical head office representation, product distribution, and local Indian customer trust building.',
    deliverables: [
      'Complete Indian Company Incorporation (Wholly-Owned Subsidiary, Branch or Liaison Office)',
      'Statutory Regulatory Compliances (MCA, ROC, PAN, TAN, GST & Import Export Code - IEC)',
      'Physical Registered Head Office & Operating Headquarters in Delhi-NCR (Faridabad, Haryana)',
      'Local Banking, Multi-Currency Accounts & RBI/FEMA Foreign Direct Investment (FDI) Filings',
      'Omnichannel Indian Customer Support (+91 Local Phone, WhatsApp Business, Hindi/English Desk)',
      'Product Sales Launch & Indian Marketplace Onboarding (Amazon India, Flipkart, ONDC, D2C)',
      'Local Payment Gateway Integration (UPI, Google Pay, PhonePe, Razorpay, Cash on Delivery)',
      'Consumer Trust & Warranty Operations (Local Returns, RMA Management, Indian Customer Credibility)',
    ],
    benefits: [
      'Zero friction entry into the world’s fastest growing 1.4B+ consumer market without overseas travel',
      'Immediate consumer trust: Indian buyers purchase confidently from brands with a verified Indian entity & local support',
      'Complete regulatory protection: strict compliance with Indian corporate laws, GST, and RBI/FEMA regulations',
      'Physical executive head office infrastructure providing legitimate presence, meeting spaces, and mail management',
      'Turnkey operational readiness: customer care, product logistics, returns, and sales active in weeks, not months',
    ],
    process: [
      {
        step: '01',
        title: 'Entity Structuring & Regulatory Filing',
        description:
          'Determine the optimal corporate vehicle (Wholly Owned Subsidiary, Branch, or LLP), obtain Director Identification Numbers (DIN) and Digital Signatures (DSC), and file Ministry of Corporate Affairs (MCA) incorporation.',
      },
      {
        step: '02',
        title: 'Head Office & Banking Establishment',
        description:
          'Assign your registered corporate operating address at VoiceSpace Delhi-NCR facility, open multi-currency corporate bank accounts with leading Indian banks, and complete RBI/FEMA inward remittance reporting.',
      },
      {
        step: '03',
        title: 'Product Onboarding & Market Integration',
        description:
          'Secure Import Export Code (IEC) and GST registrations, onboard your catalog to Amazon.in, Flipkart, and custom D2C stores, and integrate localized Indian payment gateways with UPI (Google Pay, PhonePe, Paytm).',
      },
      {
        step: '04',
        title: 'Customer Trust Hub & Ongoing Operations',
        description:
          'Deploy dedicated +91 phone lines, verified WhatsApp Business support, domestic warranty/return handling, and continuous Indian regulatory, tax, and GST filing governance.',
      },
    ],
    faqs: [
      {
        question: 'Can a foreign citizen or overseas company own 100% of an Indian business?',
        answer:
          'Yes. Under the Government of India’s foreign direct investment (FDI) policy, most sectors—including technology, e-commerce marketplace, manufacturing, consulting, and software—allow 100% foreign equity ownership under the Automatic Route with straightforward reporting to the Reserve Bank of India (RBI).',
      },
      {
        question: 'How does VoiceSpace act as our Head Office in India?',
        answer:
          'VoiceSpace provides a legitimate corporate headquarters address at our operating facility in Faridabad (Delhi-NCR, Haryana). We manage your statutory registered office signage, official government correspondence, physical board meeting rooms, local landline and toll-free telephone systems, and dedicated bilingual support personnel operating directly under your brand name.',
      },
      {
        question: 'How do you help international brands sell products in India?',
        answer:
          'We handle the full commercial pipeline: obtaining your Import Export Code (IEC), registering your brand on Amazon India, Flipkart, and ONDC, integrating high-converting Indian payment gateways (UPI, NetBanking, RuPay, Cash on Delivery), and coordinating domestic warehousing and last-mile logistics with trusted partners.',
      },
      {
        question: 'Why is a local Indian presence critical to building consumer trust?',
        answer:
          'Indian consumers hesitate to buy from overseas websites due to fear of customs duties, lack of easy returns, and no local customer assistance. Having an authentic Indian entity, localized +91 phone and WhatsApp support, instant UPI payment options, and domestic return handling instantly bridges the trust gap and dramatically elevates conversion rates.',
      },
    ],
    industries: [
      'Global E-Commerce & Consumer Brands',
      'Overseas SaaS & Software Companies',
      'Consumer Electronics & Hardware',
      'Industrial & Manufacturing Exporters',
      'Healthcare, Wellness & D2C Brands',
      'International Consulting & EdTech',
    ],
    relatedServices: [
      { title: 'Customer Support Services', slug: 'customer-support' },
      { title: 'Business Process Outsourcing (BPO)', slug: 'bpo' },
      { title: 'Website Development', slug: 'web-development' },
      { title: 'Digital Marketing', slug: 'digital-marketing' },
    ],
    pricingGuidance: 'Fixed incorporation and statutory setup packages plus flexible monthly head office & operational retainers.',
  },
};


