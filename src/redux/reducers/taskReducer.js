import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK_PRIORITY,
  TOGGLE_TASK_COMPLETION,
  SET_TASKS,
} from "../actions/taskActions";
const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

const taskReducer = (state = initialState, action) => {
  let newTasks;

  switch (action.type) {
    case ADD_TASK:
      newTasks = [...state.tasks, action.payload];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return { ...state, tasks: newTasks };

    case DELETE_TASK:
      newTasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return { ...state, tasks: newTasks };

    case UPDATE_TASK_PRIORITY:
      newTasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, priority: action.payload.priority }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return { ...state, tasks: newTasks };

    case TOGGLE_TASK_COMPLETION:
      newTasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return { ...state, tasks: newTasks };

    case SET_TASKS:
      localStorage.setItem("tasks", JSON.stringify(action.payload));
      return { ...state, tasks: action.payload };

    default:
      return state;
  }
};

export default taskReducer;
