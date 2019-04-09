import * as actions from './actions';

/**
 * @description
 * Creates action to load user info.
 *
 * @param {string} userId - The user ID.
 * @param {string} userName - The user name.
 * @param {string} userIcon - The user icon.
 * @param {string} userType - The user icon.
 * @param {number} accessTokenExpires - Expiration date of access token.
 * @param {number} refreshTokenExpires - Expiration date of refresh token.
 * @returns {LoadUserInfoAction} Action.
 */
export const createLoadUserInfoAction = (
  userId,
  userName,
  userIcon,
  userType,
  accessTokenExpires,
  refreshTokenExpires,
) => ({
  type: actions.LOAD_USER_INFO,
  userId,
  userName,
  userIcon,
  userType,
  accessTokenExpires,
  refreshTokenExpires,
});

/**
 * @description
 * Action to load user info.
 *
 * @typedef {Object} LoadUserInfoAction
 *
 * @param {string} userId - The user ID.
 * @param {string} userName - The user name.
 * @param {string} userIcon - The user icon.
 */

/**
 * @description
 * Creates action to browse deviations.
 *
 * @param {number} page - Page number.
 * @param {string} title - Title substring to find.
 * @param {number} publishedTimeStart - Deviation should be published after this time.
 * @param {number} publishedTimeEnd - Deviation should be published before this time.
 * @param {string} sort - Field to sort deviations by.
 * @param {number} order - Order to sort deviations by.
 * @returns {BrowseDeviationsAction} Action.
 */
export const createBrowseDevitaionsAction = (
  page,
  title,
  publishedTimeStart,
  publishedTimeEnd,
  sort,
  order,
) => ({
  type: actions.BROWSE_DEVIATIONS,
  page,
  title,
  publishedTimeStart,
  publishedTimeEnd,
  sort,
  order,
});

/**
 * @typedef {Object} BrowseDeviationsAction
 *
 * @property {number} page - Page number.
 * @property {string} title - Title substring to find.
 * @property {number} publishedTimeStart - Deviation should be published after this time.
 * @property {number} publishedTimeEnd - Deviation should be published before this time.
 * @property {string} sort - Field to sort deviations by.
 * @property {number} order - Order to sort deviations by.
 */
