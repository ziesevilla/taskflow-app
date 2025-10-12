import React from 'react';

const TaskListView = ({ tasks, deleteTask }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'Low': return 'priority-low';
      case 'Medium': return 'priority-medium';
      case 'High': return 'priority-high';
      default: return 'priority-default';
    }
  };

const getPriorityEmoji = (priority) => {
  switch (priority) {
    case 'Low': return '🌊';
    case 'Medium': return '🌊🌊';
    case 'High': return '🌊🌊🌊';
    default: return '';
  }
};


  return (
    <div className="container mt-4 ocean-list fade-in">
      <h2 className="ocean-header">
        <span className="header-text">Task List</span>
      </h2>
      {tasks.length === 0 ? (
        <p className="ocean-tagline">No tasks added yet. Dive in and create your flow!</p>
      ) : (
        <div className="row d-flex align-items-stretch">
          {tasks.map(task => {
            const priorityClass = getPriorityClass(task.priority);
            return (
              <div className="col-md-4 mb-3" key={task.id}>
                <div className={`card ocean-card fade-in h-100 ${priorityClass}`}> {/* 👈 Dynamic priority class for border/background */}
                  <div className="card-body d-flex flex-column">
                    <div className="flex-grow-1">
                      <div className="priority-icon" aria-label={`Priority: ${task.priority}`}>
  {getPriorityEmoji(task.priority)}
</div>
<h5 className="card-title mb-2">{task.title}</h5>

                      <p className="card-text" style={{ marginBottom: '1.5rem' }}>
  {task.description}
</p>

                    </div>
                    <div className="mt-auto">
                      <button
                        className="btn ocean-delete-btn w-100"
                        onClick={() => deleteTask(task.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TaskListView;