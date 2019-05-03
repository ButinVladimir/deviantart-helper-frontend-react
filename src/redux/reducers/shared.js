import * as actions from '../actions';
import { LOCK_REVOKE } from '../../consts/locks';

/**
 * @description
 * Toggle menu reducer.
 *
 * @param {SharedState} sharedState - Shared state.
 * @returns {SharedState} New shared state.
 */
const toggleMenu = sharedState => ({
  menuToggled: !sharedState.menuToggled,
});

/**
 * @description
 * Load user info reducer.
 *
 * @returns {SharedState} New shared state.
 */
const loadUserInfo = () => ({
  isLoggedIn: true,
});


/**
 * @description
 * Show message reducer.
 *
 * @param {SharedState} sharedState - Shared state.
 * @param {ShowErrorAction} action - The action.
 * @returns {SharedState} New shared state.
 */
const showMessage = (sharedState, action) => ({
  showMessage: true,
  messageColor: 'info',
  message: action.message,
});

/**
 * @description
 * Hide message reducer.
 *
 * @returns {SharedState} New shared state.
 */
const hideMessage = () => ({
  showMessage: false,
});

/**
 * @description
 * Show error reducer.
 *
 * @param {SharedState} sharedState - Shared state.
 * @param {ShowErrorAction} action - The action.
 * @returns {SharedState} New shared state.
 */
const showError = (sharedState, action) => ({
  showMessage: true,
  messageColor: 'danger',
  message: action.message,
});

/**
 * @description
 * Revoke lock toggle reducer.
 *
 * @param {LockToggleAction} action - The action.
 * @returns {SharedState} New shared state.
 */
const revokeLockToggle = action => ({
  revokeLoading: action.value,
});

/**
 * @description
 * Revoke reducer.
 *
 * @returns {SharedState} New shared state.
 */
const revoke = () => ({
  revokeLoading: false,
  isLoggedIn: false,
});

/**
 * @description
 * Shared state reducer.
 *
 * @param {SharedState} sharedState - Shared state.
 * @param {Object} action - The action.
 * @returns {SharedState} New shared state.
 */
export default (sharedState, action) => {
  let difference = null;

  switch (action.type) {
    case actions.TOGGLE_MENU:
      difference = toggleMenu(sharedState);
      break;

    case actions.USER_LOAD_INFO:
      difference = loadUserInfo();
      break;

    case actions.MESSAGE_SHOW:
      difference = showMessage(sharedState, action);
      break;

    case actions.MESSAGE_HIDE:
      difference = hideMessage();
      break;

    case actions.ERROR_SHOW:
      difference = showError(sharedState, action);
      break;

    case actions.LOCK_TOGGLE:
      if (action.lock === LOCK_REVOKE) {
        difference = revokeLockToggle(action);
      }
      break;

    case actions.REVOKE:
      difference = revoke();
      break;

    default:
  }

  return difference !== null
    ? Object.assign({}, sharedState, difference)
    : sharedState;
};
