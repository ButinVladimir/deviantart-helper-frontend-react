import { GET } from '../../../consts/fetch-methods';
import { LOCK_REVOKE } from '../../../consts/locks';
import { SERVER_ROUTE_AUTH_REVOKE } from '../../../consts/server-routes';
import createFetchAction from '../fetch';
import revokeActionCreator from './revoke';

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
  state => state.shared.revokeLoading,
  LOCK_REVOKE,
  revokeActionCreator,
  config,
);
