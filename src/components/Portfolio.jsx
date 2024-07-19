import React from 'react';
import '../assets/Portfolio.css';

const Portfolio = () => (
  <section className="portfolio">
    <h2>Portfolio</h2>
    <div className="projects">
      <div className="project">
        <h3>Project 1</h3>
        <a href="https://project1.example.com" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-project1-image.jpg" alt="Project 1" />
        </a>
        <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <a href="https://project2.example.com" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-project2-image.jpg" alt="Project 2" />
        </a>
        <a href="https://github.com/your-username/project2" target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
      </div>
    </div>
  </section>
);

export default Portfolio;
