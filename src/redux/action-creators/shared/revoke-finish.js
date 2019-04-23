import { REVOKE_FINISH } from '../../actions';

/**
 * @global
 * @description
 * Action to finish revoking user session.
 *
 * @typedef {Object} RevokeFinishAction
 */

/**
 * @description
 * Creates action to finish revoking user session.
 *
 * @returns {RevokeFinishAction} Action.
 */
export default () => ({
  type: REVOKE_FINISH,
});
