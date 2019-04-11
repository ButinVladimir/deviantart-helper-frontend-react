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
 * @param {Object} jsonResponse - JSON response.
 * @returns {DeviationsBrowseAction} Action.
 */
const deviationsBrowseActionCreator = ({ deviations }) => ({
  type: DEVIATIONS_BROWSE_ACTION,
  deviations,
});

/**
 * @description
 * Loads page with deviations to browse.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export default config => async (dispatch, getState) => {
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

  dispatch(createFetchGetAction(`${DEVIATIONS_BROWSE_ROUTE}${state.pageBrowse}`, deviationsBrowseActionCreator, config, params));
};
