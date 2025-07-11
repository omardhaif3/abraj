import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import ProjectCard from '../components/ProjectCard';
import ProjectDetail from '../components/ProjectDetail';
import CertificationsSection from '../components/CertificationsSection';
import { projects } from '../data/projects';
import { Briefcase, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OurProjects = () => {
  const t = useTranslation();

  type ProjectType = {
    id: string;
    titleKey: string;
    descriptionKey: string;
    detailedDescriptionKey?: string;
    challengesKey?: string;
    solutionKey?: string;
    category: string;
    location: string;
    client: string;
    materials: string[];
    year: number;
    featured: boolean;
    websiteUrl?: string;
    image: string;
  };

  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { key: 'All', label: t('projects.filterAll') },
    { key: 'Residential', label: t('projects.filterResidential') },
    { key: 'Commercial', label: t('projects.filterCommercial') },
    { key: 'Infrastructure', label: t('projects.filterInfrastructure') },
    { key: 'Industrial', label: t('projects.filterIndustrial') }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
       <Navbar />
      <div className="bg-gradient-to-br from-[#00529B] to-[#007BFF] text-white py-32 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
              <Briefcase className="w-12 h-12 mr-4" />
              {t('projects.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filtering Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-2 justify-center">
            <Filter className="w-5 h-5 text-[#00529B] mr-2" />
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.key
                    ? 'bg-[#00529B] text-white'
                    : 'bg-white text-[#00529B] border border-[#00529B] hover:bg-[#007BFF] hover:text-white hover:border-[#007BFF]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">{t('projects.noResults')}</p>
          </motion.div>
        )}

        {/* Certifications Section */}
        <CertificationsSection />
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
       <Footer />
    </div>
  );
};

export default OurProjects;