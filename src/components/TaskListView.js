import React from 'react';

const TaskListView = ({ tasks, deleteTask }) => {
  return (
    <div className="container mt-4">
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        <div className="row">
          {tasks.map(task => (
            <div className="col-md-4 mb-3" key={task.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{task.title}</h5>
                  <p className="card-text">{task.description}</p>
                  <p className="card-text"><strong>Priority:</strong> {task.priority}</p>
                  <button
                    className="btn btn-danger"
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
