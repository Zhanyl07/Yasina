import React from "react";
import "./WorksCom.scss";
import wazuh from '../../assets/image/Wazuh.png';
import wazuh2 from '../../assets/image/w.png';
import wazuh3 from '../../assets/image/w2.png';

function WorksCom() {
  return (
    <div className="works">

      <h1 className="works-title">Works</h1>

      <div className="projects">

        <div className="project-card">
          <img src={wazuh} alt="Project One" />
          <div className="project-content">
            <h2>Green Shop</h2>
            <p className="project-tags">React • JS • SCSS • HTML</p>
            <p className="project-text">
              Plant shop with a clean, minimal and user-friendly interface.
            </p>
            <a 
              href="https://green-shop-oeo8.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-button"
            >
              View project
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={wazuh2} alt="Project Two" />
          <div className="project-content">
            <h2>Nike</h2>
            <p className="project-tags">HTML • CSS • JavaScript</p>
            <p className="project-text">
              Modern sneaker store with an adaptive and smooth UI.
            </p>
            <a 
              href="https://nike-teal-seven.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-button"
            >
              View project
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={wazuh3} alt="Project Three" />
          <div className="project-content">
            <h2>Exclusive</h2>
            <p className="project-tags">HTML • CSS • JavaScript</p>
            <p className="project-text">
              Clothing store with a simple layout and clean design.
            </p>
            <a 
              href="https://exclusive-fp75.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-button"
            >
              View project
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}

export default WorksCom;