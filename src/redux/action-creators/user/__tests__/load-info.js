import userLoadInfo, { userLoadInfoActionCreator, getLockState } from '../load-info';
import createDefaultState from '../../../states/state';
import Config from '../../../../config/config';
import createFetchAction from '../../fetch';
import { USER_LOAD_INFO } from '../../../actions';
import { GET } from '../../../../consts/fetch-methods';
import { LOCK_LOAD_USER_INFO } from '../../../../consts/locks';
import { SERVER_ROUTE_USER_INFO } from '../../../../consts/server-routes';

jest.mock('../../fetch', () => jest.fn());

describe('UserLoadInfo action creator', () => {
  it('can create action', () => {
    const params = {
      fullyLoginned: true,
      userId: '12345',
      userName: 'UserName',
      userIcon: '/path/to/user/icon',
      userType: 'regular',
      accessTokenExpires: 1,
      refreshTokenExpires: 2,
      fetchDateThreshold: 3,
      requestDateThreshold: 4,
    };
    const action = userLoadInfoActionCreator(params);

    expect(action).toEqual({
      ...params,
      type: USER_LOAD_INFO,
    });
  });

  it('can get lock state', () => {
    const state = {
      ...createDefaultState(),
      user: {
        userInfoLoading: true,
      },
    };

    expect(getLockState(state)).toBe(true);
  });

  it('can fetch data', () => {
    const config = new Config();
    userLoadInfo(config);

    expect(createFetchAction.mock.calls).toEqual([
      [
        GET,
        SERVER_ROUTE_USER_INFO,
        getLockState,
        LOCK_LOAD_USER_INFO,
        userLoadInfoActionCreator,
        config,
      ],
    ]);
  });
});
