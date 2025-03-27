export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK_PRIORITY = "UPDATE_TASK_PRIORITY";
export const TOGGLE_TASK_COMPLETION = "TOGGLE_TASK_COMPLETION";
export const SET_TASKS = "SET_TASKS";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const updateTaskPriority = (taskId, priority) => ({
  type: UPDATE_TASK_PRIORITY,
  payload: { id: taskId, priority },
});

export const toggleTaskCompletion = (taskId) => ({
  type: TOGGLE_TASK_COMPLETION,
  payload: taskId,
});

export const setTasks = (tasks) => ({
  type: SET_TASKS,
  payload: tasks,
});
