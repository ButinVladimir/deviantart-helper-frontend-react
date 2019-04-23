import { USER_LOAD_INFO_START } from '../../actions';

/**
 * @global
 * @description
 * Action to start loading user info.
 *
 * @typedef {Object} UserLoadInfoStartAction
 */

/**
 * @description
 * Creates action to start loading user info.
 *
 * @returns {UserLoadInfoStartAction} Action.
 */
export default () => ({
  type: USER_LOAD_INFO_START,
});
