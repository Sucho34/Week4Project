import './NavbarLink.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink} from 'react-router-dom';

function NavbarLink() {
  
  return (
   <div>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            React SPA
          </NavLink>

          <ul className="nav-menu">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-links">
                   Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/projects" className="nav-links">
                   Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/about" className="nav-links">
                   About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/resume" className="nav-links">
                  Resume
                </NavLink>
              </li>
          </ul>
        </div>
      </nav>
  </div>
  ) 
} 
export default NavbarLink;



