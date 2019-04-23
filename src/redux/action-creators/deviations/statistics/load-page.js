import { DEVIATIONS_STATISTICS, PAGE_PARAM } from '../../../../consts/server-routes';
import { DEVIATIONS_STATISTICS_LOAD_PAGE } from '../../../actions';
import createFetchGetAction from '../../fetch-get';

/**
 * @global
 * @description
 * Action to load page with deviations to get statistics.
 *
 * @typedef {Object} DeviationsStatisticsLoadPageAction
 */

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
 */
export const loadPage = (page, config) => (dispatch, getState) => {
  const { deviations: { statistics: state } } = getState();

  const params = {};
  if (state.title) {
    params.title = state.title;
  }
  if (state.publishedTimeBegin) {
    params.publishedtimebegin = state.publishedTimeBegin;
  }
  if (state.publishedTimeEnd) {
    params.publishedtimeend = state.publishedTimeEnd;
  }
  params.sortfield = state.sortField;
  params.sortorder = state.sortOrder;
  if (state.timestampBegin) {
    params.timestampbegin = state.timestampBegin;
  }
  if (state.timestampEnd) {
    params.timestampend = state.timestampEnd;
  }

  dispatch(createFetchGetAction(`${DEVIATIONS_STATISTICS.replace(PAGE_PARAM, page)}`, deviationsStatisticsLoadPageActionCreator(page), {}, config, params));
};

/**
 * @description
 * Loads first page with deviations to get statistics.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export default config => loadPage(0, config);
