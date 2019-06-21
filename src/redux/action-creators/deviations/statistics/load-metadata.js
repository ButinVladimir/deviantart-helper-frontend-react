import { POST } from '../../../../consts/fetch-methods';
import { LOCK_DEVIATIONS_STATISTICS } from '../../../../consts/locks';
import { SERVER_ROUTE_DEVIATIONS_METADATA } from '../../../../consts/server-routes';
import { DEVIATIONS_STATISTICS_LOAD_METADATA } from '../../../actions';
import createFetchAction from '../../fetch';

/**
 * @description
 * Function to handle preparing params object.
 *
 * @param {Obect} state - Redux state.
 * @returns {Object} Params object.
 */
export const paramsHandler = (state) => {
  const statisticsState = state.deviations.statistics;
  const params = {};

  params.ids = statisticsState.deviations.map(d => d.id);

  if (statisticsState.timestampBegin) {
    params.timestampbegin = statisticsState.timestampBegin;
  }

  if (statisticsState.timestampEnd) {
    params.timestampend = statisticsState.timestampEnd;
  }

  return params;
};

/**
 * @description
 * Creates action to load deviation metadata on deviation statistics page.
 *
 * @param {Object} jsonResponse - The JSON response.
 * @returns {Function} Function to return action.
 */
export const deviationsStatisticsLoadMetadataActionCreator = ({ metadata }) => ({
  type: DEVIATIONS_STATISTICS_LOAD_METADATA,
  metadata: metadata ? { ...metadata } : null,
});

/**
 * @description
 * Returns the state of the lock.
 *
 * @param {Object} state - The redux state.
 * @returns {boolean} The state of the lock.
 */
export const getLockState = state => state.deviations.statistics.pageLoading;

/**
 * @description
 * Loads deviations statistics metadata.
 *
 * @param {Config} config - The config.
 * @returns {Function} Action to dispatch.
 */
export default config => createFetchAction(
  POST,
  SERVER_ROUTE_DEVIATIONS_METADATA,
  getLockState,
  LOCK_DEVIATIONS_STATISTICS,
  deviationsStatisticsLoadMetadataActionCreator,
  config,
  paramsHandler,
);
