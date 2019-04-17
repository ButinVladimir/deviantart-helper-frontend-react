import { DEVIATIONS_STATISTICS_CHANGE_CHART_TYPE } from '../../../actions';

/**
 * @global
 * @description
 * Action to change chart type value on deviations statistics page.
 *
 * @typedef {Object} DeviationsStatisticsChangeChartTypeAction
 */

/**
 * @description
 * Creates action to change chart type value on deviations statistics page.
 *
 * @param {string} chartType - Chart type value.
 * @returns {DeviationsStatisticsChangeChartTypeAction} Action.
 */
export default chartType => ({
  type: DEVIATIONS_STATISTICS_CHANGE_CHART_TYPE,
  chartType,
});
