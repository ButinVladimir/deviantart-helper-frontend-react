import showErrorActionCreator from './shared/show-error';
import lockToggleActionCreator from './shared/lock-toggle';
import revokeActionCreator from './shared/revoke';
import { GET } from '../../consts/fetch-methods';

/**
 * @description
 * Wrapper to fetch data from server and create appropriate action.
 *
 * @param {string} method - Query method, get or post.
 * @param {string} route - Server route.
 * @param {Function} getLockValue - Function to get the value of the lock.
 * @param {string} lock - The lock name.
 * @param {(jsonResponse: Function) => Object} successActionCreator
 * - Function to create action when the result is successful.
 * @param {Config} config - The config.
 * @param {Function} paramsHandler - The params.
 * @returns {Function} Async function for Redux.
 */
export default (
  method,
  route,
  getLockValue,
  lock,
  successActionCreator,
  config,
  paramsHandler = () => ({}),
) => async (dispatch, getState) => {
  try {
    const state = getState();
    if (getLockValue(state)) {
      return;
    }

    dispatch(lockToggleActionCreator(lock, true));

    const url = new URL(`${config.serverUrl}${route}`);
    const params = paramsHandler(state);
    const fetchOptions = {
      mode: 'cors',
      credentials: 'include',
      method,
    };

    if (method === GET) {
      Object.keys(params).forEach(property => url.searchParams.append(property, params[property]));
    } else {
      fetchOptions.body = JSON.stringify(params);
      fetchOptions.headers = {
        'Content-Type': 'application/json',
      };
    }

    const response = await fetch(url, fetchOptions);

    if (response.status === 401) {
      dispatch(lockToggleActionCreator(lock, false));
      dispatch(revokeActionCreator());

      return;
    }

    if (response.status !== 200 && response.status !== 304) {
      throw new Error(await response.text());
    }

    const jsonResponse = await response.json();
    dispatch(successActionCreator(jsonResponse));
  } catch (e) {
    dispatch(showErrorActionCreator(e.message));
    console.error(e);
  } finally {
    dispatch(lockToggleActionCreator(lock, false));
  }
};
