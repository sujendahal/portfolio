import React from "react";

const Button = ({ text, href }) => {
  return (
    <a
      href={href}
      className="px-4 sm:px-6 py-2 rounded-full text-second border-2 border-second font-semibold hover:bg-second hover:text-first transition hover:shadow-[0_0_15px_3px_rgba(0,0,0,8)]"
    >
      {text}
    </a>
  );
};

export default Button;
