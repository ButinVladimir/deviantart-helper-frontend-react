import { GET } from '../../../../consts/fetch-methods';
import { LOCK_DEVIATIONS_TOTAL } from '../../../../consts/locks';
import { SERVER_ROUTE_DEVIATIONS_TOTAL } from '../../../../consts/server-routes';
import { DEVIATIONS_TOTAL_LOAD_DATA } from '../../../actions';
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
 * Creates action to load values on deviation total statistics page.
 *
 * @param {Object} jsonResponse - The JSON response.
 * @returns {Function} Function to return action.
 */
export const deviationsTotalLoadDataActionCreator = ({
  views,
  favourites,
  comments,
  downloads,
}) => ({
  type: DEVIATIONS_TOTAL_LOAD_DATA,
  views,
  favourites,
  comments,
  downloads,
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
 * Loads deviations total statistics data.
 *
 * @param {Config} config - The config.
 * @returns {Function} Action to dispatch.
 */
export default config => createFetchAction(
  GET,
  SERVER_ROUTE_DEVIATIONS_TOTAL,
  getLockState,
  LOCK_DEVIATIONS_TOTAL,
  deviationsTotalLoadDataActionCreator,
  config,
  paramsHandler,
);
