import { USER_LOAD_INFO } from '../../actions';
import { USER_INFO } from '../../../consts/server-routes';
import createFetchGetAction from '../fetch-get';
import userLoadInfoStartActionCreator from './load-info-start';
import userLoadInfoFinishActionCreator from './load-info-finish';

/**
 * @global
 * @description
 * Action to load user info.
 *
 * @typedef {Object} UserLoadInfoAction
 *
 * @param {string} userId - The user ID.
 * @param {string} userName - The user name.
 * @param {string} userIcon - The user icon.
 */

/**
 * @description
 * Creates action to load user info.
 *
 * @param {Object} jsonResponse - The JSON response.
 * @returns {UserLoadInfoAction} Action.
 */
const userLoadInfoActionCreator = ({
  userId,
  userName,
  userIcon,
  userType,
  accessTokenExpires,
  refreshTokenExpires,
}) => ({
  type: USER_LOAD_INFO,
  userId,
  userName,
  userIcon,
  userType,
  accessTokenExpires,
  refreshTokenExpires,
});

/**
 * @description
 * Loads user info.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export default config => async (dispatch) => {
  dispatch(userLoadInfoStartActionCreator());

  dispatch(createFetchGetAction(
    USER_INFO,
    userLoadInfoActionCreator,
    userLoadInfoFinishActionCreator,
    config,
  ));
};
