import { GET } from '../../../../consts/fetch-methods';
import { LOCK_DEVIATIONS_TOTAL } from '../../../../consts/locks';
import { SERVER_ROUTE_DEVIATIONS_TOTAL_METADATA } from '../../../../consts/server-routes';
import { DEVIATIONS_TOTAL_LOAD_METADATA } from '../../../actions';
import createFetchAction from '../../fetch';

/**
 * @description
 * Function to handle preparing params object.
 *
 * @param {Obect} state - Redux state.
 * @returns {Object} Params object.
 */
export const paramsHandler = (state) => {
  const totalState = state.deviations.total;
  const params = {};

  if (totalState.timestampBegin) {
    params.timestampbegin = totalState.timestampBegin;
  }

  if (totalState.timestampEnd) {
    params.timestampend = totalState.timestampEnd;
  }

  return params;
};

/**
 * @description
 * Creates action to load metadata on deviation total statistics page.
 *
 * @param {Object} jsonResponse - The JSON response.
 * @returns {Function} Function to return action.
 */
export const deviationsTotalLoadMetadataActionCreator = ({
  metadata,
}) => ({
  type: DEVIATIONS_TOTAL_LOAD_METADATA,
  metadata: [...metadata],
});

/**
 * @description
 * Returns the state of the lock.
 *
 * @param {Object} state - The redux state.
 * @returns {boolean} The state of the lock.
 */
export const getLockState = state => state.deviations.total.totalLoading;

/**
 * @description
 * Loads deviations total metadata.
 *
 * @param {Config} config - The config.
 * @returns {Function} Action to dispatch.
 */
export default config => createFetchAction(
  GET,
  SERVER_ROUTE_DEVIATIONS_TOTAL_METADATA,
  getLockState,
  LOCK_DEVIATIONS_TOTAL,
  deviationsTotalLoadMetadataActionCreator,
  config,
  paramsHandler,
);
