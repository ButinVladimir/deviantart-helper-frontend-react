import deviationsBrowseReducer from './deviations-browse';
import deviationsDetailsReducer from './deviations-details';

/**
 * @description
 * Deviations state reducer.
 *
 * @param {DeviationsState} deviationsState - Deviations state.
 * @param {SharedState} sharedState - Shared state.
 * @param {Object} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
export default (deviationsState, sharedState, action) => ({
  browse: deviationsBrowseReducer(deviationsState.browse, sharedState, action),
  details: deviationsDetailsReducer(deviationsState.details, sharedState, action),
});
