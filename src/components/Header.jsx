import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/Header.css';

const Header = () => (
  <header>
    <h1>Tal's Coding Parlor</h1>
    <nav>
      <ul>
        <li><NavLink to="/" className="active">About Me</NavLink></li>
        <li><NavLink to="/portfolio" className="active">Portfolio</NavLink></li>
        <li><NavLink to="/contact" className="active">Contact</NavLink></li>
        <li><NavLink to="/resume" className="active">Resume</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
