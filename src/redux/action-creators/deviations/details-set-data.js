import { DEVIATIONS_DETAILS } from '../../../consts/server-routes';
import { DEVIATIONS_DETAILS_SET_DATA } from '../../actions';
import createFetchGetAction from '../fetch-get';

/**
 * @global
 * @description
 * Action to set deviations details data.
 *
 * @typedef {Object} DeviationsDetailsSetDataAction
 */

/**
 * @description
 * Creates action to set deviations details data.
 *
 * @param {Object} jsonResponse - The JSON response.
 * @returns {Function} Function to return action.
 */
const deviationsDetailsSetDataCreator = ({ deviation, metadata }) => ({
  type: DEVIATIONS_DETAILS_SET_DATA,
  deviationDetails: deviation,
  deviationDetailsMetadata: metadata.map(md => ({
    timestamp: new Date(md.timestamp).toLocaleString(),
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
  const { deviations: state } = getState();
  const deviationId = state.deviationDetailsId;

  const params = {};
  if (state.timestampBegin) {
    params.timestampbegin = state.timestampBegin;
  }
  if (state.timestampEnd) {
    params.timestampend = state.timestampEnd;
  }

  dispatch(createFetchGetAction(`${DEVIATIONS_DETAILS}${deviationId}`, deviationsDetailsSetDataCreator, config, params));
};
