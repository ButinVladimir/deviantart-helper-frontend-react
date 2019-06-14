import loadData, {
  paramsHandler,
  deviationsTotalLoadDataActionCreator,
  getLockState,
} from '../load-data';
import createDefaultState from '../../../../states/state';
import Config from '../../../../../config/config';
import createFetchAction from '../../../fetch';
import { GET } from '../../../../../consts/fetch-methods';
import { LOCK_DEVIATIONS_TOTAL } from '../../../../../consts/locks';
import { SERVER_ROUTE_DEVIATIONS_TOTAL } from '../../../../../consts/server-routes';
import { DEVIATIONS_TOTAL_LOAD_DATA } from '../../../../actions';

jest.mock('../../../fetch', () => jest.fn());

describe('DeviationsTotalLoadData action creator', () => {
  beforeEach(() => {
    createFetchAction.mockReset();
  });

  it('can handle full set of params', () => {
    const timestampBegin = 1;
    const timestampEnd = 2;

    const state = {
      ...createDefaultState(),
      deviations: {
        total: {
          timestampBegin,
          timestampEnd,
        },
      },
    };

    const params = paramsHandler(state);

    expect(params).toEqual({
      timestampbegin: timestampBegin,
      timestampend: timestampEnd,
    });
  });

  it('can handle empty set of params', () => {
    const state = {
      ...createDefaultState(),
      deviations: {
        total: {
          timestampBegin: null,
          timestampEnd: null,
        },
      },
    };

    const params = paramsHandler(state);

    expect(params).toEqual({
    });
  });

  it('can create action', () => {
    const views = 1;
    const favourites = 2;
    const comments = 3;
    const downloads = 4;
    const action = deviationsTotalLoadDataActionCreator({
      views,
      favourites,
      comments,
      downloads,
    });

    expect(action).toEqual({
      type: DEVIATIONS_TOTAL_LOAD_DATA,
      views,
      favourites,
      comments,
      downloads,
    });
  });

  it('can get lock state', () => {
    const state = {
      ...createDefaultState(),
      deviations: {
        total: {
          totalLoading: true,
        },
      },
    };

    expect(getLockState(state)).toBe(true);
  });

  it('can fetch data', () => {
    const config = new Config();
    loadData(config);

    expect(createFetchAction.mock.calls).toEqual([
      [
        GET,
        SERVER_ROUTE_DEVIATIONS_TOTAL,
        getLockState,
        LOCK_DEVIATIONS_TOTAL,
        deviationsTotalLoadDataActionCreator,
        config,
        paramsHandler,
      ],
    ]);
  });
});
