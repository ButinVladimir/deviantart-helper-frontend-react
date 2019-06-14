import { DEVIATIONS_CHART_CHANGE_FORM_FIELD_VALUES } from '../../../actions';

/**
 * @global
 * @description
 * Action to change form field values for deviations chart.
 *
 * @typedef {Object} DeviationsChartChangeFormFieldValuesAction
 */

/**
 * @description
 * Creates action to change form field values for deviations chart.
 *
 * @param {Object} values - New form fields values.
 * @returns {DeviationsChartChangeFormFieldValuesAction} Action.
 */
const changeFormFieldValues = values => ({
  type: DEVIATIONS_CHART_CHANGE_FORM_FIELD_VALUES,
  ...values,
});

/**
 * @description
 * Creates action to change data set value for deviations chart.
 *
 * @param {number} dataSet - Data set value.
 * @returns {DeviationsChartChangeFormFieldValuesAction} Action.
 */
export const changeDataSetActionCreator = dataSet => changeFormFieldValues({
  dataSet,
});

/**
 * @description
 * Creates action to change round period value for deviations chart.
 *
 * @param {number} roundPeriod - Data set value.
 * @returns {DeviationsChartChangeFormFieldValuesAction} Action.
 */
export const changeRoundPeriodActionCreator = roundPeriod => changeFormFieldValues({
  roundPeriod: parseInt(roundPeriod, 10),
});

/**
 * @description
 * Creates action to change show time value for deviations chart.
 *
 * @param {boolean} showTime - Show time value.
 * @returns {DeviationsChartChangeFormFieldValuesAction} Action.
 */
export const changeShowTimeActionCreator = showTime => changeFormFieldValues({
  showTime,
});
