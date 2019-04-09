import getDefaultState from './get-default-state';
import * as actions from './actions';
import './state';

/**
 * @description
 * Shared state reducer.
 *
 * @param {SharedState} sharedState - Shared state.
 * @param {Object} action - The action.
 * @returns {SharedState} New shared state.
 */
const sharedReducer = (sharedState, action) => {
  const newState = Object.assign({}, sharedState);

  switch (action.type) {
    case actions.LOAD_USER_INFO:
      Object.assign(newState, {
        isLoggedIn: true,
      });
      break;

    default:
  }

  return newState;
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
const userReducer = (userState, sharedState, action) => {
  const newState = Object.assign({}, userState);

  switch (action.type) {
    case actions.LOAD_USER_INFO:
      Object.assign(newState, {
        userName: action.userName,
        userId: action.userId,
        userIcon: action.userIcon,
        userType: action.userType,
        accessTokenExpires: action.accessTokenExpires,
        refreshTokenExpires: action.refreshTokenExpires,
      });
      break;

    default:
  }

  return newState;
};

/**
 * @description
 * Main reducer.
 *
 * @param {State} state - Current Redux state.
 * @param {Object} action - The action.
 * @returns {State} New Redux state.
 */
export default (state = getDefaultState(), action = {}) => ({
  shared: sharedReducer(state.shared, action),
  user: userReducer(state.user, state.shared, action),
});
