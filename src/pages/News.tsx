import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Loader2, Newspaper } from 'lucide-react';
import { supabase } from '../lib/supabase';
import FooterBar from '../components/FooterBar';
import ThemeToggle from '../components/ThemeToggle';

interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  published_date: string;
  location: string;
  summary: string;
  category: string;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function News() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      const { data } = await supabase
        .from('news_articles')
        .select('id, title, slug, published_date, location, summary, category')
        .eq('published', true)
        .order('published_date', { ascending: false });

      if (data) setArticles(data);
      setLoading(false);
    }
    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex-shrink-0 group">
              <img
                src="/SHAEDLogo_updated.png"
                alt="SHAED"
                className="h-8 transition-transform duration-200 group-hover:scale-105 dark:brightness-0 dark:invert"
              />
            </Link>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link
                to="/"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-teal transition-colors py-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Home</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
              <Newspaper className="w-5 h-5 text-teal" />
            </div>
            <span className="text-xs font-bold uppercase tracking-overline text-teal">Latest Updates</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-headline">
            News
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl">
            Press releases, announcements, and updates from SHAED.
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-6 h-6 text-teal animate-spin" />
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400">No articles yet. Check back soon.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/news/${article.slug}`}
                className="block group"
              >
                <article className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-teal/30 dark:hover:border-teal/30 hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-semibold bg-teal/10 text-teal">
                      {article.category}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400 dark:text-gray-500">
                      {formatDate(article.published_date)}
                    </span>
                    {article.location && (
                      <>
                        <span className="text-gray-300 dark:text-gray-600 hidden sm:inline">|</span>
                        <span className="text-xs sm:text-sm text-gray-400 dark:text-gray-500">
                          {article.location}
                        </span>
                      </>
                    )}
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white tracking-headline leading-snug mb-2 sm:mb-3 group-hover:text-teal transition-colors duration-200">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-[15px] leading-relaxed line-clamp-3 mb-4 sm:mb-5">
                    {article.summary}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-teal group-hover:gap-3 transition-all duration-200">
                    Read full release
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </main>

      <footer className="bg-gray-950 text-gray-400">
        <FooterBar />
      </footer>
    </div>
  );
}
