import React from "react";

import ResumePDF from "../assets/Sinchana.pdf";

export default function () {
  return (
    <>
      <section className="section-resume" id="resume">
        <h1>
          My <span className="half-text">Resume</span>
        </h1>
        <p>
          Hey there! Below I have attached my resume, which highlights my
          skills, experiences, and the innovative projects I've been involved
          in. Feel free to reach out and collaborate with me anytime!
        </p>
        <div className="resume-download">
          <a href={ResumePDF} download className="download-button">
            <span>Download Resume (.pdf)</span>
          </a>
        </div>
        <div className="resume-img-box">
          <img src="src/assets/R.jpg" alt="Resume-img" />
        </div>
      </section>
    </>
  );
}
