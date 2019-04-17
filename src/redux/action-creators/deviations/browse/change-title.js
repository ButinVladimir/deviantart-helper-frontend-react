import { DEVIATIONS_BROWSE_CHANGE_TITLE } from '../../../actions';

/**
 * @global
 * @description
 * Action to change title value on deviations browse page.
 *
 * @typedef {Object} DeviationsBrowseChangeTitleAction
 */

/**
 * @description
 * Creates action to change title value on deviations browse page.
 *
 * @param {string} title - Title value.
 * @returns {DeviationsBrowseChangeTitleAction} Action.
 */
export default title => ({
  type: DEVIATIONS_BROWSE_CHANGE_TITLE,
  title,
});
