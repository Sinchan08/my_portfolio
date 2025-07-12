import React from "react";

import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
