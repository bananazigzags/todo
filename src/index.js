import css from "./style.css";
import makeTask from "./task-maker.js";

const today = document.getElementById("today");
today.addEventListener('click', () => {
    clearPage();
    alert("today");
});

const week = document.getElementById("week");
week.addEventListener('click', () => alert('week'));

const taskButton = document.getElementById("task-button");
taskButton.addEventListener('click', () => makeTask("default"));

const tasks = document.getElementsByClassName('task-content-checkbox');

const checkedEventAdder = (element) => {
    element.addEventListener('click', () => {
        if (element.checked) {
            element.parentNode.classList.add("lighter");
        } else if (!element.checked) {
            element.parentNode.classList.remove("lighter");
        }
    });
}

Array.from(tasks).forEach(element => checkedEventAdder(element));

const newProjectButton = document.getElementById("new-project");
newProjectButton.addEventListener(('click'), () => alert("new project"));

function clearPage() {
    const page = document.getElementById('main-page');
    page.textContent = "";
}

export default checkedEventAdder