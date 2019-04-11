import createDefaultSharedState from './shared-state';
import createDefaultUserState from './user-state';
import createDefaultDeviationsState from './deviations-state';

/**
 * @global
 * @description
 * State.
 *
 * @typedef {Object} State
 * @property {SharedState} shared - Shared state.
 * @property {UserState} user - User state.
 * @property {DeviationsState} deviations - Deviations state.
 */


/**
 * @description
 * Creates default state.
 *
 * @returns {State} Default state.
 */
export default () => ({
  shared: createDefaultSharedState(),
  user: createDefaultUserState(),
  deviations: createDefaultDeviationsState(),
});
