import { loadPage } from './load-page';

/**
 * @global
 * @description
 * Loads next page with deviations to browse.
 *
 * @param {Config} config - The config.
 */
export default config => (dispatch, getState) => {
  const state = getState();

  dispatch(loadPage(state.deviations.pageBrowse + 1, config));
};
