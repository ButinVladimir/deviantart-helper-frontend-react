import { ERROR_SHOW } from '../../actions';

/**
 * @global
 * @description
 * Action to show error.
 *
 * @typedef {Object} ShowErrorAction
 *
 * @param {string} errorMessage - The error message.
 */

/**
 * @description
 * Creates action to show error.
 *
 * @param {string} errorMessage - The error message.
 * @returns {ShowErrorAction} Action.
 */
export default errorMessage => ({
  type: ERROR_SHOW,
  errorMessage,
});
