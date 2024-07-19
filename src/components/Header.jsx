import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <h1>My Portfolio</h1>
    <nav>
      <ul>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#resume">Resume</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
