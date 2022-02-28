import { USER_KEY } from '../../utils/constants.js';
import { initializeDashboard, addNewUser, getUserById } from '../../utils/utils.js';

let editedId = null;

if (JSON.parse(localStorage.getItem(USER_KEY))) {
    initializeDashboard();
}

const hideWindow = () => {
    const modalWindow = document.getElementById('modal-add');
    modalWindow.className += ' hidden';
    const wrapper = document.getElementById('wrapper');
    wrapper.className = 'dashboard-wrapper';
}

const hideEditWindow = () => {
    const modalWindow = document.getElementById('modal-edit');
    modalWindow.className += ' hidden';
    const wrapper = document.getElementById('wrapper');
    wrapper.className = 'dashboard-wrapper';
}

export const showEditWindow = (userId) => {
    editedId = userId;

    const modalWindow = document.getElementById('modal-edit');
    modalWindow.className = 'modal-window edit';
    const wrapper = document.getElementById('wrapper');
    wrapper.className += ' blurred';
    const fullName = document.getElementById('fullname-edit');
    const isAdmin = document.getElementById('isAdmin-edit');
    const user = getUserById(userId);

    fullName.value = user.fullName;
    isAdmin.checked = user.isAdmin;
}

const addUserButton = document.getElementById('add-user-btn');
addUserButton.addEventListener('click', () => {
    const modalWindow = document.getElementById('modal-add');
    modalWindow.className = 'modal-window';
    const wrapper = document.getElementById('wrapper');
    wrapper.className += ' blurred';
});

const submitUserButton = document.getElementById('submit-btn');
submitUserButton.addEventListener('click', () => {
    const fullName = document.getElementById('fullname').value;
    const login = document.getElementById('login').value;
    const balance = +document.getElementById('balance').value;
    const isAdmin = document.getElementById('isAdmin').checked;

    if (!fullName || !login || !balance) {
        alert('Fill in all required fields!')
    } else {
        addNewUser({ fullName, login, balance, isAdmin });
        hideWindow();
    }
});

const submitEditUserButton = document.getElementById('submit-btn-edit');
submitEditUserButton.addEventListener('click', () => {
    const fullName = document.getElementById('fullname-edit').value;
    const isAdmin = document.getElementById('isAdmin-edit').checked;

    if (!fullName) {
        alert('Fill in all required fields!')
    } else {
        console.log(editedId);
        //saveUser(editedId, { fullName, login, balance, isAdmin });
        hideEditWindow();
    }
});

const cancelUserButton = document.getElementById('cancel-btn');
cancelUserButton.addEventListener('click', hideWindow);

const cancelEditUserButton = document.getElementById('cancel-btn-edit');
cancelEditUserButton.addEventListener('click', hideEditWindow);