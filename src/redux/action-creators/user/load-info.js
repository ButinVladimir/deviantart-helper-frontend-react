import { USER_LOAD_INFO } from '../../actions';
import { GET } from '../../../consts/fetch-methods';
import { LOCK_LOAD_USER_INFO } from '../../../consts/locks';
import { SERVER_ROUTE_USER_INFO } from '../../../consts/server-routes';
import createFetchAction from '../fetch';

/**
 * @global
 * @description
 * Action to load user info.
 *
 * @typedef {Object} UserLoadInfoAction
 *
 * @param {boolean} fullyLoginned - Is user fully loginned.
 * @param {string} userId - The user ID.
 * @param {string} userName - The user name.
 * @param {string} userIcon - The user icon.
 * @param {string} userType - The user type.
 * @param {number|null} accessTokenExpires - Expiration date of access token.
 * @param {number|null} refreshTokenExpires - Expiration date of refresh token.
 * @param {number|null} fetchDateThreshold - Date until that data cannot be fetched.
 * @param {number|null} requestDateThreshold - Date until that data fetching cannot be requested.
 */

/**
 * @description
 * Creates action to load user info.
 *
 * @param {Object} jsonResponse - The JSON response.
 * @returns {UserLoadInfoAction} Action.
 */
export const userLoadInfoActionCreator = ({
  fullyLoginned,
  userId,
  userName,
  userIcon,
  userType,
  accessTokenExpires,
  refreshTokenExpires,
  fetchDateThreshold,
  requestDateThreshold,
}) => ({
  type: USER_LOAD_INFO,
  fullyLoginned,
  userId,
  userName,
  userIcon,
  userType,
  accessTokenExpires,
  refreshTokenExpires,
  fetchDateThreshold,
  requestDateThreshold,
});

/**
 * @description
 * Loads user info.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export default config => createFetchAction(
  GET,
  SERVER_ROUTE_USER_INFO,
  state => state.user.userInfoLoading,
  LOCK_LOAD_USER_INFO,
  userLoadInfoActionCreator,
  config,
);
