import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const icons = [
  {
    id: 1,
    href: "https://www.linkedin.com/in/sujen-dahal/",
    components: <FaLinkedin />,
  },
  {
    id: 2,
    href: "https://github.com/sujendahal",
    components: <FaGithub />,
  },
  {
    id: 3,
    href: "https://www.instagram.com/sujen_dahal/",
    components: <FaInstagram />,
  },
  {
    id: 4,
    href: "https://www.facebook.com/sujen.dahal",
    components: <FaFacebook />,
  },
];

const Footer = () => {
  return (
    <footer className="w-full text-white py-4 relative">
      <div className="flex flex-col items-center">
        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-3">
          {icons.map((icon) => (
            <a
              key={icon.id}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center border-2 border-gray-400 rounded-full text-gray-400 hover:bg-gray-400 hover:text-gray-900 transition shadow-md"
            >
              {icon.components}
            </a>
          ))}
        </div>

        <div className="flex justify-between w-full max-w-xs">
          <p className="text-sm text-gray-400 whitespace-nowrap">
            <a
              href="mailto:sujen.rocker@gmail.com"
              className="text-gray-400 hover:text-gray-200 hover:underline transition "
            >
              sujen.rocker@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-400 whitespace-nowrap">
            <a
              href="tel:+977-9843818158"
              className="text-gray-400 hover:text-gray-200  hover:underline transition"
            >
              +977-9843818158
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
