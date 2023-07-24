import editBtnSrc from './edit_FILL1_wght400_GRAD0_opsz48.svg';
const right = document.querySelector('.right');


class TaskAdder {
    constructor(title,task,priority,date){
        this.title = title;
        this.task = task;
        this.priority = priority;
        this.date = date;

        this.addTask = document.createElement('div')
        this.addTask.classList.add('addTask')
    }
    addTitle(){
        const title = document.createElement('div');
        title.textContent = this.title;
        title.id = 'title'
        this.addTask.appendChild(title);
    }
    taskBody(){
        const taskBodyElement = document.createElement('div');
        taskBodyElement.classList.add('task-body')

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkbox'

        const taskInfo = document.createElement('label');
        taskInfo.textContent = this.task

        this.addTask.appendChild(taskBodyElement);
        taskBodyElement.appendChild(checkbox)
        taskBodyElement.appendChild(taskInfo)
    }
    taskPriority(){
        const taskPriorityElement = document.createElement('div');
        taskPriorityElement.classList.add('task-priority');
        taskPriorityElement.textContent = this.priority

        this.addTask.appendChild(taskPriorityElement);
    }

    dateInfo(){
        const date = document.createElement('div');
        date.classList.add('date');
        date.textContent = this.date;
        const editBtn = document.createElement('div');
        editBtn.id = 'editBtn'

        this.addTask.appendChild(date)
        this.addTask.appendChild(editBtn)
    }
    appendToParent(){
        right.appendChild(this.addTask)
    }
}

export default TaskAdder;