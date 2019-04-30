import { DEVIATIONS_DETAILS_CHANGE_TIMESTAMP_BEGIN } from '../../../actions';
import getTimestamp from '../../../../helpers/get-timestamp';

/**
 * @global
 * @description
 * Action to change timestamp begin value on deviations details page.
 *
 * @typedef {Object} DeviationsDetailsChangeTimestampBeginAction
 */

/**
 * @description
 * Creates action to change timestamp begin value on deviations details page.
 *
 * @param {string} timestampBegin - Timestamp begin value.
 * @returns {DeviationsDetailsChangeTimestampBeginAction} Action.
 */
export default timestampBegin => ({
  type: DEVIATIONS_DETAILS_CHANGE_TIMESTAMP_BEGIN,
  timestampBegin: getTimestamp(timestampBegin),
});
