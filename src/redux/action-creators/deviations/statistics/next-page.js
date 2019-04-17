import { loadPage } from './load-page';

/**
 * @global
 * @description
 * Loads next page with deviations to get statistics.
 *
 * @param {Config} config - The config.
 */
export default config => (dispatch, getState) => {
  const state = getState();

  dispatch(loadPage(state.deviations.statistics.page + 1, config));
};
