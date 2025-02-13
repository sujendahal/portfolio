import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-first text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="home">
          <Home />
        </section>
        <section id="services">
          <Services />
        </section>
        {/* <section id="projects">
          <Projects />
        </section> */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
