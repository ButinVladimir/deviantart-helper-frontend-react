import { DEVIATIONS_COMMON_TOGGLE_SELECTION } from '../../../actions';

/**
 * @global
 * @description
 * Action to toggle selection of the deviation.
 *
 * @typedef {Object} DeviationsCommonToggleSelectionAction
 */

/**
 * @description
 * Creates action to toggle selection of the deviation.
 *
 * @param {string} id - ID value.
 * @returns {DeviationsCommonToggleSelectionAction} Action.
 */
export default id => ({
  type: DEVIATIONS_COMMON_TOGGLE_SELECTION,
  id,
});
