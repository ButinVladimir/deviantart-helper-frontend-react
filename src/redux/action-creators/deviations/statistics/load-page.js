import { SERVER_ROUTE_DEVIATIONS_STATISTICS, PAGE_PARAM } from '../../../../consts/server-routes';
import { DEVIATIONS_STATISTICS_LOAD_PAGE } from '../../../actions';
import { POST } from '../../../../consts/fetch-methods';
import { LOCK_DEVIATIONS_STATISTICS } from '../../../../consts/locks';
import createFetchAction from '../../fetch';

/**
 * @description
 * Function to handle preparing params object.
 *
 * @param {Obect} state - Redux state.
 * @returns {Object} Params object.
 */
const paramsHandler = (state) => {
  const statisticsState = state.deviations.statistics;
  const params = {};

  if (statisticsState.title) {
    params.title = statisticsState.title;
  }

  if (statisticsState.publishedTimeBegin) {
    params.publishedtimebegin = statisticsState.publishedTimeBegin;
  }

  if (statisticsState.publishedTimeEnd) {
    params.publishedtimeend = statisticsState.publishedTimeEnd;
  }

  params.sortfield = statisticsState.sortField;
  params.sortorder = statisticsState.sortOrder;

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
 * Creates action to load page with deviations to get statistics.
 *
 * @param {number} page - Number of page to be loaded.
 * @returns {Function} Function to return action.
 */
const deviationsStatisticsLoadPageActionCreator = page => ({ deviations, metadata }) => ({
  type: DEVIATIONS_STATISTICS_LOAD_PAGE,
  deviations,
  metadata,
  page,
});

/**
 * @description
 * Loads page with deviations and adds them to state.
 *
 * @param {number} page - The page number.
 * @param {Config} config - The config.
 * @returns {Function} Function to dispatch.
 */
export const loadPage = (page, config) => createFetchAction(
  POST,
  SERVER_ROUTE_DEVIATIONS_STATISTICS.replace(PAGE_PARAM, page),
  state => state.deviations.statistics.pageLoading,
  LOCK_DEVIATIONS_STATISTICS,
  deviationsStatisticsLoadPageActionCreator(page),
  config,
  paramsHandler,
);

/**
 * @description
 * Loads first page with deviations to get statistics.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export default config => loadPage(0, config);
