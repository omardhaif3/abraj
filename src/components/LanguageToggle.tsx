import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-full bg-transparent text-white text-sm font-medium transition-all hover:bg-transparent focus:outline-none"
      aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      {language === 'en' ? 'العربية' : 'English'}
    </button>
  );
};

export default LanguageToggle;
