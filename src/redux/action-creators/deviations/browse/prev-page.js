import { loadPage } from './load-page';

/**
 * @global
 * @description
 * Loads previous page with deviations to browse.
 *
 * @param {Config} config - The config.
 */
export default config => (dispatch, getState) => {
  const state = getState();

  if (state.deviations.browse.page > 0) {
    dispatch(loadPage(state.deviations.browse.page - 1, config));
  }
};
