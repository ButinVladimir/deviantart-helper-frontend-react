import { GET } from '../../../consts/fetch-methods';
import { LOCK_START_LOADING_DATA } from '../../../consts/locks';
import { SERVER_ROUTE_USER_LOAD } from '../../../consts/server-routes';
import showMessageActionCreator from './show-message';
import showErrorActionCreator from './show-error';
import createFetchAction from '../fetch';

/**
 * @description
 * Creates action to start fetching data.
 *
 * @param {boolean} status - Status of request.
 * @returns {Function} Action.
 */
export const startFetchDataActionCreator = ({ status }) => (dispatch) => {
  if (status) {
    dispatch(showMessageActionCreator('Requested data fetching successfully'));
  } else {
    dispatch(showErrorActionCreator('Unable to request data fetching, please try later'));
  }
};

/**
 * @description
 * Returns the state of the lock.
 *
 * @param {Object} state - The redux state.
 * @returns {boolean} The state of the lock.
 */
export const getLockState = state => state.shared.fetchDataLoading;

/**
 * @description
 * Loads deviations.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export default config => createFetchAction(
  GET,
  SERVER_ROUTE_USER_LOAD,
  getLockState,
  LOCK_START_LOADING_DATA,
  startFetchDataActionCreator,
  config,
);
