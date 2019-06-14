import { GET } from '../../../../consts/fetch-methods';
import { LOCK_DEVIATION_DETAILS } from '../../../../consts/locks';
import { SERVER_ROUTE_DEVIATIONS_DETAILS, ID_PARAM } from '../../../../consts/server-routes';
import { CHART } from '../../../../consts/tabs';
import { DEVIATIONS_DETAILS_LOAD_DATA } from '../../../actions';
import createFetchAction from '../../fetch';

/**
 * @description
 * Function to handle preparing params object.
 *
 * @param {Obect} state - Redux state.
 * @returns {Object} Params object.
 */
export const paramsHandler = (state) => {
  const detailsState = state.deviations.details;
  const params = {};

  if (detailsState.timestampBegin) {
    params.timestampbegin = detailsState.timestampBegin;
  }

  if (detailsState.timestampEnd) {
    params.timestampend = detailsState.timestampEnd;
  }

  params.metadata = detailsState.tab === CHART;

  return params;
};

/**
 * @description
 * Creates action to load deviation data on deviation details page.
 *
 * @param {Object} jsonResponse - The JSON response.
 * @returns {Function} Function to return action.
 */
export const deviationsDetailsLoadDataActionCreator = ({ deviation, metadata }) => ({
  type: DEVIATIONS_DETAILS_LOAD_DATA,
  deviation,
  metadata: metadata ? [...metadata] : null,
});

/**
 * @description
 * Returns the state of the lock.
 *
 * @param {Object} state - The redux state.
 * @returns {boolean} The state of the lock.
 */
export const getLockState = state => state.deviations.details.detailsLoading;

/**
 * @description
 * Loads deviations details data.
 *
 * @param {Config} config - The config.
 * @returns {Function} Action to dispatch.
 */
export default config => (dispatch, getState) => {
  const { deviations: { details: { id } } } = getState();

  dispatch(
    createFetchAction(
      GET,
      SERVER_ROUTE_DEVIATIONS_DETAILS.replace(ID_PARAM, id),
      getLockState,
      LOCK_DEVIATION_DETAILS,
      deviationsDetailsLoadDataActionCreator,
      config,
      paramsHandler,
    ),
  );
};
