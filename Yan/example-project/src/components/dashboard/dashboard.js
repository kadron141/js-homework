import { USER_KEY } from '../../utils/constants.js';
import { initializeDashboard } from '../../utils/utils.js';

if (JSON.parse(localStorage.getItem(USER_KEY))) {
    initializeDashboard();
}