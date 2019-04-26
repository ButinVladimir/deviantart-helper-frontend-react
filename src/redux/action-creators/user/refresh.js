import { AUTH_REFRESH } from '../../../consts/server-routes';
import { USER_REFRESH_LOCK_TOGGLE } from '../../actions';
import showMessageActionCreator from '../shared/show-message';
import userLoadInfoActionCreator from './load-info';
import createFetchAction from '../fetch-get';

/**
 * @description
 * Creates action to change lock on loading user info.
 *
 * @param {bool} lock - Should deviations browse page be locked.
 * @returns {UserLoadInfoLockToggleAction} Action.
 */
const lockToggle = lock => ({
  type: USER_REFRESH_LOCK_TOGGLE,
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
 * Creates action to revoke.
 *
 * @param {Config} config - The config.
 * @param {Function} dispatch - The Redux dispatch.
 * @returns {(config: Config) => Function} Action.
 */
const refreshActionCreator = (config, dispatch) => () => {
  dispatch(showMessageActionCreator('User info has been refreshed'));
  dispatch(unlockActionCreator());

  return userLoadInfoActionCreator(config);
};

/**
 * @description
 * Revokes user session.
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

  dispatch(createFetchAction(
    AUTH_REFRESH,
    refreshActionCreator(config, dispatch),
    unlockActionCreator,
    config,
  ));
};
