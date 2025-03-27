import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, updateTaskPriority } from "../redux/actions/taskActions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handlePriorityChange = (taskId, newPriority) => {
    dispatch(updateTaskPriority(taskId, newPriority));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "priority-high";
      case "Medium":
        return "priority-medium";
      case "Low":
        return "priority-low";
      default:
        return "";
    }
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks yet. Add one above!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`task-item ${getPriorityColor(task.priority)}`}
            >
              <div className="task-content">
                <span className="task-text">{task.text}</span>
                {task.location && (
                  <span className="task-location">📍 {task.location}</span>
                )}
              </div>

              <div className="task-actions">
                <select
                  value={task.priority}
                  onChange={(e) =>
                    handlePriorityChange(task.id, e.target.value)
                  }
                  className="priority-select"
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>

                <button
                  onClick={() => handleDelete(task.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
