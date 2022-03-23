"use strict"

const TODOS = [

    {
        id: 0,
        title: 'Clean up',
        description: 'go to page ',
        user: 'Denis',
        time: '2022-02-14',
        isComplete: false,
    },
    {
        id: 1,
        title: 'read the booc',
        description: ' go to page',
        user: 'Denis',
        time: '2022-02-14',
        isComplete: false,
    },
]
const TODOS_KEY = 'todos';
const TODOS_LIST = 'todos-list';
const storedTodo = JSON.parse(localStorage.getItem(TODOS_KEY));
const storedTodoProgress = JSON.parse(localStorage.getItem(TODOS_LIST));
const initialTodo = storedTodo ? storedTodo : TODOS;

let editId = null;


window.onload = function(){
    window.setInterval(function(){
        let time = new Date();
        const datButton = document.getElementById('dat-button');
        datButton.innerHTML = time.toLocaleTimeString();},1000);
};

const getTodo = (todo) => {
    const todoWrapper = document.createElement('div');
    const todoInfoWrapper = document.createElement('div');
    const userAndDate = document.createElement('div');
    const todoBody = document.createElement('div');
    const todoDate = document.createElement('div');
    const todoUser = document.createElement('div');
    const todoDescription = document.createElement('div');
    const deleteTodo = document.createElement('button');
    deleteTodo.append(document.createTextNode('DELETE'));
    deleteTodo.id = `delete-todo_${todo.id}`;
    const arrowTodo = document.createElement('button');
    arrowTodo.append(document.createTextNode('>'));
    arrowTodo.id = `arrow-todo_${todo.id}`;
    todoWrapper.id = `todo_${todo.id}`;
    

    const completeTodo = document.createElement('button');
    completeTodo.append(document.createTextNode('EDIT'));
    completeTodo.id = `edit-todo_${todo.id}`;

    todoBody.append(document.createTextNode(todo.title));
    todoDate.append(document.createTextNode(todo.time));
    todoDescription.append(document.createTextNode(todo.description));
    todoUser.append(document.createTextNode(todo.user));
    todoInfoWrapper.append(todoDescription);
    todoInfoWrapper.append(arrowTodo);
    userAndDate.append(todoUser);
    userAndDate.append(todoDate);
    
    todoBody.id = `edittodos_${todo.id}`;
    todoWrapper.className = 'todo-mainwrapper';
    todoBody.className = 'todo-body';
    todoDate.className = 'todo-date';
    todoDescription.className = 'todo-description';
    completeTodo.className = 'disabled';
    todoInfoWrapper.className = 'todo-info-wrapper';
    deleteTodo.className = 'delete-todo';
    userAndDate.className = 'user-date';
    arrowTodo.className = 'arrow-todo';

    
    todoWrapper.append(completeTodo);
    todoWrapper.append(deleteTodo);
    todoWrapper.append(todoBody);
    todoWrapper.append(todoInfoWrapper);
    todoWrapper.append(userAndDate);

    return todoWrapper; 
}

initialTodo.forEach(todo => {
    const todoObj = document.getElementById('todo');
    const todoWrapper = getTodo(todo);
    todoObj.append(todoWrapper);
});
const appendUser = (todo) => {
    const todoObj = document.getElementById('todo');
    const todoWrapper = getTodo(todo);
    todoObj.append(todoWrapper);
}



const addNewTodo = (NewData) => {
    const uid = +new Date();
    const addToAdd = {
        id: uid, 
        title: NewData.title, 
        description: NewData.description,
        user: NewData.user,
        time: (new Date()).toISOString().substring(0, 10),
        isComplete: false,
        };

    const storedTodo = JSON.parse(localStorage.getItem(TODOS_KEY));

    if (Array.isArray(storedTodo)) {
        localStorage.setItem(TODOS_KEY, JSON.stringify([...storedTodo, addToAdd]));
    } else {
        localStorage.setItem(TODOS_KEY, JSON.stringify([...TODOS, addToAdd]));
    };
}

    const getUserById = (id) => {
    const storedUsers = JSON.parse(localStorage.getItem(TODOS_KEY));

    return storedUsers.find(u => u.id === id);
}

const hideWindow = () =>{
    const mainForm = document.getElementById('main-form');
    mainForm.className += ' hidden';
    const todoConteiner = document.getElementById('todo-conteiner');
    todoConteiner.className = 'todo-conteiner';
}

const hideEditWindow = () =>{
    const mainForm = document.getElementById('main-form-edit');
    mainForm.className += ' hidden';
    const todoConteiner = document.getElementById('todo-conteiner');
    todoConteiner.className = 'todo-conteiner';
}

const ShowEditWindow = (todoId) => {
    editId = todoId;
    const mainForm = document.getElementById('main-form-edit');
    mainForm.className = 'main-form';
    const todoConteiner = document.getElementById('todo-conteiner');
    todoConteiner.className += ' blurred';
    const inputTitleEdit = document.getElementById('input-title-edit').value;
    const inputDescriptionEdit = document.getElementById('input-description-edit').value;
    const inputUserEdit = document.getElementById('input-user-edit').value;
    const todos = getUserById(todoId);

    inputTitleEdit.value = todos.title;
    inputDescriptionEdit.value = todos.description;
    inputUserEdit.value = todos.user;
    console.log(getUserById(todoId));
}

const getAddTodo = document.getElementById('add-todo');
getAddTodo.addEventListener('click', () => {
    const mainForm = document.getElementById('main-form');
    mainForm.className = 'main-form';
    const todoConteiner = document.getElementById('todo-conteiner');
    todoConteiner.className += ' blurred';
    
})

const buttonConfirm = document.getElementById('button-confirm');
buttonConfirm.addEventListener('click', () => {
    
    const inputTitle = document.getElementById('input-title').value;
    const inputDescription = document.getElementById('input-description').value;
    const inputUser = document.getElementById('input-user').value;

    if(!inputTitle || !inputDescription || !inputUser){
        alert('Fill in all required fields!');
    }else {
        addNewTodo({title: inputTitle, description: inputDescription, user: inputUser});
        hideWindow();
    }
});

const saveTodo = (id, todoData) => {
    const storedTodo = JSON.parse(localStorage.getItem(TODOS_KEY));
    if(Array.isArray(storedTodo)){
        const addToTodos = storedTodo.map(todo => {
            if (todo.id === id) {
                todo.title = todoData.title;
                todo.description = todoData.description;
                todo.user = todoData.user;
            }
    
            return todo;
        });
        localStorage.setItem(TODOS_KEY, JSON.stringify(addToTodos));
    }else{
        const addToTodos = TODOS.map(todo => {
            if (todo.id === id) {
                todo.title = todoData.title;
                todo.description = todoData.description;
                todo.user = todoData.user;
            }
    
            return todo;
        })
        localStorage.setItem(TODOS_KEY, JSON.stringify(addToTodos));
        // const todoNameHtml = document.getElementById(`edittodos_${todo.id}`);
        // todoNameHtml.innerHTML = todoData.title;
    }
    // const todoNameHtml = document.getElementById(`edittodos_${todo.id}`);
    // todoNameHtml.innerHTML = todoData.title;

}

const todoObj = document.getElementById('todo');

todoObj.addEventListener('click', (event)  => {
    if(event.target.nodeName === 'BUTTON'){
        const id = event.target.id.split('-')[1];
        const todo = document.getElementById(id);
        const storedTodo = JSON.parse(localStorage.getItem(TODOS_KEY));
        const todoId = Number.parseInt(id.split('_')[1]);
        
        if(event.target.id.split('-')[0] === 'delete'){
            console.log(todo.id)
                todo.parentNode.removeChild(todo);
                
                if(Array.isArray(storedTodo)){
                    const addToTodos = storedTodo.filter(todo => todo.id !== todoId);
                    localStorage.setItem(TODOS_KEY, JSON.stringify(addToTodos));
                }else{
                    const addToTodos = TODOS.filter(todo => todo.id !== todoId);
                    localStorage.setItem(TODOS_KEY, JSON.stringify(addToTodos));
                }
                    
        } else if(event.target.id.split('-')[0] === 'arrow'){
            const todoProgress = document.getElementById('todo-progress');
            todoProgress.append(todo);
            todo.className += ' progress';
            const storedTodoProgress = JSON.parse(localStorage.getItem(TODOS_LIST));
            const storedTodo = JSON.parse(localStorage.getItem(TODOS_KEY));

            if(Array.isArray(storedTodoProgress)){
                
                const addToTodos = storedTodo.filter(todo => todo.id == todoId);
                console.log(addToTodos);
                const storedTodoProgress = [...addToTodos];
                localStorage.setItem(TODOS_LIST, JSON.stringify(storedTodoProgress));
            } 
        }
    }
})

todoObj.addEventListener('click', (event)  => {
    if(event.target.nodeName === 'BUTTON'){
        const id = event.target.id.split('-')[1];
        const todoId = Number.parseInt(id.split('_')[1]);

    if(event.target.id.split('-')[0] === 'edit'){
        ShowEditWindow(todoId);
        }
    }
})

const buttonConfirmEdit = document.getElementById('button-confirm-edit');
buttonConfirmEdit.addEventListener('click', () => {
    
    const inputTitleEdit = document.getElementById('input-title-edit').value;
    const inputDescriptionEdit = document.getElementById('input-description-edit').value;
    const inputUserEdit = document.getElementById('input-user-edit').value;

    if(!inputTitleEdit || !inputDescriptionEdit || !inputUserEdit){
        alert('Fill in all required fields!');
    }else {
        saveTodo(editId, {title: inputTitleEdit, description: inputDescriptionEdit, user: inputUserEdit});
        hideEditWindow();
    }
});

const buttonCancelEdit = document.getElementById('button-cancel-edit');
buttonCancelEdit.addEventListener('click', hideEditWindow);

const buttonCancel = document.getElementById('button-cancel');
buttonCancel.addEventListener('click', hideWindow);
