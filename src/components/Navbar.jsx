import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/Navbar.css';

const Navbar = () => (
  <nav>
    <ul>
      <li><NavLink to="/" >About Me</NavLink></li>
      <li><NavLink to="/portfolio" className="active">Portfolio</NavLink></li>
      <li><NavLink to="/contact" className="active">Contact</NavLink></li>
      <li><NavLink to="/resume" className="active">Resume</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
