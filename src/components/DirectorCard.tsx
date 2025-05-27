import React from 'react';

interface DirectorCardProps {
  imageSrc: string;
  name: string;
  title: string;
  alt?: string;
}

const DirectorCard: React.FC<DirectorCardProps> = ({ imageSrc, name, title, alt }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={imageSrc}
        alt={alt || name}
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600 mt-1">{title}</p>
      </div>
    </div>
  );
};

export default DirectorCard;
