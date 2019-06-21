import deviationsStatisticsChangeTab, { deviationsStatisticsChangeTabActionCreator } from '../change-tab';
import createDefaultState from '../../../../states/state';
import Config from '../../../../../config/config';
import deviationsStatisticsLoadMetadata from '../load-metadata';
import { DEVIATIONS_STATISTICS_CHANGE_TAB } from '../../../../actions';
import { CHART, LIST } from '../../../../../consts/tabs';

jest.mock('../load-metadata', () => jest.fn());

describe('DeviationsStatisticsChangeTab action creator', () => {
  it('can create action', () => {
    const tab = CHART;
    const action = deviationsStatisticsChangeTabActionCreator(tab);

    expect(action).toEqual({
      type: DEVIATIONS_STATISTICS_CHANGE_TAB,
      tab,
    });
  });

  it('will not change tab if lock is enabled', () => {
    const tab = CHART;
    const state = {
      ...createDefaultState(),
      deviations: {
        statistics: {
          pageLoading: true,
        },
      },
    };
    const config = new Config();
    const dispatch = jest.fn();
    deviationsStatisticsChangeTab(tab, config)(
      dispatch,
      () => state,
    );

    expect(dispatch).not.toHaveBeenCalled();
  });

  it('will change tab and load metadata if chart tab selected and metadata is missing', () => {
    const tab = CHART;
    const state = {
      ...createDefaultState(),
      deviations: {
        statistics: {
          metadata: null,
        },
      },
    };
    const config = new Config();
    const dispatch = jest.fn();
    deviationsStatisticsChangeTab(tab, config)(
      dispatch,
      () => state,
    );

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0]).toEqual([{
      type: DEVIATIONS_STATISTICS_CHANGE_TAB,
      tab,
    }]);
    expect(deviationsStatisticsLoadMetadata).toHaveBeenCalledWith(config);
  });

  it('will change tab if list tab selected and metadata is present', () => {
    const tab = LIST;
    const state = {
      ...createDefaultState(),
      deviations: {
        statistics: {
          metadata: [],
          tab: CHART,
        },
      },
    };
    const config = new Config();
    const dispatch = jest.fn();
    deviationsStatisticsChangeTab(tab, config)(
      dispatch,
      () => state,
    );

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0]).toEqual([{
      type: DEVIATIONS_STATISTICS_CHANGE_TAB,
      tab,
    }]);
  });

  it('will change tab if chart tab selected and metadata is present', () => {
    const tab = CHART;
    const state = {
      ...createDefaultState(),
      deviations: {
        statistics: {
          metadata: [],
          tab: LIST,
        },
      },
    };
    const config = new Config();
    const dispatch = jest.fn();
    deviationsStatisticsChangeTab(tab, config)(
      dispatch,
      () => state,
    );

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0]).toEqual([{
      type: DEVIATIONS_STATISTICS_CHANGE_TAB,
      tab,
    }]);
  });
});
