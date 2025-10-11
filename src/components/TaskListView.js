import React from 'react';

const TaskListView = ({ tasks, deleteTask }) => {
  const getPriorityBadgeClass = (priority) => {
    switch (priority) {
      case 'Low': return 'badge ocean-priority-badge low'; // Custom teal/green with var
      case 'Medium': return 'badge ocean-priority-badge medium'; // Custom blue
      case 'High': return 'badge ocean-priority-badge high'; // Custom red
      default: return 'badge ocean-priority-badge default'; // Neutral for empty/unknown
    }
  };

  const getPriorityEmoji = (priority) => {
    switch (priority) {
      case 'Low': return '🌿';
      case 'Medium': return '💧';
      case 'High': return '🔥';
      default: return '';
    }
  };

  return (
    <div className="container mt-4 ocean-list fade-in"> {/* Added fade-in to whole list */}
      <h2 className="ocean-header">
        <span className="header-text">Task List</span>
      </h2>
      {tasks.length === 0 ? (
        <p className="ocean-tagline">No tasks added yet. Dive in and create your flow!</p>
      ) : (
        <div className="row">
          {tasks.map(task => (
            <div className="col-md-4 mb-3" key={task.id}>
              <div className="card ocean-card fade-in">
                <div className="card-body">
                  <h5 className="card-title">{task.title}</h5>
                  <p className="card-text">{task.description}</p>
                  <p className="card-text">
                    <strong>Priority:</strong> 
                    <span className={getPriorityBadgeClass(task.priority)}>
                      {task.priority} {getPriorityEmoji(task.priority)}
                    </span>
                  </p>
                  <button
                    className="btn ocean-delete-btn"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskListView;