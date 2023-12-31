import './style.css';
import TaskAdder from './todoAdder';
import { addTaskBtn } from './taskBtnAdder';
import { exitBtn } from './hideForm';
import addAChild from './taskToUI';

const form = document.querySelector('form');


function submitValue(){
    let title = document.querySelector('#title')
    let task = document.querySelector('#task')
    let priority = document.querySelector('#setPriority')
    let date = document.querySelector('#date')
    const projectTab = document.querySelector('#projectTab')
    const urgentTab = document.querySelector('#urgentTab')
    const priorityTab = document.querySelector('#priorityTab')
    const optionalTab = document.querySelector('#optionalTab')

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
        
        const taskTextElement = tasksAdded.taskPriority();
        if(taskTextElement.textContent === 'Urgent'){
            const titleElement = tasksAdded.addTitle();
            addAChild(urgentTab,titleElement);
            
        }else if(taskTextElement.textContent === 'Optional'){
            const titleElement = tasksAdded.addTitle();
            addAChild(optionalTab,titleElement)
        }else if(taskTextElement.textContent === 'Priority'){
            const titleElement = tasksAdded.addTitle();
            addAChild(priorityTab,titleElement)
        } else if(taskTextElement.textContent === 'Project'){
            const titleElement = tasksAdded.addTitle();
            addAChild(projectTab,titleElement)
        }
        tasksAdded.dateInfo();
        tasksAdded.appendToParent();
        exitBtn();
        form.reset();
    },
    )
}
submitValue();

const right = document.querySelector('.right');
right.addEventListener('click', (event) => {
  if (event.target.id === 'editBtn') {
    editFunction(event.target);
  }
});


function editFunction(editBtn) {
  const addTaskElement = editBtn.closest('.addTask');
  const changeTitleContent = addTaskElement.querySelector('.title');

  const editForm = document.createElement('div');
  editForm.classList.add('editFormDiv');
  editForm.id = 'editFormDiv';

  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Title:';

  const newTitle = document.createElement('input');
  newTitle.type = 'text';
  newTitle.value = changeTitleContent.innerText;

  const taskLabel = document.createElement('label');
  taskLabel.textContent = 'Task:';

  const newTaskContent = addTaskElement.querySelector('.task-body label');
  const newTask = document.createElement('input');
  newTask.type = 'text';
  newTask.value = newTaskContent.innerText;

  const confirmButton = document.createElement('button');
  confirmButton.textContent = 'Confirm';

  confirmButton.addEventListener('click', () => {
    changeTitleContent.textContent = newTitle.value;
    newTaskContent.textContent = newTask.value;
    addTaskElement.removeChild(editForm);
  });

  // Add elements to the editForm
  editForm.appendChild(titleLabel);
  editForm.appendChild(newTitle);
  editForm.appendChild(taskLabel);
  editForm.appendChild(newTask);
  editForm.appendChild(confirmButton);

  addAChild(addTaskElement, editForm);
}

  
  




  







const showForm = document.querySelector('.addBtn');
showForm.addEventListener('click',addTaskBtn);


const hideForm = document.querySelector('.exit');
hideForm.addEventListener('click', exitBtn)