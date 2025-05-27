
import './animated-background.css';
import Background from './components/Background';
import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import CertificationsAwards from './components/CertificationsAwards';
import Partners from './components/Partners';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import BoardOfDirectorsPage from './pages/BoardOfDirectorsPage';
// Removed unused import OurServices
import OurDepartments from './components/OurDepartments';
import ChairmanMessagePage from './pages/ChairmanMessagePage';
function MainPageContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && typeof location.state === 'object' && 'scrollToHero' in location.state) {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
      // Clear the state to prevent repeated scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="app-gradient-bg">
      <Navbar />
      <Hero />
      <Background />
      {/* Removed OurServices as per the request */}
      <About />
      <Work />
       <OurDepartments />
      <CertificationsAwards />
      <Partners />
      {/* <Contact /> */}
      <Footer />
    </div>
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
        <Route path="/about-abrag" element={<AboutPage />} />
        <Route path="/chairman-message" element={<ChairmanMessagePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/board-of-directors" element={<BoardOfDirectorsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <WhatsappButton className={positionClass} />
    </>
  );
}

export default App;
