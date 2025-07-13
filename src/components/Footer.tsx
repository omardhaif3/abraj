import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook, FaLinkedin, FaSnapchat, FaTiktok } from 'react-icons/fa';

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
                  ? 'شريكك في الجودة منذ اللحظة الأولى'
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
                  <span className="text-white">Info@abrajalwatania.sa</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Phone size={18}  />
                  <span className="text-white">0112479609</span>
                </li>
              </ul>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className={`mb-4 text-xl font-semibold ${isRTL ? 'font-arabic' : ''} text-white`}>
                {isRTL ? 'تابعنا' : 'Follow Us'}
              </h4>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <a href="https://www.instagram.com/marketingabraj1/?igsh=NmZ6ZmVqdnB6aGhi#" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-blue-700 transition-colors" aria-label="Instagram">
                  <FaInstagram size={20} />
                </a>
                <a
  href="https://x.com/aalwatania40994?s=11"
  className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-blue-700 transition-colors"
  aria-label="X (Twitter)"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1227"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M714 658l486-658h-114l-389 527-309-527H0l509 862L37 1227h114l398-540 317 540h268L714 658z" />
  </svg>
</a>

                <a href="https://www.linkedin.com/in/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A7%D8%A8%D8%B1%D8%A7%D8%AC-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9-04857a242/" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-blue-700 transition-colors" aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://www.facebook.com/people/National-Abraj-for-Operation-Maintenance-Co/100083151311350/?mibextid=2JQ9oc" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-blue-700 transition-colors" aria-label="Facebook">
                  <FaFacebook size={20} />
                </a>
                <a href="https://www.tiktok.com/@abrajalwatania?_t=8k9SINdxCNB&_r=1" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-blue-700 transition-colors" aria-label="Tiktok">
                  <FaTiktok size={20} />
                </a>
                <a href="https://www.snapchat.com/add/abrag711?share_id=_-CFY32vBLw&locale=ar-EG" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-blue-700 transition-colors" aria-label="Snapchat">
                  <FaSnapchat size={20} />
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
