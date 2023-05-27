import displayTasks from './showTasks.js';
import { TasksClass } from './tasksClass.js';

const removeTask = (btnIndex) => {
  const remTask = new TasksClass();
  remTask.taskRemover(btnIndex);
  displayTasks();
};

export default removeTask;