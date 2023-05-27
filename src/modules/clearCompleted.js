import { TasksClass } from './tasksClass.js';

// clear all completed
const clearComplete = () => {
  const clearCompletedBtn = document.querySelector('#clear-complete');
  const taskBoxEls = document.querySelectorAll('.task-select-input');
  const taskStatus = new TasksClass();
  clearCompletedBtn.addEventListener('click', () => {
    taskBoxEls.forEach((theEl, theElIndex) => {
      if (theEl.checked === true) {
        taskStatus.clearCompletedTask(theElIndex);
        (theEl.parentElement.parentElement.parentElement).remove();
      }
    });
  });
};

export { clearComplete as default };