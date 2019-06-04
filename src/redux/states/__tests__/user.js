import createDefaultUserState from '../user';

describe('Default user state', () => {
  it('can be created without errors', () => {
    const state = createDefaultUserState();

    expect(state).toEqual({
      userInfoLoading: false,
      userName: '',
      userId: '',
      userIcon: '',
      userType: '',
      accessTokenExpires: null,
      refreshTokenExpires: null,
      fetchDateThreshold: null,
      requestDateThreshold: null,
    });
  });
});
