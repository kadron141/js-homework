"use strict"

const TODOS = [
    {
        id: 0,
        text: 'Go to swimming pool',
        date: 'February, 12',
    },
    {
        id: 1,
        text: 'Call mom',
        date: 'February, 25',
    },
    {
        id: 2,
        text: 'Go shopping',
        date: 'February, 24',
    },
    {
        id: 3,
        text: 'Go for a walk',
        date: 'February, 24',
    },
    {
        id: 4,
        text: 'Plan the family trip to Norway',
        date: 'February, 25',
    },
]

let uniqueId = TODOS.length;

const bodyTag = document.getElementById('root');
const wrapper = document.getElementById('main-wrapper');
const header = document.getElementById('header-wrapper');
const buttonAdd = document.getElementById('buttonAdd');
const inputTodo = document.getElementById('todo-text');
const todoContainer = document.getElementById('input-wrapper');
inputTodo.id = 'main-input';

buttonAdd.onclick = (_) => {
    const input = document.getElementById('main-input');
    if (input.value.length) {
        const todoWrapper = getTodo({ id: uniqueId, text: input.value, date: (new Date()).toISOString().substring(0, 10) });
        uniqueId++;
        todoContainer.prepend(todoWrapper);
    }
}

wrapper.className = 'main-wrapper';
header.className = 'header-wrapper';

header.append(inputTodo);
header.append(buttonAdd);
wrapper.append(header);
wrapper.append(todoContainer);


const getTodo = (todo) => {
    const todoWrapper = document.createElement('div');
    todoWrapper.className = 'todo-wrapper';

    const todoBody = document.createElement('div');
    todoBody.className = 'todo-body';
    todoBody.append(document.createTextNode(todo.text));
    todoWrapper.append(todoBody);

    const todoDate = document.createElement('div');
    todoDate.className = 'todo-date';
    todoDate.append(document.createTextNode(todo.date));
    todoWrapper.append(todoDate);

    const deleteTodo = document.createElement('button');
    deleteTodo.append(document.createTextNode('X'));
    deleteTodo.id = `delete-todo_${todo.id}`;

    const completeTodo = document.createElement('button');
    completeTodo.append(document.createTextNode('Done!'));
    completeTodo.id = `complete-todo_${todo.id}`;

    todoWrapper.append(completeTodo);
    todoWrapper.append(deleteTodo);

    return todoWrapper;
}

TODOS.forEach(todo => {
    const todoWrapper = getTodo(todo);
    todoContainer.append(todoWrapper);
})


todoContainer.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        const id = e.target.id.split('-')[1];
        const todo = document.getElementById(id);

        if (e.target.id.split('-')[0] === 'delete') {
            todo.parentNode.removeChild(todo);
        } else {
            todo.className += ' done';
            const completeButton = document.getElementById(e.target.id);
            completeButton.className += 'disabled';
        }
    }
})

bodyTag.append(wrapper);







