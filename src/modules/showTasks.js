import { TasksClass } from './tasksClass.js';

const displayTasks = () => {
  const showTasks = new TasksClass();
  if (showTasks.getLocalStorage().length >= 0) {
    showTasks.displayAllTasks();
  }
};

export { displayTasks as default };
