import { DEVIATIONS_STATISTICS_CHANGE_TIMESTAMP_BEGIN } from '../../../actions';

/**
 * @global
 * @description
 * Action to change timestamp begin value on deviations statistics page.
 *
 * @typedef {Object} DeviationsStatisticsChangeTimestampBeginAction
 */

/**
 * @description
 * Creates action to change timestamp begin value on deviations statistics page.
 *
 * @param {string} timestampBegin - Timestamp begin value.
 * @returns {DeviationsStatisticsChangeTimestampBeginAction} Action.
 */
export default timestampBegin => ({
  type: DEVIATIONS_STATISTICS_CHANGE_TIMESTAMP_BEGIN,
  timestampBegin,
});
