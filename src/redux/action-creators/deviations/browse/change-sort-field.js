import { DEVIATIONS_BROWSE_CHANGE_SORT_FIELD } from '../../../actions';

/**
 * @global
 * @description
 * Action to change sort field value on deviations browse page.
 *
 * @typedef {Object} DeviationsBrowseChangeSortFieldAction
 */

/**
 * @description
 * Creates action to change sort field value on deviations browse page.
 *
 * @param {string} sortField - Sort field value.
 * @returns {DeviationsBrowseChangeSortFieldAction} Action.
 */
export default sortField => ({
  type: DEVIATIONS_BROWSE_CHANGE_SORT_FIELD,
  sortField,
});
