import React from 'react';
import './AboutMe.css';
import avatar from '../assets/your-avatar.png'; // Replace with your actual image path

const AboutMe = () => (
  <section className="about-me">
    <img src={avatar} alt="Developer Avatar" />
    <p>Hi! I'm a web developer with a passion for creating stunning and functional web applications. Welcome to my portfolio!</p>
  </section>
);

export default AboutMe;
