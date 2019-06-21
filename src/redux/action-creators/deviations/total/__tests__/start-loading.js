import deviationsTotalStartLoading, { deviationsTotalStartLoadingActionCreator } from '../start-loading';
import createDefaultState from '../../../../states/state';
import Config from '../../../../../config/config';
import deviationsTotalLoadData from '../load-data';
import deviationsTotalLoadMetadata from '../load-metadata';
import { DEVIATIONS_TOTAL_START_LOADING } from '../../../../actions';
import { CHART, STATS } from '../../../../../consts/tabs';

jest.mock('../load-data', () => jest.fn());
jest.mock('../load-metadata', () => jest.fn());

describe('DeviationsTotalStartLoading action creator', () => {
  it('can create action', () => {
    const action = deviationsTotalStartLoadingActionCreator();

    expect(action).toEqual({
      type: DEVIATIONS_TOTAL_START_LOADING,
    });
  });

  it('will not start loading if lock is enabled', () => {
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
    deviationsTotalStartLoading(config)(
      dispatch,
      () => state,
    );

    expect(dispatch).not.toHaveBeenCalled();
  });

  it('will start loading data if stats tab selected', () => {
    const state = {
      ...createDefaultState(),
      deviations: {
        total: {
          totalLoading: false,
          tab: STATS,
          statsLoaded: false,
        },
      },
    };
    const config = new Config();
    const dispatch = jest.fn();
    deviationsTotalStartLoading(config)(
      dispatch,
      () => state,
    );

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0]).toEqual([{
      type: DEVIATIONS_TOTAL_START_LOADING,
    }]);
    expect(deviationsTotalLoadData).toHaveBeenCalledWith(config);
  });

  it('will start loading metadata if chart tab selected', () => {
    const state = {
      ...createDefaultState(),
      deviations: {
        total: {
          totalLoading: false,
          tab: CHART,
          metadata: null,
        },
      },
    };
    const config = new Config();
    const dispatch = jest.fn();
    deviationsTotalStartLoading(config)(
      dispatch,
      () => state,
    );

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0]).toEqual([{
      type: DEVIATIONS_TOTAL_START_LOADING,
    }]);
    expect(deviationsTotalLoadMetadata).toHaveBeenCalledWith(config);
  });
});
