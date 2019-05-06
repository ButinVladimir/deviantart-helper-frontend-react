import { POST } from '../../../../consts/fetch-methods';
import { LOCK_DEVIATION_DETAILS_METADATA } from '../../../../consts/locks';
import { SERVER_ROUTE_DEVIATIONS_METADATA } from '../../../../consts/server-routes';
import { DEVIATIONS_DETAILS_SET_METADATA } from '../../../actions';
import createFetchAction from '../../fetch';

/**
 * @description
 * Function to handle preparing params object.
 *
 * @param {Obect} state - Redux state.
 * @returns {Object} Params object.
 */
const paramsHandler = (state) => {
  const detailsState = state.deviations.details;
  const params = {};

  params.ids = [state.deviations.details.id];

  if (detailsState.timestampBegin) {
    params.timestampbegin = detailsState.timestampBegin;
  }

  if (detailsState.timestampEnd) {
    params.timestampend = detailsState.timestampEnd;
  }

  return params;
};

/**
 * @description
 * Creates action to set deviation data on deviation details page.
 *
 * @param {Object} jsonResponse - The JSON response.
 * @returns {Function} Function to return action.
 */
const deviationsDetailsSetMetadataActionCreator = ({ metadata }) => ({
  type: DEVIATIONS_DETAILS_SET_METADATA,
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
 * @returns {Function} Action to dispatch.
 */
export default config => createFetchAction(
  POST,
  SERVER_ROUTE_DEVIATIONS_METADATA,
  state => state.deviations.details.detailsLoading,
  LOCK_DEVIATION_DETAILS_METADATA,
  deviationsDetailsSetMetadataActionCreator,
  config,
  paramsHandler,
);
