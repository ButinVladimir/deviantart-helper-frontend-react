import { AUTH_REFRESH } from '../../../consts/server-routes';
import showMessageActionCreator from '../shared/show-message';
import userLoadInfoActionCreator from './load-info';
import userLoadInfoStartActionCreator from './load-info-start';
import userLoadInfoFinishActionCreator from './load-info-finish';
import createFetchAction from '../fetch-get';


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

  return userLoadInfoActionCreator(config);
};

/**
 * @description
 * Revokes user session.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export default config => async (dispatch) => {
  dispatch(userLoadInfoStartActionCreator());

  dispatch(createFetchAction(
    AUTH_REFRESH,
    refreshActionCreator(config, dispatch),
    userLoadInfoFinishActionCreator,
    config,
  ));
};
