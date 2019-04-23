import * as actions from '../actions';

/**
 * @description
 * Start loading deviations reducer.
 *
 * @returns {DeviationsCommonState} New deviations common state.
 */
const loadStart = () => ({
  deviationsLoading: true,
});

/**
 * @description
 * Finish loading deviations reducer.
 *
 * @returns {DeviationsCommonState} New deviations common state.
 */
const loadFinish = () => ({
  deviationsLoading: false,
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
    case actions.DEVIATIONS_LOAD_START:
      difference = loadStart();
      break;

    case actions.DEVIATIONS_LOAD_FINISH:
      difference = loadFinish();
      break;

    default:
  }

  return difference !== null
    ? Object.assign({}, deviationsCommonState, difference)
    : deviationsCommonState;
};
