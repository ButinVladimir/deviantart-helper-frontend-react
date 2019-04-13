import { DEVIATIONS_CHANGE_TIMESTAMP_BEGIN } from '../../actions';

/**
 * @global
 * @description
 * Action to change timestamp begin value on deviations page.
 *
 * @typedef {Object} DeviationsChangeTimestampBeginAction
 */

/**
 * @description
 * Creates action to change timestamp begin value on deviations page.
 *
 * @param {string} timestampBegin - Timestamp begin value.
 * @returns {DeviationsChangeTimestampBeginAction} Action.
 */
export default timestampBegin => ({
  type: DEVIATIONS_CHANGE_TIMESTAMP_BEGIN,
  timestampBegin,
});
