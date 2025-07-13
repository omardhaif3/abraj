import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { ExternalLink, Calendar, User, MapPin } from 'lucide-react';

interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  category: string;
  location: string;
  client?: string;
  materials: string[];
  image?: string;
  year: number;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const t = useTranslation();
  
  const projectTitle = t(`projects.${project.titleKey}`);
  const projectDescription = t(`projects.${project.descriptionKey}`);

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group relative"
      onClick={onClick}
    >
      <div className="relative h-48 bg-gradient-to-br from-[#E6F0FF] to-[#007BFF] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={projectTitle}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[#00529B] text-6xl font-bold opacity-50">
              {projectTitle.charAt(0)}
            </span>
          </div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#00529B] bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center">
          <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
            <p className="text-sm mb-3">{projectDescription}</p>
            <div className="flex items-center justify-center text-white">
              <span className="text-sm font-medium">{t('projects.viewProject')}</span>
              <ExternalLink className="w-4 h-4 mx-1" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="px-3 py-1 bg-[#E6F0FF] text-[#00529B] text-xs font-medium rounded-full">
            {t(`projects.filter${project.category}`)}
          </span>
          {project.featured && (
            <span className="px-3 py-1 bg-[#007BFF] text-white text-xs font-medium rounded-full">
              {t('projects.featured')}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-[#00529B] mb-2 group-hover:text-[#007BFF] transition-colors">
          {projectTitle}
        </h3>
        
        <div className="space-y-2 text-gray-600 text-sm">
          {project.client && (
            <div className="flex items-center">
              <User className="w-4 h-4 text-[#007BFF] mx-2" />
              <span>{t('projects.client')}: {project.client}</span>
            </div>
          )}
          
          <div className="flex items-center">
            <MapPin className="w-4 h-4 text-[#007BFF] mx-2" />
            <span>{t('projects.location')}: {project.location}</span>
          </div>
          
          <div className="flex items-center">
            <Calendar className="w-4 h-4 text-[#007BFF] mx-2" />
            <span>{t('projects.year')}: {project.year}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {project.materials.slice(0, 3).map((material, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
              >
                {material}
              </span>
            ))}
            {project.materials.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                +{project.materials.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;