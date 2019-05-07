import { SERVER_ROUTE_DEVIATIONS_BROWSE, PAGE_PARAM } from '../../../../consts/server-routes';
import { DEVIATIONS_BROWSE_LOAD_PAGE } from '../../../actions';
import { POST } from '../../../../consts/fetch-methods';
import { LOCK_BROWSE_DEVIATIONS } from '../../../../consts/locks';
import createFetchAction from '../../fetch';
import { SHOW_ALL, SHOW_NSFW } from '../../../../consts/nsfw-options';

/**
 * @description
 * Function to handle preparing params object.
 *
 * @param {Obect} state - Redux state.
 * @returns {Object} Params object.
 */
const paramsHandler = (state) => {
  const browseState = state.deviations.browse;
  const commonState = state.deviations.common;
  const params = {};

  if (browseState.title) {
    params.title = browseState.title;
  }

  if (browseState.publishedTimeBegin) {
    params.publishedtimebegin = browseState.publishedTimeBegin;
  }

  if (browseState.publishedTimeEnd) {
    params.publishedtimeend = browseState.publishedTimeEnd;
  }

  if (browseState.nsfw !== SHOW_ALL) {
    params.nsfw = browseState.nsfw === SHOW_NSFW;
  }

  if (browseState.filterByIds) {
    params.ids = commonState.selectedIds;
  }

  params.sortfield = browseState.sortField;
  params.sortorder = browseState.sortOrder;

  return params;
};

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
const loadPage = (page, config) => createFetchAction(
  POST,
  SERVER_ROUTE_DEVIATIONS_BROWSE.replace(PAGE_PARAM, page),
  state => state.deviations.browse.pageLoading,
  LOCK_BROWSE_DEVIATIONS,
  deviationsBrowseLoadPageActionCreator(page),
  config,
  paramsHandler,
);

/**
 * @description
 * Creates action to load first page with deviations to browse.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export const deviationsBrowseLoadFirstPageActionCreator = config => loadPage(0, config);

/**
 * @description
 * Creates action to load current page with deviations to browse.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export const deviationsBrowseLoadCurrentPageActionCreator = config => (dispatch, getState) => {
  const { deviations: { browse: state } } = getState();

  dispatch(loadPage(state.page, config));
};

export default loadPage;
