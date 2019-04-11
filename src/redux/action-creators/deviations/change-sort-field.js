import { DEVIATIONS_CHANGE_SORT_FIELD } from '../../actions';

/**
 * @global
 * @description
 * Action to change sort field value on deviations page.
 *
 * @typedef {Object} DeviationsChangeSortFieldAction
 */

/**
 * @description
 * Creates action to change sort field value on deviations page.
 *
 * @param {string} sortField - Sort field value.
 * @returns {DeviationsChangeSortFieldAction} Action.
 */
export default sortField => ({
  type: DEVIATIONS_CHANGE_SORT_FIELD,
  sortField,
});
