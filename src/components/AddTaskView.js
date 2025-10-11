import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTaskView = ({ addTask }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(''); // Empty default

  // Dynamic class for priority border color (handles empty state)
  useEffect(() => {
    const selectElement = document.getElementById('priority');
    if (selectElement) {
      selectElement.className = `form-select ocean-select priority-${priority.toLowerCase().replace(' ', '-') || 'empty'}`;
    }
  }, [priority]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: Add validation for empty priority
    // if (!priority) {
    //   alert('Please select a priority.');
    //   return;
    // }
    const newTask = { id: Date.now(), title, description, priority: priority || 'Low' }; // Default to 'Low' if empty on save
    addTask(newTask);
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <div className="ocean-form fade-in">
        <h2 className="ocean-header">
          <span className="header-text">Add New Task</span>
        </h2>
        <form onSubmit={handleSubmit}>
          {/* 2-Column Layout for Title + Priority */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="floating-input">
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder=" "
                />
                <label htmlFor="title" className="floating-label">Task Title</label>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="floating-input">
                <select
  id="priority"
  className="form-select ocean-select"
  value={priority}
  onChange={(e) => setPriority(e.target.value)}
  required
>
  <option value="" disabled hidden></option> {/* 👈 Placeholder option */}
  <option value="Low">Low 🌿</option>
  <option value="Medium">Medium 💧</option>
  <option value="High">High 🔥</option>
</select>
<label htmlFor="priority" className="floating-label">Priority</label>

              </div>
            </div>
          </div>

          {/* Full-Width Description */}
          <div className="col-12 mb-3">
            <div className="floating-input">
              <textarea
                id="description"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="3"
                placeholder=" "
              />
              <label htmlFor="description" className="floating-label">Description</label>
            </div>
          </div>

          <button type="submit" className="btn ocean-btn">
            <span className="btn-icon">+</span> Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskView;