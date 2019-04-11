/**
 * @global
 * @description
 * State shared between pages.
 *
 * @typedef {Object} SharedState
 * @property {boolean} blocked - Is app blocked from user input.
 * @property {boolean} isLoggedIn - Is user logged in.
 * @property {string} message - Latest message.
 * @property {boolean} showMessage - Is message shown.
 * @property {string} errorMessage - Latest error message.
 * @property {boolean} showError - Is error shown.
 */

/**
 * @description
 * Creates default shared state.
 *
 * @returns {SharedState} Default state.
 */
export default () => ({
  blocked: false,
  isLoggedIn: false,
  message: '',
  showMessage: false,
  errorMessage: '',
  showError: false,
});
