import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import News from './pages/News';
import NewsArticle from './pages/NewsArticle';
import ScrollToTop from './components/ScrollToTop';
import ToastContainer from './components/Toast';
import CookieBanner from './components/cookies/CookieBanner';
import CookiePreferencesModal from './components/cookies/CookiePreferencesModal';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsArticle />} />
      </Routes>
      <ToastContainer />
      <CookieBanner />
      <CookiePreferencesModal />
    </div>
  );
}
