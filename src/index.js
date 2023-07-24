import './style.css';
import TaskAdder from './todoAdder';
import { addTaskBtn } from './taskBtnAdder';
import { exitBtn } from './hideForm';

const form = document.querySelector('form');

function submitValue(){
    let title = document.querySelector('#title')
    let task = document.querySelector('#task')
    let priority = document.querySelector('#setPriority')
    let date = document.querySelector('#date')

    form.addEventListener('submit', (event)=>{
        event.preventDefault();

        const titleValue = title.value;
        const taskValue = task.value;
        const priorityValue = priority.value;
        const dateValue = date.value;

        const tasksAdded = new TaskAdder(titleValue,taskValue,priorityValue,dateValue);
        tasksAdded.addTitle();
        tasksAdded.taskBody();
        tasksAdded.taskPriority();
        tasksAdded.dateInfo();
        tasksAdded.appendToParent();
        exitBtn();
    })
}
submitValue();






const showForm = document.querySelector('.addBtn');
showForm.addEventListener('click',addTaskBtn);


const hideForm = document.querySelector('.exit');
hideForm.addEventListener('click', exitBtn);