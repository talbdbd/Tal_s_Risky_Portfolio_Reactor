import React from 'react';
import '../assets/Resume.css';

const Resume = () => (
  <section className="resume">
    <a href="/path-to-your-resume.pdf" download>Download Resume</a>
    <ul className="proficiencies">
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>MongoDB</li>
      <li>CSS</li>
    </ul>
  </section>
);

export default Resume;
