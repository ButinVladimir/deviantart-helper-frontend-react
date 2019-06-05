import * as actions from '../actions';
import * as userStates from '../../consts/user-states';
import { LOCK_REVOKE, LOCK_START_LOADING_DATA } from '../../consts/locks';

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
 * @param {LoadUserInfoAction} action - The action.
 * @returns {SharedState} New shared state.
 */
const loadUserInfo = (action) => {
  if (action.fullyLoginned) {
    return {
      userState: userStates.FULLY_LOGINNED,
    };
  }

  return {
    userState: userStates.FETCHING_INFO,
    showMessage: true,
    messageColor: 'info',
    message: 'Your info is being fetched at this moment. Please try later.',
  };
};


/**
 * @description
 * Show message reducer.
 *
 * @param {ShowErrorAction} action - The action.
 * @returns {SharedState} New shared state.
 */
const showMessage = action => ({
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
 * @param {ShowErrorAction} action - The action.
 * @returns {SharedState} New shared state.
 */
const showError = action => ({
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
 * Loading deviations lock toggle reducer.
 *
 * @param {LockToggleAction} action - The action.
 * @returns {DeviationsCommonState} New deviations common state.
 */
const fetchDataLockToggle = action => ({
  fetchDataLoading: action.value,
});

/**
 * @description
 * Revoke reducer.
 *
 * @param {SharedState} sharedState - Shared state.
 * @returns {SharedState} New shared state.
 */
const revoke = (sharedState) => {
  if (sharedState.userState !== userStates.NOT_LOGGINED) {
    return {
      userState: userStates.NOT_LOGGINED,
      showMessage: true,
      messageColor: 'info',
      message: 'Your account have been revoked.',
    };
  }

  return null;
};

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
      difference = loadUserInfo(action);
      break;

    case actions.MESSAGE_SHOW:
      difference = showMessage(action);
      break;

    case actions.MESSAGE_HIDE:
      difference = hideMessage();
      break;

    case actions.ERROR_SHOW:
      difference = showError(action);
      break;

    case actions.LOCK_TOGGLE:
      if (action.lock === LOCK_REVOKE) {
        difference = revokeLockToggle(action);
      }

      if (action.lock === LOCK_START_LOADING_DATA) {
        difference = fetchDataLockToggle(action);
      }

      break;

    case actions.REVOKE:
      difference = revoke(sharedState);
      break;

    default:
  }

  return difference !== null
    ? Object.assign({}, sharedState, difference)
    : sharedState;
};
