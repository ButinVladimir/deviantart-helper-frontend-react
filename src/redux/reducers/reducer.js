import getDefaultState from '../states/state';
import sharedReducer from './shared';
import userReducer from './user';
import deviationsReducer from './deviations';

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
  deviations: deviationsReducer(state.deviations, state.shared, action),
});
