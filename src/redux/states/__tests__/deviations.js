import createDefaultDeviationsState from '../deviations';
import createDefaultDeviationsBrowseState from '../deviations/browse';
import createDefaultDeviationsDetailsState from '../deviations/details';
import createDefaultDeviationsStatisticsState from '../deviations/statistics';
import createDefaultDeviationsTotalState from '../deviations/total';
import createDefaultDeviationsChartState from '../deviations/chart';
import createDefaultDeviationsCommonState from '../deviations/common';

jest.mock('../deviations/browse', () => jest.fn());
jest.mock('../deviations/details', () => jest.fn());
jest.mock('../deviations/statistics', () => jest.fn());
jest.mock('../deviations/total', () => jest.fn());
jest.mock('../deviations/chart', () => jest.fn());
jest.mock('../deviations/common', () => jest.fn());

describe('Default deviations state', () => {
  it('can be created without errors', () => {
    const state = createDefaultDeviationsState();

    expect(createDefaultDeviationsBrowseState).toHaveBeenCalledTimes(1);
    expect(createDefaultDeviationsDetailsState).toHaveBeenCalledTimes(1);
    expect(createDefaultDeviationsStatisticsState).toHaveBeenCalledTimes(1);
    expect(createDefaultDeviationsTotalState).toHaveBeenCalledTimes(1);
    expect(createDefaultDeviationsChartState).toHaveBeenCalledTimes(1);
    expect(createDefaultDeviationsCommonState).toHaveBeenCalledTimes(1);
    expect(state).toMatchObject({});
  });
});
