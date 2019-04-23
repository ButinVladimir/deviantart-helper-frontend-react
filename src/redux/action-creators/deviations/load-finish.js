import { DEVIATIONS_LOAD_FINISH } from '../../actions';

/**
 * @global
 * @description
 * Action to finish loading deviations.
 *
 * @typedef {Object} DeviationsLoadFinishAction
 */

/**
 * @description
 * Creates action to finish loading deviations.
 *
 * @returns {DeviationsLoadFinishAction} Action.
 */
export default () => ({
  type: DEVIATIONS_LOAD_FINISH,
});
