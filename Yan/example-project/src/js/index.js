import { onLoginSubmit, initializeDashboard } from './utils.js';
import { USER_KEY } from './constants.js';

const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', () => onLoginSubmit());

if (JSON.parse(localStorage.getItem(USER_KEY))) {
    initializeDashboard();
}