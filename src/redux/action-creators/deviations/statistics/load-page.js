import { SERVER_ROUTE_DEVIATIONS_STATISTICS, PAGE_PARAM } from '../../../../consts/server-routes';
import { DEVIATIONS_STATISTICS_LOAD_PAGE } from '../../../actions';
import { POST } from '../../../../consts/fetch-methods';
import { LOCK_DEVIATIONS_STATISTICS } from '../../../../consts/locks';
import createFetchAction from '../../fetch';
import { SHOW_ALL, SHOW_NSFW } from '../../../../consts/nsfw-options';
import { CHART } from '../../../../consts/tabs';

/**
 * @description
 * Function to handle preparing params object.
 *
 * @param {Obect} state - Redux state.
 * @returns {Object} Params object.
 */
export const paramsHandler = (state) => {
  const statisticsState = state.deviations.statistics;
  const commonState = state.deviations.common;
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

  if (statisticsState.nsfw !== SHOW_ALL) {
    params.nsfw = statisticsState.nsfw === SHOW_NSFW;
  }

  if (statisticsState.filterByIds) {
    params.ids = commonState.selectedIds;
  }

  params.metadata = statisticsState.tab === CHART;

  return params;
};

/**
 * @description
 * Creates action to load page with deviations to get statistics.
 *
 * @param {number} page - Number of page to be loaded.
 * @returns {Function} Function to return action.
 */
export const deviationsStatisticsLoadPageActionCreator = page => ({
  deviations,
  metadata,
  pageCount,
}) => ({
  type: DEVIATIONS_STATISTICS_LOAD_PAGE,
  deviations,
  metadata: metadata ? { ...metadata } : null,
  page,
  pageCount,
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
 * Loads page with deviations and adds them to state.
 *
 * @param {number} page - The page number.
 * @param {Config} config - The config.
 * @returns {Function} Function to dispatch.
 */
const loadPage = (page, config) => createFetchAction(
  POST,
  SERVER_ROUTE_DEVIATIONS_STATISTICS.replace(PAGE_PARAM, page),
  getLockState,
  LOCK_DEVIATIONS_STATISTICS,
  deviationsStatisticsLoadPageActionCreator(page),
  config,
  paramsHandler,
);

/**
 * @description
 * Creates action to load first page with deviations to get statistics.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export const deviationsStatisticsLoadFirstPageActionCreator = config => loadPage(0, config);

/**
 * @description
 * Creates action to load current page with deviations to get statistics.
 *
 * @param {Config} config - The config.
 */
export const deviationsStatisticsLoadCurrentPageActionCreator = config => (dispatch, getState) => {
  const { deviations: { statistics: state } } = getState();

  dispatch(loadPage(state.page, config));
};

export default loadPage;
