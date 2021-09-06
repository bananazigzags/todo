import checkedEventAdder from "./index.js";

const makeTask = (input) => {
    const element = document.createElement('div');
    element.classList.add('task');

    const taskList = document.getElementById('task-list');

    const box = document.createElement('input');
    box.type = "checkbox";
    checkedEventAdder(box);
    box.classList.add("task-content-checkbox");
    element.appendChild(box);

    const span = document.createElement('span');
    span.classList.add("task-item");
    span.textContent = input;

    const deleteIcon = document.createElement('span');
    console.log("icon create");
    deleteIcon.classList.add('fa', 'fa-trash', 'fa-lg');
    span.appendChild(deleteIcon);
    element.appendChild(span);
    taskList.appendChild(element);
}

export default makeTask