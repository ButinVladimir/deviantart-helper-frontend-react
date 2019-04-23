import { USER_LOAD_INFO_FINISH } from '../../actions';

/**
 * @global
 * @description
 * Action to finish loading user info.
 *
 * @typedef {Object} UserLoadInfoFinishAction
 */

/**
 * @description
 * Creates action to finish loading user info.
 *
 * @returns {UserLoadInfoFinishAction} Action.
 */
export default () => ({
  type: USER_LOAD_INFO_FINISH,
});
