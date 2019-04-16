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

/**
 * @description
 * Creates default user state.
 *
 * @returns {UserState} Default state.
 */
export default () => ({
  userName: '',
  userId: '',
  userIcon: '',
  userType: '',
  accessTokenExpires: 0,
  refreshTokenExpires: 0,
});
