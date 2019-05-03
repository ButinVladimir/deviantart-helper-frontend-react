import { DEVIATIONS_BROWSE, PAGE_PARAM } from '../../../../consts/server-routes';
import { DEVIATIONS_BROWSE_LOAD_PAGE, DEVIATIONS_BROWSE_LOAD_PAGE_LOCK_TOGGLE } from '../../../actions';
import createFetchGetAction from '../../fetch-get';
import { SHOW_ALL, SHOW_NSFW } from '../../../../consts/nsfw-options';

/**
 * @global
 * @description
 * Action to load page with deviations to browse.
 *
 * @typedef {Object} DeviationsBrowseLoadPageAction
 */

/**
 * @global
 * @description
 * Action to change lock on loading page with deviations to browse.
 *
 * @typedef {Object} DeviationsBrowseLoadPageLockToggleAction
 * @property {bool} lock - Should deviations browse page be locked.
 */

/**
 * @description
 * Creates action to change lock on loading page with deviations to browse.
 *
 * @param {bool} lock - Should deviations browse page be locked.
 * @returns {DeviationsBrowseLoadPageLockToggleAction} Action.
 */
const lockToggle = lock => ({
  type: DEVIATIONS_BROWSE_LOAD_PAGE_LOCK_TOGGLE,
  lock,
});

/**
 * @description
 * Creates action to lock page with deviations to browse.
 *
 * @returns {DeviationsBrowseLoadPageLockToggleAction} Action.
 */
const lockActionCreator = () => lockToggle(true);

/**
 * @description
 * Creates action to unlock page with deviations to browse.
 *
 * @returns {DeviationsBrowseLoadPageLockToggleAction} Action.
 */
const unlockActionCreator = () => lockToggle(false);

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
const loadPage = (page, config) => (dispatch, getState) => {
  const { deviations: { browse: state } } = getState();
  if (state.pageLoading) {
    return;
  }

  dispatch(lockActionCreator());

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
  if (state.nsfw !== SHOW_ALL) {
    params.nsfw = state.nsfw === SHOW_NSFW;
  }
  params.sortfield = state.sortField;
  params.sortorder = state.sortOrder;

  dispatch(
    createFetchGetAction(
      `${DEVIATIONS_BROWSE.replace(PAGE_PARAM, page)}`,
      deviationsBrowseLoadPageActionCreator(page),
      unlockActionCreator,
      config,
      params,
    ),
  );
};

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
