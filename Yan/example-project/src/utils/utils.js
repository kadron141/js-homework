import { auth } from './api.js';
import { USER_KEY, USERS_LIST_KEY, UID_KEY } from './constants.js';
import { getUsers } from './api.js';

export const onLoginSubmit = () => {
    const login = document.getElementById('login-input');
    const password = document.getElementById('password-input');
    const user = auth(login.value, password.value);

    if (user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        console.log('logged in as:', JSON.parse(localStorage.getItem(USER_KEY)));
        console.log('redirect to dashboard');
    } else if (!login.className.includes('error') && !password.className.includes('error')) {
        login.className += ' error';
        password.className += ' error';
    }
}

export const initializeDashboard = () => {
    const users = getUsers();
    const dataContainer = document.getElementById('data-container');
    const logoutButton = document.getElementById('log-out');

    dataContainer.addEventListener('click', (e) => onUserButtonClick(e));
    logoutButton.addEventListener('click', () => onLogout());

    localStorage.setItem(USERS_LIST_KEY, JSON.stringify(users));

    users.forEach(user => {
        const userNode = getUserAsHtml(user);
        dataContainer.append(userNode);
    })
}

export const appendUser = (user) => {
    const dataContainer = document.getElementById('data-container');
    const userNode = getUserAsHtml(user);
    dataContainer.append(userNode);
}

export const getUserAsHtml = (user) => {
    const userWrapper = document.createElement('div');
    const userBody = document.createElement('div');
    const deleteUser = document.createElement('button');

    userWrapper.className = 'user-wrapper';

    userWrapper.id = `user_${user.id}`
    deleteUser.id = `delete-user_${user.id}`;

    userBody.append(document.createTextNode(user.fullName));
    userWrapper.append(userBody);
    deleteUser.append(document.createTextNode('X'));
    userWrapper.append(deleteUser);

    return userWrapper;
}

export const onUserButtonClick = (e) => {
    if (e.target.nodeName === 'BUTTON') {
        const id = e.target.id.split('-')[1];
        const user = document.getElementById(id);
        const storedUsers = JSON.parse(localStorage.getItem(USERS_LIST_KEY));
        const userId = Number.parseInt(id.split('_')[1]);

        if (e.target.id.split('-')[0] === 'delete') {
            const usersToSave = storedUsers.filter(user => user.id !== userId);
            user.parentNode.removeChild(user);
            localStorage.setItem(USERS_LIST_KEY, JSON.stringify(usersToSave));
        }
    }
}

export const onLogout = () => {
    localStorage.removeItem(USER_KEY);
}

export const addNewUser = (userData) => {
    const uid = +new Date();
    const storedUsers = JSON.parse(localStorage.getItem(USERS_LIST_KEY));
    const userToAdd = {
        id: uid,
        fullName: userData.fullName,
        balance: userData.balance,
        login: userData.login,
        password: userData.login,
        isAdmin: userData.isAdmin,
    }

    const usersToSave = [...storedUsers, userToAdd];

    appendUser(userToAdd);
    localStorage.setItem(USERS_LIST_KEY, JSON.stringify(usersToSave));
}