import React, { useMemo, useEffect, useRef, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Award, Users, Eye, CheckCircle, ShieldCheck, Scale, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  const t = useTranslation();
  const { isRTL } = useLanguage();
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const cardItems = useMemo(() => [
    { headerKey: 'about.text3_1', descriptionKey: 'about.text3_1_desc', icon: <ShieldCheck size={28} className="text-blue-300" /> },
    { headerKey: 'about.text3_2', descriptionKey: 'about.text3_2_desc', icon: <Scale size={28} className="text-blue-300" /> },
    { headerKey: 'about.text3_3', descriptionKey: 'about.text3_3_desc', icon: <Users size={28} className="text-blue-300" /> },
    { headerKey: 'about.text3_4', descriptionKey: 'about.text3_4_desc', icon: <HeartHandshake size={28} className="text-blue-300" /> },
    { headerKey: 'about.text3_5', descriptionKey: 'about.text3_5_desc', icon: <Award size={28} className="text-blue-300" /> },
    { headerKey: 'about.text3_6', descriptionKey: 'about.text3_6_desc', icon: <Globe size={28} className="text-blue-300" /> }
  ], []);

  const mainItems = [
    { titleKey: 'about.title1', descKey: 'about.text1', icon: <Eye size={32} className="text-blue-300" /> },
    { titleKey: 'about.title2', descKey: 'about.text2', icon: <CheckCircle size={32} className="text-blue-300" /> }
  ];

  const renderMultilineText = (text: string) =>
    text.split('\n').map((line, idx) => <React.Fragment key={idx}>{line}<br /></React.Fragment>);

  const getAnimationClass = (id: string, delay = 0) => {
    const isVisible = visibleElements.has(id);
    return `transition-all duration-700 ease-out ${delay > 0 ? `delay-${delay}` : ''} ${
      isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'
    }`;
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-16"
      style={{
        background: `
          linear-gradient(135deg, rgba(245, 247, 255, 0.98) 0%, rgba(240, 243, 255, 0.95) 100%),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233d4b9f' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 
            id="about-title"
            data-animate
            className={`text-5xl font-bold p-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800 mb-8 ${isRTL ? 'font-cairo' : ''} ${getAnimationClass('about-title')}`}
          >
            {isRTL ? 'مسيرتنا' : t('about.title')}
          </h2>
          <div 
            id="about-description"
            data-animate
            className={`max-w-3xl mx-auto bg-white/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30 shadow-xl ${getAnimationClass('about-description', 200)}`}
          >
            <p className={`text-blue-900 text-lg text-justify leading-relaxed ${isRTL ? 'font-cairo' : ''}`}>
              {t('about.text')}
            </p>
          </div>
        </div>

        {/* Main Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {mainItems.map((item, index) => (
            <div
              key={index}
              id={`main-item-${index}`}
              data-animate
              className={`p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl ${getAnimationClass(`main-item-${index}`, index * 200)}`}
              style={{ background: "linear-gradient(to right, #3D4B9F, #4C59AD)" }}
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className={`text-2xl font-semibold text-white ${isRTL ? 'font-cairo' : ''}`}>
                  {t(item.titleKey)}
                </h3>
              </div>
              <div className="h-1 w-20 bg-blue-400 mb-4 ml-14"></div>
              <p className={`text-blue-100 text-justify ${isRTL ? 'font-cairo' : ''}`}>
                {renderMultilineText(t(item.descKey))}
              </p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div>
          <h3 
            id="values-title"
            data-animate
            className={`text-3xl font-bold text-blue-900 mb-12 text-center ${isRTL ? 'font-cairo' : ''} ${getAnimationClass('values-title')}`}
          >
            {t('about.title3')}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardItems.map((item, idx) => (
              <div
                key={idx}
                id={`card-${idx}`}
                data-animate
                className={`h-full p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${getAnimationClass(`card-${idx}`, idx * 100)}`}
                style={{ background: "linear-gradient(to right, #3D4B9F, #4C59AD)" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-blue-700/30 rounded-lg">
                    {item.icon}
                  </div>
                  <h3 className={`text-xl font-semibold text-white ${isRTL ? 'font-cairo' : ''}`}>
                    {t(item.headerKey)}
                  </h3>
                </div>
                <div className="h-1 w-12 bg-blue-300 mb-4 ml-14"></div>
                <p className={`text-blue-100 text-justify ${isRTL ? 'font-cairo' : ''}`}>
                  {renderMultilineText(t(item.descriptionKey))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);