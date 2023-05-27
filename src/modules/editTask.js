import { TasksClass } from './tasksClass.js';

// edit new task by click event
export const editTask = () => {
  const editElement = document.querySelectorAll('.task-text');
  const editTask = new TasksClass();
  editElement.forEach((el, elIndex) => {
    const editContent = () => {
      el.setAttribute('contenteditable', 'true');
      el.style.backgroundColor = '#ffffcb';
    };
    const taskUpdate1 = () => {
      const taskItemInput = el.innerText;
      editTask.taskEditor(elIndex, taskItemInput);
    };
    const taskUpdate2 = () => el.setAttribute('contenteditable', 'true');
    el.addEventListener('dblclick', editContent, false);
    el.addEventListener('input', taskUpdate1, false);
    el.addEventListener('keydown', taskUpdate2, false);
  });
};

export { editTask as default };