import loadMetadata, {
  paramsHandler,
  deviationsDetailsLoadMetadataActionCreator,
  getLockState,
} from '../load-metadata';
import createDefaultState from '../../../../states/state';
import Config from '../../../../../config/config';
import createFetchAction from '../../../fetch';
import { POST } from '../../../../../consts/fetch-methods';
import { LOCK_DEVIATION_DETAILS_METADATA } from '../../../../../consts/locks';
import { SERVER_ROUTE_DEVIATIONS_METADATA } from '../../../../../consts/server-routes';
import { DEVIATIONS_DETAILS_LOAD_METADATA } from '../../../../actions';

jest.mock('../../../fetch', () => jest.fn());

describe('DeviationsDetailsLoadMetadata action creator', () => {
  beforeEach(() => {
    createFetchAction.mockReset();
  });

  it('can handle full set of params', () => {
    const timestampBegin = 1;
    const timestampEnd = 2;
    const id = '123';

    const state = {
      ...createDefaultState(),
      deviations: {
        details: {
          id,
          timestampBegin,
          timestampEnd,
        },
      },
    };

    const params = paramsHandler(state);

    expect(params).toEqual({
      ids: [id],
      timestampbegin: timestampBegin,
      timestampend: timestampEnd,
    });
  });

  it('can handle empty set of params', () => {
    const state = {
      ...createDefaultState(),
      deviations: {
        details: {
          id: '',
          timestampBegin: null,
          timestampEnd: null,
        },
      },
    };

    const params = paramsHandler(state);

    expect(params).toEqual({
      ids: [''],
    });
  });

  it('can create action', () => {
    const metadata = { 1: [[1, 2], [3, 4]] };
    const action = deviationsDetailsLoadMetadataActionCreator({
      metadata,
    });

    expect(action).toEqual({
      type: DEVIATIONS_DETAILS_LOAD_METADATA,
      metadata,
    });
  });

  it('can get lock state', () => {
    const state = {
      ...createDefaultState(),
      deviations: {
        details: {
          metadataLoading: true,
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
        LOCK_DEVIATION_DETAILS_METADATA,
        deviationsDetailsLoadMetadataActionCreator,
        config,
        paramsHandler,
      ],
    ]);
  });
});
