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
 * User request is fetched in REVOKE action to avoid circular dependencies.
 * This action is called by fetch helper directly if the response has unauthorized status.
 * Use REVOKE action in all other cases.
 *
 * @returns {RevokeAction} Action.
 */
export default () => ({
  type: REVOKE,
});
