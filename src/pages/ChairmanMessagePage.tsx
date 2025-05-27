import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import '../components/Background.css';
import { useTranslation } from '../hooks/useTranslation';

const ChairmanMessagePage: React.FC = () => {
  const { isRTL } = useLanguage();
  const t = useTranslation();

  const layout = isRTL ? 'md:flex-row-reverse text-right' : 'md:flex-row text-left';
  const dir = isRTL ? 'rtl' : 'ltr';

  return (
    <div dir={dir} className="text-gray-900 min-h-screen font-sans">
      <Navbar />
    
      {/* Header Section */}
      <section className="text-white py-20 text-center shadow-md mt-16 ">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-cairo">
            {t('chairmanMessagePage.headerTitle')}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-cairo">
            {t('chairmanMessagePage.headerSubtitle')}
          </p>
        </div>
      </section>
         <div className="w-full md:bg-blue-200 py-16">     
      {/* Message Section inside white box */}
      <section className={`container mx-auto py-16  px-6 md:px-12 bg-white rounded-xl shadow-xl flex flex-col ${layout} gap-12 items-start font-cairo `}>
        {/* Image */}
        <div className="md:w-1/2 relative">
          <img
            src="/images/manager.png"
            alt={t('chairmanMessagePage.imageAlt')}
            className="rounded-lg shadow-lg w-full object-cover max-h-[550px]"
          />
        </div>

        {/* Text */}
        <div className={`md:w-1/2 space-y-6 ${isRTL ? 'text-left' : 'text-left'}`}>
          <h2 className="text-3xl font-bold text-[#002B5C]">
            {t('chairmanMessagePage.messageTitle')}
          </h2>
          <p className={`text-lg leading-relaxed text-[#4B5563] italic ${isRTL ? 'border-r-4 pr-4' : 'border-l-4 pl-4'} border-[#002B5C] text-justify`}>
            {t('chairmanMessagePage.messageText')}
          </p>
          <div>
            <p className="text-xl font-semibold text-[#002B5C]">
              {t('chairmanMessagePage.chairmanName')}
            </p>
            <p className="text-[#4B5563]">
              {t('chairmanMessagePage.chairmanTitle')}
            </p>
          </div>
        </div>
      </section>
              </div>
      {/* Footer with Background */}
      <footer className="relative">
        <Background />
        <Footer />
      </footer>
    </div>
  );
};

export default ChairmanMessagePage;
