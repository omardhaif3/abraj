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
    <section id="work" className="py-24 bg-gray-100">
      <div className="max-w-5xl mx-auto px-2">
        <div className="flex items-center justify-center mb-6 space-x-4 rtl:space-x-reverse">
          <h2 className={`text-4xl font-bold text-dark-blue ${isRTL ? 'font-cairo' : ''}`}>
            {t('work.title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedItems.map(item => (
            <TiltWrapper key={item.id} className="group rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src={item.image}
                alt={t(item.title)}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-dark-blue">{t(item.title)}</h3>
                <p className="text-gray-600 mt-2">{t(item.description)}</p>
              </div>
            </TiltWrapper>
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
    </section>
  );
};

export default OurServices;
