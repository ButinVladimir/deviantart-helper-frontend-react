import { DEVIATIONS_STATISTICS_CHANGE_TAB } from '../../../actions';
import { CHART } from '../../../../consts/tabs';
import deviationsStatisticsLoadMetadataActionCreator from './load-metadata';

/**
 * @global
 * @description
 * Action to change active tab on deviations statistics page.
 *
 * @typedef {Object} DeviationsStatisticsChangeTabAction
 */

/**
 * @description
 * Creates action to change active tab on deviations statistics page.
 *
 * @param {string} tab - Tab value.
 * @returns {DeviationsStatisticsChangeTabAction} Action.
 */
const deviationsStatisticsChangeTabActionCreator = tab => ({
  type: DEVIATIONS_STATISTICS_CHANGE_TAB,
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
  const { deviations: { statistics: state } } = getState();
  if (state.pageLoading) {
    return;
  }

  dispatch(deviationsStatisticsChangeTabActionCreator(tab));
  if (tab === CHART && state.metadata === null) {
    dispatch(deviationsStatisticsLoadMetadataActionCreator(config));
  }
};
