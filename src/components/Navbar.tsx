import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from '../hooks/useTranslation';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isRTL } = useLanguage();
  const t = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.work', href: '#work' },
    { key: 'nav.philosophy', href: '#philosophy' },
    { key: 'nav.partners', href: '#partners' },
    { key: 'nav.contact', href: '#contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`font-cairo fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-blue bg-opacity-80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-white text-2xl font-bold">
            Plan <span className="text-purple-500">Eight</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
            <ul className={`flex space-x-8 rtl:space-x-reverse ${isRTL ? 'ml-8' : 'mr-8'}`}>
              {navItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="relative text-white transition duration-300 ease-in-out hover:text-purple-400 py-2 inline-block group"
                  >
                    <span className="group-hover:scale-105 group-hover:-translate-y-0.5 inline-block transition-transform duration-300">
                      {t(item.key)}
                    </span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse md:hidden">
            <LanguageToggle />
            <button
              onClick={toggleMenu}
              className="text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <GiHamburgerMenu
                  size={28}
                  className="animate-bounce text-purple-400 drop-shadow-lg"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-blue bg-opacity-95 backdrop-blur-md">
          <ul className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="block text-white hover:text-purple-400 transition duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
