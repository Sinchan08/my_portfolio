import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const aboutMeRef = useRef(null);
  const typedRef = useRef(null);

  const handleScrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about-me");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const options = {
      strings: ["Sinchana Naik"],
      typeSpeed: 70,
      backSpeed: 50,
      loop: false,
      showCursor: false,
    };

    // Initialize Typed.js
    typedRef.current = new Typed("#typed-text", options);

    // Cleanup Typed.js instance on component unmount
    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <section className="section-hero">
      <div className="hero-text">
        <h1>
          Hi, I'm{" "}
          <span
            id="typed-text"
            className="half-text"
            onClick={handleScrollToAboutMe}
          ></span>
        </h1>
        <p>Welcome to my portfolio</p>
      </div>
    </section>
  );
}
