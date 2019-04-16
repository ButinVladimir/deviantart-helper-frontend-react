import { DEVIATIONS_BROWSE_CHANGE_TITLE } from '../../../actions';

/**
 * @global
 * @description
 * Action to change title value on deviations page.
 *
 * @typedef {Object} DeviationsChangeTitleAction
 */

/**
 * @description
 * Creates action to change title value on deviations page.
 *
 * @param {string} title - Title value.
 * @returns {DeviationsChangeTitleAction} Action.
 */
export default title => ({
  type: DEVIATIONS_BROWSE_CHANGE_TITLE,
  title,
});
