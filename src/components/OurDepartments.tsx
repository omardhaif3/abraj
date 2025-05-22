import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';

const departments = [
  {
    id: 1,
    image: '/images/departments/work1.jpg',
    titleKey: 'departments.marketing.title',
    descriptionKey: 'departments.marketing.description',
  },
  {
    id: 2,
    image: '/images/departments/work2.jpg',
    titleKey: 'departments.sales.title',
    descriptionKey: 'departments.sales.description',
  },
  {
    id: 3,
    image: '/images/departments/work3.jpg',
    titleKey: 'departments.support.title',
    descriptionKey: 'departments.support.description',
  },
];

const OurDepartments: React.FC = () => {
  const t = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section id="departments" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-4xl font-bold text-black mb-12 text-center ${isRTL ? 'font-cairo' : ''}`}>
          {t('departments.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {departments.map(dept => (
            <div key={dept.id} className="bg-[#ffedd8] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-xs mx-auto">
              <img src={dept.image} alt={t(dept.titleKey)} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-black mb-2">{t(dept.titleKey)}</h3>
                <p className={`text-black ${isRTL ? 'font-cairo' : ''}`}>{t(dept.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDepartments;
