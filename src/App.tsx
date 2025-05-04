import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Philosophy from './components/Philosophy';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

function MainPageContent() {
  const { isRTL } = useLanguage();
  const location = useLocation();

  // Determine position class based on direction
  const positionClass = isRTL ? 'left-6' : 'right-6';

  useEffect(() => {
    if (location.state && (location.state as any).scrollToHero) {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
      // Clear the state to prevent repeated scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Philosophy />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  // Update the document title
  useEffect(() => {
    document.title = 'Plan Eight - Tech & Branding';
  }, []);

  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const { isRTL } = useLanguage();
  const positionClass = isRTL ? 'left-6' : 'right-6';

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPageContent />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <WhatsappButton className={positionClass} />
    </>
  );
}

export default App;
