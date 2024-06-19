import React, { useState } from 'react';
import TaskForm from './TaskForm';
import { useParams } from 'react-router-dom';
import './TaskBoard.css'; 

function TaskBoard() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="task-board-container">
      <h2>Projekt {id}</h2>
      <TaskForm addTask={addTask} />
      <div className="task-columns">
        <div className="task-column">
          <h3>Úkoly</h3>
          {tasks
            .filter((task) => task.status === 'TO_DO')
            .map((task) => (
              <div key={task.id} className="task">{task.name}</div>
            ))}
        </div>
        <div className="task-column">
          <h3>V procesu</h3>
          {tasks
            .filter((task) => task.status === 'IN_PROGRESS')
            .map((task) => (
              <div key={task.id} className="task">{task.name}</div>
            ))}
        </div>
        <div className="task-column">
          <h3>Hotovo</h3>
          {tasks
            .filter((task) => task.status === 'DONE')
            .map((task) => (
              <div key={task.id} className="task">{task.name}</div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TaskBoard;
