import { DEVIATIONS_STATISTICS_CHANGE_SORT_FIELD } from '../../../actions';

/**
 * @global
 * @description
 * Action to change sort field value on deviations statistics page.
 *
 * @typedef {Object} DeviationsStatisticsChangeSortFieldAction
 */

/**
 * @description
 * Creates action to change sort field value on deviations statistics page.
 *
 * @param {string} sortField - Sort field value.
 * @returns {DeviationsStatisticsChangeSortFieldAction} Action.
 */
export default sortField => ({
  type: DEVIATIONS_STATISTICS_CHANGE_SORT_FIELD,
  sortField,
});
