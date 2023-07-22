import './style.css';
import TaskAdder from './todoAdder';

const first = new TaskAdder('Hello','task','PPP','11/22/22');
first.addTitle();
first.taskBody();
first.taskPriority();
first.dateInfo();
first.appendToParent();
