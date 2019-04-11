import { USER_REVOKE } from '../../actions';

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
 *
 * @returns {RevokeAction} Action.
 */
export default () => ({
  type: USER_REVOKE,
});
