import React from 'react';
import '../assets/Portfolio.css';

const Portfolio = () => (
  <section className="portfolio">
    <h2>Portfolio</h2>
    <div className="projects">
      <div className="project">
        <h3>Catzzeria!</h3>
        <a href="https://alfwall.github.io/catzzeria/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/images/catzzeria.png" alt="Catzzeria Game" />
        </a>
        <a href="https://github.com/alfwall/catzzeria" target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
      </div>
      <div className="project">
        <h3>Reading Roundtable</h3>
        <a href="https://reading-roundtable-a1d1097f86e5.herokuapp.com/login" target="_blank" rel="noopener noreferrer">
          <img src="../assets/images/books.png" alt="Reading Roundtable" />
        </a>
        <a href="https://github.com/AdjoaHackman/reading-roundtable" target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
      </div>
      <div className="project">
        <h3>E-Coffee</h3>
        <a href="https://e-coffee-7d6cb3a5dc4c.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/images/e-coffee.png" alt="E-Coffee" />
        </a>
        <a href="https://github.com/lelisiario/E-Coffee" target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
      </div>
    </div>
  </section>
);

export default Portfolio;
