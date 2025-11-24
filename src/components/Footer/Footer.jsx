import React from 'react'
import "./Footer.scss"
import fcb from '../../assets/svg/fcb.svg'
import inst from '../../assets/svg/instagram.svg'
import twitter from '../../assets/svg/twitter.svg'
import ind from '../../assets/svg/in.svg'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer-image">
        <div className="fcb">
          <img src={fcb} alt="" />
        </div>

        <div className="fcb">
          <a href=""></a>
          <img src={inst} alt="" />
        </div>
        
        <div className="fcb">
          <img src={twitter} alt="" />
        </div>
        
        <div className="fcb">
          <img src={ind} alt="" />
        </div>


      </div>

      <div className="copytext">
        <p>Copyright ©2020 All rights reserved </p>
      </div>
    </div>
  )
}

export default Footer