import revokeActionCreator from '../shared/revoke';
import { AUTH_REVOKE } from '../../../consts/server-routes';
import createFetchAction from '../fetch-get';

/**
 * @description
 * Revokes user session.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export default config => async (dispatch) => {
  dispatch(createFetchAction(AUTH_REVOKE, revokeActionCreator, config));
};
