import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

const certificationsData = (t: (key: string) => string) => [
  {
    title: t('certifications.iso9001Title'),
    description: t('certifications.iso9001Description'),
    pdfUrl: '/images/certifications/UAF-Americo-ISO-9001.pdf',
    imageSrc: '/images/certifications/iso.png',
  },
  {
    title: t('certifications.ISO21500Title'),
    description: t('certifications.ISO21500Description'),
    pdfUrl: '/images/certifications/21500.pdf',
    imageSrc: '/images/certifications/iso-45001-certified.png',
  },
  {
    title: t('certifications.certification3Title'),
    description: t('certifications.certification3Description'),
    pdfUrl: '/images/certifications/UAF-Americo-ISO-14001.pdf',
    imageSrc: '/images/certifications/isocer.png',
  },
  {
    title: t('certifications.certification4Title'),
    description: t('certifications.certification4Description'),
    pdfUrl: '/images/certifications/UAF-Americo-ISO-45001.pdf',
    imageSrc: '/images/certifications/isocer.png',
  },
];

const CertificationsAwards: React.FC = () => {
  const { isRTL } = useLanguage();
  const t = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const certifications = certificationsData(t);
  const current = certifications[currentIndex];

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      id="certifications-awards"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="py-24 bg-white font-cairo relative overflow-x-hidden w-full"
    >
      {/* Blue box aligned right or left, 80% width */}
      <div
        className={`relative bg-[#0A2342] p-12 min-h-[500px] overflow-visible w-full md:w-[80vw] z-10 flex items-center justify-between ${
          isRTL ? 'rounded-l-3xl ml-auto' : 'rounded-r-3xl mr-auto'
        }`}
      >
{/* Desktop White Box */}
<div
  className={`hidden md:block absolute top-1/2 transform -translate-y-1/3 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-gray-200 p-10 z-20 
  ${isRTL ? 'md:left-[-16vw]' : 'md:right-[-16vw]'} md:w-[64vw]`}
  style={{ width: '64vw' }}
>
  <h3 className="text-2xl font-extrabold text-dark-blue mb-4">{current.title}</h3>
  <p className="text-gray-700 text-justify mb-6 leading-relaxed">{current.description}</p>
  <div className="grid grid-cols-5 gap-4 text-center text-sm font-bold text-dark-blue">
    <a
      href={current.pdfUrl}
      download
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {t('certifications.downloadPdf')}
    </a>
  </div>
</div>

{/* Mobile White Box */}
<div
  className={`block md:hidden absolute top-1/2 transform -translate-y-1/4  bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-gray-200 p-3 m-2 z-20 w-full max-w-[95vw] min-h-[300px]`}
  style={{
    [isRTL ? 'left' : 'right']: 0,
    
  }}
>
  <h3 className="text-2xl font-extrabold text-dark-blue mb-4">{current.title}</h3>
  <p className="text-gray-700 text-justify mb-6 leading-relaxed">{current.description}</p>
  <div className="flex flex-wrap justify-center gap-y-6 text-center text-sm font-bold text-dark-blue">
    <a
      href={current.pdfUrl}
      download
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {t('certifications.downloadPdf')}
    </a>
  </div>
</div>



        {/* Blue Box Top Text */}
        <div
          className={`absolute top-8 ${
            isRTL ? 'right-8 text-left' : 'left-8 text-left'
          } text-white text-3xl font-bold space-y-1 z-10`}
        >
          <div>{t('certifications.mediaCenter')}</div>
          <div>{t('certifications.accreditations')}</div>
          <div>{t('certifications.awards')}</div>
        </div>

        {/* Image on the side, vertically centered */}
        <div className={`relative z-20 ${isRTL ? 'pr-8' : 'pl-8'}`}>
          <img
            key={current.imageSrc}
            src={current.imageSrc}
            alt={current.title}
            className="max-h-72 object-contain hidden md:block"
          />
        </div>
      </div>

      {/* Arrows and line in opposite side 20% area */}
     {/* Desktop Arrows – Absolute outside the blue box */}
<div
  dir={isRTL ? 'ltr' : 'rtl'}
  className={`absolute bottom-20 ${isRTL ? 'left-10' : 'right-10'} hidden md:flex items-center justify-end pr-4 gap-4 ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}
>
  {isRTL ? (
    <>
      <button
        onClick={next}
        className="w-10 h-10 rounded-full border border-gray-300 shadow-sm flex items-center justify-center hover:shadow-md hover:bg-gray-100 transition"
        aria-label="التالي"
      >
        <ChevronRight size={20} className="rtl:rotate-180" />
      </button>
      <button
        onClick={prev}
        className="w-10 h-10 rounded-full border border-gray-300 shadow-sm flex items-center justify-center hover:shadow-md hover:bg-gray-100 transition"
        aria-label="السابق"
      >
        <ChevronLeft size={20} className="rtl:rotate-180" />
      </button>
    </>
  ) : (
    <>
      <button
        onClick={prev}
        className="w-10 h-10 rounded-full border border-gray-300 shadow-sm flex items-center justify-center hover:shadow-md hover:bg-gray-100 transition"
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="w-10 h-10 rounded-full border border-gray-300 shadow-sm flex items-center justify-center hover:shadow-md hover:bg-gray-100 transition"
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>
    </>
  )}
  <div className={`${isRTL ? 'ml-4' : 'mr-4'} flex-1 h-[1px] bg-gray-300`}></div>
</div>

{/* Mobile Arrows – Inside blue box */}
<div
   className={`md:hidden flex justify-center gap-4 mt-8 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
  dir={isRTL ? 'rtl' : 'ltr'}
>
  {isRTL ? (
    <>
      <button
        onClick={next}
        className="w-10 h-10 rounded-full border border-gray-300 shadow-sm flex items-center justify-center hover:shadow-md hover:bg-gray-100 transition"
        aria-label="التالي"
      >
        <ChevronRight size={20} className="rtl:rotate-180" />
      </button>
      <button
        onClick={prev}
        className="w-10 h-10 rounded-full border border-gray-300 shadow-sm flex items-center justify-center hover:shadow-md hover:bg-gray-100 transition"
        aria-label="السابق"
      >
        <ChevronLeft size={20} className="rtl:rotate-180" />
      </button>
    </>
  ) : (
    <>
      <button
        onClick={prev}
        className="w-10 h-10 rounded-full border border-gray-300 shadow-sm flex items-center justify-center hover:shadow-md hover:bg-gray-100 transition"
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="w-10 h-10 rounded-full border border-gray-300 shadow-sm flex items-center justify-center hover:shadow-md hover:bg-gray-100 transition"
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>
    </>
  )}
</div>
    </section>
  );
};

export default CertificationsAwards;
