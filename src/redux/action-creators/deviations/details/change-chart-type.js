import { DEVIATIONS_DETAILS_CHANGE_CHART_TYPE } from '../../../actions';

/**
 * @global
 * @description
 * Action to change chart type value on deviations details page.
 *
 * @typedef {Object} DeviationsDetailsChangeChartTypeAction
 */

/**
 * @description
 * Creates action to change chart type value on deviations details page.
 *
 * @param {string} chartType - Chart type value.
 * @returns {DeviationsDetailsChangeChartTypeAction} Action.
 */
export default chartType => ({
  type: DEVIATIONS_DETAILS_CHANGE_CHART_TYPE,
  chartType,
});
