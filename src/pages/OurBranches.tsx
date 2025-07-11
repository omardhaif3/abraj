import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import BranchCard from '../components/BranchCard';
import BranchDetail from '../components/BranchDetail';
import { branches } from '../data/branches';
import { MapPin, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OurBranches = () => {
  const t = useTranslation();

  type BranchType = {
    translatedName: string;
    id: string;
    nameKey: string;
    descriptionKey: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    email: string;
    hours: string;
    image: string;
  };

  const [selectedBranch, setSelectedBranch] = useState<BranchType | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const translatedBranches = useMemo(() => 
    branches.map(branch => ({
      ...branch,
      translatedName: t(`branches.${branch.nameKey}`)
    })), [branches, t]
  );

  const filteredBranches = translatedBranches.filter(branch =>
    branch.translatedName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    branch.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    branch.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
       <Navbar  />
      <div className="bg-[#00529B] text-white py-32 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
              <MapPin className="w-12 h-12 mr-4" />
              {t('branches.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {t('branches.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('branches.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent outline-none"
            />
          </div>
        </motion.div>

        {/* Interactive Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="bg-gradient-to-br from-[#E6F0FF] to-[#007BFF] rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-[#00529B]">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{t('branches.mapTitle')}</h3>
              <p className="text-lg opacity-80">{t('branches.mapSubtitle')}</p>
            </div>
          </div>
        </motion.div>

        {/* Branch List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <BranchCard
                branch={branch}
                onClick={() => setSelectedBranch(branch)}
              />
            </motion.div>
          ))}
        </div>

        {filteredBranches.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">{t('branches.noResults')}</p>
          </motion.div>
        )}
      </div>

      {/* Branch Detail Modal */}
      {selectedBranch && (
        <BranchDetail
          branch={selectedBranch}
          onClose={() => setSelectedBranch(null)}
        />
      )}
       <Footer />
    </div>
  );
};

export default OurBranches;