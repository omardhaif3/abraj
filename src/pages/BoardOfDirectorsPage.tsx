import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import DirectorCard from '../components/DirectorCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';

const directors = [
  {
    nameKey: 'boardOfDirectors.directors.abdullahAlAmro.name',
    titleKey: 'boardOfDirectors.directors.abdullahAlAmro.title',
    imageSrc: '/images/manager.png',
    level: 0,
  },
  {
    nameKey: 'boardOfDirectors.directors.ahmedAlHumaidan.name',
    titleKey: 'boardOfDirectors.directors.ahmedAlHumaidan.title',
    imageSrc: '/images/manager.png',
    level: 1,
  },
  {
    nameKey: 'boardOfDirectors.directors.saudAlTamimy.name',
    titleKey: 'boardOfDirectors.directors.saudAlTamimy.title',
    imageSrc: '/images/manager.png',
    level: 1,
  },
  {
    nameKey: 'boardOfDirectors.directors.abdulazizAlMusaed.name',
    titleKey: 'boardOfDirectors.directors.abdulazizAlMusaed.title',
    imageSrc: '/images/manager.png',
    level: 1,
  },
  {
    nameKey: 'boardOfDirectors.directors.ahmedAlFaleh.name',
    titleKey: 'boardOfDirectors.directors.ahmedAlFaleh.title',
    imageSrc: '/images/manager.png',
    level: 1,
  },
  {
    nameKey: 'boardOfDirectors.directors.khalidAlKhudair.name',
    titleKey: 'boardOfDirectors.directors.khalidAlKhudair.title',
    imageSrc: '/images/manager.png',
    level: 2,
  },
  {
    nameKey: 'boardOfDirectors.directors.sulimanAzzabin.name',
    titleKey: 'boardOfDirectors.directors.sulimanAzzabin.title',
    imageSrc: '/images/manager.png',
    level: 2,
  },
  {
    nameKey: 'boardOfDirectors.directors.fawazAlOthman.name',
    titleKey: 'boardOfDirectors.directors.fawazAlOthman.title',
    imageSrc: '/images/manager.png',
    level: 2,
  },
  {
    nameKey: 'boardOfDirectors.directors.abdullahAlKathiri.name',
    titleKey: 'boardOfDirectors.directors.abdullahAlKathiri.title',
    imageSrc: '/images/manager.png',
    level: 2,
  },
];

const BoardOfDirectorsPage: React.FC = () => {
  const t = useTranslation();

  const renderDirectorsByLevel = (level: number) => (
    <div className="flex flex-wrap justify-center gap-8 mt-8">
      {directors
        .filter((d) => d.level === level)
        .map((director, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-64 text-center"
          >
            <img
              src={director.imageSrc}
              alt={director.name}
              className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md mb-4"
            />
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-800">
                {t(director.nameKey)}
              </h3>
              <p className={`text-sm ${t(director.titleKey).includes('Chairman') || t(director.titleKey).includes('Chief') ? 'text-orange-600' : 'text-gray-600'}`}>
                ({t(director.titleKey)})
              </p>
            </div>
          </div>
        ))}
    </div>
  );

  return (
    <>
      <Background />
      <Navbar />
      <main className="pt-20 mt-16 pb-12 min-h-screen ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            {t('boardOfDirectors.title')}
          </h1>
           {renderDirectorsByLevel(0)}
          <div className="h-10 mx-auto" />
          {renderDirectorsByLevel(1)}
          <div className="h-10 mx-auto" />
          {renderDirectorsByLevel(2)}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BoardOfDirectorsPage;