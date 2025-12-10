import React from 'react'
 import { Link } from 'react-router-dom'
  import "./Header.scss"

function Header() { return ( <header className='header'> <div className="top-header"> <div className="header-content container"> {/* Logo */} <Link className='logo' to="/">YASINA</Link>

{/* Navigation */}
      <ul className='nav-list'>
        <li><Link className='nav-link' to="/works">Works</Link></li>
        <li><Link className='nav-link' to="/blog">About</Link></li>
        <li><Link className='nav-link' to="/contact">Contact</Link></li>
      </ul>

      {/* Language Switch */}
      <select className='lang-select'>
        <option value="kg">KGZ</option>
        <option value="en">ENG</option>
        <option value="ru">RUS</option>
      </select>
    </div>
  </div>
</header>

) }

export default Header;