import { GET } from '../../../consts/fetch-methods';
import { LOCK_START_LOADING_DATA } from '../../../consts/locks';
import { SERVER_ROUTE_DEVIATIONS_LOAD } from '../../../consts/server-routes';
import lockToggleActionCreator from '../shared/lock-toggle';
import showMessageActionCreator from '../shared/show-message';
import createFetchAction from '../fetch';

/**
 * @description
 * Creates action to load deviations.
 *
 * @returns {Function} Action.
 */
const loadActionCreator = () => (dispatch) => {
  dispatch(showMessageActionCreator('Deviations have been started loading'));
  dispatch(lockToggleActionCreator(LOCK_START_LOADING_DATA, false));
};

/**
 * @description
 * Loads deviations.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export default config => createFetchAction(
  GET,
  SERVER_ROUTE_DEVIATIONS_LOAD,
  state => state.deviations.common.deviationsLoading,
  LOCK_START_LOADING_DATA,
  loadActionCreator,
  config,
);
