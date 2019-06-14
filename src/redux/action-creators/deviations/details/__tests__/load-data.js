import loadData, {
  paramsHandler,
  deviationsDetailsLoadDataActionCreator,
  getLockState,
} from '../load-data';
import createDefaultState from '../../../../states/state';
import Config from '../../../../../config/config';
import createFetchAction from '../../../fetch';
import { GET } from '../../../../../consts/fetch-methods';
import { LOCK_DEVIATION_DETAILS } from '../../../../../consts/locks';
import { SERVER_ROUTE_DEVIATIONS_DETAILS, ID_PARAM } from '../../../../../consts/server-routes';
import { CHART } from '../../../../../consts/tabs';
import { DEVIATIONS_DETAILS_LOAD_DATA } from '../../../../actions';

jest.mock('../../../fetch', () => jest.fn());

describe('DeviationsDetailsLoadData action creator', () => {
  beforeEach(() => {
    createFetchAction.mockReset();
  });

  it('can handle full set of params', () => {
    const timestampBegin = 1;
    const timestampEnd = 2;

    const state = {
      ...createDefaultState(),
      deviations: {
        details: {
          timestampBegin,
          timestampEnd,
          tab: CHART,
        },
      },
    };

    const params = paramsHandler(state);

    expect(params).toEqual({
      timestampbegin: timestampBegin,
      timestampend: timestampEnd,
      metadata: true,
    });
  });

  it('can handle empty set of params', () => {
    const state = {
      ...createDefaultState(),
      deviations: {
        details: {
          timestampBegin: null,
          timestampEnd: null,
        },
      },
    };

    const params = paramsHandler(state);

    expect(params).toEqual({
      metadata: false,
    });
  });

  it('can create action', () => {
    const deviation = {
      views: 1,
      favourites: 2,
      comments: 3,
      downloads: 4,
    };
    const metadata = [[1, 2], [3, 4]];
    const action = deviationsDetailsLoadDataActionCreator({
      deviation,
      metadata,
    });

    expect(action).toEqual({
      type: DEVIATIONS_DETAILS_LOAD_DATA,
      deviation,
      metadata,
    });
  });

  it('can get lock state', () => {
    const state = {
      ...createDefaultState(),
      deviations: {
        details: {
          detailsLoading: true,
        },
      },
    };

    expect(getLockState(state)).toBe(true);
  });

  it('can fetch data', () => {
    const config = new Config();
    const id = '123';
    const state = {
      ...createDefaultState(),
      deviations: {
        details: {
          id,
        },
      },
    };
    loadData(config)(
      () => {},
      () => state,
    );

    expect(createFetchAction.mock.calls).toEqual([
      [
        GET,
        SERVER_ROUTE_DEVIATIONS_DETAILS.replace(ID_PARAM, id),
        getLockState,
        LOCK_DEVIATION_DETAILS,
        deviationsDetailsLoadDataActionCreator,
        config,
        paramsHandler,
      ],
    ]);
  });
});
