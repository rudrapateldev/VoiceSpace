import { useState } from 'react';
import { BLOG_POSTS } from '../lib/constants';
import { ArrowRight, Clock } from 'lucide-react';

interface BlogIndexPageProps {
  onNavigate: (path: string) => void;
}

export default function BlogIndexPage({ onNavigate }: BlogIndexPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Software Development', 'Web Development', 'Digital Marketing', 'Business Outsourcing', 'Customer Experience'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCategory === 'all') return true;
    return post.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold text-brand-blue uppercase tracking-wider">
          Knowledge Base
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 leading-tight">
          Insights & Articles
        </h1>
        <p className="text-lg text-slate-body leading-relaxed">
          Actionable perspectives on technology engineering, scalable marketing systems, and operational excellence.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-line pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-navy-900 text-white shadow-xs'
                : 'bg-surface-alt text-slate-body hover:text-navy-900 hover:bg-slate-200/60'
            }`}
          >
            {cat === 'all' ? 'All Articles' : cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((art) => (
          <article
            key={art.slug}
            className="p-8 rounded-3xl bg-white border border-slate-line flex flex-col justify-between shadow-xs hover:border-brand-blue transition-all"
          >
            <div className="space-y-4">
              {/* Zero-Pill unboxed metadata */}
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-brand-blue">{art.category}</span>
                <span aria-hidden="true">·</span>
                <span>{art.readingTime}</span>
              </div>
              <h2 className="text-xl font-bold text-navy-900 leading-snug">{art.title}</h2>
              <p className="text-xs text-slate-body leading-relaxed">{art.excerpt}</p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-line">
              <button
                onClick={() => onNavigate(`/blog/${art.slug}`)}
                className="text-sm font-semibold text-brand-blue hover:text-blue-700 inline-flex items-center cursor-pointer group"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
