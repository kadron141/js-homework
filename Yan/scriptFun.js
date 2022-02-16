const TODOS = [
    {
        id: 0,
        text: 'Clean up',
        date: '2022-02-14',
    },
    {
        id: 1,
        text: 'Read the book',
        date: '2022-02-14',
    },
    {
        id: 2,
        text: 'Buy food',
        date: '2022-02-14',
        status: 'closed',
    },
    {
        id: 3,
        text: 'Go for a walk',
        date: '2022-02-14',
    },
    {
        id: 4,
        text: 'Sleep',
        date: '2022-02-14',
    },
]

let uniqueId = TODOS.length;


const bodyTag = document.getElementById('root');

const wrapper = document.createElement('div');
const header = document.createElement('header');
const buttonDelete = document.createElement('button');
const buttonAdd = document.createElement('button');
const inputTodo = document.createElement('input');
const todoContainer = document.createElement('div');
inputTodo.placeholder = 'Enter todo...';
inputTodo.id = 'main-input';
buttonDelete.append(document.createTextNode('Delete All'));
buttonAdd.append(document.createTextNode('Add'));


buttonAdd.onclick = (_) => {
    const input = document.getElementById('main-input');
    if (input.value.length) {
        const todoWrapper = getTodo({ id: uniqueId, text: input.value, date: (new Date()).toISOString().substring(0, 10) });
        uniqueId++;
        todoContainer.prepend(todoWrapper);
    }
}

buttonDelete.onclick = (_) => {
    todoContainer.innerHTML = '';
}

wrapper.className = 'main-wrapper';
header.className = 'header-wrapper';

header.append(buttonDelete);
header.append(inputTodo);
header.append(buttonAdd);
wrapper.append(header);
wrapper.append(todoContainer);

const getTodo = (todo) => {
    const todoWrapper = document.createElement('div');
    todoWrapper.id = `todo_${todo.id}`;
    const todoBody = document.createElement('div');
    const todoDate = document.createElement('div');
    const deleteTodo = document.createElement('button');
    deleteTodo.append(document.createTextNode('X'));
    deleteTodo.id = `delete-todo_${todo.id}`;

    const completeTodo = document.createElement('button');
    completeTodo.append(document.createTextNode('Done!'));
    completeTodo.id = `complete-todo_${todo.id}`;

    todoBody.append(document.createTextNode(todo.text));
    todoDate.append(document.createTextNode(todo.date));

    todoWrapper.className = 'todo-wrapper';
    todoBody.className = 'todo-body';
    todoDate.className = 'todo-date';

    todoWrapper.append(completeTodo);
    todoWrapper.append(todoBody);
    todoWrapper.append(todoDate);
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

