import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navList = [
  { id: 1, data: "Home", href: "/" },
  { id: 2, data: "Services", href: "/services" },
  { id: 3, data: "Skills", href: "/skills" },
  { id: 4, data: "Projects", href: "/projects" },
  { id: 5, data: "Experience", href: "/experience" },
  { id: 6, data: "Education", href: "/education" },
  { id: 7, data: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full flex justify-between items-center p-4 z-50 bg-first">
      <Link
        to="/"
        className="text-4xl font-extrabold font-times text-second hover:scale-110 transition-transform duration-300"
      >
        SUJEN
      </Link>
      <button
        className="md:hidden text-second focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <nav className="hidden md:flex">
        {navList.map((item) => (
          <Link
            key={item.id}
            to={item.href}
            className="inline-block ml-8 text-lg font-bold text-third hover:text-second border-b-2 border-transparent hover:border-second transition-transform duration-300 hover:scale-110"
          >
            {item.data}
          </Link>
        ))}
      </nav>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-first p-4">
          {navList.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="block text-lg font-bold text-third hover:text-second mb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.data}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
