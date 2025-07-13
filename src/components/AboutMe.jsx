import React, { useRef } from "react";
import myPicture from "../assets/my-pic1.jpg";


export default function AboutMe() {
  const aboutMeRef = useRef(null);

  return (
    <section className="section-about-me" id="about-me" ref={aboutMeRef}>
      <div className="about-me-grid">
        <div className="about-me-text-box">
          <h1>
            Who <span className="half-text">I'm</span>
          </h1>
          <p className="about-me-text">
            Hi there! I'm a{" "}
            <span className="half-text" style={{ fontWeight: "bold" }}>
            Computer Science student specializing in Data Science
            </span>{" "}
            student currently in my{" "}
            <span className="half-text" style={{ fontWeight: "bold" }}>
              third year{" "}
            </span>
            . I have a strong interest in Data Science and Web Development.
I enjoy working with data, building web applications, and solving problems.
Always eager to learn and explore new technologies.
         </p>
          <h3>
            <span className="half-text">My</span> Journey
          </h3>
          <p className="about-me-text">
            I'm well-versed in a variety of programming languages and web
            technologies. My fields of interest include{" "}
            <span className="half-text" style={{ fontWeight: "bold" }}>
              DataScience
            </span>
            , and I'm quite fluent in basics like{" "}
            <span className="half-text" style={{ fontWeight: "bold" }}>
              Python
            </span>
            ,{" "}
            <span className="half-text" style={{ fontWeight: "bold" }}>
              Java
            </span>
            ,{" "}
            <span className="half-text" style={{ fontWeight: "bold" }}>
              JavaScript
            </span>{" "}
            and so on. I love bringing ideas to life through code.
          </p>
          
          <h3>
            Beyond <span className="half-text">the code</span>
          </h3>
          <p className="about-me-text">
            When I'm not immersed in coding, you can find me{" "}
            <span className="half-text" style={{ fontWeight: "bold" }}>
              exploring the latest tech trends
            </span>
            ,{" "}
            <span className="half-text" style={{ fontWeight: "bold" }}>
              experimenting with new tools and frameworks
            </span>
            , and
            <span className="half-text" style={{ fontWeight: "bold" }}>
              working on exciting projects
            </span>{" "}
            that challenge my skills and creativity. I believe in continuous
            learning and am always on the lookout for opportunities to expand my
            knowledge and take on new challenges.
          </p>
          <h3>
            <span className="half-text">Hobbies and</span> Interests
          </h3>
          <p className="about-me-text">
            Apart from my tech pursuits, my hobbies include enjoying a variety
            of{" "}
            <span className="half-text" style={{ fontWeight: "bold" }}>
              outdoor activities
            </span>
            ,{" "}
            <span className="half-text" style={{ fontWeight: "bold" }}>
              painting
            </span>
            ,{" "}
            <span className="half-text" style={{ fontWeight: "bold" }}>
              cooking
            </span>
            ,{" "}
            <span className="half-text" style={{ fontWeight: "bold" }}>
              mandal arts
            </span>
            .
          </p>
        </div>
        <div className="about-me-img-box">
          <img src={myPicture} alt="My photo" className="my-pic" />
          <div className="contact-img-box">
            <ul>
              <li>
                <div className="contact-item">
                  <svg
                    className="contact-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                  <p>B.E in CSE(Data Science), SCEM Mangaluru</p>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <svg
                    className="contact-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <p>Adyar,Mangaluru</p>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <svg
                    className="contact-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                  <p>naik.sinchana13@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
