import React from 'react'
import meimage from '../assets/image/me.png'
import "./style/Home.scss"
import wazuh from '../assets/image/Wazuh.png'
import wazuh2 from '../assets/image/Wazuh2.png'
import wazuh3 from '../assets/image/Wazuh3.png'
function Home() {
  return (
    <div>
      
            <div className="main-header container">
              <div className="header-left">
                <div className="header-about">
                  <h2>
                    Hi, I am Yasina, Front-end developer
                  </h2>
      
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
      
                  <button>Download Resume</button>
                </div>
              </div>
      
              <div className="header-right">
                <div className="header-img">
                  <img src={meimage} alt="" />
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
      <p className="info">12 Feb 2020  <p>|</p>   Design Pattern</p>
      <p className="text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit. Exercitation veniam
        consequat sunt nostrud amet.
      </p>
    </div>

    <div className="post-card">
      <h2>Creating pixel perfect icons in Figma</h2>
      <p className="info">12 Feb 2020  <p>|</p>  Figma, Icon Design</p>
      <p className="text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit. Exercitation veniam
        consequat sunt nostrud amet.
      </p>
    </div>
  </div>
  
</div>

<div className='feat'>
        <div className="feat-text">
            <p>Featured works</p>
        </div>

          <div className="feat-body">

            <div className="feat-left">
                  <div className="feat-img">
                    <img src={wazuh} alt="" />
                  </div>
                </div>


                <div className="feat-right">
                  <div className="feat-about">
                    <h2>
                       Designing Dashboards 
                    </h2>
                    <div className="data">
                        <div className="years">
                             <p>2020</p>
                        </div>
                       
                        <h2>Dashboard</h2>
                        </div>
        
                    <p className='amet'>
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                      Velit officia consequat duis enim velit mollit.
                       Exercitation veniam consequat sunt nostrud amet.
                    </p>
        
                  </div>
                </div>
        
              </div>

              <div className="line">
                
              </div>


              <div className="feat-body">

            <div className="feat-left">
                  <div className="feat-img">
                    <img src={wazuh2} alt="" />
                  </div>
                </div>


                <div className="feat-right">
                  <div className="feat-about">
                    <h2>
                       Vibrant Portraits of 2020
                    </h2>
                    <div className="data">
                        <div className="years">
                             <p>2018</p>
                        </div>
                       
                        <h2>Dashboard</h2>
                        </div>
        
                    <p className='amet'>
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                      Velit officia consequat duis enim velit mollit.
                       Exercitation veniam consequat sunt nostrud amet.
                    </p>
        
                  </div>
                </div>
        
              </div>

               <div className="line">
                
              </div>


              <div className="feat-body">

            <div className="feat-left">
                  <div className="feat-img">
                    <img src={wazuh3} alt="" />
                  </div>
                </div>


                <div className="feat-right">
                  <div className="feat-about">
                    <h2>36 Days of Malayalam type
                    </h2>
                    <div className="data">
                        <div className="years">
                             <p>2020</p>
                        </div>
                       
                        <h2>Dashboard</h2>
                        </div>
        
                    <p className='amet'>
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                      Velit officia consequat duis enim velit mollit.
                       Exercitation veniam consequat sunt nostrud amet.
                    </p>
        
                  </div>
                </div>
        
              </div>

               <div className="line">
                
              </div>
        


    </div>



    </div>
  );
}

export default Home;