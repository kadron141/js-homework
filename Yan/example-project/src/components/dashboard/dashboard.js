import { USER_KEY } from '../../utils/constants.js';
import { initializeDashboard, addNewUser } from '../../utils/utils.js';

if (JSON.parse(localStorage.getItem(USER_KEY))) {
    initializeDashboard();
}

const hideWindow = () => {
    const modalWindow = document.getElementById('modal-window');
    modalWindow.className += ' hidden';
    const wrapper = document.getElementById('wrapper');
    wrapper.className = 'dashboard-wrapper';
}

const addUserButton = document.getElementById('add-user-btn');
addUserButton.addEventListener('click', () => {
    const modalWindow = document.getElementById('modal-window');
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

const cancelUserButton = document.getElementById('cancel-btn');
cancelUserButton.addEventListener('click', hideWindow);