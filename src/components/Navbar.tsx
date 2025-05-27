import React, { useState, useRef } from "react";
import { X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import TopBar from "./TopBar";
import { useTranslation } from "../hooks/useTranslation";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const { isRTL } = useLanguage();
  const t = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const menuDirectionRef = useRef(isRTL); // Persist menu direction on toggle

  const navItems = [
    { key: "nav.home", to: "/" },
    {
      key: "nav.about",
      to: "/about",
        dropdown: [
          { key: "nav.aboutAbrag", to: "/about-abrag", label: "About Abrag" },
          { key: "nav.chairmanMessage", to: "/chairman-message", label: "Chairman Message / كلمة الرئيس" },
          { key: "nav.boardOfDirectors", to: "/board-of-directors", label: "Board of Directors / مجلس الإدارة" },
        ],
    },
    { key: "nav.work", to: "/services" },
    { key: "nav.contact", to: "/contact" },
  ];

  const toggleMenu = () => {
    menuDirectionRef.current = isRTL;
    setIsMenuOpen(!isMenuOpen);
  };

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
    <div className="absolute top-0 left-0 right-0 z-50">
      <TopBar />
      <nav className="font-cairo top-0 bg-transparent z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between relative">
            <div className={`flex items-center ${isRTL ? "justify-start pl-0" : "justify-start pl-0"} w-64 md:w-64 w-full md:pl-0  `}>
              <a href="/" className={`flex items-center ${isRTL ? "flex-row-reverse" : ""}`} onClick={handleHomeClick}>
                <img src="/images/logo.jpg" alt="Plan Eight" className="h-12 w-12 md:h-20 md:w-20 rounded-full object-cover" />
                <div className="mx-1 flex items-center">
                  <svg width="4" height="40" className="md:h-20" viewBox="0 0 4 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="white" stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    <rect x="1.5" y="0" width="1" height="80" fill="url(#lineGradient)" />
                  </svg>
                </div>
                <div className="text-white leading-tight">
                  <div className="text-sm items-start md:text-lg font-semibold p-0 m-0">شركة أبراج الوطنية</div>
                  <div className="text-sm items-start md:text-lg font-semibold p-0 m-0">ِAbrag</div>
                </div>
              </a>
            </div>

            <div className="flex-1"></div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-1 rtl:space-x-reverse justify-center flex-1">
              <ul className={`flex space-x-8 rtl:space-x-reverse ${isRTL ? "ml-8" : "mr-8"}`}>
                {navItems.map((item) => (
                  <li key={item.key} className="relative group">
                    {item.dropdown ? (
                      <>
                        <span className="relative text-white text-lg font-medium transition duration-300 ease-in-out py-2 inline-block group whitespace-nowrap cursor-pointer">
                          {t(item.key)}
                          <svg
                            className="inline-block ml-1 w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </span>
                        <ul className="absolute left-0 mt-2 w-48 bg-black bg-opacity-90 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.key}>
                              <Link
                                to={subItem.to}
                                className="block px-4 py-2 text-white hover:bg-[#003366] whitespace-nowrap"
                              >
                                {subItem.key === "nav.aboutAbrag" ? (
                                  isRTL ? "عن أبراج" : "About Abrag"
                                ) : subItem.key === "nav.chairmanMessage" ? (
                                  isRTL ? "كلمة الرئيس" : "Chairman Message"
                                ) : subItem.key === "nav.boardOfDirectors" ? (
                                  isRTL ? "مجلس الإدارة" : "Board of Directors"
                                ) : (
                                  subItem.label
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : item.key === "nav.home" ? (
                      <a
                        href={item.to}
                        onClick={handleHomeClick}
                        className="relative text-white text-lg font-medium transition duration-300 ease-in-out py-2 inline-block group whitespace-nowrap"
                      >
                        <span className="inline-block transition-transform duration-300">{t(item.key)}</span>
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#003366] transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    ) : (
                      <Link
                        to={item.to}
                        className="relative text-white text-lg font-medium transition duration-300 ease-in-out py-2 inline-block group whitespace-nowrap"
                      >
                        <span className="inline-block transition-transform duration-300">{t(item.key)}</span>
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#003366] transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <LanguageToggle />
            </div>

            {/* Mobile toggle */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse md:hidden">
              <LanguageToggle />
              <button
                onClick={toggleMenu}
                className="text-white"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <GiHamburgerMenu size={28} className="animate-bounce text-white drop-shadow-lg" />}
              </button>
            </div>
          </div>

          {/* Mobile menu backdrop */}
          <div
            className={`fixed inset-0 bg-black z-30 transition-opacity duration-300 ease-in-out ${
              isMenuOpen ? "bg-opacity-50 pointer-events-auto backdrop-blur-sm" : "bg-opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile menu panel */}
          <div
            className={`fixed top-0 bottom-0 z-40 bg-black bg-opacity-90 transform transition-transform duration-300 ease-in-out ${
              menuDirectionRef.current ? "right-0" : "left-0"
            }`}
          style={{
  width: "200px",
  background: "linear-gradient(to bottom, #1e3c72, #2a5298, #a0c4ff)", // dark to light downwards
  transform: isMenuOpen
    ? "translateX(0)"
    : menuDirectionRef.current
    ? "translateX(100%)"
    : "translateX(-100%)",
}}


          >
          <ul className="flex flex-col p-4 pt-20 text-left space-y-2">
  {navItems.map((item, index) => (
    <React.Fragment key={item.key}>
      <li>
        {item.dropdown ? (
          <>
            <button
              onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              className="flex items-center justify-between w-full text-white text-lg font-medium py-2 focus:outline-none"
            >
              {t(item.key)}
              <svg
                className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                  isAboutDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isAboutDropdownOpen && (
              <ul className={`pl-4 ${isRTL ? 'border-r border-white pr-4 border-opacity-20' : 'border-l border-white border-opacity-20'} space-y-1`}>
                {item.dropdown.map((subItem) => (
                  <li key={subItem.key}>
                    <Link
                      to={subItem.to}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-white text-lg font-medium py-2"
                    >
                      {subItem.key === "nav.aboutAbrag" ? (
                        isRTL ? "عن أبراج" : "About Abrag"
                      ) : subItem.key === "nav.chairmanMessage" ? (
                        isRTL ? "كلمة الرئيس" : "Chairman Message"
                      ) : subItem.key === "nav.boardOfDirectors" ? (
                        isRTL ? "مجلس الإدارة" : "Board of Directors"
                      ) : (
                        subItem.label
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : item.key === "nav.home" ? (
          <a
            href={item.to}
            onClick={(e) => {
              handleHomeClick(e);
              setIsMenuOpen(false);
            }}
            className="block text-white text-lg font-medium py-2"
          >
            {t(item.key)}
          </a>
        ) : (
          <Link
            to={item.to}
            onClick={() => setIsMenuOpen(false)}
            className="block text-white text-lg font-medium py-2"
          >
            {t(item.key)}
          </Link>
        )}
      </li>
      {index < navItems.length - 1 && (
        <hr className="border-white border-opacity-20" />
      )}
    </React.Fragment>
  ))}
</ul>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
