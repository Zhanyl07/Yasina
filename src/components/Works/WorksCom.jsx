import React from "react";
import "./WorksCom.scss";
import wazuh from '../../assets/image/Wazuh.png'
import wazuh2 from '../../assets/image/Wazuh2.png'
import wazuh3 from '../../assets/image/Wazuh3.png'
function WorksCom() {
  return (
    <div className="works">

      <h1 className="works-title">Works</h1>

      <div className="projects">

        <div className="project-card">
          <img src={wazuh} alt="" />
          <div className="project-content">
            <h2>Project One</h2>
            <p className="project-tags">React • UI Design</p>
            <p className="project-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={wazuh2} alt="" />
          <div className="project-content">
            <h2>Project Two</h2>
            <p className="project-tags">HTML • CSS • JavaScript</p>
            <p className="project-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={wazuh3} alt="" />
          <div className="project-content">
            <h2>Project Three</h2>
            <p className="project-tags">Figma • UX/UI</p>
            <p className="project-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default WorksCom;