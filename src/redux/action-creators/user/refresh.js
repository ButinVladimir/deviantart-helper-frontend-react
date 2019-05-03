import { GET } from '../../../consts/fetch-methods';
import { LOCK_LOAD_USER_INFO } from '../../../consts/locks';
import { SERVER_ROUTE_AUTH_REFRESH } from '../../../consts/server-routes';
import lockToggleActionCreator from '../shared/lock-toggle';
import showMessageActionCreator from '../shared/show-message';
import userLoadInfoActionCreator from './load-info';
import createFetchAction from '../fetch';

/**
 * @description
 * Creates action to revoke.
 *
 * @param {Config} config - The config.
 * @returns {(config: Config) => Function} Action.
 */
const refreshActionCreator = config => () => (dispatch) => {
  dispatch(showMessageActionCreator('User info has been refreshed'));
  dispatch(lockToggleActionCreator(LOCK_LOAD_USER_INFO, false));
  dispatch(userLoadInfoActionCreator(config));
};

/**
 * @description
 * Revokes user session.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export default config => createFetchAction(
  GET,
  SERVER_ROUTE_AUTH_REFRESH,
  state => state.user.userInfoLoading,
  LOCK_LOAD_USER_INFO,
  refreshActionCreator(config),
  config,
);
