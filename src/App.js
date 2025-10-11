import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskListView from './components/TaskListView';
import AddTaskView from './components/AddTaskView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  // --- Task 3: State Management Logic ---
  const [tasks, setTasks] = useState([]);

  // Add a task (uses taskDetails for consistency)
  const addTask = (taskDetails) => {
    setTasks([...tasks, taskDetails]);
  };

  // Delete a task by id
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <Router>
      <div className="App">
        {/* Enhanced Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link className="navbar-brand" to="/">
              TaskFlow
            </Link>
            <div className="navbar-nav">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/add">
                Add Task
              </Link>
            </div>
          </div>
        </nav>
        
        <main className="main-content">
          <Routes>
            {/* Pass tasks and deleteTask props to TaskListView */}
            <Route
              path="/"
              element={
                <TaskListView
                  tasks={tasks}
                  deleteTask={deleteTask}
                />
              }
            />
            {/* Pass addTask prop to AddTaskView */}
            <Route
              path="/add"
              element={
                <AddTaskView
                  addTask={addTask}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
