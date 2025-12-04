import React from 'react';
import './Footer.scss';
import { FaTelegram, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

function Footer()
 { return ( <footer className='footer'> 
 <div className='social-icons'> 
   <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'><FaInstagram size={30} /></a> 
   <a href='https://telegram.com/@assyasina' target='_blank' rel='noopener noreferrer'><FaTelegram size={30} /></a> 
    <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'><FaLinkedin size={30} /></a> 
   <a href='https://github.com/Zhanyl07' target='_blank' rel='noopener noreferrer'><FaGithub size={30} /></a>
    <a href='https://youtube.com/zhanline7' target='_blank' rel='noopener noreferrer'><FaYoutube size={30} /></a> 
   </div>
    <div className='copytext'>
       <p>Copyright ©2020 All rights reserved</p>
        </div>
         </footer> ); }

export default Footer;