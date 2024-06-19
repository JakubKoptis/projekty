import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectForm.css';

function ProjectForm({ addProject }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      name,
      description,
    };

    addProject(newProject);

    navigate('/projects');
  };

  return (
    <div className="project-form-container">
      <h2>Vytvořit projekt</h2>
      <form onSubmit={handleSubmit} className="project-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Název projektu"
          required
          className="input-field"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Popis projektu"
          className="input-field"
        ></textarea>
        <button type="submit" className="button">Vytvořit</button>
      </form>
    </div>
  );
}

export default ProjectForm;
