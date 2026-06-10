import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import TableOfContents, { type TocSection } from './legal/TableOfContents';
import FooterBar from './FooterBar';
import ThemeToggle from './ThemeToggle';

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  pdfPath: string;
  sections: TocSection[];
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  subtitle,
  pdfPath,
  sections,
  children,
}: LegalPageLayoutProps) {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-headline mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">{subtitle}</p>
          )}
          <a
            href={pdfPath}
            download
            className="inline-flex items-center gap-2 text-sm font-medium text-teal hover:text-teal-600 transition-colors py-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <TableOfContents sections={sections} />

          <div className="flex-1 min-w-0 max-w-3xl">
            {children}
          </div>
        </div>
      </main>

      <footer className="bg-gray-950 text-gray-400">
        <FooterBar />
      </footer>
    </div>
  );
}
