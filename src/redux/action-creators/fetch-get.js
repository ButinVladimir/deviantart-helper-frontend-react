import showErrorActionCreator from './shared/show-error';
import revokeActionCreator from './shared/revoke';

/**
 * @description
 * Wrapper to fetch data from server and create appropriate action.
 *
 * @param {string} route - Server route.
 * @param {(jsonResponse: Function) => Object} createAction - Function to create action.
 * @param {Config} config - The config.
 * @param {Object} params - The params.
 * @returns {Function} Async function for Redux.
 */
export default (route, createAction, config, params = {}) => async (dispatch) => {
  try {
    const url = new URL(`${config.serverUrl}${route}`);
    Object.keys(params).forEach(property => url.searchParams.append(property, params[property]));

    const response = await fetch(
      url,
      {
        mode: 'cors',
        credentials: 'include',
        method: 'get',
      },
    );

    if (response.status === 401) {
      dispatch(revokeActionCreator());

      return;
    }

    if (response.status !== 200 && response.status !== 304) {
      throw new Error(await response.text());
    }

    const jsonResponse = await response.json();
    dispatch(createAction(jsonResponse));
  } catch (e) {
    dispatch(showErrorActionCreator(e.message));
    console.error(e);
  }
};
