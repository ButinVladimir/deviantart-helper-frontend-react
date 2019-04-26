import * as actions from '../actions';

/**
 * @description
 * Loading deviations lock toggle reducer.
 *
 * @param {DeviationsLoadLockToggleAction} action - The action.
 * @returns {DeviationsCommonState} New deviations browse state.
 */
const loadLockToggle = action => ({
  deviationsLoading: action.lock,
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
    case actions.DEVIATIONS_LOAD_LOCK_TOGGLE:
      difference = loadLockToggle(action);
      break;

    default:
  }

  return difference !== null
    ? Object.assign({}, deviationsCommonState, difference)
    : deviationsCommonState;
};
