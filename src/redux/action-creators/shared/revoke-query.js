import { REVOKE_LOCK_TOGGLE } from '../../actions';
import { AUTH_REVOKE } from '../../../consts/server-routes';
import createFetchAction from '../fetch-get';
import revokeActionCreator from './revoke';

/**
 * @global
 * @description
 * Action to change lock on revoking.
 *
 * @typedef {Object} RevokeLockToggleAction
 * @property {bool} lock - Should deviations loading be locked.
 */

/**
 * @description
 * Creates action to change lock on revoking.
 *
 * @param {bool} lock - Should deviations loading be locked.
 * @returns {RevokeLockToggleAction} Action.
 */
const lockToggle = lock => ({
  type: REVOKE_LOCK_TOGGLE,
  lock,
});

/**
 * @description
 * Creates action to lock revoking.
 *
 * @returns {RevokeLockToggleAction} Action.
 */
const revokeLockActionCreator = () => lockToggle(true);

/**
 * @description
 * Creates action to unlock revoking.
 *
 * @returns {RevokeLockToggleAction} Action.
 */
const revokeUnlockActionCreator = () => lockToggle(false);

/**
 * @description
 * Revokes user session.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
export default config => async (dispatch, getState) => {
  const { shared: state } = getState();
  if (state.revokeLoading) {
    return;
  }

  dispatch(revokeLockActionCreator());

  dispatch(createFetchAction(
    AUTH_REVOKE,
    revokeActionCreator,
    revokeUnlockActionCreator,
    config,
  ));
};
