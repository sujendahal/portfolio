import React, { useRef, useState, useEffect } from "react";

function ServiceBox({ title, description, imageUrl }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src={imageUrl} alt={title} className="w-full h-auto" />
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="mt-2">{description}</p>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 mr-2">
          Hire Me
        </button>
        <button className="bg-green-500 text-white px-4 py-2">Call Me</button>
      </div>
    </div>
  );
}

export default ServiceBox;
