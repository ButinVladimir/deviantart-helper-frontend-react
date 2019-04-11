import { MESSAGE_HIDE } from '../../actions';

/**
 * @global
 * @description
 * Action to hide message.
 *
 * @typedef {Object} HideMessageAction
 */

/**
 * @description
 * Creates action to hide message.
 *
 * @returns {HideMessageAction} Action.
 */
export default () => ({
  type: MESSAGE_HIDE,
});
