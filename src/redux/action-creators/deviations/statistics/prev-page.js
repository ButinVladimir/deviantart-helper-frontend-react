import { loadPage } from './load-page';

/**
 * @global
 * @description
 * Loads previous page with deviations to get statistics.
 *
 * @param {Config} config - The config.
 */
export default config => (dispatch, getState) => {
  const state = getState();

  if (state.deviations.statistics.page > 0) {
    dispatch(loadPage(state.deviations.statistics.page - 1, config));
  }
};
