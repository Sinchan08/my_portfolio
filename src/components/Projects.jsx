import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa"; // React and Node.js icons from FontAwesome
import { FaServer } from "react-icons/fa"; // Express generic server icon from FontAwesome
import React, { useState } from "react";
import { DiMongodb } from "react-icons/di"; // MongoDB icon from Devicons

const descriptions1 = [
  "Tour and booking management RESTful API built with MERN stack and user authentication implemented using jwt",
];

const descriptions2 = [
  "Full-stack web application to manage all restaurant operations, including inventory management and online slot reservations",
];

const descriptions3 = [
  "An online bank that takes care of your transaction history, in a clear and organized way",
];

const descriptions4 = [
  "Manages projects and tasks seamlessly, built utilizing the reusable components React.js and styled with Tailwind",
];

export default function Projects() {
  const email = "sreejita.das16@gmail.com";
  const [buttonText, setButtonText] = useState("Copy my email");

  function copyEmailHandler() {
    navigator.clipboard.writeText(email).then(() => {
      setButtonText("Email copied!");
      setTimeout(() => {
        setButtonText("Copy my email");
      }, 2000);
    });
  }

  return (
    <section className="section-projects" id="projects">
      <h1>My Projects</h1>
      <div className="projects-box">
        <div className="project-card-1">
          <div className="project-details">
            <h2 className="project-title">RESTful API</h2>
            <p className="project-description">{descriptions1}</p>
            <div
              className="tech-icons"
              style={{ display: "flex", gap: "1rem", fontSize: "2rem" }}
            >
              <div title="MongoDB">
                <DiMongodb />
              </div>
              <div title="Express">
                <FaServer />
              </div>
              <div title="React">
                <FaReact />
              </div>
              <div title="Node.js">
                <FaNodeJs />
              </div>
            </div>
          </div>
          <a
            href="https://github.com/sreejitadass/RESTful-API-project"
            className="repo-link"
          >
            Repository
          </a>
        </div>
        <div className="project-card-2">
          <div className="project-details">
            <h2 className="project-title">Restaurant Management System</h2>
            <p className="project-description">{descriptions2}</p>
            <div
              className="tech-icons"
              style={{ display: "flex", gap: "1rem", fontSize: "2rem" }}
            >
              <div title="SQL">
                <FaDatabase />
              </div>
              <div title="Express">
                <FaServer />
              </div>
              <div title="JavaScript">
                <FaJsSquare />
              </div>
              <div title="Node.js">
                <FaNodeJs />
              </div>
            </div>
          </div>
          <a href="https://github.com/" className="repo-link">
            Repository
          </a>
        </div>
        <div className="project-card-3">
          <div className="project-details">
            <h2 className="project-title">Online Bank Application</h2>
            <p className="project-description">{descriptions3}</p>
            <div
              className="tech-icons"
              style={{ display: "flex", gap: "1rem", fontSize: "2rem" }}
            >
              <div title="HTML">
                <FaHtml5 />
              </div>
              <div title="CSS">
                <FaCss3Alt />
              </div>
              <div title="JavaScript">
                <FaJsSquare />
              </div>
            </div>
          </div>
          <a
            href="https://github.com/sreejitadass/online-Bank-mini-project"
            className="repo-link"
          >
            Repository
          </a>
        </div>
        <div className="project-card-4">
          <div className="project-details">
            <h2 className="project-title">Project Management System</h2>
            <p className="project-description">{descriptions4}</p>
            <div
              className="tech-icons"
              style={{ display: "flex", gap: "1rem", fontSize: "2rem" }}
            >
              <div title="HTML">
                <FaHtml5 />
              </div>
              <div title="CSS">
                <FaCss3Alt />
              </div>
              <div title="JavaScript">
                <FaJsSquare />
              </div>
              <div title="React">
                <FaReact />
              </div>
            </div>
          </div>
          <a
            href="https://github.com/sreejitadass/project-management-application"
            className="repo-link"
          >
            Repository
          </a>
        </div>
      </div>
      <div className="email-info">
        <p style={{ color: "#9dc5ce" }}>
          Want to work on more exciting projects?
        </p>
        <p>Click below to get started!</p>
        <button className="email-button" onClick={copyEmailHandler}>
          {buttonText}
        </button>
      </div>
    </section>
  );
}
