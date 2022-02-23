import { USERS_LIST_KEY } from './constants.js';

const MOCK_USERS = [
    {
        id: 0,
        isAdmin: true,
        balance: 0,
        fullName: 'Admin Adminich',
        login: 'admin',
        password: 'admin',
    },
    {
        id: 1,
        isAdmin: false,
        balance: 100,
        fullName: 'User Userich',
        login: 'user',
        password: 'user',
    },
    {
        id: 2,
        isAdmin: false,
        balance: 70,
        fullName: 'User Usqweich',
        login: 'user2',
        password: 'user2',
    },
    {
        id: 3,
        isAdmin: false,
        balance: 50,
        fullName: 'User Uszxcv',
        login: 'user3',
        password: 'user3',
    }
]

export const auth = (login, password) => {
    const storedUsers = JSON.parse(localStorage.getItem(USERS_LIST_KEY));
    const actualUsersList = storedUsers ? getActualUsers(storedUsers) : MOCK_USERS;

    const user = actualUsersList.find(user => user.login === login && user.password === password);

    if (user) {
        return { isAdmin: user.isAdmin, balance: user.balance, fullName: user.fullName };
    } else {
        alert('Incorrect login or password!');
    }
}

export const getUsers = () => {
    if (JSON.parse(localStorage.getItem(USERS_LIST_KEY))) {
        return JSON.parse(localStorage.getItem(USERS_LIST_KEY));
    }

    return MOCK_USERS.filter(user => !user.isAdmin);
}

getActualUsers = (users) => {
    const admins = MOCK_USERS.filter(user => user.isAdmin);

    return users.concat(admins);
}