import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar1.css";

// import img1 from '../images/logo.png';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <img className="logo-image"
            // src={img1}
            alt="Canvas Logo"
          />
          <NavLink exact to="/" className="nav-logo">
            <p>Pharmacy Locator</p>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink 
                exact to="/"  
                activeClassName="active" 
                className="nav-links"
                onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                exact to="/categories" 
                activeClassName="active" 
                className="nav-links"
                onClick={handleClick}>
                Categories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                exact to="/about" 
                activeClassName="active"  
                className="nav-links"
                onClick={handleClick}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                exact to="/contact" 
                activeClassName="active"  
                className="nav-links"
                onClick={handleClick}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                exact to="/feedback" 
                activeClassName="active"  
                className="nav-links"
                onClick={handleClick}>
                Feedback
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                exact to="/login" 
                activeClassName="active"  
                className="nav-links"
                onClick={handleClick}>
                Login
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
