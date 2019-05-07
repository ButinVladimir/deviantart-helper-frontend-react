import { DEVIATIONS_DETAILS_CHANGE_TAB } from '../../../actions';
import { CHART } from '../../../../consts/tabs';
import deviationsDetailsLoadMetadataActionCreator from './load-metadata';

/**
 * @global
 * @description
 * Action to change active tab on deviations details page.
 *
 * @typedef {Object} DeviationsDetailsChangeTabAction
 */

/**
 * @description
 * Creates action to change active tab on deviations details page.
 *
 * @param {string} tab - Tab value.
 * @returns {DeviationsDetailsChangeTabAction} Action.
 */
const deviationsDetailsChangeTabActionCreator = tab => ({
  type: DEVIATIONS_DETAILS_CHANGE_TAB,
  tab,
});

/**
 * @description
 * Wrapper for action creator to load metadata only if necessary.
 *
 * @param {string} tab - Tab value.
 * @param {Config} config - The config.
 * @returns {Function} Action creator.
 */
export default (tab, config) => (dispatch, getState) => {
  const { deviations: { details: state } } = getState();
  if (state.detailsLoading || state.metadataLoading) {
    return;
  }

  dispatch(deviationsDetailsChangeTabActionCreator(tab));
  if (tab === CHART && state.metadata === null) {
    dispatch(deviationsDetailsLoadMetadataActionCreator(config));
  }
};
