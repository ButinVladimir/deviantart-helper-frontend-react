/**
 * @global
 * @description
 * State.
 *
 * @typedef {Object} State
 * @property {SharedState} shared - Shared state.
 * @property {UserState} user - User state.
 */

/**
 * @global
 * @description
 * State shared between pages.
 *
 * @typedef {Object} SharedState
 * @property {boolean} blocked - Is app blocked from user input.
 * @property {boolean} isLoggedIn - Is user logged in.
 */

/**
 * @global
 * @description
 * User state.
 *
 * @typedef {Object} UserState
 * @property {string} userName - User name.
 * @property {string} userId - User ID.
 * @property {string} userIcon - User icon.
 * @property {string} userType - User type.
 * @property {number} accessTokenExpires - Expiration date of access token.
 * @property {number} refreshTokenExpires - Expiration date of refresh token.
 */
