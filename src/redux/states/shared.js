/**
 * @global
 * @description
 * State shared between pages.
 *
 * @typedef {Object} SharedState
 * @property {boolean} menuToggled - Is menu is toggled.
 * @property {boolean} isLoggedIn - Is user logged in.
 * @property {boolean} revokeLoading - Is user revoking session.
 * @property {string} messageColor - Message color.
 * @property {string} message - Message text.
 * @property {boolean} showMessage - Is message shown.
 */

/**
 * @description
 * Creates default shared state.
 *
 * @returns {SharedState} Default state.
 */
export default () => ({
  menuToggled: false,
  isLoggedIn: false,
  revokeLoading: false,
  messageColor: '',
  message: '',
  showMessage: false,
});
