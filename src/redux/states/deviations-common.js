/**
 * @global
 * @description
 * State of deviations.
 *
 * @typedef {Object} DeviationCommonState
 * @property {boolean} deviationsLoading - Current page.
 */

/**
 * @description
 * Creates default deviations state.
 *
 * @returns {DeviationCommonState} Default state.
 */
export default () => ({
  deviationsLoading: false,
});
