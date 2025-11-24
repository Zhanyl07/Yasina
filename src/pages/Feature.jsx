import React from 'react'
import wazuh from "../../assets/image/Wazuh.png"
import wazuh2 from "../../assets/image/Wazuh2.png"
import wazuh3 from "../../assets/image/Wazuh3.png"
import "./Feature.scss"
function Featute() {
  return (
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
  )
}

export default Featute