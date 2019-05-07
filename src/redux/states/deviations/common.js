/**
 * @global
 * @description
 * State of deviations.
 *
 * @typedef {Object} DeviationCommonState
 * @property {boolean} deviationsLoading - Is deviations data loading.
 * @property {string[]} selectedIds - Array of ids of selected deviations.
 */

/**
 * @description
 * Creates default deviations common state.
 *
 * @returns {DeviationCommonState} Default state.
 */
export default () => ({
  deviationsLoading: false,
  selectedIds: [],
});
