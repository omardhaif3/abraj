import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { Rocket, Palette, MousePointer2, LineChart } from 'lucide-react';

const About: React.FC = () => {
  const t = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Rocket size={32} className="text-secondary icon-float hover-rotate" />
            <h2 className={`text-4xl font-bold text-black ${isRTL ? 'font-cairo' : ''}`}>
              {isRTL ? (
                <div className="space-y-2">
                  <div>مسيرتنا</div>
                  <div className="text-2xl text-black">أن نكون من أفضل الشركات الرائدة في مجال إدارة جميع المؤسسات والمرافق في المملكة العربية السعودية</div>
                </div>
              ) : (
                t('about.title')
              )}
            </h2>
          </div>

          <div className="p-8 rounded-soft shadow-soft">
            <p className={`text-black text-xl leading-relaxed ${isRTL ? 'font-cairo' : ''}`}>
              {t('about.text')}
            </p>
          </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[

            { titleKey: 'about.title1', icon: <Palette className="w-8 h-8 icon-spin text-secondary" />, descKey: 'about.text1' },
            { titleKey: 'about.title2', icon: <MousePointer2 className="w-8 h-8 icon-float text-secondary" />, descKey: 'about.text2' },
            { titleKey: 'about.title3', icon: <LineChart className="w-8 h-8 icon-pulse text-secondary" />, descKey: 'about.text3' }
          ].map((item, index) => (
            <div 
              key={index} 
              className="p-6 bg-[#ffedd8] rounded-xl hover:bg-opacity-90 transition-all transform hover:scale-105 group"
            >
              <div className="text-coffee-500 mb-4 group-hover:text-coffee-700 transition-colors">
                {item.icon}
              </div>
              <h3 className={`text-xl font-semibold text-black mb-2 ${isRTL ? 'font-cairo' : ''}`}>{t(item.titleKey)}</h3>
              <p className={`text-black ${isRTL ? 'font-cairo' : ''}`}>{t(item.descKey).split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ))}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
