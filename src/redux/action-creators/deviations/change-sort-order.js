import { DEVIATIONS_CHANGE_SORT_ORDER } from '../../actions';

/**
 * @global
 * @description
 * Action to change sort order value on deviations page.
 *
 * @typedef {Object} DeviationsChangeSortOrderAction
 */

/**
 * @description
 * Creates action to change sort order value on deviations page.
 *
 * @param {string} sortOrder - Sort order value.
 * @returns {DeviationsChangeSortOrderAction} Action.
 */
export default sortOrder => ({
  type: DEVIATIONS_CHANGE_SORT_ORDER,
  sortOrder,
});
