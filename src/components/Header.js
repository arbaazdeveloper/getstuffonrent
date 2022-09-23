import React, { useState} from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
  const loc=useLocation()
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div className='top'>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <img src="https://res.cloudinary.com/dwl4ftefk/image/upload/v1663001935/White_Baking_Logo_-_Made_with_PosterMyWall__1_-removebg-preview_1_wpcnjl.png"></img>
           
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className={`nav-item ${loc.pathname==='/'?'rel':''}`}>
              <Link
                exact
                to="/"
             
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>
            <li className={`nav-item ${loc.pathname==='/about'?'rel':''}`}>
              <Link
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </Link>
            </li>
            <li className={`nav-item ${loc.pathname==='/blog'?'rel':''}`}>
              <Link
                exact
                to="/blog"
              
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </Link>
            </li>
            <li className={`nav-item ${loc.pathname==='/contact'?'rel':''}`}>
              <Link
                exact
                to="/contact"
           
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "bi bi-x-lg" : "bi bi-list"}></i>
            
          </div>
        </div>
      </nav>
    </ div>
  );


}

export default Header