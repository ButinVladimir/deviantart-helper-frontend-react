/**
 * @global
 * @description
 * User state.
 *
 * @typedef {Object} UserState
 * @property {boolean} userInfoLoading - Is user info loading.
 * @property {string} userName - User name.
 * @property {string} userId - User ID.
 * @property {string} userIcon - User icon.
 * @property {string} userType - User type.
 * @property {number|null} accessTokenExpires - Expiration date of access token.
 * @property {number|null} refreshTokenExpires - Expiration date of refresh token.
 * @property {number|null} fetchDateThreshold - Date until that data cannot be fetched.
 * @property {number|null} requestDateThreshold - Date until that data fetching cannot be requested.
 */

/**
 * @description
 * Creates default user state.
 *
 * @returns {UserState} Default state.
 */
export default () => ({
  userInfoLoading: false,
  userName: '',
  userId: '',
  userIcon: '',
  userType: '',
  accessTokenExpires: null,
  refreshTokenExpires: null,
  fetchDateThreshold: null,
  requestDateThreshold: null,
});
