import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import { getArticleBySlug } from '../data/news';
import FooterBar from '../components/FooterBar';
import ThemeToggle from '../components/ThemeToggle';

function formatDate(dateStr: string) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
        <ArticleNav backTo="/news" backLabel="Back to News" />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Article not found</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-6">The article you're looking for doesn't exist or has been removed.</p>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal hover:text-teal-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all news
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const hasMediaContact = article.media_contact_name || article.media_contact_email;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
      <ArticleNav backTo="/news" backLabel="Back to News" />

      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-14">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
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
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-headline leading-tight">
            {article.title}
          </h1>
        </div>
      </header>

      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />

        {hasMediaContact && (
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
            <h4 className="text-xs font-bold uppercase tracking-overline text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
              Media Contact
            </h4>
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 sm:p-5">
              <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                {article.media_contact_name}
              </p>
              {article.media_contact_title && (
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  {article.media_contact_title}
                </p>
              )}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mt-3">
                {article.media_contact_email && (
                  <a
                    href={`mailto:${article.media_contact_email}`}
                    className="inline-flex items-center gap-1.5 text-sm text-teal hover:text-teal-600 transition-colors break-all"
                  >
                    <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                    {article.media_contact_email}
                  </a>
                )}
                {article.media_contact_phone && (
                  <a
                    href={`tel:${article.media_contact_phone}`}
                    className="inline-flex items-center gap-1.5 text-sm text-teal hover:text-teal-600 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                    {article.media_contact_phone}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mt-10">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal hover:text-teal-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all news
          </Link>
        </div>
      </main>

      <footer className="bg-gray-950 text-gray-400">
        <FooterBar />
      </footer>
    </div>
  );
}

function ArticleNav({ backTo, backLabel }: { backTo: string; backLabel: string }) {
  return (
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
              to={backTo}
              className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-teal transition-colors py-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{backLabel}</span>
              <span className="sm:hidden">News</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
