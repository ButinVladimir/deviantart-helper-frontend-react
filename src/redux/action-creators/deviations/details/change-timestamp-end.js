import { DEVIATIONS_DETAILS_CHANGE_TIMESTAMP_END } from '../../../actions';
import getTimestamp from '../../../../helpers/get-timestamp';

/**
 * @global
 * @description
 * Action to change timestamp end value on deviations details page.
 *
 * @typedef {Object} DeviationsDetailsChangeTimestampEndAction
 */

/**
 * @description
 * Creates action to change timestamp end value on deviations details page.
 *
 * @param {string} timestampEnd - Timestamp end value.
 * @returns {DeviationsDetailsChangeTimestampEndAction} Action.
 */
export default timestampEnd => ({
  type: DEVIATIONS_DETAILS_CHANGE_TIMESTAMP_END,
  timestampEnd: getTimestamp(timestampEnd),
});
