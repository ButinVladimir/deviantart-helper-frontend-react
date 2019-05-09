import * as actions from '../../actions';

/**
 * @description
 * Toggle deviation selection reducer.
 *
 * @param {DeviationsCommonState} deviationsCommonState - Deviations common state.
 * @param {DeviationsCommonToggleSelectionAction} action - The action.
 * @returns {DeviationsCommonState} New deviations common state.
 */
const toggleSelection = (deviationsCommonState, action) => ({
  selectedIds: deviationsCommonState.selectedIds.includes(action.id)
    ? deviationsCommonState.selectedIds.filter(id => id !== action.id)
    : [...deviationsCommonState.selectedIds, action.id],
});

/**
 * @description
 * Deviations browse page state reducer.
 *
 * @param {DeviationsCommonState} deviationsCommonState - Deviations common state.
 * @param {SharedState} sharedState - Shared state.
 * @param {Object} action - The action.
 * @returns {DeviationsCommonState} New deviations common state.
 */
export default (deviationsCommonState, sharedState, action) => {
  let difference = null;

  switch (action.type) {
    case actions.DEVIATIONS_COMMON_TOGGLE_SELECTION:
      difference = toggleSelection(deviationsCommonState, action);
      break;

    default:
  }

  return difference !== null
    ? Object.assign({}, deviationsCommonState, difference)
    : deviationsCommonState;
};
