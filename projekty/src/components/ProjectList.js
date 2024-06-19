import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectList.css';

function ProjectList({ projects, addProject }) {

  return (
    <div className="project-list-container">
      <h2>Seznam projektů</h2>
      <Link to="/create-project" className="create-project-link">Vytvořit nový projekt</Link>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/project/${project.id}`} className="project-link">{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
