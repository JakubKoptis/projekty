import React, { useState } from 'react';
import './TaskForm.css'; 

function TaskForm({ addTask }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('TO_DO');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ id: Date.now(), name, status });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Název úkolu"
        className="input-field"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="select-field"
      >
        <option value="TO_DO">Udělat</option>
        <option value="IN_PROGRESS">V procesu</option>
        <option value="DONE">Hotovo</option>
      </select>
      <button type="submit" className="button">Přidat úkol</button>
    </form>
  );
}

export default TaskForm;
