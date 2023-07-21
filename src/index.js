import './style.css'
import printMe from './print';

const test = document.querySelector('.test')
const h1 = document.querySelector('h1');
const btn = document.createElement('button');
btn.innerHTML = 'Click me'
btn.onclick = printMe;
test.appendChild(btn)

