import { GET } from '../../../consts/fetch-methods';
import { LOCK_REVOKE } from '../../../consts/locks';
import { SERVER_ROUTE_AUTH_REVOKE } from '../../../consts/server-routes';
import createFetchAction from '../fetch';
import revokeActionCreator from './revoke';

/**
 * @description
 * Returns the state of the lock.
 *
 * @param {Object} state - The redux state.
 * @returns {boolean} The state of the lock.
 */
export const getLockState = state => state.shared.revokeLoading;

/**
 * @description
 * Revokes user session.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export default config => createFetchAction(
  GET,
  SERVER_ROUTE_AUTH_REVOKE,
  getLockState,
  LOCK_REVOKE,
  revokeActionCreator,
  config,
);
