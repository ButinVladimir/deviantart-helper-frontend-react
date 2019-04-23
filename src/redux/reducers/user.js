import * as actions from '../actions';

/**
 * @description
 * Start load user info reducer.
 *
 * @returns {UserState} New user state.
 */
const loadUserInfoStart = () => ({
  userInfoLoading: true,
});

/**
 * @description
 * Finish load user info reducer.
 *
 * @returns {UserState} New user state.
 */
const loadUserInfoFinish = () => ({
  userInfoLoading: false,
});

/**
 * @description
 * Load user info reducer.
 *
 * @param {UserState} userState - User state.
 * @param {SharedState} sharedState - Shared state.
 * @param {LoadUserInfoAction} action - The action.
 * @returns {UserState} New user state.
 */
const loadUserInfo = (userState, sharedState, action) => ({
  userInfoLoading: false,
  userName: action.userName,
  userId: action.userId,
  userIcon: action.userIcon,
  userType: action.userType,
  accessTokenExpires: action.accessTokenExpires,
  refreshTokenExpires: action.refreshTokenExpires,
});

/**
 * @description
 * User state reducer.
 *
 * @param {UserState} userState - User state.
 * @param {SharedState} sharedState - Shared state.
 * @param {Object} action - The action.
 * @returns {UserState} New user state.
 */
export default (userState, sharedState, action) => {
  let difference = null;

  switch (action.type) {
    case actions.USER_LOAD_INFO_START:
      difference = loadUserInfoStart();
      break;

    case actions.USER_LOAD_INFO_FINISH:
      difference = loadUserInfoFinish();
      break;

    case actions.USER_LOAD_INFO:
      difference = loadUserInfo(userState, sharedState, action);
      break;

    default:
  }

  return difference !== null
    ? Object.assign({}, userState, difference)
    : userState;
};
