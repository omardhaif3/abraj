/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import TiltWrapper from './TiltWrapper';


const workItems = [
  { id: 1, title: 'work.habib', description: 'work.habibDesc', image: '/images/works/work1.jpg' },
  { id: 2, title: 'work.like', description: 'work.likeDesc', image: '/images/works/work2.jpg' },
  { id: 3, title: 'work.eumq', description: 'work.eumqDesc', image: '/images/works/work3.jpg' },
 
];

interface OurServicesProps {
  limit?: number;
}

const OurServices: React.FC<OurServicesProps> = ({ limit }) => {
  const t = useTranslation();
  const { isRTL } = useLanguage();

  // Apply limit if provided
  const displayedItems = limit ? workItems.slice(0, limit) : workItems;

  return (
    <>
      <section id="work" className="py-0 relative">
        <div className="animated-blue-bg py-16">
          <div className="max-w-5xl mx-auto px-2">
            <div className="flex items-center justify-center mb-6 space-x-4 rtl:space-x-reverse">
              <h2 className={`text-4xl font-bold text-white ${isRTL ? 'font-cairo' : ''}`}>
                {t('work.title')}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {displayedItems.map(item => (
                <div key={item.id} className="relative rounded-lg overflow-hidden shadow-lg max-w-xs mx-auto" style={{ backgroundColor: '#002b5c' }}>
                  <TiltWrapper className="group rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-[rgba(240,240,240,0.2)] rounded-lg pointer-events-none"></div>
                    <img
                      src={item.image}
                      alt={t(item.title)}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 relative z-10"
                    />
                    <div className="p-4 text-center relative z-10">
                      <h3 className="text-lg font-semibold text-white">{t(item.title)}</h3>
                      <p className="text-white mt-2">{t(item.description)}</p>
                    </div>
                  </TiltWrapper>
                </div>
              ))}
            </div>
            {limit && (
              <div className="flex justify-center mt-8">
                <a
                  href="/services"
                  className={`px-6 py-3 bg-dark-blue hover:bg-secondary rounded-full text-white font-medium transition-all transform hover:scale-105 ${
                    isRTL ? 'font-cairo' : ''
                  }`}
                >
                  {t('work.readMore')}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
     
    </>
  );
};

export default OurServices;
