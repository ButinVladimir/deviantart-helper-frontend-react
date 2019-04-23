import { DEVIATIONS_LOAD } from '../../../consts/server-routes';
import showMessageActionCreator from '../shared/show-message';
import createFetchAction from '../fetch-get';
import deviationsLoadStartActionCreator from './load-start';
import deviationsLoadFinishActionCreator from './load-finish';

/**
 * @description
 * Creates action to revoke.
 *
 * @returns {Function} Action.
 */
const refreshActionCreator = () => (dispatch) => {
  dispatch(deviationsLoadFinishActionCreator());
  dispatch(showMessageActionCreator('Deviations have been started loading'));
};

/**
 * @description
 * Revokes user session.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export default config => async (dispatch) => {
  dispatch(deviationsLoadStartActionCreator());

  dispatch(createFetchAction(
    DEVIATIONS_LOAD,
    refreshActionCreator,
    deviationsLoadFinishActionCreator,
    config,
  ));
};
