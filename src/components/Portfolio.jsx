import React from 'react';
import './Portfolio.css';

const Portfolio = () => (
  <section className="portfolio">
    <h2>Portfolio</h2>
    <div className="project">
      <h3>Project 1</h3>
      <a href="https://project1.example.com" target="_blank" rel="noopener noreferrer">
        <img src="path-to-project1-image.jpg" alt="Project 1" />
      </a>
      <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
    </div>
    {/* Repeat for other projects */}
  </section>
);

export default Portfolio;
