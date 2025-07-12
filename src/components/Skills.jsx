import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiC,
  SiCplusplus,
} from "react-icons/si";

export default function Skills() {
  const skills1 = [
    { name: "Python", icon: <SiPython color="#3776AB" /> },
    { name: "C", icon: <SiC color="#A8B9CC" /> },
    //{ name: "C++", icon: <SiCplusplus color="#00599C" /> },
    { name: "Java", icon: <FaJava color="#007396" /> },
  ];

  const skills2 = [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    //{ name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    //{ name: "React", icon: <FaReact color="#61DAFB" /> },
    //{ name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    //{ name: "Express", icon: <SiExpress color="#f4f4f4" /> },
    //{ name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    //{ name: "Next.js", icon: <SiNextdotjs color="f4f4f4" /> },
  ];

  const skills3 = [
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    //{ name: "SQL", icon: <FaDatabase color="#4479A1" /> },
  ];

  return (
    <section className="section-skills" id="skills">
      <h1>
        My <span className="half-text">Skills</span>
      </h1>
      <h2>
        <span className="half-text">Programming </span>Languages
      </h2>
      <div className="skills-container">
        {skills1.map((skill, index) => (
          <div key={index} className="skill">
            {skill.icon}
          </div>
        ))}
      </div>
      <h2>
        <span className="half-text">Web</span> Technologies
      </h2>
      <div className="skills-container">
        {skills2.map((skill, index) => (
          <div key={index} className="skill">
            {skill.icon}
          </div>
        ))}
      </div>
      <h2>
        Databases<span className="half-text"> Known</span>
      </h2>
      <div className="skills-container">
        {skills3.map((skill, index) => (
          <div key={index} className="skill">
            {skill.icon}
          </div>
        ))}
      </div>
    </section>
  );
}
