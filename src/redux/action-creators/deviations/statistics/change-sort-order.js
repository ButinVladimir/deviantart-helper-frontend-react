import { DEVIATIONS_STATISTICS_CHANGE_SORT_ORDER } from '../../../actions';

/**
 * @global
 * @description
 * Action to change sort order value on deviations statistics page.
 *
 * @typedef {Object} DeviationsStatisticsChangeSortOrderAction
 */

/**
 * @description
 * Creates action to change sort order value on deviations statistics page.
 *
 * @param {string} sortOrder - Sort order value.
 * @returns {DeviationsStatisticsChangeSortOrderAction} Action.
 */
export default sortOrder => ({
  type: DEVIATIONS_STATISTICS_CHANGE_SORT_ORDER,
  sortOrder,
});
