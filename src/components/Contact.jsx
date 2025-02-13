import React from "react";

const Contact = () => {
  return (
    <div className="pt-16 relative z-10">
      {/* Heading Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 text-center w-full max-w-md z-20">
        <h3 className="mt-6 text-xl sm:text-lg md:text-xl lg:text-2xl text-third ">
          Like What You See?
        </h3>
        <h1 className="font-times mt-6 text-6xl sm:text-5xl md:text-6xl lg:text-7xl text-second font-extrabold">
          Contact Me
        </h1>
      </div>

      {/* Contact Form */}
      <div className="flex justify-center mt-64">
        <form
          action="https://formspree.io/f/xanqdvvo" // Use Formspree service or similar
          method="POST"
          className="w-full max-w-3xl p-8 bg-fourth rounded-xl shadow-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-xl text-second font-semibold mb-2 opacity-80"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full p-3 bg-gray-200 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-second"
              placeholder="Your full name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-xl text-second font-semibold mb-2 opacity-80"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 bg-gray-200 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-second"
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="service"
              className="block text-xl text-second font-semibold mb-2 opacity-80"
            >
              Select a Service
            </label>
            <select
              id="service"
              name="service"
              className="w-full p-3 bg-gray-200 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-second"
            >
              <option>Website Development</option>
              <option>Mobile App Development</option>
              <option>General Inquiry</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-xl text-second font-semibold mb-2 opacity-80"
            >
              Tell Me More
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 bg-gray-200 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-second"
              placeholder="Tell me more about your project"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-second text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:scale-110 transition-all "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
