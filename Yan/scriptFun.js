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
        text: 'Clean up',
        date: '2022-02-14',
        status: 'closed',
    },
    {
        id: 3,
        text: 'Read the book',
        date: '2022-02-14',
    },
    {
        id: 4,
        text: 'Clean up',
        date: '2022-02-14',
    },
    {
        id: 5,
        text: 'Read the book',
        date: '2022-02-14',
    },
    {
        id: 6,
        text: 'Clean up',
        date: '2022-02-14',
    },
    {
        id: 7,
        text: 'Read the book',
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
buttonAdd.append(document.createTextNode('Add')); //function() {inputTodo.value... TODOS.push({})}


wrapper.className = 'main-wrapper';
header.className = 'header-wrapper';

header.append(buttonDelete);
header.append(inputTodo);
header.append(buttonAdd);
wrapper.append(header);

TODOS.forEach(todo => {
    const todoWrapper = document.createElement('div');
    const todoBody = document.createElement('div');
    const todoDate = document.createElement('div');
    const closeTodo = document.createElement('button');
    closeTodo.append(document.createTextNode('X'));
    closeTodo.onclick // function(todo.id) {...}

    todoBody.append(document.createTextNode(todo.text));
    todoDate.append(document.createTextNode(todo.date));

    todoWrapper.className = 'todo-wrapper';
    todoBody.className = 'todo-body';
    todoDate.className = 'todo-date';

    todoWrapper.append(todoBody);
    todoWrapper.append(todoDate);
    todoWrapper.append(closeTodo);
    wrapper.append(todoWrapper);
})

bodyTag.append(wrapper);

