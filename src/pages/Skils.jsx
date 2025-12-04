import React from "react";
import "./style/Skils.scss";

// React-Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaBootstrap,
  FaGitlab,
  FaSass,
} from "react-icons/fa";

import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

// Маппинг иконок
const iconMapping = {
  html5: <FaHtml5 />,
  css3: <FaCss3Alt />,
  javascript: <FaJsSquare />,
  typescript: <SiTypescript />,
  react: <FaReact />,
  redux: <SiRedux />,
  bootstrap: <FaBootstrap />,
  tailwind: <SiTailwindcss />,
  scss: <FaSass />,
  github: <FaGithub />,
  gitlab: <FaGitlab />,
  firebase: <SiFirebase />,
};

// Данные навыков
const skillsData = [
  { name: "HTML", level: "90%", icon: "html5", color: "#e44d26" },
  { name: "CSS", level: "85%", icon: "css3", color: "#264de4" },
  { name: "JavaScript", level: "75%", icon: "javascript", color: "#f7df1e" },
  { name: "TypeScript", level: "60%", icon: "typescript", color: "#007acc" },
  { name: "React", level: "65%", icon: "react", color: "#61dbfb" },
  { name: "Redux", level: "55%", icon: "redux", color: "#764abc" },
  { name: "Bootstrap", level: "70%", icon: "bootstrap", color: "#6c27d3" },
  { name: "Tailwind CSS", level: "65%", icon: "tailwind", color: "#38bdf8" },
  { name: "SCSS / SASS", level: "60%", icon: "scss", color: "#cc6699" },
  { name: "GitHub", level: "70%", icon: "github", color: "#fff" },
  { name: "GitLab", level: "60%", icon: "gitlab", color: "#e24329" },
  { name: "Firebase", level: "55%", icon: "firebase", color: "#ffca28" },
];

const Skils = () => {
  return (
    <section id="skills" className="skills">
      <div className="contai">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon" style={{ color: skill.color }}>
                {iconMapping[skill.icon]}
              </div>
              <h3>{skill.name}</h3>
              <p className="level">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skils;