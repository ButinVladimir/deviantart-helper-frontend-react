import { loadPage } from './browse';

export default config => (dispatch, getState) => {
  const state = getState();

  dispatch(loadPage(state.deviations.pageBrowse + 1, config));
};
