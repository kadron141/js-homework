

const deleteAllButton = document.getElementById('clear-all-button'); 
const addTodoButton = document.getElementById('new-todo-button'); 
const newTodoInput = document.getElementById('todo-input'); 
const todosList = document.getElementById('todos-list'); 


const toDos = [
    {
        task: 'Do homework',
        date: '2022-02-17',
    },
    {
        task:'Go to the grocery store',
        date: '2022-02-17',
    },
    {
        task:'Walk the dog at 9pm',
        date: '2022-02-18',
    },
    {
        task:'Buy a b-day present',
        date: '2022-02-18',
    },
];

const getTodo = (todo) => {
    const todoWrapper = document.createElement('div');
    todoWrapper.className = 'todo-wrapper'
    const doneTodo = document.createElement('button');
    doneTodo.id = 'done-todo-button';
    const todoTask = document.createElement('p');
    todoTask.className = 'task';
    const todoDate = document.createElement('p');
    todoDate.className = 'date';
    const deleteTodo = document.createElement('button');
    deleteTodo.id = 'delete-todo-button';

    todoWrapper.append(doneTodo);
    todoWrapper.append(todoTask);
    todoWrapper.append(todoDate);
    todoWrapper.append(deleteTodo);

    todoTask.append(document.createTextNode(todo.task));
    todoDate.append(document.createTextNode(todo.date));
    doneTodo.append(document.createTextNode('Done'));
    deleteTodo.append(document.createTextNode('x'));

    return todoWrapper;
}

toDos.forEach (todo => {
    const todoWrapper = getTodo(todo);
    todosList.append(todoWrapper);
})

addTodoButton.onclick = () => {
    if (newTodoInput.value.length) {
        const newTodo = getTodo ({task: newTodoInput.value, date: (new Date()).toISOString().substring(0, 10)});
        newTodo.className += ' animate__animated animate__backInLeft';
        todosList.append(newTodo);
    }
}    

deleteAllButton.onclick = () => {
    todosList.innerHTML = '';
}

todosList.addEventListener ('click', event => {
    const todo = event.target.parentNode;
    if (event.target.id === 'delete-todo-button') {
        todo.className += ' animate__animated animate__backOutRight'; 
        todo.addEventListener('animationend', event => {
            todo.parentNode.removeChild(todo);
        });
    } else if (event.target.id === 'done-todo-button') {
        todo.className += ' done';
    }
});
