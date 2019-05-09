/**
 * @global
 * @description
 * State of deviations.
 *
 * @typedef {Object} DeviationCommonState
 * @property {string[]} selectedIds - Array of ids of selected deviations.
 */

/**
 * @description
 * Creates default deviations common state.
 *
 * @returns {DeviationCommonState} Default state.
 */
export default () => ({
  selectedIds: [],
});
