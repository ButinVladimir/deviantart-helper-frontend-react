import deviationsReducer from '../deviations';
import deviationsBrowseReducer from '../deviations/browse';
import deviationsDetailsReducer from '../deviations/details';
import deviationsStatisticsReducer from '../deviations/statistics';
import deviationsTotalReducer from '../deviations/total';
import deviationsChartReducer from '../deviations/chart';
import deviationsCommonReducer from '../deviations/common';

jest.mock('../deviations/browse', () => jest.fn());
jest.mock('../deviations/details', () => jest.fn());
jest.mock('../deviations/statistics', () => jest.fn());
jest.mock('../deviations/total', () => jest.fn());
jest.mock('../deviations/chart', () => jest.fn());
jest.mock('../deviations/common', () => jest.fn());

describe('Deviations reducer', () => {
  it('can be created without errors', () => {
    const state = deviationsReducer({}, {}, {});

    expect(deviationsBrowseReducer).toHaveBeenCalledTimes(1);
    expect(deviationsDetailsReducer).toHaveBeenCalledTimes(1);
    expect(deviationsStatisticsReducer).toHaveBeenCalledTimes(1);
    expect(deviationsTotalReducer).toHaveBeenCalledTimes(1);
    expect(deviationsChartReducer).toHaveBeenCalledTimes(1);
    expect(deviationsCommonReducer).toHaveBeenCalledTimes(1);
    expect(state).toMatchObject({});
  });
});
