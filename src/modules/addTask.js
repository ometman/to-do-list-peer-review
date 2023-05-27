import { TasksClass } from './tasksClass.js';
import displayTasks from './showTasks.js';
import retainCheck from './taskStatus.js';

// add new task by click event
const addNewTask = () => {
  const newTaskForm = document.querySelector('#new-task-form');
  const taskItem = document.querySelector('#task-input');
  const newTask = document.querySelector('#task-input-return');
  newTask.addEventListener('click', (e) => {
    e.preventDefault();

    if (taskItem.value !== '') {
      const taskText = taskItem.value;
      const todoTasks = new TasksClass();
      todoTasks.addATask(taskText);
      displayTasks();
      retainCheck();
      newTaskForm.reset();
    }
  });
  taskItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      newTask.click();
    }
  });
};

export { addNewTask as default };
