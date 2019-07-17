import deviationsChartReducer from '../chart';
import createDefaultSharedState from '../../../states/shared';
import createDefaultDeviationsChartState from '../../../states/deviations/chart';
import revokeActionCreator from '../../../action-creators/shared/revoke';
import * as deviationsChartForm from '../../../action-creators/deviations/chart/change-form-field-values';
import { DATA_SET_DOWNLOADS } from '../../../../consts/data-sets';
import { ROUND_PERIOD_4_HOURS } from '../../../../consts/round-periods';

describe('Deviations chart reducer', () => {
  it('handles changing data set', () => {
    const sharedState = createDefaultSharedState();
    const deviationsChartState = createDefaultDeviationsChartState();

    const dataSet = DATA_SET_DOWNLOADS;
    const action = deviationsChartForm.changeDataSetActionCreator(dataSet);

    const newDeviationsChartState = deviationsChartReducer(
      deviationsChartState,
      sharedState,
      action,
    );

    expect(newDeviationsChartState).not.toBe(deviationsChartState);
    expect(newDeviationsChartState).toEqual({
      ...deviationsChartState,
      dataSet,
    });
  });

  it('handles changing round period', () => {
    const sharedState = createDefaultSharedState();
    const deviationsChartState = createDefaultDeviationsChartState();

    const roundPeriod = ROUND_PERIOD_4_HOURS;
    const action = deviationsChartForm.changeRoundPeriodActionCreator(roundPeriod);

    const newDeviationsChartState = deviationsChartReducer(
      deviationsChartState,
      sharedState,
      action,
    );

    expect(newDeviationsChartState).not.toBe(deviationsChartState);
    expect(newDeviationsChartState).toEqual({
      ...deviationsChartState,
      roundPeriod,
    });
  });

  it('handles changing show time', () => {
    const sharedState = createDefaultSharedState();
    const deviationsChartState = createDefaultDeviationsChartState();

    const showTime = true;
    const action = deviationsChartForm.changeShowTimeActionCreator(showTime);

    const newDeviationsChartState = deviationsChartReducer(
      deviationsChartState,
      sharedState,
      action,
    );

    expect(newDeviationsChartState).not.toBe(deviationsChartState);
    expect(newDeviationsChartState).toEqual({
      ...deviationsChartState,
      showTime,
    });
  });

  it('handles changing show differences', () => {
    const sharedState = createDefaultSharedState();
    const deviationsChartState = createDefaultDeviationsChartState();

    const showDifferences = true;
    const action = deviationsChartForm.changeShowDifferencesActionCreator(showDifferences);

    const newDeviationsChartState = deviationsChartReducer(
      deviationsChartState,
      sharedState,
      action,
    );

    expect(newDeviationsChartState).not.toBe(deviationsChartState);
    expect(newDeviationsChartState).toEqual({
      ...deviationsChartState,
      showDifferences,
    });
  });

  it('handles unrelated action', () => {
    const sharedState = createDefaultSharedState();
    const deviationsChartState = createDefaultDeviationsChartState();

    const action = revokeActionCreator();

    const newDeviationsChartState = deviationsChartReducer(
      deviationsChartState,
      sharedState,
      action,
    );

    expect(newDeviationsChartState).toBe(deviationsChartState);
  });
});
