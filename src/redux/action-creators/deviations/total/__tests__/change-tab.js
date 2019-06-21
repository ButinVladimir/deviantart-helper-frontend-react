import deviationsTotalChangeTab, { deviationsTotalChangeTabActionCreator } from '../change-tab';
import createDefaultState from '../../../../states/state';
import Config from '../../../../../config/config';
import deviationsTotalLoadData from '../load-data';
import deviationsTotalLoadMetadata from '../load-metadata';
import { DEVIATIONS_TOTAL_CHANGE_TAB } from '../../../../actions';
import { CHART, STATS } from '../../../../../consts/tabs';

jest.mock('../load-data', () => jest.fn());
jest.mock('../load-metadata', () => jest.fn());

describe('DeviationsTotalChangeTab action creator', () => {
  it('can create action', () => {
    const tab = CHART;
    const action = deviationsTotalChangeTabActionCreator(tab);

    expect(action).toEqual({
      type: DEVIATIONS_TOTAL_CHANGE_TAB,
      tab,
    });
  });

  it('will not change tab if lock is enabled', () => {
    const tab = CHART;
    const state = {
      ...createDefaultState(),
      deviations: {
        total: {
          totalLoading: true,
        },
      },
    };
    const config = new Config();
    const dispatch = jest.fn();
    deviationsTotalChangeTab(tab, config)(
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
        total: {
          totalLoading: false,
          metadata: null,
        },
      },
    };
    const config = new Config();
    const dispatch = jest.fn();
    deviationsTotalChangeTab(tab, config)(
      dispatch,
      () => state,
    );

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0]).toEqual([{
      type: DEVIATIONS_TOTAL_CHANGE_TAB,
      tab,
    }]);
    expect(deviationsTotalLoadMetadata).toHaveBeenCalledWith(config);
  });

  it('will change tab if chart tab is selected and metadata is present', () => {
    const tab = CHART;
    const state = {
      ...createDefaultState(),
      deviations: {
        total: {
          totalLoading: false,
          metadata: [[1, 2], [3, 4]],
        },
      },
    };
    const config = new Config();
    const dispatch = jest.fn();
    deviationsTotalChangeTab(tab, config)(
      dispatch,
      () => state,
    );

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0]).toEqual([{
      type: DEVIATIONS_TOTAL_CHANGE_TAB,
      tab,
    }]);
  });

  it('will change tab and load data if stats tab selected and data is not loaded', () => {
    const tab = STATS;
    const state = {
      ...createDefaultState(),
      deviations: {
        total: {
          totalLoading: false,
          statsLoaded: false,
        },
      },
    };
    const config = new Config();
    const dispatch = jest.fn();
    deviationsTotalChangeTab(tab, config)(
      dispatch,
      () => state,
    );

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0]).toEqual([{
      type: DEVIATIONS_TOTAL_CHANGE_TAB,
      tab,
    }]);
    expect(deviationsTotalLoadData).toHaveBeenCalledWith(config);
  });

  it('will change tab if stats tab is selected and data is loaded', () => {
    const tab = STATS;
    const state = {
      ...createDefaultState(),
      deviations: {
        total: {
          totalLoading: false,
          statsLoaded: true,
          views: 1,
          favourites: 2,
          comments: 3,
          downloads: 4,
        },
      },
    };
    const config = new Config();
    const dispatch = jest.fn();
    deviationsTotalChangeTab(tab, config)(
      dispatch,
      () => state,
    );

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0]).toEqual([{
      type: DEVIATIONS_TOTAL_CHANGE_TAB,
      tab,
    }]);
  });
});
