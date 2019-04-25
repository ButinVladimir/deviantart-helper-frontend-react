import { DEVIATIONS_BROWSE, PAGE_PARAM } from '../../../../consts/server-routes';
import { DEVIATIONS_BROWSE_LOAD_PAGE } from '../../../actions';
import createFetchGetAction from '../../fetch-get';
import deviationsBrowseLoadPageStartActionCreator from './load-page-start';
import deviationsBrowseLoadPageFinishActionCreator from './load-page-finish';

/**
 * @global
 * @description
 * Action to load page with deviations to browse.
 *
 * @typedef {Object} DeviationsBrowseLoadPageAction
 */

/**
 * @description
 * Creates action to load page with deviations to browse.
 *
 * @param {number} page - Number of page to be loaded.
 * @returns {Function} Function to return action.
 */
const deviationsBrowseLoadPageActionCreator = page => ({ deviations, pageCount }) => ({
  type: DEVIATIONS_BROWSE_LOAD_PAGE,
  deviations,
  page,
  pageCount,
});

/**
 * @description
 * Loads page with deviations and adds them to state.
 *
 * @param {number} page - The page number.
 * @param {Config} config - The config.
 * @returns {Function} Function to dispatch.
 */
export const loadPage = (page, config) => (dispatch, getState) => {
  const { deviations: { browse: state } } = getState();
  if (state.pageLoading) {
    return;
  }

  dispatch(deviationsBrowseLoadPageStartActionCreator());

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

  dispatch(
    createFetchGetAction(
      `${DEVIATIONS_BROWSE.replace(PAGE_PARAM, page)}`,
      deviationsBrowseLoadPageActionCreator(page),
      deviationsBrowseLoadPageFinishActionCreator,
      config,
      params,
    ),
  );
};

/**
 * @description
 * Loads first page with deviations to browse.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export default config => loadPage(0, config);
