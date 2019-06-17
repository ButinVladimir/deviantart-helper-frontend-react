import { DEVIATIONS_TOTAL_CHANGE_TAB } from '../../../actions';
import { CHART, STATS } from '../../../../consts/tabs';
import deviationsTotalLoadData from './load-data';
import deviationsTotalLoadMetadata from './load-metadata';

/**
 * @global
 * @description
 * Action to change active tab on deviations total statistics page.
 *
 * @typedef {Object} DeviationsTotalChangeTabAction
 */

/**
 * @description
 * Creates action to change active tab on deviations total statistics page.
 *
 * @param {string} tab - Tab value.
 * @returns {DeviationsTotalChangeTabAction} Action.
 */
export const deviationsTotalChangeTabActionCreator = tab => ({
  type: DEVIATIONS_TOTAL_CHANGE_TAB,
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
  const { deviations: { total: state } } = getState();
  if (state.totalLoading) {
    return;
  }

  dispatch(deviationsTotalChangeTabActionCreator(tab));

  if (tab === STATS && state.statsLoaded === false) {
    dispatch(deviationsTotalLoadData(config));
  }

  if (tab === CHART && state.metadata === null) {
    dispatch(deviationsTotalLoadMetadata(config));
  }
};
