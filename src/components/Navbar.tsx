import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "../hooks/useTranslation";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isRTL } = useLanguage();
  const t = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "nav.home", to: "/" },
    { key: "nav.about", to: "/about" },
    { key: "nav.work", to: "/services" },
    { key: "nav.contact", to: "/contact" },
  ];
  
  // Remove handleContactClick since contact is now a separate page
  
  // Update navItems rendering to remove onClick handler for contact link


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const heroSection = document.getElementById("home");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    } else {
      e.preventDefault();
      navigate("/", { state: { scrollToHero: true } });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`font-cairo fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-0 ${
        isScrolled
          ? "bg-white bg-opacity-70 shadow-lg backdrop-blur-md"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* <a href="#" className="text-white text-2xl font-bold">
            Plan <span className="text-purple-500">Eight</span>
          </a> */}
          <a href="/" className="block p-1 rounded" onClick={handleHomeClick}>
            <img src="/images/Artboard 10@2x.png" alt="Plan Eight" className="h-10 bg-transparent" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 rtl:space-x-reverse justify-center flex-1">
            <ul
              className={`flex space-x-8 rtl:space-x-reverse ${
                isRTL ? "ml-8" : "mr-8"
              }`}
            >
              {navItems.map((item) => (
                <li key={item.key}>
                  {item.key === "nav.home" ? (
                    <a
                      href={item.to}
                      onClick={handleHomeClick}
                      className="relative text-dark-blue transition duration-300 ease-in-out hover:text-green-500 py-2 inline-block group"
                    >
                      <span className="group-hover:scale-105 group-hover:-translate-y-0.5 inline-block transition-transform duration-300">
                        {t(item.key)}
                      </span>
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      className="relative text-dark-blue transition duration-300 ease-in-out hover:text-green-500 py-2 inline-block group"
                    >
                      <span className="group-hover:scale-105 group-hover:-translate-y-0.5 inline-block transition-transform duration-300">
                        {t(item.key)}
                      </span>
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
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
              className={`${isMenuOpen ? "text-white" : "text-dark-blue hover:text-green-500"}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <GiHamburgerMenu
                  size={28}
                  className="animate-bounce text-dark-blue hover:text-green-500 drop-shadow-lg"
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
                {item.key === "nav.home" ? (
                  <a
                    href={item.to}
                    onClick={handleHomeClick}
                    className="block text-white hover:text-green-500 transition duration-300 py-2"
                    onClickCapture={() => setIsMenuOpen(false)}
                  >
                    {t(item.key)}
                  </a>
                ) : item.to.startsWith("#") ? (
                  <a
                    href={item.to}
                    className="block text-white hover:text-green-500 transition duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.key)}
                  </a>
                ) : (
                  <Link
                    to={item.to}
                    className="block text-white hover:text-green-500 transition duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
