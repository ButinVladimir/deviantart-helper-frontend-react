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

  if (state.deviations.pageBrowse > 0) {
    dispatch(loadPage(state.deviations.pageBrowse - 1, config));
  }
};
