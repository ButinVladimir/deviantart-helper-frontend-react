import * as actions from '../../actions';
import { LOCK_START_LOADING_DATA } from '../../../consts/locks';

/**
 * @description
 * Loading deviations lock toggle reducer.
 *
 * @param {LockToggleAction} action - The action.
 * @returns {DeviationsCommonState} New deviations common state.
 */
const loadLockToggle = action => ({
  deviationsLoading: action.value,
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
    case actions.LOCK_TOGGLE:
      if (action.lock === LOCK_START_LOADING_DATA) {
        difference = loadLockToggle(action);
      }
      break;

    default:
  }

  return difference !== null
    ? Object.assign({}, deviationsCommonState, difference)
    : deviationsCommonState;
};
