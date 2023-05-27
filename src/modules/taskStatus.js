import { TasksClass } from './tasksClass.js';

//  get task status on checkbox
const retainCheck = () => {
  const taskEls = document.querySelectorAll('.task-select-input');
  const checkStatus = new TasksClass();
  taskEls.forEach((theEl, theElIndex) => {
    if (checkStatus.taskCollection[theElIndex].taskCompletion === true) {
      theEl.checked = true;
    }
  });
};

export { retainCheck as default };