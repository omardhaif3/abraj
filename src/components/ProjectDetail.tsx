import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { X, ExternalLink, Calendar, User, MapPin, Package } from 'lucide-react';

interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  detailedDescriptionKey?: string;
  challengesKey?: string;
  solutionKey?: string;
  category: string;
  location: string;
  client?: string;
  materials: string[];
  image?: string;
  year: number;
  featured: boolean;
  websiteUrl?: string;
}

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const t = useTranslation();
  
  const projectTitle = t(`projects.${project.titleKey}`);
  const projectDescription = t(`projects.${project.descriptionKey}`);
  const detailedDescription = project.detailedDescriptionKey ? t(`projects.${project.detailedDescriptionKey}`) : projectDescription;
  const challenges = project.challengesKey ? t(`projects.${project.challengesKey}`) : '';
  const solution = project.solutionKey ? t(`projects.${project.solutionKey}`) : '';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="h-64 bg-gradient-to-br from-[#E6F0FF] to-[#007BFF] flex items-center justify-center">
            {project.image ? (
              <img
                src={project.image}
                alt={projectTitle}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center">
                <span className="text-[#00529B] text-8xl font-bold opacity-50">
                  {projectTitle.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#E6F0FF] text-[#00529B] text-sm font-medium rounded-full">
                {t(`projects.filter${project.category}`)}
              </span>
              {project.featured && (
                <span className="px-3 py-1 bg-[#007BFF] text-white text-sm font-medium rounded-full">
                  {t('projects.featured')}
                </span>
              )}
            </div>
          </div>
          
          {/* Removed the line below because 'title' does not exist on Project */}
          {/* <h2 className="text-3xl font-bold text-[#00529B] mb-6">{project.title}</h2> */}
          <h2 className="text-3xl font-bold text-[#00529B] mb-6">{projectTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {project.client && (
              <div className="flex items-center">
                <User className="w-5 h-5 text-[#007BFF] mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-800">{t('projects.client')}</h4>
                  <p className="text-gray-600">{project.client}</p>
                </div>
              </div>
            )}
            
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-[#007BFF] mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">{t('projects.location')}</h4>
                <p className="text-gray-600">{project.location}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-[#007BFF] mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">{t('projects.year')}</h4>
                <p className="text-gray-600">{project.year}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Package className="w-5 h-5 text-[#007BFF] mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">{t('projects.category')}</h4>
                <p className="text-gray-600">{t(`projects.filter${project.category}`)}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#00529B] mb-3">{t('projects.projectOverview')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {detailedDescription}
              </p>
            </div>
            
            {challenges && (
              <div>
                <h3 className="text-xl font-bold text-[#00529B] mb-3">{t('projects.challenges')}</h3>
                <p className="text-gray-600 leading-relaxed">{challenges}</p>
              </div>
            )}
            
            {solution && (
              <div>
                <h3 className="text-xl font-bold text-[#00529B] mb-3">{t('projects.solution')}</h3>
                <p className="text-gray-600 leading-relaxed">{solution}</p>
              </div>
            )}
            
            <div>
              <h3 className="text-xl font-bold text-[#00529B] mb-3">{t('projects.materialsUsed')}</h3>
              <div className="flex flex-wrap gap-2">
                {project.materials.map((material, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#E6F0FF] text-[#00529B] text-sm font-medium rounded-full"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-[#00529B] text-white rounded-lg hover:bg-[#003366] transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                {t('projects.visitSite')}
              </a>
            )}
            <button
              onClick={onClose}
              className="flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              {t('projects.close')}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;