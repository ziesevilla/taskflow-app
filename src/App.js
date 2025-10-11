import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div>
      <h1>Task Flow React App</h1>
    </div>
  );
}

function AddTask() {
  return (
    <div>
      <h1>Add Task</h1>
    </div>
  );
}
 
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/addTask" className="nav-link">Add Task</Link>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AddTask />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
