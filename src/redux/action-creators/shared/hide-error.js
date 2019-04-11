import { ERROR_HIDE } from '../../actions';

/**
 * @global
 * @description
 * Action to hide error.
 *
 * @typedef {Object} HideErrorAction
 */

/**
 * @description
 * Creates action to hide error.
 *
 * @returns {HideErrorAction} Action.
 */
export default () => ({
  type: ERROR_HIDE,
});
