import { DEVIATIONS_LOAD_START } from '../../actions';

/**
 * @global
 * @description
 * Action to start loading deviations.
 *
 * @typedef {Object} DeviationsLoadStartAction
 */

/**
 * @description
 * Creates action to start loading deviations.
 *
 * @returns {DeviationsLoadStartAction} Action.
 */
export default () => ({
  type: DEVIATIONS_LOAD_START,
});
