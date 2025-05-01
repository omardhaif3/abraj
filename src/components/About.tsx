import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { Rocket, Palette, MousePointer2, LineChart } from 'lucide-react';

const About: React.FC = () => {
  const t = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-dark-blue to-dark-blue-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Rocket size={32} className="text-purple-400 icon-float hover-rotate" />
            <h2 className={`text-4xl font-bold text-white ${isRTL ? 'font-cairo' : ''}`}>
              {isRTL ? (
                <div className="space-y-2">
                  <div>خطوة الألف ميل تبدأ بِخُطّة</div>
                  <div className="text-2xl text-purple-300">ونحن في خطة ثمانية نرسم لك الطريق</div>
                </div>
              ) : (
                t('about.title')
              )}
            </h2>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-xl shadow-xl">
            <p className={`text-xl leading-relaxed text-gray-100 ${isRTL ? 'font-cairo' : ''}`}>
              {t('about.text')}
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Branding', icon: <Palette className="w-8 h-8 icon-spin" />, desc: 'Strategic brand development' },
              { title: 'UX Design', icon: <MousePointer2 className="w-8 h-8 icon-float" />, desc: 'User-centered experiences' },
              { title: 'Research', icon: <LineChart className="w-8 h-8 icon-pulse" />, desc: 'Data-driven insights' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-6 bg-purple-900 bg-opacity-30 rounded-xl hover:bg-opacity-40 transition-all transform hover:scale-105 group"
              >
                <div className="text-purple-300 mb-4 group-hover:text-purple-200 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-purple-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;