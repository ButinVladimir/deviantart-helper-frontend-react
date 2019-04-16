import { DEVIATIONS_DETAILS } from '../../../../consts/server-routes';
import { DEVIATIONS_DETAILS_SET_DATA } from '../../../actions';
import createFetchGetAction from '../../fetch-get';

/**
 * @global
 * @description
 * Action to set deviations data on deviations details page.
 *
 * @typedef {Object} DeviationsDetailsSetDataAction
 */

/**
 * @description
 * Creates action to set deviations data on deviations details page.
 *
 * @param {Object} jsonResponse - The JSON response.
 * @returns {Function} Function to return action.
 */
const deviationsDetailsSetDataCreator = ({ deviation, metadata }) => ({
  type: DEVIATIONS_DETAILS_SET_DATA,
  deviation,
  metadata: metadata.map(md => ({
    timestamp: md.timestamp,
    views: md.views,
    favourites: md.favourites,
    comments: md.comments,
    downloads: md.downloads,
  })),
});

/**
 * @description
 * Loads deviations details data.
 *
 * @param {Config} config - The config.
 */
export default config => (dispatch, getState) => {
  const { deviations: { details: state } } = getState();
  const { id } = state;

  const params = {};
  if (state.timestampBegin) {
    params.timestampbegin = state.timestampBegin;
  }
  if (state.timestampEnd) {
    params.timestampend = state.timestampEnd;
  }

  dispatch(createFetchGetAction(`${DEVIATIONS_DETAILS}${id}`, deviationsDetailsSetDataCreator, config, params));
};
