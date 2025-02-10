import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
const icons = [
  {
    id: 1,
    href: "https://www.linkedin.com/in/sujen-dahal/",
    components: <FaLinkedin />,
  },
  { id: 2, href: "https://github.com/sujendahal", components: <FaGithub /> },
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
const SocialIcons = () => {
  return (
    <div className="flex justify-center md:justify-start space-x-4 mb-6 sm:mb-6">
      {icons.map((icon, index) => (
        <a
          href={icon.href}
          target="_blank"
          className="w-10 h-10 flex items-center justify-center border-2 border-second rounded-full text-second hover:bg-second hover:text-first transition hover:shadow-[0_0_15px_3px_rgba(0,0,0,8)]"
        >
          {icon.components}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
