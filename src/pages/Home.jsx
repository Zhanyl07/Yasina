import React from 'react'
import meimage from '../assets/image/me.png'
import "./style/Home.scss"
import Skils from './Skils';

function Home() {
  return (
    <div>
      <div className="main-header container">
        <div className="header-left">
          <div className="header-about">
            <h2>Hi, I am Yasina, Front-end developer</h2>

            <p>
              I build adaptive and reliable user interfaces with a strong focus on clean structure,
              attention to detail, and user-friendly experience.
            </p>

            {/* 👇 Кнопка скачивания резюме */}
            <a href="/resume.pdf" download="Yasina_Resume.pdf">
              <button className="resume-btn">Download Resume</button>
            </a>
          </div>
        </div>

        <div className="header-right">
          <div className="header-img">
            <img src={meimage} alt="Yasina" />
          </div>
        </div>
      </div>

      <div className="recent-posts container">
        <div className="recent-header">
          <h3>Recent posts</h3>
          <a href="#" className="view">View all</a>
        </div>

        <div className="posts">
          <div className="post-card">
            <h2>Making a design system from scratch</h2>
            <p className="info">12 Feb 2020 <span>|</span> Design Pattern</p>
            <p className="text">
              Create a clean and scalable design system that helps keep all your UI components
              consistent. Learn how to build reusable elements and improve your workflow.
            </p>
          </div>

          <div className="post-card">
            <h2>Creating pixel perfect icons in Figma</h2>
            <p className="info">12 Feb 2020 <span>|</span> Figma, Icon Design</p>
            <p className="text">
              A practical guide on creating modern icons.
              Learn spacing, alignment, and grid setup to make your icons sharp and
              professional.
            </p>
          </div>
        </div>
      </div>

      <Skils/>
    </div>
  );
}

export default Home;