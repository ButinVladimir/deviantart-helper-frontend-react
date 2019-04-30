import { DEVIATIONS_DETAILS } from '../../../../consts/server-routes';
import { DEVIATIONS_DETAILS_SET_DATA, DEVIATIONS_DETAILS_SET_DATA_LOCK_TOGGLE } from '../../../actions';
import createFetchGetAction from '../../fetch-get';

/**
 * @global
 * @description
 * Action to set deviation data on deviation details page.
 *
 * @typedef {Object} DeviationsDetailsSetDataAction
 */

/**
 * @global
 * @description
 * Action to change lock on loading page with deviation details.
 *
 * @typedef {Object} DeviationsDetailsSetDataLockToggleAction
 * @property {bool} lock - Should deviations browse page be locked.
 */

/**
 * @description
 * Creates action to change lock on loading page with deviation details.
 *
 * @param {bool} lock - Should deviations browse page be locked.
 * @returns {DeviationsDetailsSetDataLockToggleAction} Action.
 */
const lockToggle = lock => ({
  type: DEVIATIONS_DETAILS_SET_DATA_LOCK_TOGGLE,
  lock,
});

/**
 * @description
 * Creates action to lock page with deviation details.
 *
 * @returns {DeviationsDetailsSetDataLockToggleAction} Action.
 */
const lockActionCreator = () => lockToggle(true);

/**
 * @description
 * Creates action to unlock page with deviation details.
 *
 * @returns {DeviationsDetailsSetDataLockToggleAction} Action.
 */
const unlockActionCreator = () => lockToggle(false);

/**
 * @description
 * Creates action to set deviation data on deviation details page.
 *
 * @param {Object} jsonResponse - The JSON response.
 * @returns {Function} Function to return action.
 */
const deviationsDetailsSetDataActionCreator = ({ deviation, metadata }) => ({
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
  if (state.detailsLoading) {
    return;
  }

  dispatch(lockActionCreator());

  const { id } = state;

  const params = {};
  if (state.timestampBegin) {
    params.timestampbegin = state.timestampBegin;
  }
  if (state.timestampEnd) {
    params.timestampend = state.timestampEnd;
  }

  dispatch(
    createFetchGetAction(
      `${DEVIATIONS_DETAILS}${id}`,
      deviationsDetailsSetDataActionCreator,
      unlockActionCreator,
      config,
      params,
    ),
  );
};
