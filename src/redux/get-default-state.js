import './state';

/**
 * @description
 * Creates default state.
 *
 * @returns {State} Default state.
 */
export default () => ({
  shared: {
    blocked: false,
    isLoggedIn: false,
  },
  user: {
    userName: '',
    userId: '',
    userIcon: '',
    userType: '',
    accessTokenExpires: 0,
    refreshTokenExpires: 0,
  },
});
