import * as deviationsChartForm from '../change-form-field-values';
import { DEVIATIONS_CHART_CHANGE_FORM_FIELD_VALUES } from '../../../../actions';
import { DATA_SET_DOWNLOADS } from '../../../../../consts/data-sets';
import { ROUND_PERIOD_12_HOURS } from '../../../../../consts/round-periods';

describe('DeviationsCharthangeFormFieldValues action creator', () => {
  it('can change data set', () => {
    const dataSet = DATA_SET_DOWNLOADS;
    const action = deviationsChartForm.changeDataSetActionCreator(dataSet);

    expect(action).toEqual({
      type: DEVIATIONS_CHART_CHANGE_FORM_FIELD_VALUES,
      dataSet,
    });
  });

  it('can change round period', () => {
    const roundPeriod = ROUND_PERIOD_12_HOURS;
    const action = deviationsChartForm.changeRoundPeriodActionCreator(roundPeriod);

    expect(action).toEqual({
      type: DEVIATIONS_CHART_CHANGE_FORM_FIELD_VALUES,
      roundPeriod,
    });
  });

  it('can change show time', () => {
    const showTime = true;
    const action = deviationsChartForm.changeShowTimeActionCreator(showTime);

    expect(action).toEqual({
      type: DEVIATIONS_CHART_CHANGE_FORM_FIELD_VALUES,
      showTime,
    });
  });

  it('can change show differences', () => {
    const showDifferences = true;
    const action = deviationsChartForm.changeShowDifferencesActionCreator(showDifferences);

    expect(action).toEqual({
      type: DEVIATIONS_CHART_CHANGE_FORM_FIELD_VALUES,
      showDifferences,
    });
  });
});
