import { loadPage } from './browse';

export default config => (dispatch, getState) => {
  const state = getState();

  if (state.deviations.pageBrowse > 0) {
    dispatch(loadPage(state.deviations.pageBrowse - 1, config));
  }
};
