import * as actions from '../actions';
import { LOCK_LOAD_USER_INFO } from '../../consts/locks';

/**
 * @description
 * Load user info lock toggle reducer.
 *
 * @param {LockToggleAction} action - The action.
 * @returns {UserState} New shared state.
 */
const loadUserInfoLockToggle = action => ({
  userInfoLoading: action.value,
});

/**
 * @description
 * Load user info reducer.
 *
 * @param {LoadUserInfoAction} action - The action.
 * @returns {UserState} New user state.
 */
const loadUserInfo = (action) => {
  if (action.fullyLoginned) {
    return {
      userInfoLoading: false,
      userName: action.userName,
      userId: action.userId,
      userIcon: action.userIcon,
      userType: action.userType,
      accessTokenExpires: action.accessTokenExpires,
      refreshTokenExpires: action.refreshTokenExpires,
      fetchDateThreshold: action.fetchDateThreshold,
      requestDateThreshold: action.requestDateThreshold,
    };
  }

  return {
    userInfoLoading: false,
  };
};

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
    case actions.LOCK_TOGGLE:
      if (action.lock === LOCK_LOAD_USER_INFO) {
        difference = loadUserInfoLockToggle(action);
      }
      break;

    case actions.USER_LOAD_INFO:
      difference = loadUserInfo(action);
      break;

    default:
  }

  return difference !== null
    ? { ...userState, ...difference }
    : userState;
};
