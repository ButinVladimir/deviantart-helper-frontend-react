import createDefaultDeviationsChartState from '../chart';
import { DATA_SET_VIEWS } from '../../../../consts/data-sets';
import { ROUND_PERIOD_1_DAY } from '../../../../consts/round-periods';

describe('Default deviations chart state', () => {
  it('can be created without errors', () => {
    const state = createDefaultDeviationsChartState();

    expect(state).toEqual({
      dataSet: DATA_SET_VIEWS,
      roundPeriod: ROUND_PERIOD_1_DAY,
      showTime: false,
    });
  });
});
