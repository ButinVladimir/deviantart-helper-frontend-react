import { DEVIATIONS_BROWSE_CHANGE_SORT_ORDER } from '../../../actions';

/**
 * @global
 * @description
 * Action to change sort order value on deviations browse page.
 *
 * @typedef {Object} DeviationsBrowseChangeSortOrderAction
 */

/**
 * @description
 * Creates action to change sort order value on deviations browse page.
 *
 * @param {string} sortOrder - Sort order value.
 * @returns {DeviationsBrowseChangeSortOrderAction} Action.
 */
export default sortOrder => ({
  type: DEVIATIONS_BROWSE_CHANGE_SORT_ORDER,
  sortOrder,
});
