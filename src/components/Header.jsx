import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navList = [
  { id: 1, data: "Home", href: "home" },
  { id: 2, data: "Services", href: "services" },
  // { id: 4, data: "Projects", href: "projects" },
  { id: 7, data: "Contact", href: "contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolling, setScrolling] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      navList.forEach(({ href }) => {
        const section = document.getElementById(href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = href;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full flex justify-between items-center p-4 z-50 ${
        scrolling ? "bg-fourth h-10" : "bg-first"
      } transition-colors duration-300 bg-opacity-95 `}
    >
      <button
        onClick={() => scrollToSection("home")}
        className="text-4xl font-extrabold font-times text-second hover:scale-110 transition-transform duration-300"
      >
        SUJEN
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-second focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        {navList.map(({ id, data, href }) => (
          <button
            key={id}
            onClick={() => scrollToSection(href)}
            className={`ml-8 text-lg font-bold transition-transform duration-300 hover:scale-110 mr-16
              ${
                activeSection === href
                  ? "text-second border-b-2 border-second"
                  : "text-third border-b-2 border-transparent"
              }`}
          >
            {data}
          </button>
        ))}
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-first p-4">
          {navList.map(({ id, data, href }) => (
            <button
              key={id}
              onClick={() => scrollToSection(href)}
              className={`block text-lg font-bold w-full text-left mb-4 transition-transform duration-300 
                ${
                  activeSection === href
                    ? "text-second  border-second active:text-fourth "
                    : "text-third  border-transparent "
                }`}
            >
              {data}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
