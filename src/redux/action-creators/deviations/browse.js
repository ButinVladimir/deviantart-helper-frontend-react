import { DEVIATIONS_BROWSE as DEVIATIONS_BROWSE_ROUTE } from '../../../consts/server-routes';
import { DEVIATIONS_BROWSE as DEVIATIONS_BROWSE_ACTION } from '../../actions';
import createFetchGetAction from '../fetch-get';

/**
 * @global
 * @description
 * Action to load page with deviations to browse.
 *
 * @typedef {Object} DeviationsBrowseAction
 */

/**
 * @description
 * Creates action to load page with deviations to browse.
 *
 * @param {number} page - Number of page to be loaded.
 * @returns {Function} Function to return action.
 */
const deviationsBrowseActionCreator = page => ({ deviations }) => ({
  type: DEVIATIONS_BROWSE_ACTION,
  deviations,
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
  const { deviations: state } = getState();

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

  dispatch(createFetchGetAction(`${DEVIATIONS_BROWSE_ROUTE}${page}`, deviationsBrowseActionCreator(page), config, params));
};

/**
 * @description
 * Loads page with deviations to browse.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export default config => loadPage(0, config);
