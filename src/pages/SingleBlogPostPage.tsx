import { BLOG_POSTS } from '../lib/constants';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';

interface SingleBlogPostPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export default function SingleBlogPostPage({ slug, onNavigate }: SingleBlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="text-3xl font-bold text-navy-900">Article Not Found</h1>
        <p className="text-slate-body">The insight article you are looking for has been moved or retired.</p>
        <button
          onClick={() => onNavigate('/blog')}
          className="px-6 py-3 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
        >
          &larr; Return to All Articles
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <button
        onClick={() => onNavigate('/blog')}
        className="inline-flex items-center text-xs font-bold text-brand-blue dark:text-brand-cyan uppercase tracking-wider hover:underline cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to all insights
      </button>

      <header className="space-y-4">
        {/* Zero-Pill Unboxed Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="font-semibold text-brand-blue dark:text-brand-cyan">{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.publishedAt}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white leading-tight">
          {post.title}
        </h1>
        <p className="text-xs text-slate-400 dark:text-slate-500">By {post.author}</p>
      </header>

      <div className="space-y-6 text-base text-slate-body dark:text-slate-300 leading-relaxed pt-6 border-t border-slate-line dark:border-slate-800">
        {post.content.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      <div className="p-8 rounded-3xl bg-surface-alt dark:bg-[#0F172A] border border-slate-line dark:border-slate-800 mt-12 space-y-4 transition-colors">
        <h3 className="text-lg font-bold text-navy-900 dark:text-white">Need Guidance on Your Project?</h3>
        <p className="text-sm text-slate-body dark:text-slate-300">
          Speak with the VoiceSpace engineering and operations team to discuss your specific goals.
        </p>
        <button
          onClick={() => onNavigate('/contact')}
          className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold bg-brand-blue text-white hover:bg-blue-600 transition-colors cursor-pointer shadow-xs active:scale-[0.99]"
        >
          Consult Our Team &rarr;
        </button>
      </div>
    </article>
  );
}
