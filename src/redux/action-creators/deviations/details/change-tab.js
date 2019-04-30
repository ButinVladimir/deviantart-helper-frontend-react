import { DEVIATIONS_DETAILS_CHANGE_TAB } from '../../../actions';

/**
 * @global
 * @description
 * Action to change active tab on deviations details page.
 *
 * @typedef {Object} DeviationsDetailsChangeTabAction
 */

/**
 * @description
 * Creates action to change active tab on deviations details page.
 *
 * @param {string} tab - Tab value.
 * @returns {DeviationsDetailsChangeTabAction} Action.
 */
export default tab => ({
  type: DEVIATIONS_DETAILS_CHANGE_TAB,
  tab,
});
