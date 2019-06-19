import { DEVIATIONS_TOTAL_START_LOADING } from '../../../actions';
import { CHART, STATS } from '../../../../consts/tabs';
import deviationsTotalLoadData from './load-data';
import deviationsTotalLoadMetadata from './load-metadata';

/**
 * @global
 * @description
 * Action to start loading on deviations total statistics page.
 *
 * @typedef {Object} DeviationsTotalStartLoadingAction
 */

/**
 * @description
 * Creates action to start loading on deviations total statistics page.
 *
 * @returns {DeviationsTotalStartLoadingAction} Action.
 */
export const deviationsTotalStartLoadingActionCreator = () => ({
  type: DEVIATIONS_TOTAL_START_LOADING,
});

/**
 * @description
 * Wrapper for action creator to start loading data.
 *
 * @param {Config} config - The config.
 * @returns {Function} Action creator.
 */
export default config => (dispatch, getState) => {
  const { deviations: { total: state } } = getState();
  if (state.totalLoading) {
    return;
  }

  dispatch(deviationsTotalStartLoadingActionCreator());

  if (state.tab === STATS) {
    dispatch(deviationsTotalLoadData(config));
  }

  if (state.tab === CHART) {
    dispatch(deviationsTotalLoadMetadata(config));
  }
};
