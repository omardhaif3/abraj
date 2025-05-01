import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import TiltWrapper from './TiltWrapper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


const workItems = [
  { id: 1, title: 'Project Alpha', category: 'branding', image: 'https://images.pexels.com/photos/5926387/pexels-photo-5926387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, title: 'Project Beta', category: 'ux', image: 'https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 3, title: 'Project Gamma', category: 'research', image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 4, title: 'Project Delta', category: 'branding', image: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 5, title: 'Project Epsilon', category: 'ux', image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 6, title: 'Project Zeta', category: 'research', image: 'https://images.pexels.com/photos/5696555/pexels-photo-5696555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const Work: React.FC = () => {
  const t = useTranslation();
  const { isRTL } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? workItems 
    : workItems.filter(item => item.category === filter);

  const filters = [
    { id: 'all', label: 'work.all' },
    { id: 'branding', label: 'work.branding' },
    { id: 'ux', label: 'work.ux' },
    { id: 'research', label: 'work.research' }
  ];

  return (
    <section id="work" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-6 space-x-4 rtl:space-x-reverse">
          
          <h2 className={`text-4xl font-bold text-dark-blue ${isRTL ? 'font-cairo' : ''}`}>
            {t('work.title')}
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12 space-x-4 rtl:space-x-reverse">
          {filters.map(filterItem => (
            <button
              key={filterItem.id}
              onClick={() => setFilter(filterItem.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === filterItem.id
                  ? 'bg-purple-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-purple-100'
              } ${isRTL ? 'font-cairo' : ''}`}
            >
              {t(filterItem.label)}
            </button>
          ))}
        </div>
        
        <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  breakpoints={{
    0: {
      slidesPerView: 1.2,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 80,
        modifier: 1.2,
        slideShadows: false,
      },
    },
    768: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 40,
        stretch: 10,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
    }
  }}
  coverflowEffect={{ rotate: 40, stretch: 10, depth: 100, modifier: 1, slideShadows: false }}
  pagination={{ clickable: true }}
  navigation={true}
  modules={[EffectCoverflow, Pagination, Navigation]}
  dir="rtl"
  className="mySwiper w-full"
>
  {filteredItems.map(item => (
    <SwiperSlide
    key={item.id}
    className="transition-all duration-300 swiper-slide-custom"
  >  
      <TiltWrapper className="w-[90%] aspect-square sm:w-full sm:h-96 group">

      <div className="relative w-full h-full overflow-hidden rounded-lg slide-inner transition-transform duration-300">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover rounded-lg transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
  />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end justify-center pb-4 rounded-lg">
            <div className="text-white text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="capitalize text-purple-300">{item.category}</p>
            </div>
          </div>
        </div>
      </TiltWrapper>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </section>
  );
};

export default Work;
