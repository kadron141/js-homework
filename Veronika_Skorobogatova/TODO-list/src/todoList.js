'use strict'

const todoContainer = document.getElementById('todo-container');
const deleteAllButton = document.getElementById('delete-button');
const addButton = document.getElementById('add-button');
const mainInput = document.getElementById('text-input');

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
];


let uniqueId = TODOS.length;

const getTodo = (todo) => {
   const todoWrapper = document.createElement('div');
   todoWrapper.id = `todo_${todo.id}`;

   const deleteTodo = document.createElement('button');
   deleteTodo.append(document.createTextNode('del'));
   deleteTodo.id = `delete-todo_${todo.id}`;
   todoWrapper.append(deleteTodo);

   const todoBody = document.createElement('div');
   const date = document.createElement('div');
   todoBody.append(document.createTextNode(todo.text));
   todoBody.append(document.createTextNode(todo.date));
   todoWrapper.append(todoBody);

   const completeTodo = document.createElement('button');
   completeTodo.append(document.createTextNode('done'));
   completeTodo.id = `completeTodo-todo_${todo.id}`;
   todoWrapper.append(completeTodo);

   todoWrapper.className = 'todoWrapper';
   todoBody.className = 'todoBody';
   deleteTodo.className = 'deleteButton';
   completeTodo.className = 'completeButton';

   return todoWrapper;
}

TODOS.forEach(todo => {
   const todoWrapper = getTodo(todo);
   todoContainer.prepend(todoWrapper);
})

addButton.addEventListener('click', (event) => {
   if (mainInput.value.length) {
      const todoWrapper = getTodo({ id: uniqueId, text: mainInput.value, date: (new Date()).toISOString().substring(0, 10) });
      uniqueId++;
      todoContainer.prepend(todoWrapper);
   }
})

deleteAllButton.addEventListener('click', (_) => {
   todoContainer.innerHTML = '';
})



todoContainer.addEventListener('click', (e) => {
   if (e.target.nodeName === 'BUTTON') {
      const id = e.target.id.split('-')[1];
      const todo = document.getElementById(id);

      if (e.target.id.split('-')[0] === 'delete') {
         todo.parentNode.removeChild(todo);
      } else {
         todo.className += ' .done';
         const completeButton = document.getElementById(e.target.id);
         completeButton.className += 'disabled';
      }
   }
})



