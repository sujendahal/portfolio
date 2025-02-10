import React from "react";
import ServiceBox from "./ServiceBox";

function Services() {
  const services = [
    {
      title: "Service One",
      description: "Description for service one.",
      imageUrl: "path/to/image1.jpg",
    },
    {
      title: "Service Two",
      description: "Description for service two.",
      imageUrl: "path/to/image2.jpg",
    },
    {
      title: "Service Three",
      description: "Description for service three.",
      imageUrl: "path/to/image3.jpg",
    },
  ];

  return (
    <div className="pt-16">
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 text-center w-full max-w-md">
        <h3 className="mt-6 text-xl sm:text-lg md:text-xl lg:text-2xl text-third">
          What May I Do For You...
        </h3>
        <h1 className="font-times mt-6 text-6xl sm:text-5xl md:text-6xl lg:text-7xl text-second font-extrabold">
          SERVICES
        </h1>
      </div>
      <div className="pt-">
        {services.map((service, index) => (
          <ServiceBox
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
