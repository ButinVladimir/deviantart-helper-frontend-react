import { REVOKE } from '../../actions';

/**
 * @global
 * @description
 * Action to revoke user session.
 *
 * @typedef {Object} RevokeAction
 */

/**
 * @description
 * Creates action to revoke.
 * User request is fetched in REVOKE_START action to avoid circular dependencies.
 * This is action is called by fetch helper directly if response has unauthorized status.
 * Use REVOKE_START action in all other cases.
 *
 * @returns {RevokeAction} Action.
 */
export default () => ({
  type: REVOKE,
});
