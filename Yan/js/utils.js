import { TODOS, TODOS_KEY, UID_KEY } from './constants.js';

export const addTodo = () => {
    const input = document.getElementById('main-input');

    if (input.value.length) {
        const newTodo = {
            id: Number.parseInt(sessionStorage.getItem(UID_KEY)),
            text: input.value,
            date: (new Date()).toISOString().substring(0, 10),
            isComplete: false,
        }
        const todoWrapper = getTodo(newTodo);
        const todoContainer = document.getElementById('todo-container');

        sessionStorage.setItem(UID_KEY, Number.parseInt(sessionStorage.getItem(UID_KEY)) + 1);
        todoContainer.prepend(todoWrapper);

        const storedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));

        if (Array.isArray(storedTodos)) {
            localStorage.setItem(TODOS_KEY, JSON.stringify([newTodo, ...storedTodos]));
        } else {
            localStorage.setItem(TODOS_KEY, JSON.stringify([newTodo, ...TODOS]));
        }
    }
}

export const getTodo = (todo) => {
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

    todoWrapper.className = todo.isComplete ? 'todo-wrapper done' : 'todo-wrapper';
    todoBody.className = 'todo-body';
    todoDate.className = 'todo-date';
    completeTodo.className = todo.isComplete ? 'disabled' : '';

    todoWrapper.append(completeTodo);
    todoWrapper.append(todoBody);
    todoWrapper.append(todoDate);
    todoWrapper.append(deleteTodo);

    return todoWrapper;
}

export const onTodoButtonClick = (e) => {
    if (e.target.nodeName === 'BUTTON') {
        const id = e.target.id.split('-')[1];
        const todo = document.getElementById(id);
        const storedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));
        const currentTodos = Array.isArray(storedTodos) ? storedTodos : TODOS;
        const objectId = Number.parseInt(id.split('_')[1]);

        if (e.target.id.split('-')[0] === 'delete') {
            const todosToSave = currentTodos.filter(todo => todo.id !== objectId);
            todo.parentNode.removeChild(todo);
            localStorage.setItem(TODOS_KEY, JSON.stringify(todosToSave));
        } else {
            const todosToSave = currentTodos.map(todo => {
                if (todo.id === objectId) {
                    return { ...todo, isComplete: true }
                }

                return todo;
            })
            localStorage.setItem(TODOS_KEY, JSON.stringify(todosToSave));
            todo.className += ' done';
            const completeButton = document.getElementById(e.target.id);
            completeButton.className += 'disabled';
        }
    }
}

export const onInputTodo = (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
}

export const onDeleteAll = () => {
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = '';
    localStorage.setItem(TODOS_KEY, JSON.stringify([]));
}
