import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Partners: React.FC = () => {
  const t = useTranslation();
  const { isRTL } = useLanguage();

  const partners = [
    {
      name: 'Qomrh',
      logo: '/images/Partner/1.png',
      description: t('partners.qomrhDescription'),
    },
    {
      name: 'Eumq',
      logo: '/images/Partner/2.png',
      description: t('partners.eumqDescription'),
    },
    {
      name: 'Idee',
      logo: '/images/Partner/3.png',
      description: t('partners.ideeDescription'),
    },
  ];

  const scrollContainer = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
  if (scrollContainer.current) {
    scrollContainer.current.scrollBy({
      left: isRTL ? 340 : -340,
      behavior: 'smooth',
    });
  }
};

const scrollRight = () => {
  if (scrollContainer.current) {
    scrollContainer.current.scrollBy({
      left: isRTL ? -340 : 340,
      behavior: 'smooth',
    });
  }
};

  return (
    <section
      id="partners"
      className="py-16 px-6 bg-[#f9f7f3] flex flex-col md:flex-row md:items-start md:justify-between"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Section Title */}
   <div
  className={`w-full md:w-fit flex flex-col mb-10 md:mb-0 ${
    isRTL
      ? 'text-right items-start md:items-start md:ml-auto'
      : 'text-left items-start md:items-start md:mr-auto'
  }`}
>

  <span className="text-sm text-gray-500 font-cairo font-semibold mb-2">
    {t('partners.mediaCenter')}
  </span>
  <h2 className="text-3xl font-extrabold text-gray-900 font-cairo leading-snug mb-6">
    {t('partners.ourPartners')}
  </h2>
  <button
    type="button"
    className="inline-flex items-center gap-1 px-5 py-1.5 border border-gray-900 rounded-full text-sm font-cairo font-semibold text-gray-900 hover:bg-gray-100 transition"
  >
    {t('partners.more')}
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={isRTL ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
      ></path>
    </svg>
  </button>
</div>


      {/* Cards + Arrows */}
      <div className="md:w-3/4 relative">
        {/* Cards Container */}
       <div
  ref={scrollContainer}
  className={`flex overflow-x-auto scrollbar-hide scroll-smooth pr-1 space-x-6 ${
    isRTL ? 'space-x-reverse' : ''
  }`}
  style={{ scrollSnapType: 'x mandatory' }}
>
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-xl shadow-md p-6 max-w-[320px] w-full flex flex-col items-center text-center"
              style={{ scrollSnapAlign: 'start' }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-[100px] h-auto mb-4 object-contain"
              />
              <p
                className="text-gray-800 font-cairo text-base leading-relaxed"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {partner.description}
              </p>
            </div>
          ))}
        </div>

       {/* Navigation Buttons */}
     <div dir="ltr"  className={`flex justify-center mt-6 ${isRTL ? 'flex-row-reverse gap-x-4 gap-x-reverse' : 'gap-x-4'}`}>
  <button
    onClick={scrollLeft}
    aria-label="Scroll Left"
    className="w-10 h-10 rounded-full border border-gray-300 shadow-sm flex items-center justify-center hover:shadow-md hover:bg-gray-100 transition"
  >
    <ChevronLeft size={20} className={isRTL ? 'rotate-180' : ''} />
  </button>
  <button
    onClick={scrollRight}
    aria-label="Scroll Right"
    className="w-10 h-10 rounded-full border border-gray-300 shadow-sm flex items-center justify-center hover:shadow-md hover:bg-gray-100 transition"
  >
    <ChevronRight size={20} className={isRTL ? 'rotate-180' : ''} />
  </button>
</div>
      </div>
    </section>
  );
};

export default Partners;
