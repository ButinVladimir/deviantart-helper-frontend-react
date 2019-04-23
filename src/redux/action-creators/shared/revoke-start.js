import { REVOKE_START } from '../../actions';
import revokeActionCreator from './revoke';
import { AUTH_REVOKE } from '../../../consts/server-routes';
import createFetchAction from '../fetch-get';
import revokeFinishActionCreator from './revoke-finish';

/**
 * @global
 * @description
 * Action to start revoking user session.
 *
 * @typedef {Object} RevokeStartAction
 */

/**
 * @description
 * Creates action to start revoking user session.
 *
 * @returns {RevokeStartAction} Action.
 */
const revokeStartActionCreator = () => ({
  type: REVOKE_START,
});

/**
 * @description
 * Revokes user session.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export default config => async (dispatch) => {
  dispatch(revokeStartActionCreator());

  dispatch(createFetchAction(
    AUTH_REVOKE,
    revokeActionCreator,
    revokeFinishActionCreator,
    config,
  ));
};
