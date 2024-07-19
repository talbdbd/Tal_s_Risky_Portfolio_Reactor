import React from 'react';
import './Resume.css';

const Resume = () => (
  <section className="resume">
    <h2>Resume</h2>
    <a href="/path-to-your-resume.pdf" download>Download Resume</a>
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>MongoDB</li>
      <li>CSS</li>
    </ul>
  </section>
);

export default Resume;
