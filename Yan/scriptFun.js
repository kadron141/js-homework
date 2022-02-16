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



const bodyTag = document.getElementById('root');

const wrapper = document.createElement('div');
const header = document.createElement('header');
const buttonDelete = document.createElement('button');
const buttonAdd = document.createElement('button');
const inputTodo = document.createElement('input');
inputTodo.placeholder = 'Enter todo...';
buttonDelete.append(document.createTextNode('Delete All'));
buttonAdd.append(document.createTextNode('Add'));

wrapper.className = 'main-wrapper';
header.className = 'header-wrapper';

header.append(buttonDelete);
header.append(inputTodo);
header.append(buttonAdd);
wrapper.append(header);

TODOS.forEach(todo => {
    const todoWrapper = document.createElement('div');
    todoWrapper.id = `todo_${todo.id}`;
    const todoBody = document.createElement('div');
    const todoDate = document.createElement('div');
    const deleteTodo = document.createElement('button');
    deleteTodo.append(document.createTextNode('X'));
    deleteTodo.id = `delete-todo_${todo.id}`;

    todoBody.append(document.createTextNode(todo.text));
    todoDate.append(document.createTextNode(todo.date));

    todoWrapper.className = 'todo-wrapper';
    todoBody.className = 'todo-body';
    todoDate.className = 'todo-date';

    todoWrapper.append(todoBody);
    todoWrapper.append(todoDate);
    todoWrapper.append(deleteTodo);
    wrapper.append(todoWrapper);
})

wrapper.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        const id = event.target.id.split('-')[1];
        const todo = document.getElementById(id);
        todo.parentNode.removeChild(todo);
        console.log(todo);
    }
})

bodyTag.append(wrapper);

