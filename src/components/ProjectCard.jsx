import React from 'react';
import './ProjectCard.css'; // optional: style it!

const ProjectCard = ({ title, description, link, tech }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech Stack:</strong> {tech}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">🔗 View Project</a>
    </div>
  );
};

export default ProjectCard;
