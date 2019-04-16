import createDefaultDeviationsBrowseState from './deviations-browse';
import createDefaultDeviationsDetailsState from './deviations-details';

/**
 * @global
 * @description
 * State of deviations pages.
 *
 * @typedef {Object} DeviationState
 * @property {DeviationBrowseState} browse - Deviations browse page state.
 * @property {DeviationDetailsState} details - Deviations details page state.
 */

/**
 * @description
 * Creates default deviations state.
 *
 * @returns {DeviationState} Default state.
 */
export default () => ({
  browse: createDefaultDeviationsBrowseState(),
  details: createDefaultDeviationsDetailsState(),
});
