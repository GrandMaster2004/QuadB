import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";

const TaskInput = () => {
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      priority,
      completed: false,
    };

    dispatch(addTask(newTask));
    setTaskText("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter a new task"
          className="task-input"
          required
        />
      </div>

      <div className="form-group">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="priority-select"
        >
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>
      </div>

      <button type="submit" className="add-task-btn">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
