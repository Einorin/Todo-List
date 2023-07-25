import addAChild from "./taskToUI";
const right = document.querySelector('.right');

class TaskAdder {
    constructor(title, task, priority, date) {
        this.title = title;
        this.task = task;
        this.priority = priority;
        this.date = date;

        this.addTask = document.createElement('div');
        this.addTask.classList.add('addTask');
    }

    addTitle() {
        const title = document.createElement('div');
        title.textContent = this.title;
        title.id = 'title';
        return title;
    }

    taskBody() {
        const taskBodyElement = document.createElement('div');
        taskBodyElement.classList.add('task-body');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkbox';

        const taskInfo = document.createElement('label');
        taskInfo.textContent = this.task;

        addAChild(taskBodyElement, checkbox);
        addAChild(taskBodyElement, taskInfo);
        return taskBodyElement;
    }

    taskPriority() {
        const taskPriorityElement = document.createElement('div');
        taskPriorityElement.classList.add('task-priority');
        taskPriorityElement.textContent = this.priority;
        return taskPriorityElement;
    }

    dateInfo() {
        const date = document.createElement('div');
        date.classList.add('date');
        date.textContent = this.date;

        const editBtn = document.createElement('div');
        editBtn.id = 'editBtn';

        return { date, editBtn };
    }

    appendToParent() {
        const titleElement = this.addTitle();
        const taskBodyElement = this.taskBody();
        const { date, editBtn } = this.dateInfo();
        const taskPriorityElement = this.taskPriority();

        addAChild(this.addTask, titleElement);
        addAChild(this.addTask, taskBodyElement);
        addAChild(this.addTask, taskPriorityElement);
        addAChild(this.addTask, date);
        addAChild(this.addTask, editBtn);

        addAChild(right, this.addTask);    
    }
}

export default TaskAdder;
