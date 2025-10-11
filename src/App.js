import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // For flow arrow icon in logo
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
        {/* Enhanced Bootstrap Navbar with Ocean Theme */}
        <nav className="navbar navbar-expand-lg ocean-navbar">
          <div className="container">
            <Link className="navbar-brand" to="/">
              TaskFlow <FaArrowRight className="flow-icon" />
            </Link>
            <div className="navbar-nav">
              <Link className="nav-link ocean-link" to="/">
                Home
              </Link>
              <Link className="nav-link ocean-link" to="/add">
                Add Task
              </Link>
            </div>
          </div>
        </nav>
        
        <main className="main-content ocean-bg">
          {/* New: Thematic Tagline */}
          <p className="ocean-tagline">Navigate Your Tasks with Seamless Flow Like the Ocean</p>
          
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