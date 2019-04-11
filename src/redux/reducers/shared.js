import * as actions from '../actions';

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
  showError: true,
  errorMessage: action.errorMessage,
});

/**
 * @description
 * Hide error reducer.
 *
 * @returns {SharedState} New shared state.
 */
const hideError = () => ({
  showError: false,
});

/**
 * @description
 * Revoke reducer.
 *
 * @returns {SharedState} New shared state.
 */
const revoke = () => ({
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

    case actions.ERROR_HIDE:
      difference = hideError();
      break;

    case actions.USER_REVOKE:
      difference = revoke();
      break;

    default:
  }

  return difference !== null
    ? Object.assign({}, sharedState, difference)
    : sharedState;
};
