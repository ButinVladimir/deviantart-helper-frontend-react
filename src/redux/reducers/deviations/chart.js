import * as actions from '../../actions';
import filterAction from '../../../helpers/filter-action';

const formFields = [
  'dataSet',
  'roundPeriod',
  'showTime',
];

/**
 * @description
 * Change chart type value reducer.
 *
 * @param {DeviationsChartChangeFormFieldValuesAction} action - The action.
 * @returns {DeviationChartState} New deviations chart state.
 */
const changeFormFieldValues = action => ({
  ...filterAction(action, formFields),
});

/**
 * @description
 * Deviations chart state reducer.
 *
 * @param {DeviationChartState} deviationsChartState - Deviations chart state.
 * @param {SharedState} sharedState - Shared state.
 * @param {Object} action - The action.
 * @returns {DeviationChartState} New deviations chart state.
 */
export default (deviationsChartState, sharedState, action) => {
  let difference = null;

  switch (action.type) {
    case actions.DEVIATIONS_CHART_CHANGE_FORM_FIELD_VALUES:
      difference = changeFormFieldValues(action);
      break;

    default:
  }

  return difference !== null
    ? { ...deviationsChartState, ...difference }
    : deviationsChartState;
};
