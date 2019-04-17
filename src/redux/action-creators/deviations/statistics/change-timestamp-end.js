import { DEVIATIONS_STATISTICS_CHANGE_TIMESTAMP_END } from '../../../actions';

/**
 * @global
 * @description
 * Action to change timestamp end value on deviations statistics page.
 *
 * @typedef {Object} DeviationsDetailsChangeTimestampEndAction
 */

/**
 * @description
 * Creates action to change timestamp end value on deviations statistics page.
 *
 * @param {string} timestampEnd - Timestamp end value.
 * @returns {DeviationsDetailsChangeTimestampEndAction} Action.
 */
export default timestampEnd => ({
  type: DEVIATIONS_STATISTICS_CHANGE_TIMESTAMP_END,
  timestampEnd,
});
