import { USER_LOAD_INFO, USER_LOAD_INFO_LOCK_TOGGLE } from '../../actions';
import { USER_INFO } from '../../../consts/server-routes';
import createFetchGetAction from '../fetch-get';

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
 * @global
 * @description
 * Action to change lock on loading user info.
 *
 * @typedef {Object} UserLoadInfoLockToggleAction
 * @property {bool} lock - Should deviations browse page be locked.
 */

/**
 * @description
 * Creates action to change lock on loading user info.
 *
 * @param {bool} lock - Should deviations browse page be locked.
 * @returns {UserLoadInfoLockToggleAction} Action.
 */
const lockToggle = lock => ({
  type: USER_LOAD_INFO_LOCK_TOGGLE,
  lock,
});

/**
 * @description
 * Creates action to lock loading user info.
 *
 * @returns {UserLoadInfoLockToggleAction} Action.
 */
const lockActionCreator = () => lockToggle(true);

/**
 * @description
 * Creates action to unlock loading user info.
 *
 * @returns {UserLoadInfoLockToggleAction} Action.
 */
const unlockActionCreator = () => lockToggle(false);

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
export default config => async (dispatch, getState) => {
  const { user: state } = getState();
  if (state.userInfoLoading) {
    return;
  }

  dispatch(lockActionCreator());

  dispatch(createFetchGetAction(
    USER_INFO,
    userLoadInfoActionCreator,
    unlockActionCreator,
    config,
  ));
};
