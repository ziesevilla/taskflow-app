import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskListView from './components/TaskListView';
import AddTaskView from './components/AddTaskView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
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
            <Route path="/" element={<TaskListView />} />
            <Route path="/add" element={<AddTaskView />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;