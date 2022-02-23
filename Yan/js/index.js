import { TODOS, TODOS_KEY, UID_KEY } from './constants.js';
import { addTodo, getTodo, onTodoButtonClick, onInputTodo, onDeleteAll } from './utils.js';

const storedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));
const initialTodos = storedTodos ? storedTodos : TODOS;
sessionStorage.setItem(UID_KEY, (storedTodos && storedTodos.length) ? storedTodos[0].id + 1 : TODOS.length);

const bodyTag = document.getElementById('root');
const wrapper = document.createElement('div');
const header = document.createElement('header');
const buttonDelete = document.createElement('button');
const buttonAdd = document.createElement('button');
const inputTodo = document.createElement('input');
const todoContainer = document.createElement('div');

todoContainer.id = 'todo-container';
inputTodo.placeholder = 'Enter todo...';
inputTodo.id = 'main-input';
wrapper.className = 'main-wrapper';
header.className = 'header-wrapper';

buttonDelete.append(document.createTextNode('Delete All'));
buttonAdd.append(document.createTextNode('Add'));
header.append(buttonDelete);
header.append(inputTodo);
header.append(buttonAdd);
wrapper.append(header);
wrapper.append(todoContainer);
bodyTag.append(wrapper);

todoContainer.addEventListener('click', (e) => onTodoButtonClick(e));
inputTodo.addEventListener('keyup', (e) => onInputTodo(e));
buttonAdd.addEventListener('click', () => addTodo());
buttonDelete.addEventListener('click', () => onDeleteAll());

/*Print todo list */
initialTodos.forEach(todo => {
    const todoWrapper = getTodo(todo);
    todoContainer.append(todoWrapper);
})

const arr = [1, 3, 2];

const [a, b] = arr;

console.log(a, b);