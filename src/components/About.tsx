import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { Rocket, Palette, MousePointer2, LineChart } from 'lucide-react';

const About: React.FC = () => {
  const t = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <>
      <section id="about" className="py-0 relative">
        <div className="animated-white-bg py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <h2 className={`text-4xl font-bold text-white ${isRTL ? 'font-cairo' : ''}`}>
  <div className="flex items-center justify-center gap-2">
    <Rocket size={32} className="icon-float hover-rotate" style={{ color: '#FFFFFF', width: 32, height: 32, minWidth: 32, minHeight: 32 }} />
    {isRTL ? (
      <div className="space-y-2">
        <span>مسيرتنا</span>
      </div>
    ) : (
      <span>{t('about.title')}</span>
    )}
  </div>
</h2>

              </div>

              <div className="p-8 rounded-soft shadow-soft">
                <p className={`text-white font-bold text-justify text-xl leading-relaxed ${isRTL ? 'font-cairo' : ''}`}>
                  {t('about.text')}
                </p>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { titleKey: 'about.title1', icon: <Palette className="w-8 h-8 icon-spin text-white" />, descKey: 'about.text1' },
                    { titleKey: 'about.title2', icon: <MousePointer2 className="w-8 h-8 icon-float text-white" />, descKey: 'about.text2' },
                    { titleKey: 'about.title3', icon: <LineChart className="w-8 h-8 icon-pulse text-white" />, descKey: 'about.text3' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="relative p-6 rounded-xl transition-all transform hover:scale-105 group shadow-[0_10px_20px_rgba(255,255,255,0.1)]"
                      style={{ backgroundColor: '#002b5c' }}
                    >
                      <div className="absolute inset-0 bg-[rgba(240,240,240,0.2)] rounded-xl pointer-events-none"></div>
                      <div className="relative text-white mb-4 group-hover:brightness-110 transition-all">
                        {item.icon}
                      </div>
                      <h3 className={`relative text-xl font-semibold text-white mb-2 ${isRTL ? 'font-cairo' : ''}`}>{t(item.titleKey)}</h3>
                      <p className={`relative text-white ${isRTL ? 'font-cairo' : ''}`}>{t(item.descKey).split('\n').map((line, index) => (
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
        </div>
      </section>
    </>
  );
};

export default About;
