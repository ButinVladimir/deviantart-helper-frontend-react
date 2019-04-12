import { DEVIATIONS_DETAILS_SET_ID } from '../../actions';

/**
 * @global
 * @description
 * Action to set id value on deviations details page.
 *
 * @typedef {Object} DeviationsDetailsSetIdAction
 */

/**
 * @description
 * Creates action to change sort field value on deviations page.
 *
 * @param {string} deviationDetailsId - Deviation id value.
 * @returns {DeviationsDetailsSetIdAction} Action.
 */
export default deviationDetailsId => ({
  type: DEVIATIONS_DETAILS_SET_ID,
  deviationDetailsId,
});
