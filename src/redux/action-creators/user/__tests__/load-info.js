import userLoadInfo, { userLoadInfoActionCreator } from '../load-info';
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

  it('can fetch data', () => {
    const config = new Config();
    userLoadInfo(config);

    expect(createFetchAction).toHaveBeenCalledTimes(1);
    expect(createFetchAction.mock.calls[0].length).toBe(6);
    expect(createFetchAction.mock.calls[0][0]).toBe(GET);
    expect(createFetchAction.mock.calls[0][1]).toBe(SERVER_ROUTE_USER_INFO);
    expect(createFetchAction.mock.calls[0][2]).toBeInstanceOf(Function);
    expect(createFetchAction.mock.calls[0][2]({
      user: {
        userInfoLoading: true,
      },
    })).toBe(true);
    expect(createFetchAction.mock.calls[0][3]).toBe(LOCK_LOAD_USER_INFO);
    expect(createFetchAction.mock.calls[0][4]).toBe(userLoadInfoActionCreator);
    expect(createFetchAction.mock.calls[0][5]).toBe(config);
  });
});
