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
  "KCET Seat Availability Management System built as a DBMS project using MySQL for backend data handling, featuring relational schema design, seat allocation queries, and real-time availability tracking via a user-friendly web interface.",
];

const descriptions2 = [
  "API vulnerability scanner designed for a cryptocurrency platform, built to detect insecure endpoints and enforce security rules based on OWASP API Security Top 10 guidelines.",
];


const descriptions3 = [
  "Smart City Complaint Hub where citizens can raise complaints, upload supporting images, and track case progress through an organized online portal.",
];


export default function Projects() {
  const email = "naik.sinchana13@gmail.com";
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
            <h2 className="project-title">KCET Seat Availability System</h2>
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
        <div className="project-card-2">
          <div className="project-details">
            <h2 className="project-title">API Vulnerability Scanner</h2>
            <p className="project-description">{descriptions3}</p>
            <div
              className="tech-icons"
              style={{ display: "flex", gap: "1rem", fontSize: "2rem" }}
            >
              <div title="HTML">
                <FaHtml5 />
              </div>
              <div title="Tailwand CSS">
                <FaCss3Alt />
              </div>
              <div title="JavaScript">
                <FaJsSquare />
              </div>
            </div>
          </div>
          <a
            href="https://github.com/SameekshaMenda/SaveScanAPI_QuantumCrypto"
            className="repo-link"
          >
            Repository
          </a>
        </div>
        <div className="project-card-3">
          <div className="project-details">
            <h2 className="project-title">SmartCity Complaint Hub</h2>
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
            href="https://github.com/Sinchan08/SmartCityHub"
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
