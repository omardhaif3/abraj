import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { Lightbulb, Brain, Target } from 'lucide-react';

const Philosophy: React.FC = () => {
  const t = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section id="philosophy" className="py-24 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full  opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full  opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Lightbulb size={32} className="text-dark-blue icon-pulse hover-bounce" />
            <h2 className={`text-4xl font-bold text-center text-black ${isRTL ? 'font-cairo' : ''}`}>
              {t('philosophy.title')}
            </h2>
          </div>
          
          <p className={`text-xl leading-relaxed text-center text-black ${isRTL ? 'font-cairo' : ''}`}>
            {t('philosophy.text')}
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#ffedd8] rounded-xl hover:bg-opacity-90 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="text-black w-6 h-6 icon-float group-hover:text-purple-700 transition-colors" />
                <h3 className={`text-xl font-semibold text-black ${isRTL ? 'font-cairo' : ''}`}>
                  {isRTL ? 'الابتكار' : 'Innovation'}
                </h3>
              </div>
              <p className={`text-black ${isRTL ? 'font-cairo' : ''}`}>
                {isRTL 
                  ? 'نبتكر حلولًا فريدة لتحديات العلامات التجارية المعقدة.' 
                  : 'We create unique solutions to complex branding challenges.'}
              </p>
            </div>
            
            <div className="p-6 bg-[#ffedd8] rounded-xl hover:bg-opacity-90 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-black w-6 h-6 icon-spin group-hover:text-purple-700 transition-colors" />
                <h3 className={`text-xl font-semibold text-black ${isRTL ? 'font-cairo' : ''}`}>
                  {isRTL ? 'التحليل' : 'Analysis'}
                </h3>
              </div>
              <p className={`text-black ${isRTL ? 'font-cairo' : ''}`}>
                {isRTL 
                  ? 'نستخدم البيانات والتحليل لتوجيه قرارات التصميم الاستراتيجية.' 
                  : 'We use data and analysis to guide strategic design decisions.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;