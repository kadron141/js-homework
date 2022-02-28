import { onLoginSubmit } from '../../utils/utils.js';

const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', () => onLoginSubmit());

