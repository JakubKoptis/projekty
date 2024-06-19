import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm'; 
import TaskBoard from './components/TaskBoard';

function App() {
  const [projects, setProjects] = useState([
  ]);


  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create-project" element={<ProjectForm addProject={addProject} />} />
          <Route path="/projects" element={<ProjectList projects={projects} />} />
          <Route path="/project/:id" element={<TaskBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
