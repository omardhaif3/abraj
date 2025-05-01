import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Twitter, Linkedin, Facebook, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const t = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <footer className="bg-dark-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              خطة <span className="text-dark-blue">ثمانية</span>
            </h3>
            <p className={`text-gray-300 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL 
                ? 'نحن وكالة إبداعية متخصصة في بناء العلامات التجارية المتميزة وتجارب المستخدم.'
                : 'We are a creative agency specializing in building distinctive brands and user experiences.'}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className={`text-xl font-semibold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className={`space-y-2 ${isRTL ? 'font-arabic' : ''}`}>
              <li><a href="#home" className="text-gray-300 hover:text-green-500 transition-colors">{t('nav.home')}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-green-500 transition-colors">{t('nav.about')}</a></li>
              <li><a href="#work" className="text-gray-300 hover:text-green-500 transition-colors">{t('nav.work')}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-green-500 transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className={`text-xl font-semibold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'اتصل بنا' : 'Contact Us'}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail size={18} className="text-dark-blue" />
                <span className="text-gray-300">hello@reallygreatsite.com</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone size={18} className="text-dark-blue" />
                <span className="text-gray-300">012-1234-567</span>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className={`text-xl font-semibold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'تابعنا' : 'Follow Us'}
            </h4>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-purple-700 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-purple-700 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-purple-700 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-purple-700 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className={`text-gray-400 ${isRTL ? 'font-arabic' : ''}`}>
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;