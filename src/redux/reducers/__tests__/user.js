import userReducer from '../user';
import createDefaultUserState from '../../states/user';
import createDefaultSharedState from '../../states/shared';
import lockToggleActionCreator from '../../action-creators/shared/lock-toggle';
import revokeActionCreator from '../../action-creators/shared/revoke';
import { userLoadInfoActionCreator } from '../../action-creators/user/load-info';
import { LOCK_LOAD_USER_INFO, LOCK_BROWSE_DEVIATIONS } from '../../../consts/locks';

describe('User reducer', () => {
  it('handles turning on load user info lock', () => {
    const userState = createDefaultUserState();
    const sharedState = createDefaultSharedState();

    const action = lockToggleActionCreator(LOCK_LOAD_USER_INFO, true);

    const newUserState = userReducer(userState, sharedState, action);

    expect(newUserState).not.toBe(userState);
    expect(newUserState).toEqual({ ...userState, userInfoLoading: true });
  });

  it('handles turning off load user info lock', () => {
    const userState = {
      ...createDefaultUserState(),
      userInfoLoading: true,
    };
    const sharedState = createDefaultSharedState();

    const action = lockToggleActionCreator(LOCK_LOAD_USER_INFO, false);

    const newUserState = userReducer(userState, sharedState, action);

    expect(newUserState).not.toBe(userState);
    expect(newUserState).toEqual({ ...userState, userInfoLoading: false });
  });

  it('handles loading user info when user is not fully loginned', () => {
    const userState = {
      ...createDefaultUserState(),
      userInfoLoading: true,
    };
    const sharedState = createDefaultSharedState();

    const action = userLoadInfoActionCreator({
      fullyLoginned: false,
    });

    const newUserState = userReducer(userState, sharedState, action);

    expect(newUserState).not.toBe(userState);
    expect(newUserState).toEqual({ ...userState, userInfoLoading: false });
  });

  it('handles loading user info when user is fully loginned', () => {
    const userState = {
      ...createDefaultUserState(),
      userInfoLoading: true,
    };
    const sharedState = createDefaultSharedState();

    const userData = {
      userName: 'Test user',
      userId: '123456',
      userIcon: '/path/to/icon',
      userType: 'regular',
      accessTokenExpires: 1,
      refreshTokenExpires: 2,
      fetchDateThreshold: 3,
      requestDateThreshold: 4,
    };
    const action = userLoadInfoActionCreator({
      fullyLoginned: true,
      ...userData,
    });

    const newUserState = userReducer(userState, sharedState, action);

    expect(newUserState).not.toBe(userState);
    expect(newUserState).toEqual({ ...userState, ...userData, userInfoLoading: false });
  });

  it('handles toggling unrelated lock', () => {
    const userState = createDefaultUserState();
    const sharedState = createDefaultSharedState();

    const action = lockToggleActionCreator(LOCK_BROWSE_DEVIATIONS, true);

    const newUserState = userReducer(userState, sharedState, action);

    expect(newUserState).toBe(userState);
  });

  it('handles unrelated action', () => {
    const userState = createDefaultUserState();
    const sharedState = createDefaultSharedState();

    const action = revokeActionCreator();

    const newUserState = userReducer(userState, sharedState, action);

    expect(newUserState).toBe(userState);
  });
});
