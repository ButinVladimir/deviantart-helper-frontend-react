import { LOCK_TOGGLE } from '../../actions';

/**
 * @global
 * @description
 * Action to toggle lock value.
 *
 * @typedef {Object} LockToggleAction
 */

/**
 * @description
 * Creates action to toggle lock value.
 *
 * @param {string} lock - Which lock should be toggled.
 * @param {boolean} value - Lock value.
 * @returns {LockToggleAction} Action.
 */
export default (lock, value) => ({
  type: LOCK_TOGGLE,
  lock,
  value,
});
