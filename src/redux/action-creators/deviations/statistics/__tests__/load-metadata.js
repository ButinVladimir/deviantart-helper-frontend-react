import loadMetadata, {
  paramsHandler,
  deviationsStatisticsLoadMetadataActionCreator,
  getLockState,
} from '../load-metadata';
import createDefaultState from '../../../../states/state';
import Config from '../../../../../config/config';
import createFetchAction from '../../../fetch';
import { POST } from '../../../../../consts/fetch-methods';
import { LOCK_DEVIATIONS_STATISTICS } from '../../../../../consts/locks';
import { SERVER_ROUTE_DEVIATIONS_METADATA } from '../../../../../consts/server-routes';
import { DEVIATIONS_STATISTICS_LOAD_METADATA } from '../../../../actions';

jest.mock('../../../fetch', () => jest.fn());

describe('DeviationsStatisticsLoadMetadata action creator', () => {
  beforeEach(() => {
    createFetchAction.mockReset();
  });

  it('can handle full set of params', () => {
    const timestampBegin = 3;
    const timestampEnd = 4;

    const state = {
      ...createDefaultState(),
      deviations: {
        statistics: {
          timestampBegin,
          timestampEnd,
          deviations: [
            { id: 1 },
            { id: 2 },
          ],
        },
      },
    };

    const params = paramsHandler(state);

    expect(params).toEqual({
      ids: [1, 2],
      timestampbegin: timestampBegin,
      timestampend: timestampEnd,
    });
  });

  it('can handle empty set of params', () => {
    const state = {
      ...createDefaultState(),
      deviations: {
        statistics: {
          deviations: [],
        },
      },
    };

    const params = paramsHandler(state);

    expect(params).toEqual({
      ids: [],
    });
  });

  it('can create action when metadata is present', () => {
    const metadata = { 1: [[1, 2]], 2: [[3, 4]] };

    const action = deviationsStatisticsLoadMetadataActionCreator({
      metadata,
    });

    expect(action).toEqual({
      type: DEVIATIONS_STATISTICS_LOAD_METADATA,
      metadata,
    });
  });

  it('can create action when metadata is missing', () => {
    const metadata = null;

    const action = deviationsStatisticsLoadMetadataActionCreator({
      metadata,
    });

    expect(action).toEqual({
      type: DEVIATIONS_STATISTICS_LOAD_METADATA,
      metadata,
    });
  });

  it('can get lock state', () => {
    const state = {
      ...createDefaultState(),
      deviations: {
        statistics: {
          pageLoading: true,
        },
      },
    };

    expect(getLockState(state)).toBe(true);
  });

  it('can fetch data', () => {
    const config = new Config();
    loadMetadata(config);

    expect(createFetchAction.mock.calls).toEqual([
      [
        POST,
        SERVER_ROUTE_DEVIATIONS_METADATA,
        getLockState,
        LOCK_DEVIATIONS_STATISTICS,
        deviationsStatisticsLoadMetadataActionCreator,
        config,
        paramsHandler,
      ],
    ]);
  });
});
