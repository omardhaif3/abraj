import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Twitter, Linkedin, Facebook, Mail, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const t = useTranslation();
  const { isRTL } = useLanguage();
  const location = useLocation();

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (location.pathname === '/about') {
      e.preventDefault();
      // Force reload the page
      window.location.reload();
    }
  };

  return (
      <footer className="relative py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {t('footer.agencyName')}
              </h3>
              <p className={`mb-4 text-white ${isRTL ? 'font-arabic' : ''}`}>
                {isRTL 
                  ? 'أبراج الوطنية شريك جدير بالثقة'
                  : 'Abraj Al-Watania a trustworthy partner.'}
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className={`mb-4 text-xl font-semibold ${isRTL ? 'font-arabic' : ''} text-white`}>
                {isRTL ? 'روابط سريعة' : 'Quick Links'}
              </h4>
              <ul className={`space-y-2 ${isRTL ? 'font-arabic' : ''}`}>
                <li>
                  <Link to="/#home" className="text-white hover:text-blue-500 transition-colors">
                    {t('nav.home')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={handleAboutClick}
                    className="text-white hover:text-blue-500 transition-colors"
                  >
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={(e) => {
                      if (location.pathname === '/services') {
                        e.preventDefault();
                        window.location.reload();
                      }
                    }}
                    className="text-white hover:text-blue-500 transition-colors"
                  >
                    {t('nav.work')}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white hover:text-blue-500 transition-colors">
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className={`mb-4 text-xl font-semibold ${isRTL ? 'font-arabic' : ''} text-white`}>
                {isRTL ? 'اتصل بنا' : 'Contact Us'}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Mail size={18}  />
                  <span className="text-white">hello@reallygreatsite.com</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Phone size={18}  />
                  <span className="text-white">012-1234-567</span>
                </li>
              </ul>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className={`mb-4 text-xl font-semibold ${isRTL ? 'font-arabic' : ''} text-white`}>
                {isRTL ? 'تابعنا' : 'Follow Us'}
              </h4>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <a href="#" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-blue-700 transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-blue-700 transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-blue-700 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-blue-700 transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-gray-300 text-center">
            <p className={`text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
