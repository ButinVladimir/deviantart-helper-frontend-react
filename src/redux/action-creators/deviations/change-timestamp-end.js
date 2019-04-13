import { DEVIATIONS_CHANGE_TIMESTAMP_END } from '../../actions';

/**
 * @global
 * @description
 * Action to change timestamp end value on deviations page.
 *
 * @typedef {Object} DeviationsChangeTimestampEndAction
 */

/**
 * @description
 * Creates action to change timestamp end value on deviations page.
 *
 * @param {string} timestampEnd - Timestamp end value.
 * @returns {DeviationsChangeTimestampEndAction} Action.
 */
export default timestampEnd => ({
  type: DEVIATIONS_CHANGE_TIMESTAMP_END,
  timestampEnd,
});
