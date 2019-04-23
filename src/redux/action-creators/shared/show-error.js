import { ERROR_SHOW } from '../../actions';

/**
 * @global
 * @description
 * Action to show error.
 *
 * @typedef {Object} ShowErrorAction
 *
 * @param {string} message - The error message.
 */

/**
 * @description
 * Creates action to show error.
 *
 * @param {string} message - The error message.
 * @returns {ShowErrorAction} Action.
 */
export default message => ({
  type: ERROR_SHOW,
  message,
});
