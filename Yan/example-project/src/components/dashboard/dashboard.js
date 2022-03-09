import { USER_KEY } from '../../utils/constants.js';
import { initializeDashboard, addNewUser, getUserById, saveUser } from '../../utils/utils.js';

let editedId = null;
let isEditOpen = false;
let isAddOpen = false;

const editWindow = document.getElementById('modal-edit');
const addWindow = document.getElementById('modal-add');
const deleteWindow = document.getElementById('modal-delete');

if (JSON.parse(localStorage.getItem(USER_KEY))) {
    initializeDashboard();
}

const dashboard = document.getElementById('dashboard-container');
dashboard.addEventListener('click', (e) => {
    const isTargetEditButton = e.target.id.split('-')[0] === 'edit';
    const isTargetAddButton = e.target.id.split('-')[0] === 'add';
    const isTargetDeleteButton = e.target.id.split('-')[0] === 'delete';

    if (!editWindow.contains(e.target) && isEditOpen && !isTargetEditButton) {
        hideEditWindow();
    }


    if (!addWindow.contains(e.target) && isAddOpen && !isTargetAddButton) {
        hideWindow();
    }

    if (!deleteWindow.contains(e.target) && isDeleteOpen && !isTargetDeleteButton) {
        hideDeleteWindow();
    }
})

const hideWindow = () => {
    isAddOpen = false;
    const modalWindow = document.getElementById('modal-add');
    modalWindow.className += ' hidden';
    const wrapper = document.getElementById('wrapper');
    wrapper.className = 'dashboard-wrapper';
}

const hideEditWindow = () => {
    isEditOpen = false;
    const modalWindow = document.getElementById('modal-edit');
    modalWindow.className += ' hidden';
    const wrapper = document.getElementById('wrapper');
    wrapper.className = 'dashboard-wrapper';
}

const hideDeleteWindow = () => {
    isDeleteOpen = false;
    const modalWindow = document.getElementById('modal-delete');
    modalWindow.className += ' hidden';
    const wrapper = document.getElementById('wrapper');
    wrapper.className = 'dashboard-wrapper';
}

export const showEditWindow = (userId) => {
    isEditOpen = true;
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

export const showDeleteWindow = (userId, deleteUserCallback) => {
    isDeleteOpen = true;
    const modalWindow = document.getElementById('modal-delete');
    modalWindow.className = 'modal-window delete';
    const wrapper = document.getElementById('wrapper');
    wrapper.className += ' blurred';
    const userBody = document.getElementById('modal-delete-body');
    const user = getUserById(userId);
    userBody.innerHTML = `You are about to delete user <b>${user.fullName}</b>. This action cannot be undone.`

    const submitDeleteUserButton = document.getElementById('submit-btn-delete');
    submitDeleteUserButton.addEventListener('click', () => {
        deleteUserCallback();
        hideDeleteWindow();
    });
}

const addUserButton = document.getElementById('add-user-btn');
addUserButton.addEventListener('click', () => {
    isAddOpen = true;
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
        saveUser(editedId, { fullName, isAdmin });
        hideEditWindow();
    }
});

const cancelUserButton = document.getElementById('cancel-btn');
cancelUserButton.addEventListener('click', hideWindow);

const cancelEditUserButton = document.getElementById('cancel-btn-edit');
cancelEditUserButton.addEventListener('click', hideEditWindow);

const cancelDeleteUserButton = document.getElementById('cancel-btn-delete');
cancelDeleteUserButton.addEventListener('click', hideDeleteWindow);