import { DEVIATIONS_LOAD } from '../../../consts/server-routes';
import showMessageActionCreator from '../shared/show-message';
import createFetchAction from '../fetch-get';

/**
 * @description
 * Creates action to revoke.
 *
 * @returns {(config: Config) => Function} Action.
 */
const refreshActionCreator = () => showMessageActionCreator('Deviations have been started loading');

/**
 * @description
 * Revokes user session.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export default config => async (dispatch) => {
  dispatch(createFetchAction(DEVIATIONS_LOAD, refreshActionCreator, config));
};
