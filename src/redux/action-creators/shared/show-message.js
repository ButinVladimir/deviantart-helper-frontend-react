import { MESSAGE_SHOW } from '../../actions';

/**
 * @global
 * @description
 * Action to show message.
 *
 * @typedef {Object} ShowMessageAction
 *
 * @param {string} message - The message.
 */

/**
 * @description
 * Creates action to show message.
 *
 * @param {string} message - The message.
 * @returns {ShowMessageAction} Action.
 */
export default message => ({
  type: MESSAGE_SHOW,
  message,
});
