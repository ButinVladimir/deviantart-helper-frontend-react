import { DATA_SET_VIEWS } from '../../consts/data-sets';
import { ROUND_PERIOD_1_DAY } from '../../consts/round-periods';

/**
 * @global
 * @description
 * State of deviations chart.
 *
 * @typedef {Object} DeviationChartState
 * @property {string} dataSet - Selected data set.
 * @property {number} roundPeriod - Rounding period for data.
 * @property {boolean} showTime - Show time.
 */

/**
 * @description
 * Creates default deviations chart state.
 *
 * @returns {DeviationChartState} Default state.
 */
export default () => ({
  dataSet: DATA_SET_VIEWS,
  roundPeriod: ROUND_PERIOD_1_DAY,
  showTime: false,
});
