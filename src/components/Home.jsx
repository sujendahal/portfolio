import React from "react";
import HeroImage from "../assets/profile.jpeg";
import { TypeAnimation } from "react-type-animation";
import SocialIcons from "./SocialIcons";
import Button from "./Button";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen pt-16 md:pt-24 animate-fadeIn">
      <div className="md:w-1/2 flex justify-center">
        <img
          src={HeroImage}
          alt="Sujen Dahal"
          className="w-32 sm:w-48 md:w-56 lg:w-72 xl:w-80 rounded-full shadow-lg hover:scale-110 duration-300"
        />
      </div>

      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          Namaste! It's
          <span className="inline whitespace-nowrap ml-3 text-second">
            Sujen Dahal
          </span>
        </h1>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          I am a{" "}
          <span className="font-courier text-second whitespace-nowrap">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Web Dev Expert",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "1.5rem" }}
              repeat={Infinity}
            />
          </span>
        </h3>
        <p className="text-sm sm:text-lg mr-6 mb-6 ml-6 sm:ml-0">
          I have expertise in HTML, CSS, JavaScript, and the MERN stack, along
          with knowledge of C++, Java, and Python. With a strong mindset, a
          vigorous work ethic, and a commitment to hard work, I am determined to
          make a meaningful impact in the tech world!
        </p>
        <SocialIcons></SocialIcons>
        <Button
          text="Hire Me"
          href="mailto:sujen.rocker@gmail.com"
          className="hover:scale-105 transition-transform duration-300"
        ></Button>
      </div>
    </section>
  );
};

export default Home;
