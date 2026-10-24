import { useState } from 'react';
import { X, Server, Cloud, CheckCircle, Copy, Check, Terminal, Globe, Shield } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/constants';

interface AwsDeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AwsDeploymentModal({ isOpen, onClose }: AwsDeploymentModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const amplifyYaml = `version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
        - npx prisma generate
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - .next/cache/**/*
      - node_modules/**/*`;

  const envSample = `NEXT_PUBLIC_SITE_URL=https://voicespace.in
NODE_ENV=production
DATABASE_URL=postgresql://user:password@rds.amazonaws.com:5432/voicespace
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=YOUR_SES_SMTP_USER
SMTP_PASSWORD=YOUR_SES_SMTP_PASSWORD
SMTP_FROM="VoiceSpace Support <no-reply@voicespace.in>"
NOTIFICATION_EMAIL=inquiries@voicespace.in`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-line shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="aws-modal-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-line px-6 py-5 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center">
              <Server className="w-5 h-5 text-brand-cyan" />
            </div>
            <div>
              <h3 id="aws-modal-title" className="text-lg font-bold text-navy-900">
                AWS Production Architecture & Deployment Guide
              </h3>
              <p className="text-xs text-slate-body">
                Official specifications for deploying {SITE_CONFIG.url}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-navy-900 rounded-lg hover:bg-surface-alt transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8 text-sm">
          {/* Architecture Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-surface-alt border border-slate-line space-y-1">
              <span className="text-[10px] font-bold uppercase text-brand-blue tracking-wider">Frontend & Edge</span>
              <p className="font-bold text-navy-900 text-xs">AWS Amplify Hosting</p>
              <p className="text-[11px] text-slate-body">Global CloudFront CDN, Edge SSR, Automated SSL via ACM</p>
            </div>
            <div className="p-4 rounded-2xl bg-surface-alt border border-slate-line space-y-1">
              <span className="text-[10px] font-bold uppercase text-brand-blue tracking-wider">Database & Storage</span>
              <p className="font-bold text-navy-900 text-xs">Amazon RDS PostgreSQL</p>
              <p className="text-[11px] text-slate-body">Multi-AZ automated snapshots, VPC isolation, Prisma ORM</p>
            </div>
            <div className="p-4 rounded-2xl bg-surface-alt border border-slate-line space-y-1">
              <span className="text-[10px] font-bold uppercase text-brand-blue tracking-wider">Transactional Email</span>
              <p className="font-bold text-navy-900 text-xs">Amazon SES SMTP</p>
              <p className="text-[11px] text-slate-body">SPF, DKIM & DMARC verified sender reputation for inquiries</p>
            </div>
          </div>

          {/* Deployment Steps */}
          <div className="space-y-4">
            <h4 className="font-bold text-navy-900 text-base">Step-by-Step Deployment Protocol</h4>

            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-slate-line bg-white flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-navy-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <p className="font-semibold text-navy-900 text-xs">Connect Repository to AWS Amplify</p>
                  <p className="text-xs text-slate-body mt-0.5">
                    Navigate to AWS Amplify Console &rarr; Host web app &rarr; Authorize GitHub / AWS CodeCommit &rarr; Select repository and <code className="bg-slate-100 px-1 rounded">main</code> branch.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-line bg-white flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-navy-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-navy-900 text-xs">Verify Amplify Build Settings (amplify.yml)</p>
                    <button
                      onClick={() => handleCopy(amplifyYaml, 'yaml')}
                      className="text-xs text-brand-blue flex items-center gap-1 cursor-pointer hover:underline"
                    >
                      {copiedKey === 'yaml' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedKey === 'yaml' ? 'Copied' : 'Copy YAML'}</span>
                    </button>
                  </div>
                  <pre className="mt-2 p-3 rounded-lg bg-navy-900 text-slate-200 font-mono text-[11px] overflow-x-auto">
                    {amplifyYaml}
                  </pre>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-line bg-white flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-navy-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-navy-900 text-xs">Configure Environment Variables in Amplify</p>
                    <button
                      onClick={() => handleCopy(envSample, 'env')}
                      className="text-xs text-brand-blue flex items-center gap-1 cursor-pointer hover:underline"
                    >
                      {copiedKey === 'env' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedKey === 'env' ? 'Copied' : 'Copy Env'}</span>
                    </button>
                  </div>
                  <pre className="mt-2 p-3 rounded-lg bg-navy-900 text-slate-200 font-mono text-[11px] overflow-x-auto">
                    {envSample}
                  </pre>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-line bg-white flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-navy-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  <p className="font-semibold text-navy-900 text-xs">Custom Domain & DNS in Amazon Route 53</p>
                  <p className="text-xs text-slate-body mt-0.5 leading-relaxed">
                    Under Amplify &rarr; Domain management, link <code className="bg-slate-100 px-1 rounded">voicespace.in</code>. Amplify handles auto-renewing SSL certificate issuance via AWS Certificate Manager (ACM) and adds the CloudFront alias record in Route 53.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-surface-alt border-t border-slate-line px-6 py-4 flex items-center justify-between">
          <span className="text-xs text-slate-body">
            Security: TLS 1.3 enforced · Strict Transport Security (HSTS)
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-navy-900 text-white hover:bg-navy-800 transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
