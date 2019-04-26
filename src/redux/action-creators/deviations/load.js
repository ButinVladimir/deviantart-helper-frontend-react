import { DEVIATIONS_LOAD } from '../../../consts/server-routes';
import { DEVIATIONS_LOAD_LOCK_TOGGLE } from '../../actions';
import showMessageActionCreator from '../shared/show-message';
import createFetchAction from '../fetch-get';

/**
 * @global
 * @description
 * Action to change lock on loading deviations.
 *
 * @typedef {Object} DeviationsLoadLockToggleAction
 * @property {bool} lock - Should deviations loading be locked.
 */

/**
 * @description
 * Creates action to change lock on loading deviations.
 *
 * @param {bool} lock - Should deviations loading be locked.
 * @returns {DeviationsLoadLockToggleAction} Action.
 */
const lockToggle = lock => ({
  type: DEVIATIONS_LOAD_LOCK_TOGGLE,
  lock,
});

/**
 * @description
 * Creates action to lock loading deviations.
 *
 * @returns {DeviationsLoadLockToggleAction} Action.
 */
const lockActionCreator = () => lockToggle(true);

/**
 * @description
 * Creates action to unlock loading deviations.
 *
 * @returns {DeviationsLoadLockToggleAction} Action.
 */
const unlockActionCreator = () => lockToggle(false);

/**
 * @description
 * Creates action to load deviations.
 *
 * @returns {Function} Action.
 */
const loadActionCreator = () => (dispatch) => {
  dispatch(unlockActionCreator());

  dispatch(showMessageActionCreator('Deviations have been started loading'));
};

/**
 * @description
 * Loads deviations.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export default config => async (dispatch, getState) => {
  const { deviations: { common: state } } = getState();
  if (state.deviationsLoading) {
    return;
  }

  dispatch(lockActionCreator());

  dispatch(createFetchAction(
    DEVIATIONS_LOAD,
    loadActionCreator,
    unlockActionCreator,
    config,
  ));
};
