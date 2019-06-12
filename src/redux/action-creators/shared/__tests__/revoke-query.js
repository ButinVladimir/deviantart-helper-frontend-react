import revokeActionCreator from '../revoke';
import revoke, { getLockState } from '../revoke-query';
import createDefaultState from '../../../states/state';
import Config from '../../../../config/config';
import createFetchAction from '../../fetch';
import { GET } from '../../../../consts/fetch-methods';
import { LOCK_REVOKE } from '../../../../consts/locks';
import { SERVER_ROUTE_AUTH_REVOKE } from '../../../../consts/server-routes';

jest.mock('../../fetch', () => jest.fn());

describe('RevokeQuery action creator', () => {
  it('can get lock state', () => {
    const state = {
      ...createDefaultState(),
      shared: {
        revokeLoading: true,
      },
    };

    expect(getLockState(state)).toBe(true);
  });

  it('can fetch data', () => {
    const config = new Config();
    revoke(config);

    expect(createFetchAction.mock.calls).toEqual([
      [
        GET,
        SERVER_ROUTE_AUTH_REVOKE,
        getLockState,
        LOCK_REVOKE,
        revokeActionCreator,
        config,
      ],
    ]);
  });
});
