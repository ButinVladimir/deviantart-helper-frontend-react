import { TOGGLE_MENU } from '../../actions';

/**
 * @global
 * @description
 * Action to toggle menu.
 *
 * @typedef {Object} ToggleMenuAction
 */

/**
 * @description
 * Creates action to toggle menu.
 *
 * @returns {ToggleMenuAction} Action.
 */
export default () => ({
  type: TOGGLE_MENU,
});
