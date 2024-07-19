import React from 'react';

const Projects = ({ projects }) => (
  <div className="projects">
    {projects.map((project, index) => (
      <div className="project" key={index}>
        <h3>{project.title}</h3>
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          <img src={project.imageUrl} alt={project.title} />
        </a>
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
      </div>
    ))}
  </div>
);

export default Projects;
