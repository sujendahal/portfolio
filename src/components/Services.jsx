import React from "react";
import Lottie from "lottie-react";

import mobileAnimation from "../assets/animations/mobile.json";
import webAnimation from "../assets/animations/web.json";
import callAnimation from "../assets/animations/call.json";

const ServiceCard = ({
  title,
  text,
  animationData,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="w-72 sm:w-80 md:w-96 bg-fourth shadow-lg rounded-2xl overflow-hidden transform transition-all duration-500 animate-fadeInStrong hover:scale-105">
      <div className="w-full h-48 flex justify-center items-center">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-24 h-24 sm:w-32 sm:h-32"
        />
      </div>

      <div className="p-6 text-center">
        <h5 className="text-2xl font-bold text-second mb-2">{title}</h5>
        <p className="text-third text-sm sm:text-base">{text}</p>
        <a
          href={buttonLink}
          className="mt-4 inline-block bg-second bg-opacity-20 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-opacity-60 transition-all"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

function Services() {
  return (
    <div className="pt-16 relative z-10">
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 text-center w-full max-w-md z-20">
        <h3 className="mt-6 text-xl sm:text-lg md:text-xl lg:text-2xl text-third">
          What May I Do For You...
        </h3>
        <h1 className="font-times mt-6 text-6xl sm:text-5xl md:text-6xl lg:text-7xl text-second font-extrabold">
          SERVICES
        </h1>
      </div>

      <div className="mt-64 flex flex-wrap justify-center gap-8">
        <ServiceCard
          title="Mobile App Development"
          text="Building cross-platform mobile applications!"
          animationData={mobileAnimation}
          buttonText="Mail Me!"
          buttonLink="mailto:sujen.rocker@gmail.com"
        />
        <ServiceCard
          title="Web Development"
          text="Creating dynamic websites in record-time!"
          animationData={webAnimation}
          buttonText="Hire Me!"
          buttonLink="mailto:sujen.rocker@gmail.com"
        />
        <ServiceCard
          title="Free Advice"
          text="Get Free Tech Related Advice!"
          animationData={callAnimation}
          buttonText="Call Me!"
          buttonLink="tel:+977 9843818158"
        />
      </div>
    </div>
  );
}

export default Services;
