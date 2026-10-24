export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  deliverables: string[];
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  industries: string[];
  relatedServices: { title: string; slug: string }[];
  pricingGuidance?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  author: string;
  content: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  typicalWorkflows: string[];
  complianceNotes: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  companyName?: string;
  phone?: string;
  country?: string;
  service: string;
  preferredContact?: 'email' | 'phone' | 'whatsapp';
  message: string;
  consentGiven: boolean;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  companyName?: string;
  phone?: string;
  service: string;
  projectScope: string;
  budgetRange?: string;
  timeline?: string;
  engagementModel?: 'Project-Based' | 'Dedicated Team' | 'Ongoing Managed Services';
  teamSize?: string;
  coverageHours?: string;
  consentGiven: boolean;
}

export interface InquiryRecord extends ContactFormData {
  id: string;
  submittedAt: string;
  status: 'Received' | 'In Review' | 'Proposal Prepared';
}

export interface QuoteRecord extends QuoteFormData {
  id: string;
  submittedAt: string;
  estimatedEffort?: string;
  referenceNumber: string;
}
