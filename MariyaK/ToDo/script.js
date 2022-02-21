"use strict"

const addTaskBtn = document.getElementById('add-btn');
const deleteAllBtn = document.getElementById('delete-btn');
const inputToDo = document.getElementById('input');
const todosWrapper = document.querySelector('.todos-wrapper');

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

let todoItem = [];

function Task(description) {
    this.description = description;
    this.completed = false;
}

const createTemplate = (task, index) => {
    return `
        <div class="todo-item ${task.completed ? 'checked' : ''}">
            <input onclick="completeTask(${index})" type="checkbox" class="complete-btn" ${task.completed ? 'checked' : ''}>
            <div class="description">${task.description}</div>
            <button onclick="deleteTask(${index})" class="delete-btn">Delete</button>
        </div>
    `
}

const filterTasks = () => {
    const activeTasks = tasks.length && tasks.filter(item => item.completed == false);
    const completedTasks = tasks.length && tasks.filter(item => item.completed == true);
    tasks = [...activeTasks,...completedTasks];
}

const fillHtmlList = () => {
    todosWrapper.innerHTML = "";
    if(tasks.length > 0) {
        filterTasks();
        tasks.forEach((item, index) => {
            todosWrapper.innerHTML += createTemplate(item, index);
        });
        todoItem = document.querySelectorAll('.todo-item');
    }
}

fillHtmlList();

const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const completeTask = index => {
    tasks[index].completed = !tasks[index].completed;
    if (tasks[index].completed) {
        todoItem[index].classList.add('checked');
    } else {
        todoItem[index].classList.remove('checked');
    }
    updateLocal();
    fillHtmlList();
}

const deleteTask = index => {
    todoItem[index].classList.add('delition');
    setTimeout(() => {
        tasks.splice(index, 1);
        updateLocal();
        fillHtmlList();
    }, 500)
}

addTaskBtn.addEventListener('click', () => {
    if (inputToDo.value.length) {
        tasks.unshift(new Task(inputToDo.value));
        updateLocal();
        fillHtmlList();
        inputToDo.value = '';
    } else {
        alert('Write New ToDo!')
    }
})

deleteAllBtn.onclick = () => {
    todosWrapper.innerHTML = "";
    localStorage.clear();
}