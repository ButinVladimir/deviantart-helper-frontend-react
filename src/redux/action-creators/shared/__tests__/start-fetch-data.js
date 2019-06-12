import startFetchData, { startFetchDataActionCreator, getLockState } from '../start-fetch-data';
import showErrorActionCreator from '../show-error';
import showMessageActionCreator from '../show-message';
import createDefaultState from '../../../states/state';
import Config from '../../../../config/config';
import createFetchAction from '../../fetch';
import { GET } from '../../../../consts/fetch-methods';
import { LOCK_START_LOADING_DATA } from '../../../../consts/locks';
import { SERVER_ROUTE_USER_LOAD } from '../../../../consts/server-routes';

jest.mock('../../fetch', () => jest.fn());

describe('StartFetchData action creator', () => {
  it('can create action with negative status', () => {
    const mock = jest.fn();
    startFetchDataActionCreator({ status: false })(mock);

    expect(mock.mock.calls).toEqual([
      [
        showErrorActionCreator('Unable to request data fetching, please try later'),
      ],
    ]);
  });

  it('can create action with positive status', () => {
    const mock = jest.fn();
    startFetchDataActionCreator({ status: true })(mock);

    expect(mock.mock.calls).toEqual([
      [
        showMessageActionCreator('Requested data fetching successfully'),
      ],
    ]);
  });

  it('can get lock state', () => {
    const state = {
      ...createDefaultState(),
      shared: {
        fetchDataLoading: true,
      },
    };

    expect(getLockState(state)).toBe(true);
  });

  it('can fetch data', () => {
    const config = new Config();
    startFetchData(config);

    expect(createFetchAction.mock.calls).toEqual([
      [
        GET,
        SERVER_ROUTE_USER_LOAD,
        getLockState,
        LOCK_START_LOADING_DATA,
        startFetchDataActionCreator,
        config,
      ],
    ]);
  });
});
