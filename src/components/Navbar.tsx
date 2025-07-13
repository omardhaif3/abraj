import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import TopBar from "./TopBar";
import { useTranslation } from "../hooks/useTranslation";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styleEffect } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isRTL } = useLanguage();
  const t = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const menuDirectionRef = useRef(isRTL);
  const lastScrollY = useRef(0);
const [openDropdownKey, setOpenDropdownKey] = useState<string | null>(null);
  const navItems = [
    { key: "nav.home", to: "/" },
      {
      key: "nav.about",
      to: "/about",
      dropdown: [
        { key: "nav.aboutAbrag", to: "/about-abrag", label: "About Abrag" },
        { key: "nav.chairmanMessage", to: "/chairman-message", label: "Chairman Message" },
        { key: "nav.boardOfDirectors", to: "/board-of-directors", label: "Board of Directors" },
        { key: "departments.title", to: "/our-departments", label: "Our Departments" },
      ],
    },
    { key: "nav.work", to: "/services" },
    { key: "nav.contact", to: "/contact" },
    { key: "nav.branches", to: "/branches" },
    { key: "nav.projects", to: "/projects" },
  ];

  // Optimized scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only update state if scroll position changes significantly
      if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
        setIsScrolled(currentScrollY > 20);
        lastScrollY.current = currentScrollY;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Get text color based on scroll position and current page
  const getTextColor = () => {
    if (isMenuOpen) return "text-white";
    if (isScrolled || location.pathname !== "/") return "text-white";
    return "text-white";
  };

  // Get navbar background style
  const getNavbarStyle = () => {
    if (isMenuOpen) {
      return "bg-gradient-to-b from-blue-900/95 to-indigo-900/95 backdrop-blur-xl";
    }
    
   if (isScrolled || location.pathname !== "/") {
  return "custom-gradient backdrop-blur-md shadow-sm";
}

    
    return "bg-transparent";
  };

  return (
    
     <div className="fixed top-0 left-0 right-0 z-50 ">
      {/* TopBar with blur effect */}
      <div className={`${isScrolled || location.pathname !== "/" ? "custom-gradient backdrop-blur-md " : "bg-transparent"} transition-all duration-300 `} style={{ zIndex: 60 }}>
        <TopBar  />
      </div>

      <nav className={`font-cairo transition-all duration-300 z-50 ${getNavbarStyle()}`} style={{ marginTop: '-1px' }}>
        <div className="container mx-auto px-3 pb-1" >
          <div className="flex items-center justify-between relative  " >
             <div className={`flex items-center ${isRTL ? "justify-start pl-0" : "justify-start pl-0"} w-64 md:w-64 w-full md:pl-0  `}>

<a 
  href="/" 
  className={`flex items-center ${isRTL ? "flex-row-reverse" : "flex-row"}  gap-1 group`} 
  onClick={handleHomeClick}
>
  <div className="relative ">
    <img 
      src="/images/logo.png" 
      alt="Company Logo" 
      className={`object-contain rounded-full ${isRTL ? 'h-16 w-20 md:w-36' : 'h-16 w-16 md:h-20 md:w-20'}`}
    />
  </div>

  <div className="flex items-center">
    <div className="w-1 h-8 md:h-12 bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
  </div>

  <div className={`${getTextColor()} transition-colors duration-300`}>
    <div className="text-base md:text-lg font-bold ">
      {t('nav.camname')}
    </div>
  </div>
</a>
            </div>

            {/* Mobile nav toggle */}


            <div className="flex-1 hidden md:block"></div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-1 rtl:space-x-reverse justify-center flex-1">
              <ul className={`flex space-x-6 rtl:space-x-reverse ${isRTL ? "ml-8" : "mr-8"}`}>
                {navItems.map((item) => (
                  <li key={item.key} className="relative">
  {item.dropdown ? (
    <>
      <span
  onClick={() =>
    setOpenDropdownKey(openDropdownKey === item.key ? null : item.key)
  }
  className={`${getTextColor()} flex items-center text-sm md:text-lg font-semibold transition duration-300 ease-in-out py-2 cursor-pointer select-none whitespace-nowrap`}
>
        {t(item.key)}
        <svg
          className={`inline-block ml-1 w-3 h-3 transition-transform ${
            openDropdownKey === item.key ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
      </span>

      <ul
        className={`absolute start-0 mt-2 w-56 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl shadow-xl transition-all duration-300 z-50 overflow-hidden ${
          openDropdownKey === item.key
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {item.dropdown.map((subItem) => (
          <li key={subItem.key}>
            <Link
              to={subItem.to}
              onClick={() => setOpenDropdownKey(null)}
              className="flex items-center px-4 py-3 text-gray-800 hover:bg-blue-50 whitespace-nowrap transition-all duration-300"
            >
              <span>
                {subItem.key === "nav.aboutAbrag"
                  ? isRTL
                    ? "عن أبراج"
                    : "About Abraj"
                  : subItem.key === "nav.chairmanMessage"
                  ? isRTL
                    ? "كلمة الرئيس"
                    : "Chairman Message"
                  : subItem.key === "nav.boardOfDirectors"
                  ? isRTL
                    ? "مجلس الإدارة"
                    : "Board of Directors"
                  : subItem.key === "departments.title"
                  ? isRTL
                    ? "أقسامنا"
                    : "Our Departments"
                  : subItem.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  ) : item.key === "nav.home" ? (
    <a
      href={item.to}
      onClick={handleHomeClick}
      className={`${getTextColor()} flex items-center text-sm md:text-lg font-semibold transition duration-300 ease-in-out py-2 whitespace-nowrap`}
    >
      <span className="relative">
        {t(item.key)}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
      </span>
    </a>
  ) : (
    <Link
      to={item.to}
      className={`${getTextColor()} flex items-center text-sm md:text-lg font-semibold transition duration-300 ease-in-out py-2 whitespace-nowrap`}
    >
      <span className="relative">
        {t(item.key)}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
      </span>
    </Link>
  )}
</li>
                ))}
              </ul>
              
              <div className="flex items-center space-x-3 rtl:space-x-reverse ml-4">
                <LanguageToggle />
              </div>
            </div>

            {/* Mobile toggle */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse md:hidden">
              <LanguageToggle />
              
              <button
                onClick={toggleMenu}
                className="relative"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X size={24} className={getTextColor()} />
                ) : (
                  <GiHamburgerMenu size={24} className={getTextColor()} />
                )}
              </button>
            </div>
          </div>
        </div> 
      </nav>

      {/* Mobile menu backdrop */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
          isMenuOpen 
            ? "bg-black/50 backdrop-blur-sm pointer-events-auto" 
            : "bg-black/0 backdrop-blur-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 bottom-0 z-50 transform transition-transform duration-300 ease-in-out ${
          menuDirectionRef.current ? "right-0" : "left-0"
        }`}
        style={{
          width: "85vw",
          maxWidth: "320px",
           background: "linear-gradient(to bottom, #3D4B9F, #5A63B0)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          transform: isMenuOpen
            ? "translateX(0)"
            : menuDirectionRef.current
            ? "translateX(100%)"
            : "translateX(-100%)",
        }}
      >
        <div className="p-5 pt-16 h-full flex flex-col">
          <div className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'}`}>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-white p-1 rounded-full hover:bg-white/20"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.key} className="mb-1">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                        className="flex items-center justify-between w-full text-white text-base font-medium py-2 px-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
                      >
                        <div>{t(item.key)}</div>
                        <svg
                          className={`ml-2 w-5 h-5 transition-transform duration-300 ${
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
                        <ul className={`pl-4 mt-2 space-y-1 ${isRTL ? 'border-r-2 border-white/20 pr-3' : 'border-l-2 border-white/20 pl-3'}`}>
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.key}>
                              <Link
                                to={subItem.to}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center py-2 px-3 text-white text-opacity-90 hover:text-opacity-100 rounded-lg hover:bg-white/10 transition-all duration-300"
                              >
                                {subItem.key === "nav.aboutAbrag" ? (
                                  isRTL ? "عن أبراج" : "About Abrag"
                                ) : subItem.key === "nav.chairmanMessage" ? (
                                  isRTL ? "كلمة الرئيس" : "Chairman Message"
                                ) : subItem.key === "nav.boardOfDirectors" ? (
                                  isRTL ? "مجلس الإدارة" : "Board of Directors"
                                ) : subItem.key === "departments.title" ? (
                                  isRTL ? "أقسامنا" : "Our Departments"
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
                      className="flex items-center py-2 px-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                      <span className="text-white text-base font-medium">{t(item.key)}</span>
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center py-2 px-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                      <span className="text-white text-base font-medium">{t(item.key)}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;